import {TopicClient} from "./TopicClient";

class ClientSubscription {
  constructor(client:TopicClient){
    this.client = client;
    this.topics = [];
  }
  client:TopicClient;
  topics:string[];
  getClientId():string{
      return this.client.topicClientId;
  }
  addListenedTopic(topic:string){
    if(this.topics.indexOf(topic) < 0){
      this.topics.push(topic);
    }
  }

  isListeningTo(topic: string) {
    return this.topics.indexOf(topic) >= 0;
  }
}

export class TopicService {
  private subscriptions: ClientSubscription[];
  constructor(){
    this.subscriptions = [];
  }
  async subscribe(topicClient:TopicClient, topic:string) {
    const subscriptionsForClientIndex = this.subscriptions.findIndex(subscription => {
      return subscription.getClientId() === topicClient.topicClientId;
    });
    if(subscriptionsForClientIndex < 0){
      const newSubscription = new ClientSubscription(topicClient);
      newSubscription.addListenedTopic(topic);
      this.subscriptions.push(newSubscription);
    } else {
      this.subscriptions[subscriptionsForClientIndex].addListenedTopic(topic);
    }
    return;
  }

  async publish(messageContent:any, topic:string){
    for(var subscriptionIndex in this.subscriptions){
      const currentSubscription = this.subscriptions[subscriptionIndex];
      if(currentSubscription.isListeningTo(topic)){
        currentSubscription.client.topicRaised(messageContent,topic);
      }
    }
    return;
  }
}

