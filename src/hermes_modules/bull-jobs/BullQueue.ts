import { Queue } from '@hermes/jobs';
import { Job } from '@hermes/jobs/jobs/Job';
import { BullQueueConfiguration } from './configuration/BullQueueConfiguration';
import InnerQueue from 'bull';
import { BullJob } from './BullJob';
import { BullValueTypeBox } from './BullValueTypeBox';

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
      console.log(err);
      current.raiseQueueError(err);
    });
    this.innerQueue.client.on('ready', () => {
      current.raiseReady();
    });
    this.innerQueue.on('completed', (job, result) => {
      try {
        const outerJob = current.runningJobs.find((j) => {
          return j.id === job.id.toString();
        })
        if(outerJob)
        {
          this.runningJobs.splice(this.runningJobs.indexOf(outerJob), 1);
          outerJob.raiseSuccessEvent(result);
        }
      } catch(ex) {
        console.log(ex);
      }

    });
    this.namedAction = {};
  }

  private async executeJob(bullJob) {
    let action;
    if(bullJob.name && (bullJob.name !== '__default__')){
      action = this.namedAction[bullJob.name];
    } else {
      action = this.action;
    }
    // TODO : check action is valid
    const currentJob = this.runningJobs.find((j) => j.id === bullJob.id.toString());
    let payload = bullJob.data;
    if(typeof payload.boxedValue !== 'undefined'){
      payload = (payload as BullValueTypeBox).boxedValue;
    }
    let resultOrPromise:any;
    try {
      resultOrPromise = action(payload, currentJob);
      if(resultOrPromise instanceof Promise) {
        resultOrPromise =  await resultOrPromise;
      }
    }catch(err) {
      currentJob.raiseFailedEvent(err);
    }
    return resultOrPromise;
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

  push(actionPayloadOrJob: any, jobOptions: { [p: string]: any }): Job {
    let jobToReturn:BullJob;
    const current = this;
    if(actionPayloadOrJob instanceof BullJob){
      jobToReturn = actionPayloadOrJob;
    }

    if(jobOptions && jobOptions.name) {
      if(!jobToReturn)
        jobToReturn = new BullJob(this.namedAction[jobOptions.name], actionPayloadOrJob, jobOptions);
      this.innerQueue.add(jobOptions.name, jobToReturn.getPayload()).then((bullJob) => {
        jobToReturn.setInnerJob(bullJob);
      });
    } else {
      if(!jobToReturn)
        jobToReturn = new BullJob(this.action, actionPayloadOrJob);

      this.innerQueue.add(jobToReturn.getPayload()).then((bullJob) => {
        jobToReturn.setInnerJob(bullJob);
      }).catch((err) => {
        current.raiseQueueError(err);
      });
    }
    if(jobToReturn && (this.runningJobs.indexOf(jobToReturn) < 0))
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
