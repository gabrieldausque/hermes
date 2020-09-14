import { Queue, Job, ProcessingOptions, JobStates, Filter } from '@hermes/jobs';
import { BullQueueConfiguration } from './configuration/BullQueueConfiguration';
import InnerQueue from 'bull';
import {Job as InnerJob} from 'bull';
import { BullJob } from './BullJob';
import { BullValueTypeBox } from './BullValueTypeBox';
import { BullProcessingOptions } from './configuration/BullProcessingOptions';
import { BullJobOptions } from './configuration/BullJobOptions';
import { JobFilter, PayLoad } from '@hermes/jobs/jobs';

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
      console.error(err);
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
            }catch(err) {
              // DO nothing, just prevent error propagation
            } finally {
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
    const payload = (bullJob.data as PayLoad).value;

    // manage cluster config, and job that was not sent through the current process
    let currentJob = this.runningJobs.find((j) => j.id === bullJob.id.toString());
    if(!currentJob) {
      currentJob = new BullJob(action, bullJob.data, bullJob.opts);
      currentJob.setInnerJob(bullJob);
      this.runningJobs.push(currentJob);
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
      if(!this.namedAction[processorName]) {
        this.innerQueue.process(processorName, concurrency, this.executeJob.bind(this))
      }
      this.namedAction[processorName] = action;
    } else {
      if(!this.action)
      {
        this.innerQueue.process(concurrency, this.executeJob.bind(this));
      }
      this.action = action;

    }
  }

  /**
   * Push a job to be executed
   * @param actionPayloadOrJob The payload or the job to execute
   * @param jobOptions The options to use for this execution
   */
  push(actionPayloadOrJob: PayLoad, jobOptions: BullJobOptions): Job {
    let jobToReturn:BullJob;
    const current = this;
    if(actionPayloadOrJob instanceof BullJob){
      jobToReturn = actionPayloadOrJob;
    }

    if(jobOptions && jobOptions.name) {
      if(!jobToReturn)
        jobToReturn = new BullJob(this.namedAction[jobOptions.name], actionPayloadOrJob, jobOptions);
      this.innerQueue.add(jobOptions.name, jobToReturn.payload).then((bullJob: InnerQueue.Job<any>) => {
        jobToReturn.jobOptions = bullJob.opts;
        jobToReturn.setInnerJob(bullJob);
      });
    } else {
      if(!jobToReturn)
        jobToReturn = new BullJob(this.action, actionPayloadOrJob);

      this.innerQueue.add(jobToReturn.payload).then((bullJob) => {
        jobToReturn.jobOptions = bullJob.opts;
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
    this.innerQueue.close().then(() => console.log(`Closing queue with name ${this.name}`));
  }

  /**
   * Get the job from the queue
   * @param jobId
   */
  async getJob(jobId: string): Promise<Job> {
    const bullJob:InnerJob = await this.innerQueue.getJob(jobId);
    if(bullJob){
      return await this.convertInnerJobToBullJob(bullJob);
    }
    return;
  }

  private async convertInnerJobToBullJob(bullJob: InnerJob):Promise<BullJob> {
    const actionToExecute = (bullJob.name && bullJob.name !== '__default__') ? this.namedAction[bullJob.name] : this.action;
    const job: BullJob = new BullJob(actionToExecute, bullJob.data, bullJob.opts);
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
   * true if the queue owns a job with the specified id
   * @param jobId
   */
  async hasJob(jobId: string): Promise<boolean> {
    return (await this.innerQueue.getJob(jobId)) !== null;
  }

  /**
   * Get a list of jobs that match payload value filter and/or metadata filter
   * @param filter
   */
  async getJobs(filter: JobFilter): Promise<Job[]> {
    let toReturn = [];
    const listOfInnerJobs = await this.innerQueue.getJobs();
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
