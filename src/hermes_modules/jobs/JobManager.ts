import { JobManagerConfiguration } from './JobManagerConfiguration';
import { globalInstancesFactory, InstancesFactory } from '@hermes/composition';
import { QueuesFactory } from './queues/QueuesFactory';
import { InMemoryQueuesFactory } from './queues/InMemoryQueuesFactory';
import { Queue } from './queues/Queue';
import { Job } from './jobs/Job';
import { Action } from './queues';

/**
 * The shared instances factory that can be change through setJobManagerInstancesFactory. Defaulted to globalInstancesFactory
 */
let instancesFactory;

/**
 * Set the InstancesFactory that will be used to create the QueuesFactory of further created JobManager
 * @param factory The factory to use in all futur JobManager
 */
export function setJobManagerInstancesFactory(factory:InstancesFactory){
  instancesFactory = factory;
  instancesFactory.loadExportedClassesFromDirectory(`${__dirname}/queues`);
}

setJobManagerInstancesFactory(globalInstancesFactory);

/**
 * Get the InstancesFactory that will be used by JobManager
 */
export function getJobManagerInstancesFactory():InstancesFactory{
  return instancesFactory;
}

/**
 * A class that will manage execution of jobs through queues. It will help protect usage of crucial resources, limit working rates, etc ...
 */
export class JobManager {

  /**
   * The QueuesFactory that will create queues
   */
  private queuesFactory: QueuesFactory;

  /**
   * All queues by name
   */
  private readonly queues: { [queueName:string] : Queue };

  /**
   * The default configuration to be used in queues
   */
  private readonly defaultQueueConfiguration: any;

  /**
   * Create an instance of JobManager
   * @param configuration The configuration used by the JobManager
   */
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

  /**
   * Test if a Queue with specified name exists
   * @param queueName The name of the queue tested
   */
  queueExists(queueName:string):boolean {
    return this.queues[queueName] instanceof Queue;
  }

  /**
   * Get the Queue of the specified name. Create the queue with default configuration if it doesn't exist
   * @param queueName The name of the Queue wanted
   */
  getQueue(queueName) {
    if(!this.queueExists(queueName)) {
      this.createQueue(queueName);
    }
    return this.queues[queueName];
  }

  /**
   * Get all Queues of the current JobManager
   */
  getQueues() {
    const queues = [];
    for(const queueName in this.queues){
      if(this.queues.hasOwnProperty(queueName)) {
        queues.push(this.queues[queueName]);
      }
    }
    return queues
  }

  /**
   * Create a queue with the specified name and specified options and return it. If no options specified, use the default.
   * @param queueName The name of the Queue to create
   * @param queueOptions The options to use for the creation of the Queue
   */
  createQueue(queueName: string, queueOptions?:object):Queue {
    if(!this.queueExists(queueName)) {
      const options = (queueOptions)?queueOptions:this.defaultQueueConfiguration;
      this.queues[queueName] = this.queuesFactory.createQueue(queueName, options);
    }
    return this.queues[queueName];
  }

  /**
   * Attach the specified Action to be executed on post of a job in the Queue
   * @param queueName The name of the Queue to attach the worker on
   * @param action The Action to be executed
   */
  createWorker(queueName: string, action: Action):void {
    if(!(typeof action === 'function'))
      throw new Error('action parameter must be a function. Please correct')
    this.getQueue(queueName).onJobToProcess(action);
  }

  /**
   * Execute a job in the specified Queue, with the specified payload
   * @param queueName The name of the queue to post the job in
   * @param actionPayload The payload to use in the job
   * @param context A context object that can be used in the queue (Experimental)
   */
  execute(queueName: string, actionPayload:any = null, context?:any):Job {
    return this.getQueue(queueName).push(actionPayload, context);
  }

  /**
   * Start all queues of this JobManager
   */
  start() {
    for(const queueName in this.queues){
      if(this.queues.hasOwnProperty(queueName))
        this.getQueue(queueName).start();
    }
  }

  /**
   * Stop all queues of this JobManager
   */
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

/**
 * The global shared instance of the JobManager, by default using the InMemoryQueues
 */
let globalJobManager:JobManager = new JobManager();

/**
 * Change the global shared instance of the JobManager by the specified instance
 * @param jobManager
 */
export function setGlobalJobManager(jobManager:JobManager) {
  globalJobManager.stop();
  globalJobManager = jobManager;
}

/**
 * Get the global shared instance of the JobManager
 */
export function getGlobalJobManager():JobManager {
  return globalJobManager;
}

