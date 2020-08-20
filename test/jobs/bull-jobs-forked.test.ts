import {expect} from 'chai';
import { InMemoryQueue, getJobManagerInstancesFactory, Job, JobManager, JobStates, Queue } from '@hermes/jobs';
// @ts-ignore
import { TestClass } from './TestClass';
import { BullQueue } from '@hermes/bull-jobs';
import * as util from 'util';
import * as cluster from 'cluster';
import { after } from 'mocha';

getJobManagerInstancesFactory().loadExportedClassesFromDirectory(__dirname + '/../plugins');
const sleep = util.promisify(setTimeout);

let worker = null;

if(cluster.isMaster) {
  worker = cluster.fork();
} else {
  const jm = new JobManager({
    queuesFactoryExportName:'Bull',
    defaultQueueConfiguration:{
      redisUrl:"redis://localhost:6379",
      bullQueueOptions: {
        redis:{
          host:"localhost",
          port:"6379",
          retryStrategy: (times) => {
            return new Error('No connection ! Please start docker container ...');
          },
          maxRetriesPerRequest: 2,
          connectTimeout:250
        }
      }
    }
  });
  const q = jm.createQueue('forked', {
    redisUrl:"redis://localhost:6379",
    bullQueueOptions: {
      redis:{
        host:"127.0.0.1",
        port:"6379",
        retryStrategy: (times) => {
          return new Error('No connection ! Please start docker container ...');
        },
        maxRetriesPerRequest: 0,
        connectTimeout:50,
      }
    }
  });
  jm.start();
  jm.createWorker('forked', () => {
    return process.pid;
  })
}

describe('Job Scheduling in forked context using Bull', () => {

  let jm:JobManager = null;
  let q:Queue = null;

  const createJmAndQ = (() => {
    jm = new JobManager({
      queuesFactoryExportName:'Bull',
      defaultQueueConfiguration:{
        redisUrl:"redis://localhost:6379",
        bullQueueOptions: {
          redis:{
            host:"localhost",
            port:"6379",
            retryStrategy: (times) => {
              return new Error('No connection ! Please start docker container ...');
            },
            maxRetriesPerRequest: 2,
            connectTimeout:250
          }
        }
      }
    });
    q = jm.createQueue('Test', {
      redisUrl:"redis://localhost:6379",
      bullQueueOptions: {
        redis:{
          host:"127.0.0.1",
          port:"6379",
          retryStrategy: (times) => {
            return new Error('No connection ! Please start docker container ...');
          },
          maxRetriesPerRequest: 0,
          connectTimeout:50,
        }
      }
    });
    (q as unknown as BullQueue).innerQueue.empty().then(() => {
      // do nothing
    });
    jm.start();
  })

  afterEach(() => {
    jm.stop();
  });

  after(() => {
    if(worker) {
      worker.kill();
    }

    if(cluster.isWorker)
      process.exit();
  })

  if(cluster.isMaster) {
    it('Should raise the job completed event when the job is processed in another process', async () => {
      createJmAndQ();
      jm.createQueue('forked');
      const processorPid = jm.execute('forked').waitForCompletion()
      expect(processorPid).not.to.eql(process.pid);
    })
  }
})



