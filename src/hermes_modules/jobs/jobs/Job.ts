import { EventEmitter } from 'events';
import { JobStates } from './JobStates';
import { uuid } from 'uuidv4'

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
  public payload: any;

  /**
   * err that may occured during execution
   */
  public err: any;

  /**
   * state of the current job. see JobStates
   */
  public state: number;

  /**
   * options that may be used for the execution
   */
  public jobOptions: { [p: string]: any };

  /**
   * Create a new Job
   * @param toExecute function to be executed
   * @param payload payload to use for execution
   * @param jobOptions options to use for execution
   */
  constructor(toExecute: any, payload?, jobOptions?: { [p: string]: any }) {
    super();
    this.id = uuid();
    this.toExecute = toExecute;
    this.payload = payload;
    this.state = JobStates.waiting;
    this.jobOptions = jobOptions;
  }

  /**
   * Semaphore that helps you wait for the execution of the job
   * @param timeoutInMs
   */
  async waitForCompletion(timeoutInMs?) {
    const current = this;
    const semaphore = new Promise((resolve, reject) => {
      current.once('completed', () => {
        resolve()
      })
      if(timeoutInMs && typeof timeoutInMs === 'number'){
        setTimeout(() => {
          current.state = JobStates.timedOut;
          reject(new Error(`Job with id ${timeoutInMs} timed out.`))
        })
      }
    })
    await semaphore
    return;
  }

  /**
   * As an EventEmitter, raise the 'failed' event of the job
   * @param err The error that fails the job
   */
  raiseFailedEvent(err: any) {
    this.err = err;
    this.state = JobStates.failed;
    try {
      this.emit('failed', err );
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
    this.emit('completed', resultsOrErr);
  }

  /**
   * As an EventEmitter, raise the 'progress' event for the job
   * @param completionPercentage Percentage of completion of the job
   * @param completionMessage Associated message for this progression state
   */
  raiseProgressEvent(completionPercentage:number, completionMessage?:string) {
    this.emit('progress', { percentage:completionPercentage, message:completionMessage});
  }

  /**
   * As an EventEmitter, raise the 'success' event of the job
   * @param result The result obtained from the execution
   */
  raiseSuccessEvent(result: any) {
    this.result = result;
    this.state = JobStates.success;
    this.emit('success');
    this.raiseCompletedEvent();
  }
}
