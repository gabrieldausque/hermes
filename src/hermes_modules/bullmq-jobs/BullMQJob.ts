import { Job } from '@hermes/jobs';
import { Job as InnerJob } from 'bullmq';
import { BullValueTypeBox } from './BullValueTypeBox';

/**
 * The job implementation used for Bull, especially to encapsulate value type as payload (not natively success in bull)
 */
export class BullMQJob extends Job {

  /**
   * The bull job
   */
  public innerJob:InnerJob;

  /**
   * Get the payload as an object even if it is a value type
   */
  getPayload():object {
    if(typeof this.payload === 'object') {
      return this.payload;
    } else {
      return new BullValueTypeBox(this.payload);
    }
  }

  /**
   * Set the bull job
   * @param job The bull job corresponding to this job
   */
  setInnerJob(job:InnerJob) {
    this.innerJob = job;
    this.id = job.id.toString();
  }

  /**
   * As an EventEmitter, raise the 'progress' event for the job
   * @param completionPercentage Percentage of completion of the job
   * @param completionMessage Associated message for this progression state
   */
  raiseProgressEvent(completionPercentage:number, completionMessage?:string) {
    this.innerJob.updateProgress(completionPercentage).then(() => {
      this.emit('progress', { percentage:completionPercentage, message:completionMessage});
    })
  }
}
