import { QueuesFactory } from './QueuesFactory';
import { Queue } from './Queue';
import { InMemoryQueue } from './InMemoryQueue';

export class InMemoryQueuesFactory implements QueuesFactory {
  public static metadata:any[] = [ {
    contractType: 'QueuesFactory',
    contractName: 'Default',
    isShared: true
  },{
    contractType: 'QueuesFactory',
    contractName: 'InMemory',
    isShared: true
  }];

  createQueue(queueName: string, queueOptions?: object): Queue {
    return new InMemoryQueue(queueOptions);
  }

}
