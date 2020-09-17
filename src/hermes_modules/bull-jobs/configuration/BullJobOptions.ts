import { JobOptions } from 'bull';

/**
 * The options to be used for a job
 */
export interface BullJobOptions {
  /**
   * The name of the worker to be used for this execution
   */
  name:string;
  /**
   * The JobOpts to be used for execution. see [https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueadd](https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueadd)
   * Note that the id will be set to the id of the BullJob (a guid).
   */
  bullOptions?: JobOptions
}
