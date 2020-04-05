import {TopicService} from "./TopicService";
import {TopicMessage} from "./TopicMessage";

export interface TopicClient {
  topicClientId:string,
  subscribe(topic:string, handler:Function, handlerContext:any);
  unsubscribe(topic:string);
  publish(topic:string, messageContent:any):Promise<void>;
  topicTriggered(topicTriggered:string, topicMessage:TopicMessage):Promise<void>;
  isListeningTo(topic: string): boolean;
  disconnect();
}
