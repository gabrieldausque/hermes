import {ITopicClient} from "./interfaces/ITopicClient";
import {TopicMessage} from "./datas/TopicMessage";
import {uuid} from "uuidv4";
import {TopicServiceConfiguration} from "./configuration/TopicServiceConfiguration";
import {SocketIOTopicServiceClientProxy} from "./clients/SocketIOTopicServiceClientProxy";
import Socket = SocketIOClient.Socket;
import {isString} from "util";
// @ts-ignore
import {ExportMetadatas} from "../composition/ExportMetadatas";

/**
 * The topic service that represents the hub on which all message will be send across
 */
export class TopicService {
  public static metadatas:ExportMetadatas[] = [
    {
      contractType:'TopicService',
      contractName:'Default',
      isShared:true
    }
  ];
  /**
   * The id of the server. Used pattern : server_ + uuid (v4)
   */
  public serverId:string;
  /**
   * The list of {@link ITopicClient} that are using this topic service instance
   */
  private clients: ITopicClient[];
  /**
   * The service configuration. Used for cluster.
   */
  private config: TopicServiceConfiguration;
  /**
   *
   */
  private clusterClient: SocketIOTopicServiceClientProxy;

  /**
   *
   * @param config The configuration used to initialize a TopicService cluster and other configuration parameters
   */
  constructor(config?:TopicServiceConfiguration){
    if(config && config.validate()) {
      this.config = config;
    }
    this.serverId = 'server_' + uuid();
    this.clients = [];
  }

  /**
   * Publish a {@link TopicMessage} for all {@link ITopicClient} that are listening to the corresponding topic
   * @param topic the topic to publish on
   * @param topicMessage the {@link TopicMessage} that will be send to listening {@link ITopicClient}
   */
  async publish(topic:string, topicMessage:TopicMessage|any){
    let toSend:TopicMessage = topicMessage;
    if(!(toSend as TopicMessage).content){
      toSend = new TopicMessage(topicMessage, this.serverId)
    }
    for(const clientIndex in this.clients){
      const client = this.clients[clientIndex];
      if(client.isListeningTo(topic)){
        if(!toSend.publishedOnServer){
          toSend.publishedOnServer = this.serverId;
        }
        const messageCopy = toSend.clone();
        client.topicTriggered(topic, messageCopy).catch((error) => console.log('got error : ' + error));
      }
    }
  }

  /**
   * Add a {@link ITopicClient} to listen to message send on this {@link TopicService} instance
   * @param newClient The client that will be added
   */
  addClient(newClient: ITopicClient) {
    const clientsIndex = this.clients.indexOf(newClient);
    if(clientsIndex < 0){
      this.clients.push(newClient);
    }
  }

  /**
   * Remove a {@link ITopicClient} from the listening clients
   * @param clientToDelete the client to remove
   */
  removeClient(clientToDelete: ITopicClient) {
    const clientsIndex = this.clients.indexOf(clientToDelete);
    if(clientsIndex >= 0){
      this.clients.splice(clientsIndex,1)
    }
  }

  /**
   * Initialize the cluster configuration
   * @param previousHost The previous peer will be excluded from the authorized peer to connect
   */
  public async initializeCluster(previousHost?:string) {
    console.log("Initialize cluster");
    if(this.config && !this.config.standAlone) {
      // get random peer to connect to :
      let peerHost:string = '';
      if(isString(previousHost))
      {
        peerHost = this.config.getRandomHost([previousHost]);
      } else {
        peerHost = this.config.getRandomHost();
      }
      console.log("Trying to connect to " + peerHost);
      let socket:Socket;
      try {
        const currentService = this;
        const socketId = uuid();
         socket = require('socket.io-client')(peerHost, {
           reconnection: false
         });
         socket.on('connect', (socket) => {
           console.log("connection to" + peerHost + " done.");
         });
         socket.on('connect_error', (error) => {
           console.log("Error while connecting to server " + peerHost + " : " + error);
           console.log("socketId : " + socketId);
           console.log("Waiting 5s before retrying ....");
           const waiting = new Promise(resolve => setTimeout(resolve, 5000));
           waiting.then(() => {
             currentService.initializeCluster(peerHost);
           })
         });
         socket.on('connect_timeout', () => {
           console.log("Timeout while connecting to server " + peerHost + " : ");
           currentService.initializeCluster(peerHost);
         });
         socket.on('disconnect', (reason) => {
           console.log("Server " + peerHost + " disconnected because : " + reason);
           console.log("Waiting 5s before retrying ....");
           const waiting = new Promise(resolve => setTimeout(resolve, 5000));
           waiting.then(() => {
             currentService.initializeCluster(peerHost);
           })
         });
        this.clusterClient = new SocketIOTopicServiceClientProxy(socket, () => {
          console.log('Subscribing to all event from other cluster node : ' + peerHost);
          currentService.clusterClient.subscribe('#', (topic, topicMessage) => {
            if(topicMessage.publishedOnServer !== currentService.serverId){
              currentService.publish(topic, topicMessage).catch((error) => console.error('Error while forwarding message from cluster : \n' + error));
            }
          })
        })
      } catch(error) {
        console.log("Error while connecting :" + error)
      }
    } else {
      console.warn("No configuration for cluster or server is configured as a standalone server. Starting standalone node");
    }
  }
}

