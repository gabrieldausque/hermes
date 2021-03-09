import {TopicClient} from "./interfaces/TopicClient";
import {TopicMessage} from "./datas/TopicMessage";
import {v4 as uuid} from 'uuid';
import {TopicServiceConfiguration} from "./configuration/TopicServiceConfiguration";
import {SocketIOTopicServiceClientProxy} from "./clients/SocketIOTopicServiceClientProxy";
import Socket = SocketIOClient.Socket;
import * as cluster from 'cluster';
import * as util from 'util'
import Timeout = NodeJS.Timeout;
import {NoConfigError} from "./errors/NoConfigError";
import {NoCreatedSocketError} from "./errors/NoCreatedSocketError";
const sleep = util.promisify(setTimeout);

/**
 * The topic service that represents the hub on which all message will be send across
 */
export class TopicService {
  public static metadata:any[] = [
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
   * The list of {@link TopicClient} that are using this topic service instance
   */
  private readonly clients: TopicClient[];
  /**
   * The service configuration. Used for cluster.
   */
  private readonly config?: TopicServiceConfiguration;
  /**
   * Distant cluster nodes client
   */
  private clusterClient?: SocketIOTopicServiceClientProxy;

  /**
   * The date of the last purge
   */
  private lastPurge:Date
  /**
   * The buffer for message already send
   */
  private readonly forwardedMessageIds: Array<{ id:string, date:Date }>;

  /**
   * The timeout reference for the forwardedMessage purge
   */
  private forwardedMessagesPurgeTimer?:Timeout

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
    this.forwardedMessageIds = new Array<{ id:string, date:Date }>();
    this.lastPurge = new Date();
    this.initializeNodeJsClusterMode();
  }

  public isMessageAlreadyForwarded(messageId:string) {
    return this.forwardedMessageIds.findIndex((m) => m.id === messageId) >= 0;
  }

  public addForwardedMessages(message:TopicMessage) {
    message.isForwardedByCluster = true;
    this.forwardedMessageIds.push({
      id: message.id,
      date: new Date()
    })
    this.purgeForwardedMessages();
  }


  public purgeForwardedMessages(){
    let m:{id:string, date:Date};
    let cache = (new Array<{ id:string, date:Date }>()).concat(this.forwardedMessageIds);
    if(cache.length > 0) {
      for(m of cache){
        if((this.lastPurge.getTime() - m.date.getTime())/1000 >= 30) {
          this.forwardedMessageIds.splice(this.forwardedMessageIds.indexOf(m),1)
        } else {
          break;
        }
      }
      this.lastPurge = new Date();
      const current = this;
      if(!this.forwardedMessagesPurgeTimer) {
        this.forwardedMessagesPurgeTimer = setTimeout(() => {
          current.forwardedMessagesPurgeTimer = undefined;
          current.purgeForwardedMessages();
        },30000);
      }
    } else {
      this.forwardedMessagesPurgeTimer = undefined;
    }
  }

  public initializeNodeJsClusterMode() {
    const current = this;
    if (cluster.isMaster) {
      for (const workerId in cluster.workers) {
        const sender = cluster.workers[workerId];
        if(sender){
          sender.on('message', (msg) => {
            const topicMessage = TopicMessage.deserialize(msg.topicMessage)
            if (msg.cmd === 'publishTopicMessage' && !this.isMessageAlreadyForwarded(topicMessage.id)) {
              for (const receiverId in cluster.workers) {
                const receiver = cluster.workers[receiverId];
                if (receiver && receiverId !== sender.id.toString()) {
                  receiver.send(msg);
                }
              }
            }
          });
        }
      }
    } else if (cluster.isWorker) {
      process.on('message', async (msg) => {
        if (msg.cmd === 'publishTopicMessage') {
          try {
            if (msg.topicMessage.publishedOnServer !== current.serverId) {
              const topicMessage = TopicMessage.deserialize(msg.topicMessage);
              if(!this.isMessageAlreadyForwarded(topicMessage.id)){
                await current.publish(msg.topicMessage.fromTopic, topicMessage);
              }
            }
          } catch (err) {
            console.error('Error on forwarding message :');
            console.error(msg.topicMessage);
            console.error(err);
          }
        }
      });
    }
    this.purgeForwardedMessages();
  }

