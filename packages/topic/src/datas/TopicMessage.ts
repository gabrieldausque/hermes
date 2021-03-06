/**
 * Represents a message with a content and metadata describing the context of the current message
 */
import {v4 as uuid } from 'uuid';

export class TopicMessage{
  /**
   * The content of the message
   */
  public content:any;
  /**
   * The Date when the message has been created
   */
  public createdAt:number;
  /**
   * the id of the {@link ITopicClient} that has send the message
   */
  public senderId:string;
  /**
   * the topic on which the message has been send
   */
  public fromTopic:string;
  /**
   * the topic that is listened to that has been tested to raise the handler
   */
  public listenedTopic?:string;

  /**
   * Id of the topicService where the message has been published on the first time
   */
  public publishedOnServer?: string;

  /**
   * Indicate if this message is a forward from another node of a distant (TopicService implementation) or local cluster (NodeJS)
   */
  public isForwardedByCluster: boolean;

  /**
   * The id of the message
   */
  public id: string;

  /**
   * Create a new message
   * @param content the content that will be send across the {@link TopicService}
   * @param senderId the {@link ITopicClient} id
   */
  constructor(content:any, senderId:string){
    this.id = uuid();
    this.createdAt = Date.now();
    this.senderId = senderId;
    this.content = content;
    this.isForwardedByCluster = false;
    this.fromTopic = '';
  }

  /**
   * Clone the current message. Beware ! Methods and function of the content are not clone !
   */
  clone():TopicMessage {
    const clone = new TopicMessage(JSON.parse(JSON.stringify(this.content)), this.senderId);
    clone.createdAt = this.createdAt;
    clone.publishedOnServer = this.publishedOnServer;
    clone.listenedTopic = this.listenedTopic;
    clone.fromTopic = this.fromTopic;
    clone.isForwardedByCluster = this.isForwardedByCluster;
    clone.id = this.id;
    return clone;
  }

  static deserialize(topicMessage: TopicMessage):TopicMessage {
    const deserializedMessage = new TopicMessage(topicMessage.content, topicMessage.senderId);
    deserializedMessage.createdAt = topicMessage.createdAt;
    deserializedMessage.publishedOnServer = topicMessage.publishedOnServer;
    deserializedMessage.listenedTopic = topicMessage.listenedTopic;
    deserializedMessage.fromTopic = topicMessage.fromTopic;
    deserializedMessage.isForwardedByCluster = topicMessage.isForwardedByCluster;
    deserializedMessage.id = topicMessage.id;
    return deserializedMessage;
  }
}
