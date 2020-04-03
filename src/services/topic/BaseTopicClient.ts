import {TopicClient} from "./TopicClient";
import {TopicService} from "./TopicService";
import {uuid} from "uuidv4";
import {TopicHandler} from "./TopicHandler";
import {TopicMessage} from "./TopicMessage";

export abstract class BaseTopicClient implements TopicClient{

  protected topicService: TopicService;
  public topicClientId: string;
  protected topicHandlers: {};

  protected constructor(topicService:TopicService){
    this.topicClientId = uuid();
    this.topicService = topicService;
    this.topicService.addClient(this);
    this.topicHandlers = {};
  }

  isListeningTo(topic: string): boolean {
    //TODO : customize this for use of wildcard
    return Array.isArray(this.topicHandlers[topic]) && this.topicHandlers[topic].length > 0;
  }

  async publish(topic: string, messageContent: any): Promise<void> {
    const message = new TopicMessage(messageContent, this.topicClientId);
    await this.topicService.publish(topic, message);
  }

  subscribe(topic: string, handler: Function, handlerOwner:any) {
    if(!Array.isArray(this.topicHandlers[topic])){
      this.topicHandlers[topic] = [];
    }
    if(this.topicHandlers[topic].findIndex((topicHandler) => {
      return topicHandler.topicHandlerFunction === handler && topicHandler.callingContext === handlerOwner;
    }) < 0){
      this.topicHandlers[topic].push(new TopicHandler(handler, handlerOwner));
    }
  }

  async topicTriggered(topicTriggered: string, topicMessage: TopicMessage): Promise<void> {
    if(Array.isArray(this.topicHandlers[topicTriggered])){
      this.topicHandlers[topicTriggered].forEach((handler) => {
          new Promise(() => {
            handler.call(topicTriggered, topicMessage);
          }).then(() => {}).catch((error) => console.log('Error while executing a handler for topic ' + topicTriggered + ' : ' + error));
      });
    }
  }

  disconnect(){
    this.topicService.removeClient(this);
  }

}
