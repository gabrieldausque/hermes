import {expect} from 'chai';
import { InMemoryQueue, getJobManagerInstancesFactory, Job, JobManager, JobStates, Queue } from '@hermes/jobs';
// @ts-ignore
import { TestClass } from './TestClass';
import { BullQueue } from '@hermes/bull-jobs';
import * as util from 'util';

getJobManagerInstancesFactory().loadExportedClassesFromDirectory(__dirname + '/../plugins');
const sleep = util.promisify(setTimeout);


describe('Job Scheduling using Bull', () => {
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

  it('Should have a bullQueue instead of the default InMemoryQueue', () => {
    createJmAndQ();
    expect(q).to.be.instanceof(BullQueue);
  })


  it('Should raise error event if no connection on redis', (done) => {
    jm = new JobManager({
      queuesFactoryExportName:'Bull'
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
      queuesFactoryExportName:'Bull'
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
      expect((q2 as unknown as BullQueue).innerQueue.client.options.port).to.be.equal(6380);
      q2.stop();
      done();
    });
  })

  it('Should had defaulted configuration for queue if no configuration has been passed and defaultQueueConfiguration is set', async () => {
    createJmAndQ();
    const q3 = jm.createQueue('Defaulted');
    const redisClient = await (q3 as unknown as BullQueue).innerQueue.client;
    expect(redisClient.options.connectTimeout).to.be.equal(250);
    expect(redisClient.options.maxRetriesPerRequest).to.be.equal(2);
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
    const job = jm.execute('Test')
    job.once('done', (event) => {
      expect(job.result).to.be.equal('done');
      done();
    });
  })

  it('Should execute a job and get result when job is done for complex result', (done) => {
    createJmAndQ();

    const functionToExecute = () => {
      return {
        prop1:'value',
        prop2:{
          prop21:45,
          prop22:'astring'
        }
      };
    }
    jm.createWorker('Test', functionToExecute);      console.log("inside the promise");
    const job = jm.execute('Test')
    job.once('done', () => {
      expect(job.result.prop1).to.be.equal('value');
      expect(job.result.prop2.prop21).to.be.equal(45);
      expect(job.result.prop2.prop22).to.be.equal('astring');
      done();
    });
  })

  it('Should execute a method from class instance and send result', (done) => {
    createJmAndQ();
    const instance = new TestClass();
    jm.createWorker('Test', () => {
      return instance.aTestMethod();
    });
    const job = jm.execute('Test');
    job.on('done', (event) => {
      expect(job.result).to.be.equal('testMethodCall');
      done();
    });
  })

  it('Should execute job with payload non object', async () => {
    createJmAndQ();
    jm.createWorker('Test', (p, j) => {
      return `A result with parameters : ${p}`;
    })
    const job = jm.execute('Test', 'A simple string');
    await job.waitForCompletion();
    expect(job.result).to.be.equal('A result with parameters : A simple string');
  })

  it('Should execute job with payload non object and an async worker method', async () => {
    createJmAndQ();
    jm.createWorker('Test', async (p, j) => {
      return `A result with parameters : ${p}`;
    })
    const job = jm.execute('Test', 'A simple string');
    await job.waitForCompletion();
    expect(job.result).to.be.equal('A result with parameters : A simple string');
  })

  it('Should execute job and get progress', async () => {
    createJmAndQ();
    const progressPercentages = [];
    const progressMessages = [];
    jm.createWorker('Test', async (p, j) => {
      j.raiseProgressEvent(50, 'first progress');
      await sleep(500);
      j.raiseProgressEvent(100, 'last progress');
      return `A result with parameters : ${p}`;
    })
    const job = jm.execute('Test', 'A simple string');
    job.on('progress', (data) => {
      progressPercentages.push(data.percentage);
      progressMessages.push(data.message);
    })
    await job.waitForCompletion();
    expect(job.result).to.be.equal('A result with parameters : A simple string');
    expect(progressPercentages).to.be.eql([50,100]);
    expect(progressMessages).to.be.eql(['first progress','last progress']);
  })

  it('Should execute job and manage error', async () => {
    createJmAndQ();
    jm.createWorker('Test', async (p, j) => {
      throw new Error('Expected error');
    })
    const job = jm.execute('Test');
    try {
      await job.waitForCompletion();
    }finally {
      expect(job.state).to.be.equal(JobStates.error);
      expect(job.err.message).to.be.eql('Expected error');
    }
  })

  it('Should execute multiple job', async () => {
    createJmAndQ();
    const expected = [];
    const actuals = [];
    const jobs = [];
    jm.createWorker('Test', async (p, j) => {
      actuals.push(p);
    })
    for(let counter=0;counter<4;counter++){
      expected.push(counter)
      const job = jm.execute('Test', counter);
      jobs.push(job.waitForCompletion());
    }
    await Promise.all(jobs);
    expect(actuals).to.be.eql(expected);
  })

  it('Should return the right host name', async() => {
    createJmAndQ();
    expect((q as BullQueue).getHost()).to.be.eql('127.0.0.1');
  })

})
