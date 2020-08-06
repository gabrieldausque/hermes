import { EventEmitter } from 'events';

export class Job extends EventEmitter {
  id:string;
  done:any;
  result:any;
  private toExecute: any;
  private payload: any;

  constructor(toExecute:any, payload?) {
    super();
    this.toExecute = toExecute;
    this.payload = payload;
  }
}
