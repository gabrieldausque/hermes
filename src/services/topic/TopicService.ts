import {TopicClient} from "./TopicClient";
import {TopicMessage} from "./TopicMessage";
import {uuid} from "uuidv4";

export class TopicService {
  private serverId:string;
  private clients: TopicClient[];
  constructor(){
    this.serverId = 'server_' + uuid();
    this.clients = [];
  }

  async publish(topic:string, messageContent:TopicMessage|any){
    let toSend:TopicMessage = messageContent;
    if(!(toSend as TopicMessage).content){
      toSend = new TopicMessage(messageContent, this.serverId)
    }
    for(let clientIndex in this.clients){
      const client = this.clients[clientIndex];
      if(client.isListeningTo(topic)){
        try {
          await client.topicTriggered(topic, toSend);
        } catch(error) {
          console.error(error);
        }
      }
    }
  }

  addClient(newClient: TopicClient) {
    const clientsIndex = this.clients.indexOf(newClient);
    if(clientsIndex < 0){
      this.clients.push(newClient);
    }
  }

  removeClient(clientToDelete: TopicClient) {
    const clientsIndex = this.clients.indexOf(clientToDelete);
    if(clientsIndex >= 0){
      this.clients.slice(clientsIndex,1);
    }
  }
}

