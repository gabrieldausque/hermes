export class TopicHandler {
  public topicHandlerFunction: Function;
  public callingContext: any;
  constructor(topicHandlerFunction:Function, topicHandlerThisObject:any){
    this.topicHandlerFunction = topicHandlerFunction;
    this.callingContext = topicHandlerThisObject;
  }

  call(topic:String, topicContent:any){
    this.topicHandlerFunction.call(this.callingContext, topic, topicContent);
  }
}
