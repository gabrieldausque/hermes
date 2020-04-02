import {TopicClient} from "./TopicClient";

export class TopicService {
  private clients: TopicClient[];
  constructor(){
    this.clients = [];
  }
  async subscribe(topicClient:TopicClient) {
    const clientsIndex = this.clients.indexOf(topicClient);
    if(clientsIndex < 0){
      this.clients.push(topicClient);
    }
    return;
  }

  async publish(messageContent:any, topic:string){
    for(var clientIndex in this.clients){
      const client = this.clients[clientIndex];
      if(client.isListeningTo(topic)){
        client.topicRaised(messageContent,topic);
      }
    }
    return;
  }
}

