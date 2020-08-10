import { Job } from '../jobs/Job';

export type Action = (payloads:any, job:Job) => any;
