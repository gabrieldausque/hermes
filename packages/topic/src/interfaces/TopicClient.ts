import {TopicMessage} from "../datas/TopicMessage";

/**
 * The handler that will be executed when receiving a message from the topicservice
 * @param topic  the topic listened to that has raised the handler
 * @param topicMessage  the message received from the topic
 */
export interface TopicHandlerFunction { (topic:string,topicMessage:TopicMessage): void};

/**
 * The TopicClient represents the operations contract of the client on server side.
 */
export interface TopicClient {
  /**
   * The Id of the client
   */
  topicClientId:string,

  /**
   * Subscribe a topic to execute the specified handler using the handlerContext as the 'this' keyword.
   * @param topic
   * @param handler
   * @param handlerContext
   */
  subscribe(topic:string, handler:TopicHandlerFunction, handlerContext:any):void;

  /**
   * Unsubscribe the specified topic
   * @param topic
   */
  unsubscribe(topic:string):void;

  /**
   * Publish a message to all client that are listening the specified topic
   * @param topic The topic to publish on
   * @param messageContent The content that will be send on the message
   */
  publish(topic:string, messageContent:any):Promise<void>;

  /**
   * Execute all {@link TopicHandlerFunction} when receiving a message for the subscribed topic
   * @param topicTriggered the topic that has triggered the event
   * @param topicMessage the message received on the topic
   */
  topicTriggered(topicTriggered:string, topicMessage:TopicMessage):Promise<void>;

  /**
   * Check if the current client is listening to a topic.
   * @param topic the topic to test
   */
  isListeningTo(topic: string): boolean;

  /**
   * Disconnect definitively the client of the topicService
   */
  disconnect():void;

  /**
   * Set error when error is raised on topic topicClientId.error
   * @param errorsHandler The error handler to be executed when an error message is received
   */
  onError(errorsHandler:TopicHandlerFunction):void;
}
