import { Queue } from './Queue';
import { Job } from '../jobs/Job';
import fs from 'fs';
import { Ticker } from '../helpers/Ticker';
import { JobStates } from '../jobs/JobState';

export class InMemoryQueue extends Queue {
  static nextId:number = 0;

  private waitingJobs: Job[];
  private id: number;
  private runningJobs: Job[];
  private readonly workerPoolSize: number;
  private readonly startedAtCreation: boolean;
  private started: boolean;
  private bindedOnTick: any;
  private ticker: Ticker;

  constructor(configuration?) {
    super();

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

  getAvailableWorker() {
    return this.workerPoolSize - this.runningJobs.length;
  }

  push(actionPayload: any, context?:any): Job {
    const job = new Job(this.action, actionPayload);
    this.waitingJobs.unshift(job);
    return job;
  }

  hasWaitingJobs() {
    return this.waitingJobs.length > 0;
  }

  private hasRunningJobs() {
    return this.runningJobs.length > 0;
  }

  getAllWaitingJob() {
    return Array.from(this.waitingJobs);
  }

  getAllRunningJob() {
    return Array.from(this.runningJobs);
  }

  getLastWaitingJob():Job {
    if(this.hasWaitingJobs()) {
      return this.waitingJobs.pop();
    }
    return null;
  }

  getLastRunningJob():Job {
    if(this.hasRunningJobs()) {
      return this.runningJobs[this.runningJobs.length - 1];
    }
    return null;
  }

  addRunningJob(jobToAdd:Job) {
    if(this.runningJobs.indexOf(jobToAdd) < 0) {
      this.runningJobs.unshift(jobToAdd);
    }
  }

  removeRunningJob(jobToRemove:Job) {
    const indexOfJobToRemove = this.runningJobs.indexOf(jobToRemove);
    if(indexOfJobToRemove >= 0){
      this.runningJobs.splice(indexOfJobToRemove, 1);
    }
  }

  executeJob(job:Job):Promise<any> {
    job.state = JobStates.running
    const current = this;
    const p = async () => {
      const resultOrPromise = this.action(job.payload);
      if(resultOrPromise instanceof Promise) {
        return await resultOrPromise
      } else {
        return resultOrPromise;
      }
    }
    return p().then((result) => {
      job.result = result;
      job.emit('done');
      job.state = JobStates.done;
      current.raiseJobSuccess(job,job.result);
    }).catch((err) => {
      job.emit('error', err);
      job.err = err;
      job.state = JobStates.error;
      current.raiseJobFailed(job, err);
    }).finally(() => {
      const resultsOrErr = (job.err)?job.err:job.result
      current.raiseJobCompleted(job, resultsOrErr);
    });
  }

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

  start(): void {
    if(!this.started){
      this.started = true;
      this.ticker.start();
    }
  }

  stop(): void {
    if(this.started) {
      this.started = false;
      this.ticker.stop()
    }
  }
}
