import {ITopicClient} from "./interfaces/ITopicClient";
import {TopicMessage} from "./datas/TopicMessage";
import {uuid} from "uuidv4";

/**
 * The topic service that represents the hub on which all message will be send across
 */
export class TopicService {
  /**
   * The id of the server. Used pattern : server_ + uuid (v4)
   */
  private serverId:string;
  /**
   * The list of {@link ITopicClient} that are using this topic service instance
   */
  private clients: ITopicClient[];
  constructor(){
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
    for(let clientIndex in this.clients){
      const client = this.clients[clientIndex];
      if(client.isListeningTo(topic)){
        client.topicTriggered(topic, toSend).catch((error) => console.log('got error : ' + error));
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
      this.clients.slice(clientsIndex,1);
    }
  }
}

