import {uuid} from "uuidv4";
import {TopicService} from "./TopicService";
import {TopicClient} from "./TopicClient";

export class SocketIOTopicServiceClient implements TopicClient {
  private connection: any;
  private topicService: TopicService;
  public topicClientId: string;
  private topicHandlers: {};

  constructor(service: TopicService, connection: any) {
    this.topicClientId = uuid();
    this.connection = connection;
    this.topicService = service;
    this.subscribe('private_' + this.topicClientId, this.sendToSocketIO);
    this.topicHandlers = {}
  }

  async publish(messageContent: any, topic: string): Promise<void> {
    this.topicService.publish(messageContent,topic);
    return;
  }

  async subscribe(topic: string, handler: Function) {
    await this.topicService.subscribe(this, topic);
    this.topicHandlers[topic] = handler
  }

  async topicRaised(topicContent:any, topicTriggered:string) {
    if(typeof this.topicHandlers[topicTriggered] !== 'undefined'){
      this.topicHandlers[topicTriggered].call(this, topicContent, topicTriggered);
    }
    return;
  }

  private sendToSocketIO(topicContent:any,topicTriggered:string) {
    //TODO : send message to corresponding channel in socket.IO;
  }
}
