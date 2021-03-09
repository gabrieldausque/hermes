import * as chai from 'chai';
import * as assert from 'assert';
chai.use(require('chai-as-promised'));
import {expect} from 'chai';
import * as InnerQueue from 'bull';

import {getJobManagerInstancesFactory, Job, JobManager, JobStates, Queue} from '@hermes/jobs';

import { TestClass } from './TestClass';
import { BullQueue, BullJob } from '../src';
import * as util from 'util';
import { v4 as uuid } from 'uuid';

getJobManagerInstancesFactory().loadExportedClassesFromDirectory(__dirname + '/../src');
const sleep = util.promisify(setTimeout);


describe('Job Scheduling using Bull', () => {
  const jm:JobManager = new JobManager({
    queuesFactoryExportName:'Bull',
    defaultQueueConfiguration:{
      redisUrl:"redis://localhost:6379",
      bullQueueOptions: {
        redis:{
          host:"localhost",
          port:"6379",
          retryStrategy: (times:any) => {
            return new Error('No connection ! Please start docker container ...');
          },
          maxRetriesPerRequest: 2,
          connectTimeout:250
        }
      }
    }
  });
  const q:Queue = jm.createQueue('Test', {
    redisUrl:"redis://localhost:6379",
    bullQueueOptions: {
      redis:{
        host:"127.0.0.1",
        port:"6379",
        retryStrategy: (times:any) => {
          return new Error('No connection ! Please start docker container ...');
        },
        maxRetriesPerRequest: 0,
        connectTimeout:50,
      }
    }
  });;

  before(() => {
    // @ts-ignore
    ((q as unknown as BullQueue).innerQueue as InnerQueue).clean(0);
  })


  it('Should have a bullQueue instead of the default InMemoryQueue', async () => {

    expect(q).to.be.instanceof(BullQueue);
  })

  it('Should connect to another port', (done) => {
    const localJm = new JobManager({
      queuesFactoryExportName:'Bull'
    });
    const q2 = localJm.createQueue('Error', {
      redisUrl:"redis://localhost:6380",
      bullQueueOptions: {
        redis:{
          host:"localhost",
          port:"6380",
          retryStrategy: (times:any) => {
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

    const q3 = jm.createQueue('Defaulted');
    const redisClient = await (q3 as unknown as BullQueue).innerQueue.client;
    expect(redisClient.options.connectTimeout).to.be.equal(250);
    expect(redisClient.options.maxRetriesPerRequest).to.be.equal(2);
  })

  it('Should execute a job and get result when job is success for string result', async () => {

    const functionToExecute = (p:any, j:Job) => {
      return 'done';
    }
    const queueId = uuid();
    const q3 = jm.createQueue(queueId);
    jm.createWorker(queueId, functionToExecute);
    const job = await jm.execute(queueId)
    const result = await job.waitForCompletion().then((intermediateResult:string) => {
      return intermediateResult;
    });
    expect(result).to.be.eql('done');
  })

  it('Should execute a job and get result when job is success for complex result', async () => {

    const queueId = uuid();
    const q4 = jm.createQueue(queueId);
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
    const job = await jm.execute(queueId);
    await job.waitForCompletion();
    expect(job.result.prop1).to.be.equal('value');
    expect(job.result.prop2.prop21).to.be.equal(45);
    expect(job.result.prop2.prop22).to.be.equal('astring');
  })

  it('Should execute a method from class instance and send result', async () => {

    const instance = new TestClass();
    const queueId = uuid();
    const q5 = jm.createQueue(queueId);
    jm.createWorker(queueId, () => {
      return instance.aTestMethod();
    });
    const job = await jm.execute(queueId);
    await job.waitForCompletion();
    expect(job.result).to.be.equal('testMethodCall');
  })

  it('Should execute job with payload non object', async () => {

    jm.createWorker('Test', (p, j) => {
      return `A result with parameters : ${p}`;
    })
    const job = await jm.execute('Test', 'A simple string');
    await job.waitForCompletion();
    expect(job.result).to.be.equal('A result with parameters : A simple string');
  })

  it('Should execute job with payload non object and an async worker method', async () => {

    jm.createWorker('Test', async (p, j) => {
      return `A result with parameters : ${p}`;
    })
    const job = await jm.execute('Test', 'A simple string');
    await job.waitForCompletion();
    expect(job.result).to.be.equal('A result with parameters : A simple string');
  })

  it('Should execute job and get progress', async () => {

    const progressPercentages:any[] = [];
    const progressMessages:any[] = [];
    const queueId = uuid();
    const q5 = jm.createQueue(queueId);
    jm.createWorker(queueId, async (p, j) => {
      j.raiseProgressEvent(50, 'first progress');
      await sleep(500);
      j.raiseProgressEvent(100, 'last progress');
      return `A result with parameters : ${p}`;
    })
    const job = await jm.execute(queueId, 'A simple string');
    job.on('progress', (data) => {
      progressPercentages.push(data.percentage);
      progressMessages.push(data.message);
    })
    await job.waitForCompletion();
    expect(job.result).to.be.equal('A result with parameters : A simple string');
    expect(progressPercentages).to.be.eql([50,100]);
    expect(progressMessages).to.be.eql(['first progress','last progress']);
    const f = () => {
      const j:BullJob = job as BullJob;
      if(j && j.innerJob)
        return j.innerJob.progress()
      else
        throw Error('Job is not a BullJob instance')
    }
    expect(f()).to.be.eql(100);
  })

  it('Should execute job and manage error', async () => {

    jm.createWorker('Test', async (p, j) => {
      throw new Error('Expected error');
    })
    const job = await jm.execute('Test');
    await expect(job.waitForCompletion()).to.be.rejectedWith('Expected error');
    expect(job.state).to.be.equal(JobStates.failed);
    expect(job.err.message).to.be.eql('Expected error');
  })

  it('Should execute multiple job', async () => {

    const expected:any[] = [];
    const actuals:any[] = [];
    const jobs:any[] = [];
    jm.createWorker('Test', async (p, j) => {
      actuals.push(p);
    })
    for(let counter=0;counter<4;counter++){
      expected.push(counter)
      const job = await jm.execute('Test', counter);
      jobs.push(job.waitForCompletion());
    }
    await Promise.all(jobs);
    expect(actuals).to.be.eql(expected);
  })

  it('Should return the right host name', async() => {

    expect((q as BullQueue).getHost()).to.be.eql('127.0.0.1');
  })

  it('Should work when send exception', async () => {

    jm.createWorker('Test', (p, j) => {
      throw new Error('Expected Error');
    })
    const job = await jm.execute('Test');
    try {
      await job.waitForCompletion()
    } catch(err) {
      expect(err.message).to.be.eql('Expected Error')
    }
  })

  it('Should get a job with a specific id', async() => {
    console.log('The test')
    jm.createWorker('Test', () => {
      console.log('executing the worker')
      return 'done';
    });
    const job = await jm.execute('Test');
    const result = await job.waitForCompletion();
    const searchJob = await jm.getJob(job.id);
    expect(result).to.be.eql('done', `result:#${result}# job.id:${job.id} job.result:${job.result}`);
    if(job && searchJob)
      expect(job.id).to.be.eql(searchJob.id);
    else
      assert.fail('Job or searchJob is null')
    expect(job.payload).to.be.eql(searchJob.payload);
    expect(job.state).to.be.eql(searchJob.state);
    expect(searchJob.state).to.be.eql(JobStates.success);
    expect(job.result).to.be.eql(searchJob.result);
  })

  it('Should get jobs with a filter on payload value', async() => {

    jm.createWorker('Test', () => {
      return 'done';
    });
    const semaphores = [];
    semaphores.push(await (await jm.execute('Test',{ category:'aCategory', prop:'aProp'})).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aCategory', prop:'aProp2'})).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aSecondCategory', prop:'aProp3'})).waitForCompletion());
    await Promise.all(semaphores);
    const found = await jm.getJobs({ valueFilter:{ category: 'aCategory'} });
    return Promise.all([
      expect(found.find((fj) => {
          return fj.payload?.value.category === 'aCategory' && fj.payload?.value.prop === 'aProp'
        })).to.be.ok,
    expect(found.find((fj) => {
      return fj.payload?.value.category === 'aCategory' && fj.payload?.value.prop === 'aProp2'
    })).to.be.ok]);
  })

  it('Should get jobs with a filter on payload metadata', async() => {

    jm.createWorker('Test', () => {
      return 'done';
    })
    const semaphores = [];
    semaphores.push(await (await jm.execute('Test',
                                { category:'aCategory', prop:'aProp'},
                                   {userName: 'aUser'}))
                                .waitForCompletion());
    semaphores.push(await (await jm.execute('Test',
                                { category:'aCategory', prop:'aProp2'},
                                   {userName: 'aSecondUser'}))
                                .waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aSecondCategory', prop:'aProp3'}, {userName: 'aSecondUser'})).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aSecondCategory', prop:'aProp4'}, {userName: 'aUser'})).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aSecondCategory', prop:'aProp5'}, {userName: 'aUser'})).waitForCompletion());
    await Promise.all(semaphores);
    const found = await jm.getJobs({ metadataFilter:{ userName: 'aUser'} });
    expect(found.length).to.be.eql(3);
  })

  it('Should get jobs with a filter on payload value and metadata', async() => {

    jm.createWorker('Test', () => {
      return 'done';
    })
    const semaphores = [];
    semaphores.push(await (await jm.execute('Test',{ category:'aCategory', prop:'aProp'}, {userName: 'aUser'}   )).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aCategory', prop:'aProp2'}, {userName: 'aSecondUser'}   )).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aSecondCategory', prop:'aProp3'}, {userName: 'aSecondUser'}   )).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aSecondCategory', prop:'aProp4'}, {userName: 'aUser'}   )).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aCategory', prop:'aProp5'}, {userName: 'aUser'}   )).waitForCompletion());
    await Promise.all(semaphores);
    const found = await jm.getJobs({ valueFilter:{category:'aCategory'}, metadataFilter:{ userName: 'aUser'} });
    expect(found.length).to.be.eql(3);
  })

})
