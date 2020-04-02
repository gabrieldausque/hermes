export interface TopicClient {
  topicClientId:string,
  subscribe(topic:string, handler:Function):Promise<void>;
  publish(messageContent:any, topic:string):Promise<void>;
  topicRaised(topicContent:any, topicTriggered:string):Promise<void>;
}
