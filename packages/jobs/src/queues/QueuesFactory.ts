import { Queue } from './Queue';

/**
 * Interface to be implemented by a Factory that will return Queue objects
 */
export interface QueuesFactory {
  createQueue(queueName: string, queueOptions?: object): Queue;
}
