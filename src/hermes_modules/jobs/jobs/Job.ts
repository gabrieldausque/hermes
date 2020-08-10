import { EventEmitter } from 'events';
import { JobStates } from './JobStates';

export class Job extends EventEmitter {
  // TODO : replace by guid
  static nextId:number = 0;

  public id:string;
  public result:any;
  public toExecute: any;
  public payload: any;
  public err: any;
  public state: number;

  constructor(toExecute:any, payload?) {
    super();
    this.id = Job.nextId.toString();
    Job.nextId++;
    this.toExecute = toExecute;
    this.payload = payload;
    this.state = JobStates.waiting;
  }

  async waitForCompletion(timeoutInMs?) {
    const current = this;
    const semaphore = new Promise((resolve, reject) => {
      current.once('completed', () => {
        resolve()
      })
      if(timeoutInMs && typeof timeoutInMs === 'number'){
        setTimeout(() => {
          reject(new Error(`Job with id ${timeoutInMs} timed out.`))
        })
      }
    })
    await semaphore
    return;
  }

  raiseErrorEvent(err: any) {
    this.err = err;
    this.state = JobStates.error;
    this.emit('error', err);
  }

  raiseCompletedEvent() {
    const resultsOrErr = (this.err)?this.err:this.result
    this.emit('completed', resultsOrErr);
  }

  raiseProgressEvent(completionPercentage:number, completionMessage?:string) {
    this.emit('progress', { percentage:completionPercentage, message:completionMessage});
  }

  raiseSuccessEvent(result: any) {
    this.result = result;
    this.state = JobStates.done;
    this.emit('done');
  }
}
