class TopicClientSocketIoProxy {
  isReady = false;
  topicClientId = '';
  readyHandler = null;

  constructor(socket) {
    this.socket = socket;
    this.topicHandlers = {};
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

  ready(readyHandler){
    if(typeof readyHandler === 'function'){
      this.readyHandler = readyHandler;
    }
  }

  async subscribe(topic, handler){
    this.socket.emit(this.topicClientId + '.subscribe', topic);
    this.socket.on(topic,(topicMessage) => {
      handler(topicMessage.fromTopic, topicMessage);
    })
  }

  async publish(topic,topicContent){
    this.socket.emit(this.topicClientId + '.publish',{
      topic:topic,
      content:topicContent
    })
  }

  async getSubscriptions(callback){
    const currentClient = this;
    const subscriptionsListTopic = this.topicClientId + '.subscriptions.list';
    this.subscribe(subscriptionsListTopic, (topic, topicMessage) => {
      currentClient.unSubscribe(subscriptionsListTopic).then(() => {});
      callback(topic, topicMessage);
    });
    this.publish(this.topicClientId + '.subscriptions.get', null);
  }

  async unSubscribe(topic) {
    this.socket.off(topic);
    this.publish(this.topicClientId + '.unsubscribe', topic).then(() => {});
  }
}
