import { Job } from '../jobs/Job';
import {EventEmitter} from 'events';
import { JobStates } from '../jobs/JobStates';
import { ProcessingOptions } from './ProcessingOptions';
import { Action } from './Action';

/**
 * A Queue that will execute associated worker with specified payload in FIFO mode.
 */
export abstract class Queue extends EventEmitter {
  /**
   * Indicate if the object is a Queue
   */
  public readonly isQueue:boolean = true;

  /**
   * The action to be executed on job received
   */
  protected action: Action;

  /**
   * A list of jobs to be used internally - TO BE REMOVED
   */
  protected jobs: Job[];

  /**
   * True if the queue is paused. Usage depends on implementation
   */
  protected paused: boolean;

  /**
   * Configuration of the queue used on creation
   */
  protected configuration: any;

  /**
   * Name of the current Queue
   */
  protected name: string;

  /**
   * Create a new queue instance.
   * @param name The name of the Queue
   * @param configuration The configuration of the queue. May override default queue options
   */
  protected constructor(name:string, configuration?:any) {
    super()
    this.name = name;
    this.jobs = [];
    this.paused = false;
    this.configuration = configuration;
  }

  /**
   * Set the action to be executed on reception of a Job
   * @param action The Action to execute on a job reception
   * @param processingOptions Specific configuration to use on creation of the worker (Depend of the implementation). May override Queue options
   */
  onJobToProcess(action: Action, processingOptions?:ProcessingOptions) {
    this.action = action;
  }

  /**
   * Get the configuration used on creation
   */
  getConfiguration() {
    return this.configuration;
  }

  /**
   * Get the name of the Queue
   */
  getName() {
    return this.name;
  }

  /**
   * Push a Job with a payload for execution. Return the job that will be executed.
   * @param actionPayload The payload for the job execution
   * @param jobOptions The options that can be used for this specific execution. May override processing options.
   */
  abstract push(actionPayload: any, jobOptions:{[propName:string]:any}) : Job;

  /**
   * Start the current Queue
   */
  abstract start():void;

  /**
   * Stop the current Queue
   */
  abstract stop():void;

  /**
   * Pause the current Queue
   */
  pause():void {
    this.paused = true;
  }

  /**
   * Resume the current Queue treatment
   */
  resume():void {
    this.paused = false;
  }

  /**
   * Indicate if the current Queue is paused
   */
  isPaused() {
    return this.paused;
  }

  /**
   * As an EventEmitter, will raise the 'success' event to indicate when a job is successful. Return the job concerned and the result
   * @param job The successful Job
   * @param result The result of the execution of the Job
   */
  raiseJobSuccess(job:Job, result) {
    job.raiseSuccessEvent(result);
    this.emit('success', job, result);
  }

  /**
   * As an EventEmitter, will raise the 'failed' event to indicate when a job is failed. Return the job concerned and the Error
   * @param job The failed Job
   * @param err The Error or message of the failed execution of the Job
   */
  raiseJobFailed(job:Job, err) {
    job.raiseFailedEvent(err);
    this.emit('failed', job, err);
  }

  /**
   * As an EventEmitter will raise the 'completed' event for a job that is successful or failed.
   * @param job The completed job
   */
  raiseJobCompleted(job:Job) {
    job.raiseCompletedEvent();
    this.emit('completed', job);
  }

  /**
   * As an EventEmitter will raise the 'error' event if the queue encounters an Error
   * @param err The error encountered on the queue
   */
  raiseQueueError(err) {
    this.emit('error', err);
  }

  /**
   * As an EventEmitter will raise the 'ready' event to indicate if the queue is usable
   */
  raiseReady() {
    this.emit('ready');
  }

}
