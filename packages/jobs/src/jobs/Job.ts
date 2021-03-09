import { EventEmitter } from 'events';
import { JobStates } from './JobStates';
import { v4 as uuid } from 'uuid'
import { JobEvents } from './JobEvents';
import { PayLoad } from './PayLoad';

export class Job extends EventEmitter {
  /**
   * The id of the current job
   */
  public id:string;

  /**
   * Result of the job execution
   */
  public result:any;

  /**
   * function that will be executed
   */
  public toExecute: any;

  /**
   * payload passed to the function that will be executed
   */
  public payload?: PayLoad;

  /**
   * err that may occured during execution
   */
  public err: any;

  /**
   * state of the current job. see JobStates
   */
  public state: string;

  /**
   * options that may be used for the execution
   */
  public jobOptions?: { [p: string]: any };

  /**
   * The progress percentage
   */
  public progress: number;

  /**
   * Last progress message
   */
  public progressMessage?: string;

  /**
   * Create a new Job
   * @param toExecute function to be executed
   * @param payload payload to use for execution
   * @param jobOptions options to use for execution
   */
  constructor(toExecute: any, payload?:PayLoad, jobOptions?: { [p: string]: any }) {
    super();
    this.id = uuid();
    this.toExecute = toExecute;
    this.payload = payload;
    this.state = JobStates.waiting;
    this.jobOptions = jobOptions;
    this.progress = 0;
    this.progressMessage = 'Created'
  }

  /**
   * Semaphore that helps you wait for the execution of the job
   * @param timeoutInMs
   */
  async waitForCompletion(timeoutInMs?:number):Promise<any> {
    const current = this;
    const semaphore = new Promise((resolve, reject) => {
      current.subscribeToCompleted(() => {
        if(current.state === JobStates.success)
          resolve(current.result)
        else
          reject(current.err)
      }, true)
      if(timeoutInMs && typeof timeoutInMs === 'number'){
        setTimeout(() => {
          current.state = JobStates.timedOut;
          reject(new Error(`Job with id ${timeoutInMs} timed out.`))
        })
      }
    })
    return await semaphore;
  }

  /**
   * As an EventEmitter, raise the 'failed' event of the job
   * @param err The error that fails the job
   */
  raiseFailedEvent(err: any) {
    this.err = err;
    this.state = JobStates.failed;
    try {
      this.emit(JobEvents.failed, this);
    }catch(err) {
      console.error(err);
    }finally {
      this.raiseCompletedEvent();
    }
  }

  /**
   * As an EventEmitter, raise the 'completed' event of the job, even if it fails or success
   */
  raiseCompletedEvent() {
    const resultsOrErr = (this.err)?this.err:this.result
    this.emit(JobEvents.completed, this);
  }

  /**
   * As an EventEmitter, raise the 'progress' event for the job
   * @param completionPercentage Percentage of completion of the job
   * @param completionMessage Associated message for this progression state
   */
  raiseProgressEvent(completionPercentage:number, completionMessage?:string) {
    this.progress = completionPercentage;
    this.progressMessage = completionMessage;
    this.emit(JobEvents.progress, { percentage:completionPercentage, message:completionMessage}, this);
  }

  /**
   * As an EventEmitter, raise the 'success' event of the job
   * @param result The result obtained from the execution
   */
  raiseSuccessEvent(result: any) {
    this.result = result;
    this.state = JobStates.success;
    this.emit(JobEvents.success, this);
    this.raiseCompletedEvent();
  }

  /**
   * Subscribe to the JobEvents.success event with the corresponding listener
   * @param listener the listener
   * @param once true if you want the listener to be executed once
   */
  subscribeToSuccess(listener:(...args: any[]) => void, once:boolean = false) {
    this.subscribe(JobEvents.success, listener, once);
    if(this.state === JobStates.success) {
      this.raiseSuccessEvent(this.result);
    }
  }

  /**
   * Subscribe to the JobEvents.failed event with the corresponding listener
   * @param listener the listener
   * @param once true if you want the listener to be executed once
   */
  subscribeToFailed(listener:(...args: any[]) => void, once:boolean = false) {
    this.subscribe(JobEvents.failed, listener, once);
    if(this.state === JobStates.failed) {
      this.raiseFailedEvent(this.err);
    }
  }

  /**
   * Subscribe to the JobEvents.completed event with the corresponding listener
   * @param listener the listener
   * @param once true if you want the listener to be executed once
   */
  subscribeToCompleted(listener:(...args: any[]) => void, once:boolean = false) {
    this.subscribe(JobEvents.completed, listener, once);
    if(this.state === JobStates.failed || this.state === JobStates.success || this.state === JobStates.timedOut) {
      this.raiseCompletedEvent()
    }
  }

  /**
   * Subscribe to the JobEvents.progress event with the corresponding listener
   * @param listener the listener
   * @param once true if you want the listener to be executed once
   */
  subscribeToProgress(listener:(...args: any[]) => void, once:boolean = false) {
    this.subscribe(JobEvents.progress, listener, once)
    if(this.state === JobStates.running) {
      this.raiseProgressEvent(this.progress, this.progressMessage)
    }
  }

  /**
   * Subscribe to a JobEvents.X event with the corresponding listener
   * @param eventName the event to subscribe to
   * @param listener the listener
   * @param once true if you want the listener to be executed once
   */
  protected subscribe(eventName:string, listener:(...args: any[]) => void, once:boolean = false):void {
    if(!once) {
      this.on(eventName, listener);
    } else {
      this.once(eventName, listener);
    }
  }
}
