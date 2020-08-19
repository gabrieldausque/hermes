import { Job } from '../jobs/Job';

/**
 * Standard signature of an action to be executed on job reception
 */
export type Action = (payloads:any, job:Job) => any;
