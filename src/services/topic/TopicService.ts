import {TopicClient} from "./TopicClient";

export class TopicService {
  private clients: TopicClient[];
  constructor(){
    this.clients = [];
  }

  async publish(topic:string, messageContent:any){
    for(let clientIndex in this.clients){
      const client = this.clients[clientIndex];
      if(client.isListeningTo(topic)){
        await client.topicTriggered(topic, messageContent);
      }
    }
  }

  addClient(newClient: TopicClient) {
    const clientsIndex = this.clients.indexOf(newClient);
    if(clientsIndex < 0){
      this.clients.push(newClient);
    }
  }
}

