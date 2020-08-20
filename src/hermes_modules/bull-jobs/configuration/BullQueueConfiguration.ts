import { QueueOptions } from 'bull';

/**
 * The configuration to use for creating a queue
 * See [bull](https://github.com/OptimalBits/bull/blob/HEAD/REFERENCE.md#queue) for available option on bullQueueOptions
 */
export interface BullQueueConfiguration {
  name:string
  redisUrl:string,
  bullQueueOptions:QueueOptions
}
