import {ITopicClient, TopicHandlerFunction} from "./interfaces/ITopicClient";
import {TopicService} from "./TopicService";
import {uuid} from "uuidv4";
import {TopicHandler} from "./TopicHandler";
import {TopicMessage} from "./datas/TopicMessage";

export abstract class BaseTopicClient implements ITopicClient{

  protected topicService: TopicService;
  public topicClientId: string;
  protected topicHandlers: {};

  protected constructor(topicService:TopicService){
    this.topicClientId = uuid();
    this.topicService = topicService;
    this.topicService.addClient(this);
    this.topicHandlers = {};
    this.subscribe(this.topicClientId+'.subscriptions.get', (topic, topicMessage:TopicMessage) => {
      const subscriptionsList = [];
      for(let subscription in this.topicHandlers) {
        if(Array.isArray(this.topicHandlers[subscription])){
          subscriptionsList.push(subscription)
        }
      }
      this.publish(this.topicClientId+'.subscriptions.list', subscriptionsList).then(() => {});
    }, this);
    this.subscribe(this.topicClientId + '.unsubscribe', (topic, topicMessage:TopicMessage) => {
      this.unsubscribe(topicMessage.content);
    }, this);
  }

  private getPatternForTopic(topic:string):string {
    const trees = topic.split('.');
    let pattern = '';
    trees.forEach((node) => {
      if(trees.indexOf(node) > 0){
        pattern += '\\.';
      }
      if(node === '*') {
        pattern += '[^*#\\.]+'
      } else if (node === '#') {
        pattern += '[^*#]+'
      } else {
        pattern += node
      }
    });
    pattern += '$';
    return pattern;
  }

  isListeningTo(topic: string): boolean {
    //TODO : customize this for use of wildcard
    for(let topicListenedTo in this.topicHandlers) {
      const pattern = this.getPatternForTopic(topicListenedTo);
      const regexp = new RegExp(pattern, 'g');
      if(regexp.test(topic) && this.topicHandlers[topicListenedTo].length > 0) {
        //console.log('pattern ' + pattern + ' is ok for ' + topic);
        return true;
      }/*
      else {
        console.warn('pattern ' + pattern + ' is not ok for ' + topic)
      }*/
    }

    return false;
  }

  async publish(topic: string, messageContent: any): Promise<void> {
    const message = new TopicMessage(messageContent, this.topicClientId);
    try{
      await this.topicService.publish(topic, message);
    }
    catch(error) {
      console.log('Error while publishing : ' + error);
    }
  }

  subscribe(topic: string, handler: TopicHandlerFunction, handlerOwner:any) {
    if(!topic.trim()){
      console.error("Error on subscription from " + this.topicClientId +  ": topic must be one word at least and can't be empty !")
    } else {
      if(!Array.isArray(this.topicHandlers[topic])){
        this.topicHandlers[topic] = [];
      }
      if(this.topicHandlers[topic].findIndex((topicHandler) => {
        return topicHandler.topicHandlerFunction === handler && topicHandler.callingContext === handlerOwner;
      }) < 0){
        this.topicHandlers[topic].push(new TopicHandler(handler, handlerOwner));
      }
    }
  }

  async topicTriggered(topicTriggered: string, topicMessage: TopicMessage): Promise<void> {
    for(let topicListenedTo in this.topicHandlers) {
      let pattern = this.getPatternForTopic(topicListenedTo);
      let regexp = new RegExp(pattern, 'g');
      if(regexp.test(topicTriggered)){
        //console.log(pattern + ' is a right topic to raised');
        this.topicHandlers[topicListenedTo].forEach((handler) => {
            topicMessage.fromTopic = topicTriggered;
            topicMessage.listenedTopic = topicListenedTo;
            new Promise(() => {
              handler.call(topicListenedTo, topicMessage);
          }).then(() => {}).catch((error) => console.log('Error while executing a handler for topic ' + topicTriggered + ' : ' + error));
        });
      } /*else {
        console.warn(pattern +' is not the right for tested topic : ' + topicTriggered)
      }*/
    }
  }

  disconnect(){
    this.topicService.removeClient(this);
  }

  unsubscribe(topic: string) {
    if(Array.isArray(this.topicHandlers[topic])) {
      delete this.topicHandlers[topic];
    }
  }
}
