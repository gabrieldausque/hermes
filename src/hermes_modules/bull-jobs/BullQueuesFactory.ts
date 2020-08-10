import { QueuesFactory, Queue } from '@hermes/jobs';
import { BullQueueConfiguration } from './configuration/BullQueueConfiguration';
import { BullQueue } from './BullQueue';

export class BullQueuesFactory implements QueuesFactory{
  static metadata: [ {
    contractType: 'QueueFactory',
    contractName: 'Bull',
    isShared: true
  }];

  createQueue(queueName: string, queueOptions?:BullQueueConfiguration): Queue {
    return new BullQueue({
      name:queueName,
      redisUrl: queueOptions.redisUrl,
      bullQueueOptions:queueOptions.bullQueueOptions
    });
  }
}
