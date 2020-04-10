/**
 * The proxy client to be used on client side of a topic service that is listening to Socket.Io
 */
export class SocketIOTopicServiceClientProxy {
  /**
   * True if the client has been correctly registered to the server (aka the topicClientId has been set)
   */
  isReady=false;
  /**
   * id of the client that has been received from the server after registering
   */
  topicClientId="";
  /**
   * handler to be execute just after the client has been registered on server side
   */
  readyHandler=null;
  /**
   * the socket used to communicate to the client object on server side
   */
  socket;
  /**
   * @param socket The socket used to connect to the topicservice server
   * @param readyHandler The handler to be executed just after the client has been registered
   */
  constructor(socket, readyHandler) {
    this.isReady = false;
    this.socket = socket;
    this.ready(readyHandler);
    const current = this;
    this.socket.on('clientId', (clientId) => {
      current.topicClientId = clientId;
      if(typeof current.readyHandler === 'function'){
        current.readyHandler.call(current);
      }
    });
    this.socket.on('reconnect', () => {
      console.log('reconnecting with id :' + current.topicClientId);
    })
  }

  /**
   * Set the Handler to be executed just after the client has been registered on server side
   * @param readyHandler
   */
  ready(readyHandler){
    if(typeof readyHandler === 'function'){
      this.readyHandler = readyHandler;
    }
  }

  /**
   * Subscribe to a topic and execute the handler when the corresponding topic is raised by the server
   * @param topic The topic to listen
   * @param handler The handler to be executed when a message is received for the listened topic
   */
  async subscribe(topic, handler){
    this.socket.emit(this.topicClientId + '.subscribe', topic);
    this.socket.on(topic,(topicMessage) => {
      handler(topicMessage.fromTopic, topicMessage);
    })
  }

  /**
   * Publish a message on a specific topic
   * @param topic The topic to publish on
   * @param topicContent The content of the message to be published
   */
  async publish(topic,topicContent){
    this.socket.emit(this.topicClientId + '.publish',{
      topic:topic,
      content:topicContent
    })
  }

  /**
   * List all subscriptions registered on server side
   * @param callback the callback to be executed when the list of subscriptions are received
   */
  async getSubscriptions(callback){
    const currentClient = this;
    const subscriptionsListTopic = this.topicClientId + '.subscriptions.list';
    this.subscribe(subscriptionsListTopic, (topic, topicMessage) => {
      currentClient.unSubscribe(subscriptionsListTopic).then(() => {});
      callback(topic, topicMessage);
    });
    this.publish(this.topicClientId + '.subscriptions.get', null);
  }

  /**
   * Unsubscribe all handlers for the specified topic
   * @param topic the topic to unsubscribe
   */
  async unSubscribe(topic) {
    this.socket.removeAllListeners(topic);
    this.publish(this.topicClientId + '.unsubscribe', topic).then(() => {});
  }
}
