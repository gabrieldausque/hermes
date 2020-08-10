import { QueueOptions } from 'bull';

export interface BullQueueConfiguration {
  name:string
  redisUrl:string,
  bullQueueOptions:QueueOptions
}
