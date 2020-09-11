import * as assert from 'assert';
import chai from 'chai';
// tslint:disable-next-line:no-var-requires
chai.use(require('chai-as-promised'));
import {expect} from 'chai';

import { Job, JobManager, Queue, InMemoryQueue, JobEvents } from '@hermes/jobs';
// @ts-ignore
import {TestClass} from './TestClass';
import { uuid } from 'uuidv4';


describe('Job scheduling tests', () => {

  let jm:JobManager = null;
  let q:Queue = null;

  beforeEach(() => {
    jm = new JobManager();
    q = jm.createQueue('Test', { startAtCreation:true });
  })

  afterEach(() => {
    jm.stop()
  })

  it('Should execute a job and get result when job is success for string result', (done) => {
    const functionToExecute = () => {
      return 'done';
    }

    jm.createWorker('Test', functionToExecute);
    const job = jm.execute('Test')
    job.on(JobEvents.success, (event) => {
      expect(job.result).to.be.equal('done');
      done();
    });
  })

  it('Should execute a job and get result when job is success for complex result', (done) => {
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
    job.on(JobEvents.success, (event) => {
      expect(job.result.prop1).to.be.equal('value');
      expect(job.result.prop2.prop21).to.be.equal(45);
      expect(job.result.prop2.prop22).to.be.equal('astring');
      done();
    });
  })

  it('Should execute a method from class instance and send result', (done) => {
    const instance = new TestClass();
    jm.createWorker('Test', () => {
      return instance.aTestMethod();
    });
    const job = jm.execute('Test');
    job.on(JobEvents.success, (event) => {
      try{
        expect(job).to.be.eql(event);
        expect(job.result).to.be.equal('testMethodCall');
        done();
      }catch(err) {
        done(err)
      }

    });
  })

  it('Should execute multiple job respecting pushing order', (done) => {
    const instance = new TestClass();
    const expectedValues = [];
    const actualValues = [];
    jm.stop()
    jm = new JobManager()
    q = jm.createQueue('Test', { workerPoolSize:100 })
    jm.createWorker('Test', (value) => {
      actualValues.unshift(instance.returnValue(value));
    });
    const numberOfJobs = 500;
    for(let jobCounter =0; jobCounter < numberOfJobs; jobCounter++) {
      jm.execute('Test', jobCounter);
      expectedValues.unshift(jobCounter);
    }
    jm.start();
    let testDone = false;
    q.on(JobEvents.success, (job, result) => {
      // console.log(`Values : ${actualValues}`);
      // console.log(`Waiting : ${Array.from((q as InMemoryQueue).getAllWaitingJob(), (j) => j.id)}`);
      // console.log(`Running : ${Array.from((q as InMemoryQueue).getAllRunningJob(), (j:Job) => j.id)}`);
      if(actualValues.length === numberOfJobs){
        if(!testDone) {
          testDone = true;
          expect(actualValues).to.eql(expectedValues);
          done();
        }
      }
    })
  });

  it('Should raise error event when worker failed', (done) => {
    const instance = new TestClass();
    jm.createWorker('Test', () => {
      throw new Error('Custom Error');
    });
    const job = jm.execute('Test');
    job.on(JobEvents.failed, (event) => {
      try{
        expect(job).to.be.eql(event);
        expect(job.err.message).to.be.eql('Custom Error');
        done();
      }catch(err) {
        done(err)
      }

    });
  })

  it('Should reject promise when worker failed',  async () => {
    const instance = new TestClass();
    jm.createWorker('Test', () => {
      throw new Error('Custom Error');
    });
    const job = jm.execute('Test');
    return expect(job.waitForCompletion()).to.be.rejectedWith('Custom Error');
  })

})
