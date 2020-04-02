class TopicClientProxy {
  constructor(socketIo) {
    this.socket = socketIo;
    this.topicHandlers = {};
  }

  async subscribe(topic, handler){
    console.log('subscribe to ' + this.socket.io.engine.id + '_subscribe');
    this.socket.emit(this.socket.io.engine.id + '_subscribe', topic);
    this.socket.on(topic,handler)
  }

  async publish(topic,topicContent){
    this.socket.emit(this.socket.id + '_publish',{
      topic:topic,
      content:topicContent
    })
  }
}