  /**
   * Publish a {@link TopicMessage} for all {@link TopicClient} that are listening to the corresponding topic
   * @param topic the topic to publish on
   * @param topicMessage the {@link TopicMessage} that will be send to listening {@link TopicClient}
   */
  async publish(topic:string, topicMessage:TopicMessage|any){
    let toSend:TopicMessage = topicMessage;
    if(!(toSend as TopicMessage).content){
      toSend = new TopicMessage(topicMessage, this.serverId)
    }
    if(!toSend.fromTopic) {
      toSend.fromTopic = topic;
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

    if(cluster.isWorker && !this.isMessageAlreadyForwarded(toSend.id)) {
      const messageCopy = toSend.clone();
      this.addForwardedMessages(messageCopy);
      (<any>process).send({
        cmd: 'publishTopicMessage',
        topicMessage: messageCopy
      })
    }
  }

  /**
   * Add a {@link TopicClient} to listen to message send on this {@link TopicService} instance
   * @param newClient The client that will be added
   */
  addClient(newClient: TopicClient) {
    const clientsIndex = this.clients.indexOf(newClient);
    if(clientsIndex < 0){
      this.clients.push(newClient);
    }
  }

  /**
   * Remove a {@link TopicClient} from the listening clients
   * @param clientToDelete the client to remove
   */
  removeClient(clientToDelete: TopicClient) {
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
    if(this.config) {
      if(!this.config.standAlone) {
        // get random peer to connect to :
        let peerHost:string = '';
        if(typeof previousHost === 'string')
        {
          peerHost = this.config.getRandomHost([previousHost]);
        } else {
          peerHost = this.config.getRandomHost();
        }
        console.log("Trying to connect to " + peerHost);
        const currentService = this;
        const socketId = uuid();
        const createSocket = ():Socket => {
          let s:Socket | undefined = undefined;
          if(cluster.isMaster ) {
            let nbWorker = 0;
            for(const workerId in cluster.workers){
              nbWorker++;
            }
            if(nbWorker > 0) {
              socket = require('socket.io-client')(peerHost, {
                transports: ['websocket'],
                reconnection: false,
                upgrade: false
              });
            } else {
              socket = require('socket.io-client')(peerHost, {
                reconnection: false
              })
            }
          } else if(cluster.isWorker) {
            socket = require('socket.io-client')(peerHost, {
              transports: ['websocket'],
              reconnection: false,
              upgrade: false
            });
          }
          if(s)
            return s;
          else
            throw new NoCreatedSocketError()
        }
        let socket:Socket = createSocket();
        try {
          socket.on('connect', (socket:Socket) => {
            console.log("connection to" + peerHost + " done.");
          });
          socket.on('connect_error', async (error:string) => {
            console.log("Error while connecting to server " + peerHost + " : " + error);
            console.log("socketId : " + socketId);
            console.log("Waiting 5s before retrying ....");
            await sleep(5000);
            console.log("retrying ...")
            await currentService.initializeCluster(peerHost);
          });
          socket.on('connect_timeout', () => {
            console.log("Timeout while connecting to server " + peerHost + " : ");
            currentService.initializeCluster(peerHost);
          });
          socket.on('disconnect', async (reason:string) => {
            console.log("Server " + peerHost + " disconnected because : " + reason);
            console.log("Waiting 5s before retrying ....");
            await sleep(5000)
            await currentService.initializeCluster(peerHost);
          });

          this.clusterClient = new SocketIOTopicServiceClientProxy(socket, () => {
            console.log('Subscribing to all event from other cluster node : ' + peerHost);
            currentService.clusterClient?.subscribe('#', (topic, topicMessage) => {
              if(!currentService.isMessageAlreadyForwarded(topicMessage.id)){
                currentService.addForwardedMessages(topicMessage);
                currentService.publish(topic, topicMessage).catch((error) => console.error('Error while forwarding message from cluster : \n' + error));
              }
            })
          })
        } catch(error) {
          console.log("Error while connecting :" + error)
        }
      }
    } else {
      console.warn("No configuration for cluster or server is configured as a standalone server. Starting standalone node");
    }
  }
}

