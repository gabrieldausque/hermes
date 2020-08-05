import {TopicHandlerFunction} from "./interfaces/ITopicClient";
import {TopicMessage} from "./datas/TopicMessage";

/**
 * The object that is responsible for invoking the {@link TopicHandlerFunction} using the right 'this' object
 */
export class TopicHandler {
  /**
   * the {@link TopicHandlerFunction} that this instance will call
   */
  public topicHandlerFunction: TopicHandlerFunction;
  /**
   * the 'this' instance used when calling the {@link topicHandlerFunction}
   */
  public callingContext: any;
  constructor(topicHandlerFunction:TopicHandlerFunction, topicHandlerThisObject:any){
    this.topicHandlerFunction = topicHandlerFunction;
    this.callingContext = topicHandlerThisObject;
  }

  /**
   * Invoke the {@link topicHandlerFunction} with the {@link callingContext} as 'this'
   * @param topic The topic used when calling the {@link topicHandlerFunction}
   * @param topicMessage The topicMessage that will be passed to the {@link topicHandlerFunction}
   */
  call(topic:String, topicMessage:TopicMessage){
    this.topicHandlerFunction.call(this.callingContext, topic, topicMessage);
  }
}
