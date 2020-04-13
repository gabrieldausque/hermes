import {TopicService} from "../TopicService";
import {BaseTopicClient} from "./BaseTopicClient";
import {TopicMessage} from "../datas/TopicMessage";
import Socket = SocketIOClient.Socket;

/**
 * A client that represents in the server side (node instance of the topic service) a distant client connected using Socket.Io
 */
export class SocketIOTopicServiceClient extends BaseTopicClient {
  /**
   * the socket that allow communication with distant client
   */
  private socket: Socket;
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
    socket.on(this.topicClientId + '.subscribe', (topic) => {
       currentClient.subscribe(topic, currentClient.sendToSocketIO, currentClient);
    });
    socket.on(this.topicClientId + '.publish', (publishArgs) => {
      currentClient.publish(publishArgs.topic, publishArgs.content).then(() => {});
    })
  }

  /**
   * The {@link TopicHandlerFunction} used to transmit topic triggered in the topicService to the distant client
   * @param topicTriggered the topic listened to on which the message is received
   * @param topicMessage the message received
   */
  private sendToSocketIO(topicTriggered:string, topicMessage:TopicMessage) {
    this.socket.emit(topicTriggered, topicMessage);
  }

}
