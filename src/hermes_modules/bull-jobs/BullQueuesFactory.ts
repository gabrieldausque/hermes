import { QueuesFactory, Queue } from '@hermes/jobs';
import { BullQueueConfiguration } from './configuration/BullQueueConfiguration';
import { BullQueue } from './BullQueue';

/**
 * The factory that will create queue using the bull framework
 */
export class BullQueuesFactory implements QueuesFactory{
  /**
   * Export metadata used by InstancesFactory
   */
  public static metadata:any[] = [ {
    contractType: 'QueuesFactory',
    contractName: 'Bull',
    isShared: true
  }];

  /**
   * Create a BullQueue with the specified name
   * @param queueName The queue name
   * @param queueOptions The options to use for the creation of the queue
   */
  createQueue(queueName: string, queueOptions?:BullQueueConfiguration): Queue {
    return new BullQueue(queueName, {
      name:queueName,
      redisUrl: queueOptions.redisUrl,
      bullQueueOptions:queueOptions.bullQueueOptions
    });
  }
}
