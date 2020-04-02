import {TopicService} from "./TopicService";

export interface TopicClient {
  topicClientId:string,
  subscribe(topic:string, handler:Function);
  publish(topic:string, messageContent:any):Promise<void>;
  topicTriggered(topicTriggered:string, topicContent:any):Promise<void>;
  isListeningTo(topic: string): boolean;
}
