import { Job } from '@hermes/jobs';
import { Job as InnerJob } from 'bull';
import { BullValueTypeBox } from './BullValueTypeBox';

/**
 * The job implementation used for Bull, especially to encapsulate value type as payload (not natively done in bull)
 */
export class BullJob extends Job {

  /**
   * The bull job
   */
  private innerJob:InnerJob;

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
}
