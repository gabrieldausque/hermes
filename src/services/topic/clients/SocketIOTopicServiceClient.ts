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
    this.initializeProxyChannelProtocol();
    socket.emit('clientId', this.topicClientId);
  }

  /**
   * Initialize communication with socketIo channel protocol (for subscribe, publish and changeId when reconnected)
   */
  initializeProxyChannelProtocol() {
    const currentClient = this;
    this.socket.on('reconnect', (socket) => {
      console.log('reconnection of client with id ' + currentClient.topicClientId);
      currentClient.socket = socket;
      currentClient.initializeProxyChannelProtocol();
    });
    this.socket.on('disconnect', (socket) => {
      console.log('disconnection of client with id ' + currentClient.topicClientId);
      currentClient.disconnect();
    });
    this.socket.on(this.topicClientId + '.subscribe', (topic) => {
      currentClient.subscribe(topic, currentClient.sendToSocketIO, currentClient);
    });
    this.socket.on(this.topicClientId + '.publish', (publishArgs) => {
      currentClient.publish(publishArgs.topic, publishArgs.content).catch((error) => {
        console.error("Error while publishing from socketio : " + error)
      });
    });
    this.socket.on(this.topicClientId + '.changeId', (newId) => {
      currentClient.topicClientId = newId;
      currentClient.initializeProxyChannelProtocol();
      currentClient.socket.emit(currentClient.topicClientId + ".reconnected");
    });
    //propagate error :
    this.onError((topic, topicMessage) => currentClient.socket.emit(topic,topicMessage));
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
