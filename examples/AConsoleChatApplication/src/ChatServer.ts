import {SocketIOTopicServiceClient, TopicService} from "../../../src/services/topic";

export class ChatServer{
  private socketServer: any;
  private topicService: TopicService;
  constructor(listeningPort:number){
    this.socketServer = require("socket.io")(listeningPort);
    this.topicService = new TopicService();
    const current = this;
    this.socketServer.on('connection',(socket) => {
      const newClient = new SocketIOTopicServiceClient(current.topicService, socket);
    })
  }
}
