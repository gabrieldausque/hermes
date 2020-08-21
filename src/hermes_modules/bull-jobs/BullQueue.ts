import { Queue, Job, ProcessingOptions } from '@hermes/jobs';
import { BullQueueConfiguration } from './configuration/BullQueueConfiguration';
import InnerQueue from 'bull';
import { BullJob } from './BullJob';
import { BullValueTypeBox } from './BullValueTypeBox';
import { BullProcessingOptions } from './configuration/BullProcessingOptions';
import { BullJobOptions } from './configuration/BullJobOptions';

/**
 * The Queue implementation for Bull
 */
export class BullQueue extends Queue {

  /**
   * The inner bull queue
   */
  public innerQueue: any;

  /**
   * The set of action used for named jobs
   */
  private readonly namedAction: {};

  /**
   * The list of runnings job for the current queue
   */
  private readonly runningJobs: BullJob[];

  /**
   * Create a new BullQueue
   * @param name The name of the queue
   * @param configuration The configuration of the queue.
   */
  constructor(name:string, configuration?:BullQueueConfiguration) {
    super(name, configuration);
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
    this.innerQueue.on('global:failed', async (jobId, err) => {
      const outerJob = current.runningJobs.find((j) => {
        return j.id === jobId.toString();
      });
      try {
        if (outerJob) {
          console.error(err);
          if(outerJob) {
            current.raiseJobFailed(outerJob, err);
          }
        }
      } catch(err) {
        if(outerJob) {
          current.raiseJobFailed(outerJob, err);
        }
      }
    });
    this.innerQueue.on('global:completed', async (jobId, result) => {
      const outerJob = current.runningJobs.find((j) => {
        return j.id === jobId.toString();
      });
      try {
        if(outerJob)
        {
          const state = await outerJob.innerJob.getState();
          if(state === 'completed') {
            let resultToSend = result;
            try {
              // try to parse the result as it is normally JSON
              resultToSend = JSON.parse(result)
            }finally {
              current.runningJobs.splice(current.runningJobs.indexOf(outerJob), 1);
              current.raiseJobSuccess(outerJob, resultToSend);
            }
          }
          return;
        }
      } catch(err) {
        console.error(err);
        if(outerJob) {
          current.raiseJobFailed(outerJob, result)
        }
      }
    });
    this.namedAction = {};
  }

  /**
   * Execute a job
   * @param bullJob the bull job to execute
   */
  private async executeJob(bullJob:InnerQueue.Job<any>) {
    let action;
    if(bullJob.name && (bullJob.name !== '__default__')) {
      action = this.namedAction[bullJob.name];
    } else {
      action = this.action;
    }
    let payload = bullJob.data;

    // manage cluster config, and job that was not sent through the current process
    let currentJob = this.runningJobs.find((j) => j.id === bullJob.id.toString());
    if(!currentJob) {
      currentJob = new BullJob(action, bullJob.data, bullJob.opts);
      currentJob.setInnerJob(bullJob);
      this.runningJobs.push(currentJob);
    }

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

  /**
   * Create the worker to execute on job execution request
   * See [bull](https://github.com/OptimalBits/bull/blob/HEAD/REFERENCE.md#queueprocess) for processingOptions details
   * @param action The function to execute on a job receive
   * @param processingOptions The options for the current worker :
   */
  onJobToProcess(action: any, processingOptions?: BullProcessingOptions) {
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

  /**
   * Push a job to be executed
   * @param actionPayloadOrJob The payload or the job to execute
   * @param jobOptions The options to use for this execution
   */
  push(actionPayloadOrJob: any, jobOptions: BullJobOptions): Job {
    let jobToReturn:BullJob;
    const current = this;
    if(actionPayloadOrJob instanceof BullJob){
      jobToReturn = actionPayloadOrJob;
    }

    if(jobOptions && jobOptions.name) {
      if(!jobToReturn)
        jobToReturn = new BullJob(this.namedAction[jobOptions.name], actionPayloadOrJob, jobOptions);
      this.innerQueue.add(jobOptions.name, jobToReturn.getPayload()).then((bullJob: InnerQueue.Job<any>) => {
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

  /**
   * Get the redis host used by this queue
   */
  getHost() {
    return this.innerQueue.client.options.host
  }

  /**
   * Get the port used for the redis connexion
   */
  getPort() {
    return this.innerQueue.client.options.port
  }

  /**
   * Do nothing, bull has no need for a start
   */
  start(): void {
    // Do nothing;
  }

  /**
   * Close the inner queue
   */
  stop(): void {
    this.innerQueue.close()
  }

}
