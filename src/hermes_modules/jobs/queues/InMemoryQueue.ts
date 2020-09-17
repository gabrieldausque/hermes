import { Queue } from './Queue';
import { Job } from '../jobs/Job';
import fs from 'fs';
import { Ticker } from '../helpers/Ticker';
import { JobStates } from '../jobs/JobStates';
import { JobFilter } from '../jobs';
import { Filter } from '../helpers';

/**
 * An in memory implementation of queues
 * Beware : Work In Progress ! Not all features are implemented from now
 */
export class InMemoryQueue extends Queue {
  /**
   * the id management of InMemoryQueues
   */
  static nextId:number = 0;

  /**
   * Jobs waiting for executions
   */
  private readonly waitingJobs: Job[];

  /**
   * id of the current InMemoryQueue
   */
  private id: number;

  /**
   * Jobs currently in execution
   */
  private readonly runningJobs: Job[];

  /**
   * Size of workers to be executed "simultaneously" (beware, this is not a multithreaded execution)
   */
  private readonly workerPoolSize: number;

  /**
   * Indicate if the current queue as to be started directly on creation (at the end of the constructor execution)
   */
  private readonly startedAtCreation: boolean;

  /**
   * Indicate if the queue is currently started
   */
  private started: boolean;

  /**
   * The binded to 'this' onTick method
   */
  private readonly bindedOnTick: any;

  /**
   * The inner Ticker object, used to treat all waiting jobs
   */
  private ticker: Ticker;

  /**
   * Create an InMemoryQueue
   * @param name The name of the InMemoryQueue
   * @param configuration The configuration to be used for the created InMemoryQueue
   */
  constructor(name, configuration?) {
    super(name, configuration);
    this.id = InMemoryQueue.nextId;
    InMemoryQueue.nextId++;
    this.waitingJobs = [];
    this.runningJobs = [];
    this.workerPoolSize = 1
    this.startedAtCreation = true;
    this.ticker = new Ticker(100);
    this.bindedOnTick = this.onTick.bind(this);
    this.ticker.on('tick', this.bindedOnTick);
    if(configuration) {
      if(typeof configuration.workerPoolSize === 'number'){
        this.workerPoolSize = configuration.workerPoolSize
      }
      if(typeof configuration.startedAtCreation === 'boolean'){
        this.startedAtCreation = configuration.startedAtCreation;
      }
    }
    if(this.startedAtCreation){
      this.start();
    }
  }

  /**
   * Get number of idle workers
   */
  getAvailableWorker() {
    return this.workerPoolSize - this.runningJobs.length;
  }

  /**
   * Push a new Job to be executed at the start of the queue
   * @param actionPayload The payload to use for the Job execution
   * @param jobOptions Options to be used for the current execution
   */
  async push(actionPayload: any, jobOptions?:any): Promise<Job> {
    const job = new Job(this.action, actionPayload, jobOptions);
    this.waitingJobs.unshift(job);
    this.jobs.push(job);
    return job;
  }

  /**
   * Indicates if the current InMemoryQueue has waiting jobs
   */
  hasWaitingJobs() {
    return this.waitingJobs.length > 0;
  }

  /**
   * Indicates if the current InMemoryQueue has running jobs
   */
  private hasRunningJobs() {
    return this.runningJobs.length > 0;
  }

  /**
   * Return the list of waiting jobs
   */
  getAllWaitingJob() {
    return Array.from(this.waitingJobs);
  }

  /**
   * Return the list of running jobs
   */
  getAllRunningJob() {
    return Array.from(this.runningJobs);
  }

  /**
   * Pop the oldest waiting job that needs execution
   */
  getLastWaitingJob():Job {
    if(this.hasWaitingJobs()) {
      return this.waitingJobs.pop();
    }
    return null;
  }

  /**
   * Get the oldest running job
   */
  getLastRunningJob():Job {
    if(this.hasRunningJobs()) {
      return this.runningJobs[this.runningJobs.length - 1];
    }
    return null;
  }

  /**
   * Add a job to the running jobs list
   * @param jobToAdd The job to be added to the running jobs list
   */
  addRunningJob(jobToAdd:Job) {
    if(this.runningJobs.indexOf(jobToAdd) < 0) {
      this.runningJobs.unshift(jobToAdd);
    }
  }

  /**
   * Remove the specified job from the running jobs list
   * @param jobToRemove The jobs to remove from the running jobs list
   */
  removeRunningJob(jobToRemove:Job) {
    const indexOfJobToRemove = this.runningJobs.indexOf(jobToRemove);
    if(indexOfJobToRemove >= 0){
      this.runningJobs.splice(indexOfJobToRemove, 1);
    }
  }

  /**
   * Execute the action for the specified job and return the result
   * @param job The job to be executed
   */
  executeJob(job:Job):Promise<any> {
    job.state = JobStates.running
    const current = this;
    const p = async () => {
      const resultOrPromise = this.action(job.payload.value, job);
      if(resultOrPromise instanceof Promise) {
        return await resultOrPromise
      } else {
        return resultOrPromise;
      }
    }
    return p().then((result) => {
      current.raiseJobSuccess(job,result);
    }).catch((err) => {
      current.raiseJobFailed(job, err);
    }).finally(() => {
      current.raiseJobCompleted(job);
    });
  }

  /**
   * Create running workers based on configuration and current state for waiting jobs
   */
  onTick() {
    const current = this;
    setImmediate(() => {
      if(current.hasWaitingJobs()) {
        const numberOfJob = current.getAvailableWorker();
        for (let workerCounter = 0; workerCounter < numberOfJob; workerCounter++) {
          const jobToExecute = current.getLastWaitingJob()
          if(jobToExecute){
            current.addRunningJob(jobToExecute);
          }
        }

        if(!current.isPaused()){
          for(let runningJobIndex=current.runningJobs.length;runningJobIndex >= 0; runningJobIndex--) {
            const jobToExecute = current.runningJobs[runningJobIndex];
            if(jobToExecute && jobToExecute.state !== JobStates.running){
              current.executeJob(jobToExecute).then(() => {
                current.removeRunningJob(jobToExecute);
              });
            }
          }
        }
      }
    })
  }

  /**
   * Start the queue watch and start running jobs if needed
   */
  start(): void {
    if(!this.started){
      this.started = true;
      this.ticker.start();
    }
  }

  /**
   * Stop the watch of the queue
   */
  stop(): void {
    if(this.started) {
      this.started = false;
      this.ticker.stop()
    }
  }

  async getJob(jobId: string): Promise<Job> {
    return this.jobs.find((j) => j.id === jobId);
  }

  async hasJob(jobId: string): Promise<boolean> {
    return !!await this.getJob(jobId);
  }

  async getJobs(filter: JobFilter): Promise<Job[]> {
    let toReturn = [];
    let listOfJobs = this.jobs;
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
