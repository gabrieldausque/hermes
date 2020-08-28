import { QueueOptions } from 'bullmq';

/**
 * The configuration to use for creating a queue
 * See [bull](https://github.com/OptimalBits/bull/blob/HEAD/REFERENCE.md#queue) for available option on bullQueueOptions
 */
export interface BullMQQueueConfiguration {
  bullQueueOptions:QueueOptions
}
