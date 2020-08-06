import { Queue } from './Queue';
import { Job } from '../jobs/Job';
import fs from 'fs';

export class InMemoryQueue extends Queue {
  static nextId:number = 0;

  private waitingJobs: Job[];
  private id: number;
  private runningJobs: Job[];

  constructor() {
    super();
    this.id = InMemoryQueue.nextId;
    InMemoryQueue.nextId++;
    this.waitingJobs = [];
    this.runningJobs = [];
  }

  push(actionPayload: any, context?:any): Job {
    const job = new Job(this.action, actionPayload);
    const p = async () => {
      const resultOrPromise = this.action(actionPayload);
      if(resultOrPromise instanceof Promise) {
        return await resultOrPromise
      } else {
        return resultOrPromise;
      }
    }
    p().then((result) => {
      job.result = result;
      job.emit('done');
    }).catch((err) => {
      job.emit('error', err);
    });
    return job;
  }

  start(): void {
    //TODO : create the tick event to launch promise
  }

}
