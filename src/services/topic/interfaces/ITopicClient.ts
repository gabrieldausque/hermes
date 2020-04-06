import {TopicMessage} from "../datas/TopicMessage";

export type TopicHandlerFunction = (topic:string,topicMessage:TopicMessage) => void;

export interface ITopicClient {
  topicClientId:string,
  subscribe(topic:string, handler:TopicHandlerFunction, handlerContext:any);
  unsubscribe(topic:string);
  publish(topic:string, messageContent:any):Promise<void>;
  topicTriggered(topicTriggered:string, topicMessage:TopicMessage):Promise<void>;
  isListeningTo(topic: string): boolean;
  disconnect();
}
