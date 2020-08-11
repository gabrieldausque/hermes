import { Job } from '@hermes/jobs';
import { Job as InnerJob } from 'bull';

export class BullJob extends Job {
  private innerJob:InnerJob;

  setInnerJob(job:InnerJob) {
    this.innerJob = job;
    this.id = job.id.toString();
  }
}
