import { ProcessingOptions } from '@hermes/jobs';

/**
 * Specialization of the processing options for bull
 */
export interface BullProcessingOptions extends ProcessingOptions {
  /**
   * The named jobs for workers
   */
  name:string;
  /**
   * The number of parallelized execution to be available
   */
  concurrency:number;
}
