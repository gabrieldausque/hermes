import { Queue } from '@hermes/jobs/queues/Queue';
import { Job } from '@hermes/jobs/jobs/Job';
import { BullQueueConfiguration } from './configuration/BullQueueConfiguration';
import InnerQueue from 'bull';
import { BullJob } from './BullJob';

export class BullQueue extends Queue {

  public innerQueue: any;
  private readonly namedAction: {};
  private readonly runningJobs: BullJob[];

  constructor(configuration?:BullQueueConfiguration) {
    super(configuration);
    this.runningJobs = [];
    this.innerQueue = new InnerQueue(configuration.name, configuration.redisUrl, configuration.bullQueueOptions);
    const current = this;
    this.innerQueue.on('error', (err) => {
      current.raiseQueueError(err);
    });
    this.innerQueue.client.on('ready', () => {
      current.raiseReady();
    })
    this.innerQueue.on('completed', (job, result) => {
      const outerJob = current.runningJobs.find((j) => {
        return j.id === job.id.toString();
      })
      if(outerJob)
      {
        this.runningJobs.splice(this.runningJobs.indexOf(outerJob), 1);
        outerJob.raiseSuccessEvent(result);
      }
    })
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
    const currentJob = this.runningJobs.find((j) => j.id === bullJob.id.toString());
    const resultOrPromise = action(bullJob.data, currentJob);
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
    let jobToReturn:BullJob;
    if(jobOptions && jobOptions.name) {
      jobToReturn = new BullJob(this.namedAction[jobOptions.name], actionPayload)
      this.innerQueue.add(jobOptions.name, actionPayload).then((bullJob) => {
        jobToReturn.setInnerJob(bullJob);
      });
    } else {
      jobToReturn = new BullJob(this.action, actionPayload);
      this.innerQueue.add(actionPayload).then((bullJob) => {
        jobToReturn.setInnerJob(bullJob);
      });
    }
    if(jobToReturn)
      this.runningJobs.unshift(jobToReturn);
    return jobToReturn;
  }

  start(): void {
    // Do nothing;
  }

  stop(): void {
    this.innerQueue.close()
  }

}
