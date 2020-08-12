import {EventEmitter} from 'events';

export class Ticker extends EventEmitter {

  private intervalInMs: number;
  private intervalId: NodeJS.Timeout;

  constructor(intervalInMs:number = 100, startAtCreation:boolean = false) {
    super();
    this.intervalInMs =  intervalInMs;
    if(startAtCreation) {
      this.start();
    }
  }

  start() {
    const current = this;
    this.intervalId = setInterval(() => {
      current.emit('tick');
    }, this.intervalInMs)
  }

  stop() {
    clearInterval(this.intervalId);
  }
}
