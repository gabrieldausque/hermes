import {EventEmitter} from 'events';

/**
 * A timer that raise a 'tick' event for the specified period
 */
export class Ticker extends EventEmitter {

  /**
   * The interval of the timer
   */
  private readonly intervalInMs: number;

  /**
   * The interval Id currently activated
   */
  private intervalId: NodeJS.Timeout;

  /**
   * Create a new Ticker
   * @param intervalInMs The period in ms
   * @param startAtCreation Indicate if the Ticker will start at creation
   */
  constructor(intervalInMs:number = 100, startAtCreation:boolean = false) {
    super();
    this.intervalInMs =  intervalInMs;
    if(startAtCreation) {
      this.start();
    }
  }

  /**
   * Start the timer
   */
  start() {
    const current = this;
    this.intervalId = setInterval(() => {
      current.emit('tick');
    }, this.intervalInMs)
  }

  /**
   * Stop the timer
   */
  stop() {
    clearInterval(this.intervalId);
  }
}
