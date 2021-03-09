import * as chai from 'chai';
chai.use(require('chai-as-promised'));
import {expect} from 'chai';
import {MemoryTopicServiceClient, TopicMessage, TopicService} from '../src';

describe('TopicService Tests', () => {
  it('should receive a message when subscribing to simple topic', () => {
    const topicService = new TopicService();
    const memoryClientConsumer = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    const p = new Promise(async (resolve) => {
      memoryClientConsumer.subscribe('aSimpleTopic', (topic, topicMessage) => {
        memoryClientConsumer.disconnect();
        resolve(topicMessage.content);
      }, null);
      await memoryClientProducer.publish("aSimpleTopic","this is a content");
    })
    return expect(p).to.eventually.eql('this is a content');
  });

  it('should receive a message when subscribing to level1.* when publishing to level1.level2', () => {
    const topicService = new TopicService();
    const memoryClientConsumer = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    const p = new Promise(async (resolve) => {
      memoryClientConsumer.subscribe('level1.*', (topic, topicMessage) => {
        memoryClientConsumer.disconnect();
        resolve(topicMessage.content);
      }, null);
      await memoryClientProducer.publish("level1.level2","this is a content");
    })
    return expect(p).to.eventually.eql('this is a content');
  });

  it('should receive a message when subscribing to level1.*.level3 when publishing to level1.level2.level3 or level1.any.level3', () => {
    const topicService = new TopicService();
    const memoryClientConsumer = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    let receivedMessageCount = 0;
    const p = new Promise(async (resolve) => {
      memoryClientConsumer.subscribe('level1.*.level3', (topic, topicMessage) => {
        expect(topicMessage.content).to.be.eql("this is a content");
        receivedMessageCount++;
        if(receivedMessageCount === 2){
          memoryClientConsumer.disconnect();
          resolve(receivedMessageCount)
        }
      }, null);
      await memoryClientProducer.publish("level1.level2.level3","this is a content");
      await memoryClientProducer.publish("level1.anotherLevel.level3","this is a content");
    })
    return expect(p).to.eventually.eql(2);
  });

  it('should not receive a message when subscribing to level1.*.level3 when publishing to level1.level2.level4 or level1.any.level4', () => {
    const topicService = new TopicService();
    const memoryClientConsumer = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    let receivedMessageCount = 0;
    const p = new Promise(async (resolve) => {
      memoryClientConsumer.subscribe('level1.*.level3', (topic, topicMessage) => {
        receivedMessageCount++;
        if(receivedMessageCount === 1) {
          memoryClientConsumer.disconnect();
          resolve(receivedMessageCount)
        }
      }, null);
      await memoryClientProducer.publish("level1.level2.level4","this is a content");
      await memoryClientProducer.publish("level1.anotherLevel.level4","this is a content");
      await memoryClientProducer.publish("level1.anotherLevel.level3","this is a content");
    })
    return expect(p).to.eventually.eql(1);
  });

  it('should receive a message when subscribing to level1.# when publishing to level1.level2.level3 or level1.any.level3', () => {
    const topicService = new TopicService();
    const memoryClientConsumer = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    let receivedMessageCount = 0;
    const p = new Promise(async (resolve) => {
      memoryClientConsumer.subscribe('level1.#', (topic, topicMessage) => {
        receivedMessageCount++;
        if(receivedMessageCount === 2){
          memoryClientConsumer.disconnect();
          resolve(receivedMessageCount)
        }

      }, null);
      await memoryClientProducer.publish("level1.level2.level3","this is a content");
      await memoryClientProducer.publish("level1.anotherLevel.level3","this is a content");
    })
    return expect(p).to.eventually.eql(2);
  });

  it('should receive message for two clients subscribing to level1.level2 or level1.level2bis and publishing to level1.*', () => {
    const topicService = new TopicService();
    const memoryClientConsumer1 = new MemoryTopicServiceClient(topicService);
    const memoryClientConsumer2 = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    let receivedMessageCount = 0;
    const p = new Promise(async (resolve) => {
      memoryClientConsumer1.subscribe('level1.level2', (topic, topicMessage) => {
        receivedMessageCount++;
        if(receivedMessageCount === 2){
          memoryClientConsumer1.disconnect();
          memoryClientConsumer2.disconnect();
          resolve(receivedMessageCount);
        }
      }, null);
      memoryClientConsumer2.subscribe('level1.level2bis', (topic, topicMessage) => {
        receivedMessageCount++;
        if(receivedMessageCount === 2){
          memoryClientConsumer1.disconnect();
          memoryClientConsumer2.disconnect();
        }
        resolve(receivedMessageCount);
      }, null);
      await memoryClientProducer.publish('level1.*', 'this is a message content');
    })
    return expect(p).to.eventually.eql(2);
  })

  it('should receive message for two clients subscribing to level1.level2.level3 or level1.level2bis.level3 and publishing to level1.*.level3', () => {
    const topicService = new TopicService();
    const memoryClientConsumer1 = new MemoryTopicServiceClient(topicService);
    const memoryClientConsumer2 = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    let receivedMessageCount = 0;
    const p = new Promise(async (resolve) => {
      memoryClientConsumer1.subscribe('level1.level2.level3', (topic, topicMessage) => {
        receivedMessageCount++;
        if(receivedMessageCount === 2){
          memoryClientConsumer1.disconnect();
          memoryClientConsumer2.disconnect();
          resolve(receivedMessageCount)
        }
      }, null);
      memoryClientConsumer2.subscribe('level1.level2bis.level3', (topic, topicMessage) => {
        receivedMessageCount++;
        if(receivedMessageCount === 2){
          memoryClientConsumer1.disconnect();
          memoryClientConsumer2.disconnect();
          resolve(receivedMessageCount)
        }
      }, null);
      await memoryClientProducer.publish('level1.*.level3', 'this is a message content');
    })
    return expect(p).to.eventually.eql(2);
  });

  it('should receive message for two clients subscribing to level1.level2 or level1.level2bis.level3 and publishing to level1.#', () => {
    const topicService = new TopicService();
    const memoryClientConsumer1 = new MemoryTopicServiceClient(topicService);
    const memoryClientConsumer2 = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    let receivedMessageCount = 0;
    const p = new Promise(async (resolve) => {
      memoryClientConsumer1.subscribe('level1.level2', (topic, topicMessage) => {
        receivedMessageCount++;
        if(receivedMessageCount === 2){
          memoryClientConsumer1.disconnect();
          memoryClientConsumer2.disconnect();
          resolve(receivedMessageCount)
        }
      }, null);
      memoryClientConsumer2.subscribe('level1.level2bis.level3', (topic, topicMessage) => {
        receivedMessageCount++;
        if(receivedMessageCount === 2){
          memoryClientConsumer1.disconnect();
          memoryClientConsumer2.disconnect();
          resolve(receivedMessageCount)
        }
      }, null);
      await memoryClientProducer.publish('level1.#', 'this is a message content');
    })
    return expect(p).to.eventually.eql(2);
  });

  it('should receive message for two clients subscribing to any topic when publishing to # (broadcast)', () => {
    const topicService = new TopicService();
    const memoryClientConsumer1 = new MemoryTopicServiceClient(topicService);
    const memoryClientConsumer2 = new MemoryTopicServiceClient(topicService);
    const memoryClientProducer = new MemoryTopicServiceClient(topicService);
    let receivedMessageCount = 0;
    const p = new Promise(async (resolve) => {
      const messageHandler = (topic:string, topicMessage:TopicMessage) => {
        receivedMessageCount++;
        if(receivedMessageCount >= 2){
          memoryClientConsumer1.disconnect();
          memoryClientConsumer2.disconnect();
          resolve(receivedMessageCount)
        }
      };
      memoryClientConsumer1.subscribe('level1.level2', messageHandler, null);
      // memoryClientConsumer1.onError(messageHandler);
      memoryClientConsumer2.subscribe('level1any.level2bis.level3', messageHandler, null);
      // memoryClientConsumer2.onError(messageHandler)
      await memoryClientProducer.publish('#', 'this is a message content');
    })
    return expect(p).to.eventually.eql(2);
  });
});
