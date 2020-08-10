import { Queue } from '@hermes/jobs/queues/Queue';
import { Job } from '@hermes/jobs/jobs/Job';
import { BullQueueConfiguration } from './configuration/BullQueueConfiguration';
import InnerQueue from 'bull';

export class BullQueue extends Queue {

  private innerQueue: any;
  private namedAction: {};

  constructor(configuration?:BullQueueConfiguration) {
    super(configuration);
    this.innerQueue = new InnerQueue(configuration.name, configuration.redisUrl, configuration.bullQueueOptions);
    this.namedAction = {};
  }

  private async executeJob(bullJob) {
    let action;
    if(bullJob.name && bullJob.name === '*'){
      action = this.namedAction[bullJob.name];
    } else {
      action = this.action;
    }
    // TODO : check action is valid
    const resultOrPromise = action(bullJob.data);
    if(resultOrPromise instanceof Promise) {
      return await resultOrPromise
    } else {
      return resultOrPromise;
    }
  }

  onJobToProcess(action: any, processingOptions?: any) {
    const processorName:string = (processingOptions && typeof processingOptions.name === 'string')?processingOptions.name:'';
    const concurrency:number = (processingOptions && typeof processingOptions.concurrency === 'number')?processingOptions.concurrency:1;
    if(processorName)
    {
      this.namedAction[processorName] = action;
      this.innerQueue.process(processorName, concurrency, this.executeJob.bind(this))
    } else {
      this.action = action;
      this.innerQueue.process(concurrency, this.executeJob.bind(this));
    }

  }

  push(actionPayload: any, jobOptions: { [p: string]: any }): Job {
    return undefined;
  }

  start(): void {
  }

  stop(): void {
  }

}
