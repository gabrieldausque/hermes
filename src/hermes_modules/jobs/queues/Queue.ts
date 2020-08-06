import { Job } from '../jobs/Job';

export abstract class Queue {
  public readonly isQueue:boolean = true;
  protected action: any;
  protected jobs: Job[];

  protected constructor() {
    this.jobs = [];
  }

  onJobToProcess(action: any) {
    this.action = action;
  }

  abstract push(actionPayload: any, context:{[propName:string]:any}) : Job;

  abstract start():void;
}
