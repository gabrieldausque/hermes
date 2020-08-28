import { Queue, Job, ProcessingOptions } from '@hermes/jobs';
import { BullMQQueueConfiguration } from './configuration/BullMQQueueConfiguration';
import { Queue as InnerQueue, Worker as InnerWorker, QueueEvents as InnerQueueEvents, Job as InnerJob }  from 'bullmq';
import { BullMQJob } from './BullMQJob';
import { BullValueTypeBox } from './BullValueTypeBox';
import { BullProcessingOptions } from './configuration/BullProcessingOptions';
import { BullMQJobOptions } from './configuration/BullMQJobOptions';

/**
 * The Queue implementation for Bull
 */
export class BullMQQueue extends Queue {

  /**
   * The inner bull queue
   */
  public innerQueue: InnerQueue;

  /**
   * The inner bull queue
   */
  public innerQueueEvents: InnerQueueEvents;

  /**
   * The inner bull worker
   */
  public innerQueueWorker: InnerWorker;

  /**
   * The set of action used for named jobs
   */
  private readonly namedAction: {};

  /**
   * The list of runnings job for the current queue
   */
  private readonly runningJobs: BullMQJob[];
  private isClosed: boolean;

  /**
   * Create a new BullQueue
   * @param name The name of the queue
   * @param configuration The configuration of the queue.
   */
  constructor(name:string, configuration?:BullMQQueueConfiguration) {
    super(name, configuration);
    this.isClosed = false;
    this.runningJobs = [];
    this.innerQueue = new InnerQueue(name, configuration.bullQueueOptions);
    this.innerQueueEvents = new InnerQueueEvents(name);
    const current = this;
    this.innerQueue.on('error', (err) => {
      console.log(err);
      current.raiseQueueError(err);
    });
    this.innerQueue.client.then((c) => {
        this.raiseReady();
    });
    this.innerQueueEvents.on('failed', async (jobId, err) => {
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
    this.innerQueueEvents.on('completed', async (event:{ event:string, jobId:string, returnvalue:any}) => {
      const outerJob = current.runningJobs.find((j) => {
        return j.id === event.jobId.toString();
      });
      try {
        if(outerJob)
        {
          const state = await outerJob.innerJob.getState();
          if(state === 'completed') {
            let resultToSend = event.returnvalue;
            try {
              // try to parse the result as it is normally JSON
              resultToSend = JSON.parse(event.returnvalue);
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
          current.raiseJobFailed(outerJob, event.returnvalue)
        }
      }
    });
    this.namedAction = {};
  }


  /**
   * Execute a job
   * @param bullJob the bull job to execute
   */
  private async executeJob(bullJob:InnerJob<any>) {
    let action;
    if(bullJob.name && (bullJob.name !== 'default')) {
      action = this.namedAction[bullJob.name];
    } else {
      action = this.action;
    }
    let payload = bullJob.data;

    // manage cluster config, and job that was not sent through the current process
    let currentJob = this.runningJobs.find((j) => j.id === bullJob.id.toString());
    if(!currentJob) {
      currentJob = new BullMQJob(action, bullJob.data, bullJob.opts);
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
   * See [bullmq](https://docs.bullmq.io/guide/connections) for processingOptions details
   * @param action The function to execute on a job receive
   * @param processingOptions The options for the current worker :
   */
  onJobToProcess(action: any, processingOptions: BullProcessingOptions = {
    name:'default',
    concurrency:1,
    doneHandler: () => { /** Do nothing */ },
    errorHandler: () => { /** Do nothing */ },
    progressHandler: () => { /** Do nothing */ }
  }) {
    if(processingOptions.name && processingOptions.name !== 'default')
    {
      this.namedAction[processingOptions.name] = action;
    } else {
      this.action = action;
    }
    this.innerQueueWorker = new InnerWorker(this.name, this.executeJob.bind(this), processingOptions);
  }

  /**
   * Push a job to be executed
   * @param actionPayloadOrJob The payload or the job to execute
   * @param jobOptions The options to use for this execution
   */
  push(actionPayloadOrJob: any, jobOptions: BullMQJobOptions): Job {
    let jobToReturn:BullMQJob;
    const current = this;
    if(actionPayloadOrJob instanceof BullMQJob){
      jobToReturn = actionPayloadOrJob;
    }

    if(jobOptions && jobOptions.name) {
      if(!jobToReturn)
        jobToReturn = new BullMQJob(this.namedAction[jobOptions.name], actionPayloadOrJob, jobOptions);
      this.innerQueue.add(jobOptions.name, jobToReturn.getPayload()).then((bullJob: InnerJob) => {
        jobToReturn.setInnerJob(bullJob);
      });
    } else {
      if(!jobToReturn)
        jobToReturn = new BullMQJob(this.action, actionPayloadOrJob);
        this.innerQueue.add('default', jobToReturn.getPayload()).then((bullJob) => {
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
  async getHost() {
    return (await this.innerQueue.client).options.host;
  }

  /**
   * Get the port used for the redis connexion
   */
  async getPort() {
    return (await this.innerQueue.client).options.port;
  }

  /**
   * Do nothing, bull has no need for a start
   */
  start(): void {
    if(this.isClosed) {
      this.isClosed = false;
      this.innerQueue = new InnerQueue(this.name, this.configuration.bullQueueOptions);
      this.innerQueueEvents = new InnerQueueEvents(this.name);
      const current = this;
      this.innerQueue.on('error', (err) => {
        console.log(err);
        current.raiseQueueError(err);
      });
      this.innerQueue.client.then((c) => {
        this.raiseReady();
      });
      this.innerQueueEvents.on('failed', async (jobId, err) => {
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
      this.innerQueueEvents.on('completed', async (jobId, result) => {
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
    }
  }

  /**
   * Close the inner queue
   */
  stop(): void {
    if(!this.isClosed){
      this.isClosed = true;
      this.innerQueue.close().then(() => { /** do nothing */ }).catch((err) => console.error(err));
      this.innerQueueWorker?.close(true).then(() => { /** do nothing */ }).catch((err) => console.error(err));
    }
  }

}
