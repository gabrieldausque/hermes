import {expect} from 'chai';
import {instancesFactory, Job, JobManager , Queue} from '@hermes/jobs';
// @ts-ignore
import { TestClass } from './TestClass';
import { BullQueue } from '@hermes/bull-jobs/BullQueue';
import { create } from 'domain';

instancesFactory.loadExportedClassesFromDirectory(__dirname + '/../plugins');

describe('Test JobManager relying on Bull', () => {
  let jm:JobManager = null;
  let q:Queue = null;

  const createJmAndQ = (() => {
    const i = instancesFactory;
    jm = new JobManager({
      QueuesFactoryExportName:'Bull'
    });
    q = jm.createQueue('Test', {
      redisUrl:"redis://localhost:6379",
      bullQueueOptions: {
        redis:{
          host:"localhost",
          port:"6379",
          retryStrategy: (times) => {
            return new Error('No connection ! Please start docker container ...');
          },
          maxRetriesPerRequest: 0,
          connectTimeout:50,
        }
      }
    });
    (q as BullQueue).innerQueue.empty();
    jm.start();
  })

  afterEach(() => {
    jm.stop();
  });

  it('Should have a bullQueue instead of the default InMemoryQueue', () => {
    createJmAndQ();
    expect(q).to.be.instanceof(BullQueue);
  })


  it('Should raise error event if no connection on redis', (done) => {
    jm = new JobManager({
      QueuesFactoryExportName:'Bull'
    });
    const q2 = jm.createQueue('Error', {
      redisUrl:"redis://localhost:590",
      bullQueueOptions: {
        redis:{
          host:"localhost",
          port:"590",
          retryStrategy: (times) => {
            return new Error('Wrong port');
          },
          maxRetriesPerRequest: 0,
          connectTimeout:50,
        }
      }
    });

    const errorListener = (err) => {
        expect(err.code).to.be.equal('ECONNREFUSED');
        done();
    };
    q2.once('error', errorListener);
  })

  it('Should connect to another port', (done) => {
    jm = new JobManager({
      QueuesFactoryExportName:'Bull'
    });
    const q2 = jm.createQueue('Error', {
      redisUrl:"redis://localhost:6380",
      bullQueueOptions: {
        redis:{
          host:"localhost",
          port:"6380",
          retryStrategy: (times) => {
            return new Error('No connection ! Please start docker container ...');
          },
          maxRetriesPerRequest: 1,
          connectTimeout:50,
        }
      }
    });
    q2.once('ready', () => {
      expect((q2 as BullQueue).innerQueue.client.options.port).to.be.equal(6380);
      q2.stop();
      done();
    });
  })

  it('Should execute a job and get result when job is done for string result', (done) => {
    createJmAndQ();
    const functionToExecute = (p, j) => {
      console.log('p:');
      console.log(p);
      console.log('j');
      console.log(j);
      return 'done';
    }
    jm.createWorker('Test', functionToExecute);
    q.on('error', (err, j) => {
      done(err);
    })
    q.on('ready', () => {
      const job = jm.execute('Test')
      job.on('done', (event) => {
        expect(job.result).to.be.equal('done');
        done();
      });
    })
  })
})
