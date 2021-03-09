import { QueuesFactory } from './QueuesFactory';
import { Queue } from './Queue';
import { InMemoryQueue } from './InMemoryQueue';

/**
 * Factory that will create InMemoryQueue
 */
export class InMemoryQueuesFactory implements QueuesFactory {
  /**
   * Export datas to be used by InstancesFactory
   */
  public static metadata:any[] = [ {
    contractType: 'QueuesFactory',
    contractName: 'Default',
    isShared: true
  },{
    contractType: 'QueuesFactory',
    contractName: 'InMemory',
    isShared: true
  }];

  /**
   * Create InMemoryQueue with specified name and options
   * @param queueName
   * @param queueOptions
   */
  createQueue(queueName: string, queueOptions?: object): Queue {
    return new InMemoryQueue(queueName, queueOptions);
  }

}
