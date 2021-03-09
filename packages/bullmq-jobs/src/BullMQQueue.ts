import {Queue, Job, JobStates, Filter, JobFilter, Action} from '@hermes/jobs';
import { BullMQQueueConfiguration } from './configuration/BullMQQueueConfiguration';
import { Queue as InnerQueue, Worker as InnerWorker, QueueEvents as InnerQueueEvents, Job as InnerJob }  from 'bullmq';
import { BullMQJob } from './BullMQJob';
import { BullProcessingOptions } from './configuration/BullProcessingOptions';
import { BullMQJobOptions } from './configuration/BullMQJobOptions';
import {JobNotFoundError} from "@hermes/jobs/dist/errors/JobNotFoundError";

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
  public innerQueueWorker?: InnerWorker;

  /**
   * The set of action used for named jobs
   */
  private readonly namedAction: { [actionName:string] : Action};

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
    if(configuration)
      this.innerQueue = new InnerQueue(name, configuration.bullQueueOptions);
    else
      this.innerQueue = new InnerQueue(name);
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
          const state = await outerJob.innerJob?.getState();
          if(state === 'completed') {
            let resultToSend = event.returnvalue;
            try {
              // try to parse the result as it is normally JSON
              resultToSend = JSON.parse(event.returnvalue);
            }catch(err) {
              // Do nothing, just catch exception and prevent propagation
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
    let action:Action | undefined = undefined;
    if(bullJob.name && (bullJob.name !== 'default')) {
      action = this.namedAction[bullJob.name];
    } else {
      action = this.action;
    }
    const payload = bullJob.data.value;

    // manage cluster config, and job that was not sent through the current process
    let currentJob = this.runningJobs.find((j) => bullJob.id && j.id === bullJob.id.toString());
    if(!currentJob) {
      currentJob = new BullMQJob(action, bullJob.data, bullJob.opts);
      currentJob.setInnerJob(bullJob);
      this.runningJobs.push(currentJob);
    }

    let resultOrPromise:any;

    try {
      if(action) {
        resultOrPromise = action(payload, currentJob);
        if(resultOrPromise instanceof Promise) {
          resultOrPromise =  await resultOrPromise;
        }
      }
    }catch(err) {
      currentJob.raiseFailedEvent(err);
    }
    return resultOrPromise;
  }

  /**
   * Create the worker to execute on job execution request
   * See [bullmq](https://docs.bullmq.io/) for processingOptions details
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
  async push(actionPayloadOrJob: any, jobOptions: BullMQJobOptions): Promise<Job> {
    let jobToReturn:BullMQJob | undefined = undefined;
    const current = this;
    if(actionPayloadOrJob instanceof BullMQJob){
      jobToReturn = actionPayloadOrJob;
    }
    let jobOpts: {
      [prop:string] : any
    }
    if(jobOptions && jobOptions.name) {
      if(!jobToReturn)
        jobToReturn = new BullMQJob(this.namedAction[jobOptions.name], actionPayloadOrJob, jobOptions);
      jobOpts = {
        jobId: jobToReturn.id
      }
      jobToReturn.setInnerJob(await this.innerQueue.add(jobOptions.name, jobToReturn.payload, jobOpts));
    } else {
      if(!jobToReturn)
        jobToReturn = new BullMQJob(this.action, actionPayloadOrJob);
      jobOpts = {
        jobId: jobToReturn.id
      }
      jobToReturn.setInnerJob(await this.innerQueue.add('default', jobToReturn.payload));
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
          if(outerJob && outerJob.innerJob)
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

  /**
   * Convert a job object from bull package to BullJob object
   * @param bullJob
   */
  private async convertInnerJobToBullJob(bullJob: InnerJob):Promise<BullMQJob> {
    const actionToExecute = (bullJob.name && bullJob.name !== 'default') ? this.namedAction[bullJob.name] : this.action;
    const job: BullMQJob = new BullMQJob(actionToExecute, bullJob.data, bullJob.opts);
    if(bullJob.id)
      job.id = bullJob.id.toString();
    const status = await bullJob.getState();
    switch (status) {
      case 'completed': {
        job.state = JobStates.success;
        job.result = bullJob.returnvalue;
        break;
      }
      case 'failed': {
        job.state = JobStates.failed;
        job.err = new Error(bullJob.failedReason);
        break;
      }
      default: {
        job.state = JobStates.running;
        break;
      }
    }
    return job;
  }

  /**
   * Get the job with the corresponding id
   * @param jobId
   */
  async getJob(jobId: string): Promise<Job> {
    const foundJob = await this.innerQueue.getJob(jobId);
    if(foundJob){
      const job = await this.convertInnerJobToBullJob(foundJob);
      if(job.state === JobStates.running)
        this.runningJobs.unshift(job);
      return job;
    }
    throw new JobNotFoundError(jobId, this.name);
  }

  /**
   * Check if the job with corresponding id is in the current queue
   * @param jobId
   */
  async hasJob(jobId: string): Promise<boolean> {
    const foundJob = await this.innerQueue.getJob(jobId);
    return (foundJob) !== null && typeof foundJob !== 'undefined';
  }

  /**
   * Get a list of jobs that match payload value filter and/or metadata filter
   * @param filter
   */
  async getJobs(filter: JobFilter): Promise<Job[]> {
    let toReturn = [];
    const listOfInnerJobs = await this.innerQueue.getJobs(['completed','failed','active','waiting']);
    let listOfJobs = [];
    for(const innerJob of listOfInnerJobs) {
      listOfJobs.push(await this.convertInnerJobToBullJob(innerJob))
    }

    if(filter.valueFilter) {
      for(const job of listOfJobs){
        if(job.payload && job.payload.value){
          const valueToTest = job.payload.value;
          if(Filter.match(filter.valueFilter, valueToTest)){
            toReturn.push(job);
          }
        }
      }
    }

    if(filter.metadataFilter) {
      if(toReturn.length > 0) {
        listOfJobs = toReturn;
        toReturn = [];
      }
      for(const job of listOfJobs){
        if(job.payload && job.payload.metadata){
          const metadataToTest = job.payload.metadata;
          if(Filter.match(filter.metadataFilter, metadataToTest)){
            toReturn.push(job);
          }
        }
      }
    }

    return toReturn;
  }


}
