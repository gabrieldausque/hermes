import { JobManagerConfiguration } from './JobManagerConfiguration';
import { globalInstancesFactory } from '@hermes/composition';
import { QueuesFactory } from './queues/QueuesFactory';
import { InMemoryQueuesFactory } from './queues/InMemoryQueuesFactory';
import { Queue } from './queues/Queue';
import { Job } from './jobs/Job';

export let instancesFactory = globalInstancesFactory;

export class JobManager {

  private queuesFactory: QueuesFactory;
  private readonly queues: { [queueName:string] : Queue };

  constructor(configuration?:JobManagerConfiguration) {
    this.queues = {}
    if(configuration && configuration.QueuesFactoryExportName) {
      this.queuesFactory = instancesFactory.getInstanceFromCatalogs('QueuesFactory', configuration.QueuesFactoryExportName)
    } else {
      this.queuesFactory = new InMemoryQueuesFactory();
    }

    // TODO : create queues based on configuration property
  }

  queueExists(queueName:string):boolean {
    return this.queues[queueName] instanceof Queue;
  }

  createQueue(queueName: string, queueOptions?:object):Queue {
    if(!this.queues[queueName]) {
      this.queues[queueName] = this.queuesFactory.createQueue(queueName, queueOptions)
    }
    return this.queues[queueName];
  }

  createWorker(queueName: string, action: any):void {
    if(!(typeof action === 'function'))
      throw new Error('action parameter must be a function. Please correct')
    // TODO : create queue if it doesn't exists
    this.queues[queueName].onJobToProcess(action);
  }

  execute(queueName: string, actionPayload:any = null, context?:any):Job {
    // TODO : create queue if it doesn't exists
    return this.queues[queueName].push(actionPayload, context);
  }

  start() {
    for(const queueName in this.queues){
      if(this.queues.hasOwnProperty(queueName))
        this.queues[queueName].start();
    }
  }

  stop() {
    for(const queueName in this.queues){
      if(this.queues.hasOwnProperty(queueName))
        this.queues[queueName].stop();
    }
  }
}

export const globalJobManager = new JobManager();
