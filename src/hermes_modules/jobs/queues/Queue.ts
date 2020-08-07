import { Job } from '../jobs/Job';
import {EventEmitter} from 'events';
import { JobStates } from '../jobs/JobState';

export abstract class Queue extends EventEmitter {
  public readonly isQueue:boolean = true;
  protected action: any;
  protected jobs: Job[];
  protected paused: boolean;

  protected constructor() {
    super()
    this.jobs = [];
    this.paused = false;
  }

  onJobToProcess(action: any) {
    this.action = action;
  }

  abstract push(actionPayload: any, context:{[propName:string]:any}) : Job;

  abstract start():void;

  abstract stop():void;

  pause():void {
    this.paused = true;
  }

  resume():void {
    this.paused = false;
  }

  isPaused() {
    return this.paused;
  }

  raiseJobSuccess(job:Job, result) {
    job.result = result;
    job.state = JobStates.done;
    job.emit('done');
    this.emit('success', job, result);
  }

  raiseJobFailed(job:Job, err) {
    job.err = err;
    job.state = JobStates.error;
    job.emit('error', err);
    this.emit('failed', job, err);
  }

  raiseJobCompleted(job:Job) {
    const resultsOrErr = (job.err)?job.err:job.result
    job.emit('completed', resultsOrErr);
    this.emit('completed', job);
  }


}
