import { Job } from '@hermes/jobs';
import { Job as InnerJob } from 'bull';
import { BullValueTypeBox } from './BullValueTypeBox';

export class BullJob extends Job {
  private innerJob:InnerJob;

  getPayload():object {
    if(typeof this.payload === 'object') {
      return this.payload;
    } else {
      return new BullValueTypeBox(this.payload);
    }
  }

  setInnerJob(job:InnerJob) {
    this.innerJob = job;
    this.id = job.id.toString();
  }
}
