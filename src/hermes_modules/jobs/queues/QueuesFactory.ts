import { Queue } from './Queue';

export interface QueuesFactory {
  createQueue(queueName: string, queueOptions?: object): Queue;
}
