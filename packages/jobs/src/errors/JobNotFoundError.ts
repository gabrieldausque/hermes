export class JobNotFoundError extends Error {
    constructor(jobId:string, queueName:string) {
        super(`Job with id "${jobId}" does'nt exist in queue "${queueName}"`);
    }
}