import { Job } from '../jobs/Job';
import {EventEmitter} from 'events';
import { JobStates } from '../jobs/JobStates';
import { ProcessingOptions } from './ProcessingOptions';
import { Action } from './Action';

export abstract class Queue extends EventEmitter {
  public readonly isQueue:boolean = true;
  protected action: Action;
  protected jobs: Job[];
  protected paused: boolean;
  protected configuration: any;

  protected constructor(configuration?:any) {
    super()
    this.jobs = [];
    this.paused = false;
    this.configuration = configuration;
  }

  onJobToProcess(action: Action, processingOptions?:ProcessingOptions) {
    this.action = action;
  }

  abstract push(actionPayload: any, jobOptions:{[propName:string]:any}) : Job;

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
    job.raiseSuccessEvent(result);
    this.emit('success', job, result);
  }

  raiseJobFailed(job:Job, err) {
    job.raiseFailedEvent(err);
    this.emit('failed', job, err);
  }

  raiseJobCompleted(job:Job) {
    job.raiseCompletedEvent();
    this.emit('completed', job);
  }

  raiseQueueError(err) {
    this.emit('error', err);
  }

  raiseReady() {
    this.emit('ready');
  }

}
