export class TopicMessage{
  public content:any;
  public createdAt:Number;
  public senderId:string;
  public fromTopic:string;
  constructor(content:any, senderId:string){
    this.createdAt = Date.now();
    this.senderId = senderId;
    this.content = content;
  }

}
