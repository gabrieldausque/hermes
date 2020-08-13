import { JobManagerConfiguration } from './JobManagerConfiguration';
import { globalInstancesFactory, InstancesFactory } from '@hermes/composition';
import { QueuesFactory } from './queues/QueuesFactory';
import { InMemoryQueuesFactory } from './queues/InMemoryQueuesFactory';
import { Queue } from './queues/Queue';
import { Job } from './jobs/Job';
import { Action } from './queues';

let instancesFactory;
export function setJobManagerInstancesFactory(factory:InstancesFactory){
  instancesFactory = factory;
  instancesFactory.loadExportedClassesFromDirectory(__dirname);
}
setJobManagerInstancesFactory(globalInstancesFactory);
export function getJobManagerInstancesFactory():InstancesFactory{
  return instancesFactory;
}

export class JobManager {

  private queuesFactory: QueuesFactory;
  private readonly queues: { [queueName:string] : Queue };
  private defaultQueueConfiguration: any;

  constructor(configuration?:JobManagerConfiguration) {
    this.queues = {}
    const contractType = 'QueuesFactory'
    if(configuration) {
      if (configuration.queuesFactoryExportName) {
        this.queuesFactory = instancesFactory.getInstanceFromCatalogs(contractType, configuration.queuesFactoryExportName)
      } else {
        this.queuesFactory = instancesFactory.getInstanceFromCatalogs(contractType,'Default', );
      }
      if (configuration.defaultQueueConfiguration) {
        this.defaultQueueConfiguration = configuration.defaultQueueConfiguration;
      }
    } else {
      this.queuesFactory = instancesFactory.getInstanceFromCatalogs(contractType,'Default', );
    }
  }

  queueExists(queueName:string):boolean {
    return this.queues[queueName] instanceof Queue;
  }

  getQueue(queueName) {
    if(!this.queueExists(queueName)) {
      this.createQueue(queueName);
    }
    return this.queues[queueName];
  }

  getQueues() {
    const queues = [];
    for(const queueName in this.queues){
      if(this.queues.hasOwnProperty(queueName)) {
        queues.push(this.queues[queueName]);
      }
    }
    return queues
  }

  createQueue(queueName: string, queueOptions?:object):Queue {
    if(!this.queueExists(queueName)) {
      const options = (queueOptions)?queueOptions:this.defaultQueueConfiguration;
      this.queues[queueName] = this.queuesFactory.createQueue(queueName, options);
    }
    return this.queues[queueName];
  }

  createWorker(queueName: string, action: Action):void {
    if(!(typeof action === 'function'))
      throw new Error('action parameter must be a function. Please correct')
    this.getQueue(queueName).onJobToProcess(action);
  }

  execute(queueName: string, actionPayload:any = null, context?:any):Job {
    return this.getQueue(queueName).push(actionPayload, context);
  }

  start() {
    for(const queueName in this.queues){
      if(this.queues.hasOwnProperty(queueName))
        this.getQueue(queueName).start();
    }
  }

  stop() {
    for(const queueName in this.queues){
      if(this.queues.hasOwnProperty(queueName)) {
        try {
          if(this.queues.hasOwnProperty(queueName))
            this.queues[queueName].stop();
        }catch(err) {
          console.error(err)
        }
      }
    }
  }
}

let globalJobManager:JobManager = new JobManager();
export function setGlobalJobManager(jobManager:JobManager) {
  globalJobManager = jobManager;
}
export function getGlobalJobManager():JobManager {
  return globalJobManager;
}

