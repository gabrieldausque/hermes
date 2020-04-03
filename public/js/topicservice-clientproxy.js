class TopicClientProxy {
  isReady = false;
  topicClientId = '';
  readyHandler = null;

  constructor(socketIo) {
    this.socket = socketIo;
    this.topicHandlers = {};
    const current = this;
    this.socket.on('clientId', (clientId) => {
      console.log('receiving clientId : ' + clientId);
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
    console.log(this.topicClientId + ' subscribe to ' + topic);
    this.socket.emit(this.topicClientId + '_subscribe', topic);
    this.socket.on(topic,handler)
  }

  async publish(topic,topicContent){
    this.socket.emit(this.topicClientId + '_publish',{
      topic:topic,
      content:topicContent
    })
  }
}
