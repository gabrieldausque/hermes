import {uuid} from "uuidv4";
import {TopicService} from "./TopicService";
import {TopicClient} from "./TopicClient";
import {BaseTopicClient} from "./BaseTopicClient";
import {TopicMessage} from "./TopicMessage";

export class SocketIOTopicServiceClient extends BaseTopicClient {
  private socket: any;

  constructor(service: TopicService, socket: any) {
    super(service);
    this.socket = socket;
    //communication with proxy client ...
    const currentClient = this;
    socket.emit('clientId', this.topicClientId);
    socket.on('reconnect', (socket) => {
      console.log('reconnection of client with id ' + currentClient.topicClientId);
      currentClient.socket = socket;
    });
    socket.on('disconnect', (socket) => {
      console.log('disconnection of client with id ' + currentClient.topicClientId);
      currentClient.disconnect();
    });
    socket.on(this.topicClientId + '_subscribe', (topic) => {
       currentClient.subscribe(topic, currentClient.sendToSocketIO, currentClient);
    });
    socket.on(this.topicClientId + '_publish', (publishArgs) => {
      currentClient.publish(publishArgs.topic, publishArgs.content).then(() => {});
    })
  }

  private sendToSocketIO(topicTriggered:string, topicMessage:TopicMessage) {
    this.socket.emit(topicTriggered, topicMessage.content);
  }

}
