import { QueueOptions } from 'bullmq';

/**
 * The configuration to use for creating a queue
 * See [bullmq](https://docs.bullmq.io/) for available option on bullQueueOptions
 */
export interface BullMQQueueConfiguration {
  bullQueueOptions:QueueOptions
}
