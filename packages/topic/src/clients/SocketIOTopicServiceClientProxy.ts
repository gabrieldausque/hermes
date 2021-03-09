import {TopicHandlerFunction, TopicMessage} from "../index";
import Socket = SocketIOClient.Socket;

export interface SocketIOTopicServiceClientProxyReadyFunction { (): void}

export class SocketIOTopicServiceClientProxy {
  /**
   * True if the client has been correctly registered to the server (aka the topicClientId has been set)
   */
  isReady:boolean;
  /**
   * id of the client that has been received from the server after registering
   */
  topicClientId?:string;
  /**
   * handler to be execute just after the client has been registered on server side
   */
  readyHandler?:SocketIOTopicServiceClientProxyReadyFunction;
  /**
   * the socket used to communicate to the client object on server side
   */
  socket:Socket;
  /**
   * The list of current subscriptions
   */
  subscriptions:string[];
  /**
   * @param socket The socket used to connect to the topicservice server
   * @param readyHandler The handler to be executed just after the client has been registered
   */
  constructor(socket:Socket, readyHandler?:SocketIOTopicServiceClientProxyReadyFunction) {
    this.isReady = false;
    this.socket = socket;
    this.subscriptions=[];
    this.ready(readyHandler);
    const current = this;
    this.socket.on('clientId', (clientId:string) => {
      current.topicClientId = clientId;
      if(typeof current.readyHandler === 'function'){
        current.readyHandler.call(current);
      }
    });
    this.socket.on('reconnect', () => {
      console.log('reconnecting with id :' + current.topicClientId);
      current.subscriptions.forEach((subscription) => {
        current.socket.emit(this.topicClientId + '.subscribe', subscription);
      })
    })
  }
  /**
   * Set the Handler to be executed just after the client has been registered on server side
   * @param readyHandler
   */
  ready(readyHandler?:SocketIOTopicServiceClientProxyReadyFunction):void {
    if(typeof readyHandler === 'function'){
      this.readyHandler = readyHandler;
    }
  }
  /**
   * Subscribe to a topic and execute the handler when the corresponding topic is raised by the server
   * @param topic The topic to listen
   * @param handler The handler to be executed when a message is received for the listened topic
   */
  async subscribe(topic:string, handler:TopicHandlerFunction) {
    this.socket.emit(this.topicClientId + '.subscribe', topic);
    if(this.subscriptions.indexOf(topic) < 0){
      this.subscriptions.push(topic);
    }
    this.socket.on(topic,(topicMessage:TopicMessage) => {
      const deserializeTopicMessage = TopicMessage.deserialize(topicMessage);
      handler(topicMessage.fromTopic, deserializeTopicMessage);
    })
  }
  /**
   * Publish a message on a specific topic
   * @param topic The topic to publish on
   * @param topicContent The content of the message to be published
   */
  async publish(topic:string,topicContent:any) {
    this.socket.emit(this.topicClientId + '.publish',{
      topic:topic,
      content:topicContent
    })
  }

  /**
   * List all subscriptions registered on server side
   * @param callback the callback to be executed when the list of subscriptions are received
   */
  async getSubscriptions(callback:TopicHandlerFunction){
    const currentClient = this;
    const subscriptionsListTopic = this.topicClientId + '.subscriptions.list';
    this.subscribe(subscriptionsListTopic, (topic, topicMessage) => {
      currentClient.unSubscribe(subscriptionsListTopic).then(() => {});
      callback(topic, topicMessage);
    });
    this.publish(this.topicClientId + '.subscriptions.get', null).catch((error) => {console.error("Error when getting subscriptions : " + error)});
  }

  /**
   * Unsubscribe all handlers for the specified topic
   * @param topic the topic to unsubscribe
   */
  async unSubscribe(topic:string) {
    this.socket.removeListener(topic);
    if(this.subscriptions.indexOf(topic) >= 0){
      this.subscriptions.slice(this.subscriptions.indexOf(topic),1);
    }
    this.publish(this.topicClientId + '.unsubscribe', topic).catch((error) => {console.error("Error when unsubscribing " + topic + " : " + error)});
  }
}
