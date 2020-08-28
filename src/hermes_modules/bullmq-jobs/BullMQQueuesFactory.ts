import { QueuesFactory, Queue } from '@hermes/jobs';
import { BullMQQueueConfiguration } from './configuration/BullMQQueueConfiguration';
import { BullMQQueue } from './BullMQQueue';

/**
 * The factory that will create queue using the bull framework
 */
export class BullMQQueuesFactory implements QueuesFactory{
  /**
   * Export metadata used by InstancesFactory
   */
  public static metadata:any[] = [ {
    contractType: 'QueuesFactory',
    contractName: 'BullMQ',
    isShared: true
  }];

  /**
   * Create a BullQueue with the specified name
   * @param queueName The queue name
   * @param queueOptions The options to use for the creation of the queue
   */
  createQueue(queueName: string, queueOptions?:BullMQQueueConfiguration): Queue {
    return new BullMQQueue(queueName, {
      bullQueueOptions:queueOptions.bullQueueOptions
    });
  }
}
