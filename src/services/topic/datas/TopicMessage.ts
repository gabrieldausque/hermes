/**
 * Represents a message with a content and metadatas describing the context of the current message
 */
export class TopicMessage{
  /**
   * The content of the message
   */
  public content:any;
  /**
   * The Date when the message has been created
   */
  public createdAt:Number;
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
  public listenedTopic:string;

  /**
   * Create a new message
   * @param content the content that will be send across the {@link TopicService}
   * @param senderId the {@link ITopicClient} id
   */
  constructor(content:any, senderId:string){
    this.createdAt = Date.now();
    this.senderId = senderId;
    this.content = content;
  }

}
