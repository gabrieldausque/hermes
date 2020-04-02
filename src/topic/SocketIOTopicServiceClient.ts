import {uuid} from "uuidv4";
import {TopicService} from "./TopicService";
import {TopicClient} from "./TopicClient";

export class SocketIOTopicServiceClient implements TopicClient {
  private connection: any;
  private topicService: TopicService;
  public topicClientId: string;
  private topicHandlers: {};

  constructor(service: TopicService, connection: any) {
    this.connection = connection;
    this.topicClientId = connection.id;
    this.topicService = service;
    this.topicService.addClient(this);
    this.topicHandlers = {};

    const currentClient = this;
    connection.on(this.topicClientId + '_subscribe', (topic) => {
       currentClient.subscribe(topic, currentClient.sendToSocketIO)
    });

    console.log(this.topicClientId);

    connection.on(this.topicClientId + '_publish', (publishArgs) => {
      currentClient.publish(publishArgs.topic, publishArgs.content).then(() => {});
    })
  }

  async publish(topic: string, messageContent: any): Promise<void> {
    await this.topicService.publish(messageContent,topic);
  }

  subscribe(topic: string, handler: Function) {
    if(!Array.isArray(this.topicHandlers[topic])){
      this.topicHandlers[topic] = [];
    }
    if(this.topicHandlers[topic].indexOf(handler) < 0){
      this.topicHandlers[topic].push(handler);
    }
  }

  async topicTriggered(topicTriggered:string, topicContent:any) {
    if(Array.isArray(this.topicHandlers[topicTriggered])){
      const currentTopicClient = this;
      this.topicHandlers[topicTriggered].forEach((handler) => {
        try {
          handler.call(this, topicContent, topicTriggered)
        }catch(error) {
          console.error(error);
        }
      });
    }
  }

  private sendToSocketIO(topicContent:any,topicTriggered:string) {
    //TODO : send message to corresponding channel in socket.IO, also when using wildcard;
    this.connection.emit(topicTriggered, topicContent);
  }

  isListeningTo(topic: string): boolean {
    return true;
  }

}
