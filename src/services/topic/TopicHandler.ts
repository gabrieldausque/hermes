import {TopicHandlerFunction} from "./interfaces/ITopicClient";

export class TopicHandler {
  public topicHandlerFunction: TopicHandlerFunction;
  public callingContext: any;
  constructor(topicHandlerFunction:TopicHandlerFunction, topicHandlerThisObject:any){
    this.topicHandlerFunction = topicHandlerFunction;
    this.callingContext = topicHandlerThisObject;
  }

  call(topic:String, topicContent:any){
    this.topicHandlerFunction.call(this.callingContext, topic, topicContent);
  }
}
