import { Job } from '../jobs/Job';
import {EventEmitter} from 'events';

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

  raiseJobSuccess(job:Job, results) {
    this.emit('success', job, results);
  }

  raiseJobFailed(job:Job, err) {
    this.emit('failed', job, err);
  }

  raiseJobCompleted(job:Job, resultsOrErr) {
    this.emit('completed', job, resultsOrErr);
  }


}
