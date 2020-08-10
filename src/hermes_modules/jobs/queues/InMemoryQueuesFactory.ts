import { QueuesFactory } from './QueuesFactory';
import { Queue } from './Queue';
import { InMemoryQueue } from './InMemoryQueue';

export class InMemoryQueuesFactory implements QueuesFactory {
  static metadata: [ {
    contractType: 'QueueFactory',
    contractName: 'Default',
    isShared: true
  }];

  createQueue(queueName: string, queueOptions?: object): Queue {
    return new InMemoryQueue(queueOptions);
  }

}
