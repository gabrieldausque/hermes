import {expect} from 'chai';
import * as chai from 'chai';
// tslint:disable-next-line:no-var-requires
chai.use(require('chai-as-promised'));
import { InMemoryQueue, getJobManagerInstancesFactory, Job, JobManager, JobStates, Queue } from '@hermes/jobs';
// @ts-ignore
import { TestClass } from './TestClass';
import { BullMQQueue } from '@hermes/bullmq-jobs';
import * as util from 'util';
import { uuid } from 'uuidv4';
import { BullMQJob } from '@hermes/bullmq-jobs/BullMQJob';

const jobManagerFactory = getJobManagerInstancesFactory();
jobManagerFactory.loadExportedClassesFromDirectory(__dirname + '/../plugins');
const sleep = util.promisify(setTimeout);


describe('Job Scheduling using BullMQ', () => {
  let jm:JobManager = null;
  let q:Queue = null;

  const createJmAndQ = (() => {
    jm = new JobManager({
      queuesFactoryExportName:'BullMQ',
      defaultQueueConfiguration:{
        bullQueueOptions: {
          connection: {
            host: "localhost",
            port: "6379",
            retryStrategy: (times) => {
              return new Error('No connection ! Please start docker container ...');
            },
            maxRetriesPerRequest: 0,
            connectTimeout: 50
          }
        }
      }
    });
    q = jm.createQueue('TestMQ');
    jm.start();
  })

  afterEach(() => {
    try{
      (q as unknown as BullMQQueue).innerQueue.clean(0, 0, "completed").then(() => {
        // do nothing
      });

      jm.stop();
    }catch(err) {
      console.warn(err)
    }
  });

  it('Should have a bullQueue instead of the default InMemoryQueue', () => {
    createJmAndQ();
    expect(q).to.be.instanceof(BullMQQueue);
  })

  it('Should raise error event if no connection on redis', async () => {
    jm = new JobManager({
      queuesFactoryExportName:'BullMQ'
    });
    let q2:Queue;

    const c = () => {
      q2 = jm.createQueue('Error', {
        bullQueueOptions: {
          connection: {
            host: "localhost",
            port: "590",
            retryStrategy: (times) => {
              return;
            },
            maxRetriesPerRequest: 0,
            connectTimeout: 50,
          }
        }
      });
      q2.once('error', (err) => {
        expect(err.code).to.eql('ECONNREFUSED');
      })
    }
    c();
  })

  it('Should connect to another port', (done) => {
    jm = new JobManager({
      queuesFactoryExportName:'BullMQ'
    });
    const q2 = jm.createQueue('Error', {
      bullQueueOptions: {
        connection:{
          host:"localhost",
          port:"6380",
          retryStrategy: (times) => {
            return new Error('No connection ! Please start docker container ...');
          },
          maxRetriesPerRequest: 0,
          connectTimeout:50,
        }
      }
    });
    q2.once('ready', () => {
      (q2 as unknown as BullMQQueue).innerQueue.client.then((c) => {
        try {
          expect(c.options.port).to.be.eql(6380);
          done()
        } catch(err) {
          done(err);
        } finally {
          q2.stop();
        }
      })
    });
  })

  it('Should had defaulted configuration for queue if no configuration has been passed and defaultQueueConfiguration is set', async () => {
    createJmAndQ();
    const q3 = jm.createQueue('Defaulted');
    const redisClient = await (q3 as unknown as BullMQQueue).innerQueue.client;
    expect(redisClient.options.connectTimeout).to.be.equal(50);
    expect(redisClient.options.maxRetriesPerRequest).to.be.equal(0);
  })

  it('Should execute a job and get result when job is success for string result', (done) => {
    createJmAndQ();
    const functionToExecute = (p, j) => {
      return 'done';
    }
    const queueId = uuid();
    q = jm.createQueue(queueId);
    jm.createWorker(queueId, functionToExecute);
    q.once('error', (err, j) => {
      done(err);
    })
    const job = jm.execute(queueId)
    job.once('success', (event) => {
      expect(job.result).to.be.equal('done');
      done();
    });
  })

  it('Should execute a job and get result when job is success for complex result', (done) => {
    createJmAndQ();
    const queueId = uuid();
    q = jm.createQueue(queueId);
    const functionToExecute = () => {
      return {
        prop1:'value',
        prop2:{
          prop21:45,
          prop22:'astring'
        }
      };
    }
    jm.createWorker(queueId, functionToExecute);      console.log("inside the promise");
    const job = jm.execute(queueId);
    job.once('success', () => {
      expect(job.result.prop1).to.be.equal('value');
      expect(job.result.prop2.prop21).to.be.equal(45);
      expect(job.result.prop2.prop22).to.be.equal('astring');
      done();
    });
  })

  it('Should execute a method from class instance and send result', (done) => {
    createJmAndQ();
    const instance = new TestClass();
    const queueId = uuid();
    q = jm.createQueue(queueId);
    jm.createWorker(queueId, () => {
      return instance.aTestMethod();
    });
    const job = jm.execute(queueId);
    job.on('success', (event) => {
      expect(job.result).to.be.equal('testMethodCall');
      done();
    });
  })

  it('Should execute job with payload non object', async () => {
    createJmAndQ();
    jm.createWorker('TestMQ', (p, j) => {
      return `A result with parameters : ${p}`;
    })
    const job = jm.execute('TestMQ', 'A simple string');
    await job.waitForCompletion();
    expect(job.result).to.be.equal('A result with parameters : A simple string');
  })

  it('Should execute job with payload non object and an async worker method', async () => {
    createJmAndQ();
    jm.createWorker('TestMQ', async (p, j) => {
      return `A result with parameters : ${p}`;
    })
    const job = jm.execute('TestMQ', 'A simple string');
    await job.waitForCompletion();
    expect(job.result).to.be.equal('A result with parameters : A simple string');
  })

  it('Should execute job and get progress', async () => {
    createJmAndQ();
    const progressPercentages = [];
    const progressMessages = [];
    const queueId = uuid();
    q = jm.createQueue(queueId);
    jm.createWorker(queueId, async (p, j) => {
      j.raiseProgressEvent(50, 'first progress');
      await sleep(500);
      j.raiseProgressEvent(100, 'last progress');
      return `A result with parameters : ${p}`;
    })
    const job = jm.execute(queueId, 'A simple string');
    job.on('progress', (data) => {
      progressPercentages.push(data.percentage);
      progressMessages.push(data.message);
    })
    await job.waitForCompletion();
    expect(job.result).to.be.equal('A result with parameters : A simple string');
    expect(progressPercentages).to.be.eql([50,100]);
    expect(progressMessages).to.be.eql(['first progress','last progress']);
    expect((job as BullMQJob).innerJob.progress).to.be.eql(100);
  })

  it('Should execute job and manage error', async () => {
    createJmAndQ();
    jm.createWorker('TestMQ', async (p, j) => {
      throw new Error('Expected error');
    })
    const job = jm.execute('TestMQ');

    await expect(job.waitForCompletion()).to.be.rejectedWith('Expected error');
    expect(job.state).to.be.equal(JobStates.failed);
    expect(job.err.message).to.be.eql('Expected error');
  })

  it('Should execute multiple job', async () => {
    createJmAndQ();
    const expected = [];
    const actuals = [];
    const jobs = [];
    jm.createWorker('TestMQ', async (p, j) => {
      actuals.push(p);
    })
    for(let counter=0;counter<4;counter++){
      expected.push(counter)
      const job = jm.execute('TestMQ', counter);
      jobs.push(job.waitForCompletion());
    }
    await Promise.all(jobs);
    expect(actuals).to.be.eql(expected);
  })

  it('Should return the right host name', async() => {
    createJmAndQ();
    expect(await (q as BullMQQueue).getHost()).to.be.eql('localhost');
  })

  it('Should return the right port', async() => {
    createJmAndQ();
    expect(await (q as BullMQQueue).getPort()).to.be.eql(6379);
  })

  it('Should work when send exception', (done) => {
    createJmAndQ();
    jm.createWorker('TestMQ', (p, j) => {
      throw new Error('Expected Error');
    })
    const job = jm.execute('TestMQ');
    job.waitForCompletion().catch((err) => {
      expect(err.message).to.be.eql('Expected Error');
      done()
    });
  })

  it('Should get a job with a specific id', async() => {
    createJmAndQ();
    jm.createWorker('Test', () => {
      return 'done';
    })
    const job = jm.execute('Test');
    await expect(job.waitForCompletion()).to.be.fulfilled;
    const searchJob = await jm.getJob(job.id);
    expect(job).to.be.eql(searchJob);
  })

  it('Should get jobs with a filter on payload value', async() => {
    createJmAndQ();
    jm.createWorker('Test', () => {
      return 'done';
    })
    const semaphores = [];
    semaphores.push(jm.execute('Test',{ category:'aCategory', prop:'aProp'}   ).waitForCompletion());
    semaphores.push(jm.execute('Test',{ category:'aCategory', prop:'aProp2'}   ).waitForCompletion());
    semaphores.push(jm.execute('Test',{ category:'aSecondCategory', prop:'aProp3'}   ).waitForCompletion());
    await Promise.all(semaphores);
    const found = await jm.getJobs({ valueFilter:{ category: 'aCategory'} });
    expect(found[0].payload.value).to.be.eql({ category:'aCategory', prop:'aProp'});
    expect(found[1].payload.value).to.be.eql({ category:'aCategory', prop:'aProp2'});
  })

  it('Should get jobs with a filter on payload metadata', async() => {
    createJmAndQ();
    jm.createWorker('Test', () => {
      return 'done';
    })
    const semaphores = [];
    semaphores.push(jm.execute('Test',{ category:'aCategory', prop:'aProp'}, {userName: 'aUser'}   ).waitForCompletion());
    semaphores.push(jm.execute('Test',{ category:'aCategory', prop:'aProp2'}, {userName: 'aSecondUser'}   ).waitForCompletion());
    semaphores.push(jm.execute('Test',{ category:'aSecondCategory', prop:'aProp3'}, {userName: 'aSecondUser'}   ).waitForCompletion());
    semaphores.push(jm.execute('Test',{ category:'aSecondCategory', prop:'aProp4'}, {userName: 'aUser'}   ).waitForCompletion());
    semaphores.push(jm.execute('Test',{ category:'aSecondCategory', prop:'aProp5'}, {userName: 'aUser'}   ).waitForCompletion());
    await Promise.all(semaphores);
    const found = await jm.getJobs({ metadataFilter:{ userName: 'aUser'} });
    expect(found.length).to.be.eql(3);
  })

  it('Should get jobs with a filter on payload value and metadata', async() => {
    createJmAndQ();
    jm.createWorker('Test', () => {
      return 'done';
    })
    const semaphores = [];
    semaphores.push(jm.execute('Test',{ category:'aCategory', prop:'aProp'}, {userName: 'aUser'}   ).waitForCompletion());
    semaphores.push(jm.execute('Test',{ category:'aCategory', prop:'aProp2'}, {userName: 'aSecondUser'}   ).waitForCompletion());
    semaphores.push(jm.execute('Test',{ category:'aSecondCategory', prop:'aProp3'}, {userName: 'aSecondUser'}   ).waitForCompletion());
    semaphores.push(jm.execute('Test',{ category:'aSecondCategory', prop:'aProp4'}, {userName: 'aUser'}   ).waitForCompletion());
    semaphores.push(jm.execute('Test',{ category:'aCategory', prop:'aProp5'}, {userName: 'aUser'}   ).waitForCompletion());
    await Promise.all(semaphores);
    const found = await jm.getJobs({ valueFilter:{category:'aCategory'}, metadataFilter:{ userName: 'aUser'} });
    expect(found.length).to.be.eql(2);
  })


})
