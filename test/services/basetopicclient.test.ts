import assert from 'assert';
import app from '../../src/app';
import {MemoryTopicServiceClient} from "../../src/services/topic/clients/MemoryTopicServiceClient";
import {TopicService} from "../../src/services/topic";

describe('TopicService Tests', () => {
  it('should receive a message when subscribing to simple topic', (cb) => {
    const topicService = new TopicService();
    const memoryClientConsumer = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    memoryClientConsumer.subscribe('aSimpleTopic', (topic, topicMessage) => {
      assert.equal(topicMessage.content,"this is a content", 'the message is not ok 1');
      memoryClientConsumer.disconnect();
      cb();
    }, null);
    memoryClientProducer.publish("aSimpleTopic","this is a content");
    assert.ok(topicService, 'Registered the service');
  });

  it('should receive a message when subscribing to level1.* when publishing to level1.level2', (cb) => {
    const topicService = new TopicService();
    const memoryClientConsumer = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    memoryClientConsumer.subscribe('level1.*', (topic, topicMessage) => {
      assert.equal(topicMessage.content,"this is a content", 'the message is not ok 2');
      memoryClientConsumer.disconnect();
      cb();
    }, null);
    memoryClientProducer.publish("level1.level2","this is a content");
  });

  it('should receive a message when subscribing to level1.*.level3 when publishing to level1.level2.level3 or level1.any.level3', (cb) => {
    const topicService = new TopicService();
    const memoryClientConsumer = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    let receivedMessageCount = 0;
    memoryClientConsumer.subscribe('level1.*.level3', (topic, topicMessage) => {
      assert.equal(topicMessage.content,"this is a content", 'the message is not ok 3');
      receivedMessageCount++;
      if(receivedMessageCount === 2){
        memoryClientConsumer.disconnect();
        cb();
      }
    }, null);
    memoryClientProducer.publish("level1.level2.level3","this is a content");
    memoryClientProducer.publish("level1.anotherLevel.level3","this is a content");
  });

  it('should not receive a message when subscribing to level1.*.level3 when publishing to level1.level2.level4 or level1.any.level4', (cb) => {
    const topicService = new TopicService();
    const memoryClientConsumer = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    let receivedMessageCount = 0;
    memoryClientConsumer.subscribe('level1.*.level3', (topic, topicMessage) => {
      assert.equal(topicMessage.content,"this is a content", 'the message is not ok 4');
      receivedMessageCount++;
      if(receivedMessageCount === 1) {
        memoryClientConsumer.disconnect();
        cb();
      }
    }, null);
    memoryClientProducer.publish("level1.level2.level4","this is a content");
    memoryClientProducer.publish("level1.anotherLevel.level4","this is a content");
    memoryClientProducer.publish("level1.anotherLevel.level3","this is a content");
  });

  it('should receive a message when subscribing to level1.# when publishing to level1.level2.level3 or level1.any.level3', (cb) => {
    const topicService = new TopicService();
    const memoryClientConsumer = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    let receivedMessageCount = 0;
    memoryClientConsumer.subscribe('level1.#', (topic, topicMessage) => {
      assert.equal(topicMessage.content,"this is a content", 'the message is not ok 5');
      receivedMessageCount++;
      if(receivedMessageCount === 2){
        memoryClientConsumer.disconnect();
        cb();
      }

    }, null);
    memoryClientProducer.publish("level1.level2.level3","this is a content");
    memoryClientProducer.publish("level1.anotherLevel.level3","this is a content");
  });

  it('should receive message for two clients subscribing to level1.level2 or level1.level2bis and publishing to level1.*', (cb) => {
    const topicService = new TopicService();
    const memoryClientConsumer1 = new MemoryTopicServiceClient(topicService);
    const memoryClientConsumer2 = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    let receivedMessageCount = 0;
    memoryClientConsumer1.subscribe('level1.level2', (topic, topicMessage) => {
      receivedMessageCount++;
      if(receivedMessageCount === 2){
        memoryClientConsumer1.disconnect();
        memoryClientConsumer2.disconnect();
        cb()
      }
    }, null);
    memoryClientConsumer2.subscribe('level1.level2bis', (topic, topicMessage) => {
      receivedMessageCount++;
      if(receivedMessageCount === 2){
        memoryClientConsumer1.disconnect();
        memoryClientConsumer2.disconnect();
        cb()
      }
    }, null);
    memoryClientProducer.publish('level1.*', 'this is a message content');
  })

  it('should receive message for two clients subscribing to level1.level2.level3 or level1.level2bis.level3 and publishing to level1.*.level3', (cb) => {
    const topicService = new TopicService();
    const memoryClientConsumer1 = new MemoryTopicServiceClient(topicService);
    const memoryClientConsumer2 = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    let receivedMessageCount = 0;
    memoryClientConsumer1.subscribe('level1.level2.level3', (topic, topicMessage) => {
      receivedMessageCount++;
      if(receivedMessageCount === 2){
        memoryClientConsumer1.disconnect();
        memoryClientConsumer2.disconnect();
        cb()
      }
    }, null);
    memoryClientConsumer2.subscribe('level1.level2bis.level3', (topic, topicMessage) => {
      receivedMessageCount++;
      if(receivedMessageCount === 2){
        memoryClientConsumer1.disconnect();
        memoryClientConsumer2.disconnect();
        cb()
      }
    }, null);
    memoryClientProducer.publish('level1.*.level3', 'this is a message content');
  });

  it('should receive message for two clients subscribing to level1.level2 or level1.level2bis.level3 and publishing to level1.#', (cb) => {
    const topicService = new TopicService();
    const memoryClientConsumer1 = new MemoryTopicServiceClient(topicService);
    const memoryClientConsumer2 = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    let receivedMessageCount = 0;
    memoryClientConsumer1.subscribe('level1.level2', (topic, topicMessage) => {
      receivedMessageCount++;
      if(receivedMessageCount === 2){
        memoryClientConsumer1.disconnect();
        memoryClientConsumer2.disconnect();
        cb()
      }
    }, null);
    memoryClientConsumer2.subscribe('level1.level2bis.level3', (topic, topicMessage) => {
      receivedMessageCount++;
      if(receivedMessageCount === 2){
        memoryClientConsumer1.disconnect();
        memoryClientConsumer2.disconnect();
        cb()
      }
    }, null);
    memoryClientProducer.publish('level1.#', 'this is a message content');
  });

  it('should receive message for two clients subscribing to any topic when publishing to # (broadcast)', (cb) => {
    const topicService = new TopicService();
    const memoryClientConsumer1 = new MemoryTopicServiceClient(topicService);
    const memoryClientConsumer2 = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    let receivedMessageCount = 0;
    memoryClientConsumer1.subscribe('level1.level2', (topic, topicMessage) => {
      receivedMessageCount++;
      if(receivedMessageCount === 2){
        memoryClientConsumer1.disconnect();
        memoryClientConsumer2.disconnect();
        cb()
      }
    }, null);
    memoryClientConsumer2.subscribe('level1any.level2bis.level3', (topic, topicMessage) => {
      receivedMessageCount++;
      if(receivedMessageCount === 2){
        memoryClientConsumer1.disconnect();
        memoryClientConsumer2.disconnect();
        cb()
      }
    }, null);
    memoryClientProducer.publish('#', 'this is a message content');
  })
});
