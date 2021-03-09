import * as chai from 'chai';
import * as assert from 'assert';
chai.use(require('chai-as-promised'));
import {expect} from 'chai';
import { Job, JobManager, Queue, InMemoryQueue, JobEvents, JobStates } from '../src';
import {TestClass} from './TestClass';

describe('Job scheduling tests', () => {

  let jm:JobManager;
  let q:Queue;

  beforeEach(() => {
    jm = new JobManager();
    q = jm.createQueue('Test', { startAtCreation:true });
  })

  afterEach(() => {
    jm.stop()
  })

  it('Should execute a job and get result when job is success for string result', () => {
    const functionToExecute = () => {
      return 'done';
    }
    jm.createWorker('Test', functionToExecute);
    const p = new Promise((resolve) => {
      jm.execute('Test').then((job) => {
        job.subscribeToSuccess((event) => {
          resolve(job.result)
        }, true);
      })
    })
    return expect(p).to.eventually.equal('done');
  })

  it('Should execute a job and get result when job is success for complex result', async () => {
    const functionToExecute = () => {
      return {
        prop1:'value',
        prop2:{
          prop21:45,
          prop22:'astring'
        }
      };
    }
    jm.createWorker('Test', functionToExecute);
    const p = new Promise((resolve) => {
      jm.execute('Test').then((job) => {
        job.subscribeToSuccess((event) => {
          resolve(job.result)
        }, true);
      })
    })
    const result = await p;
    expect(result).to.eql({
      prop1: 'value',
      prop2: {
        prop21: 45,
        prop22: 'astring'
      }
    })
  })

  it('Should execute a method from class instance and send result', async () => {
    const instance = new TestClass();
    jm.createWorker('Test', () => {
      return instance.aTestMethod();
    });
    let createdJob: Job | undefined = undefined;
    const p = new Promise<any>((resolve) => {
      jm.execute('Test').then((job) => {
        createdJob = job;
        job.subscribeToSuccess( (event) => {
          resolve(event);
        }, true);
      })
    })
    const executedJob = await p;
    if(createdJob) {
      expect(createdJob).to.be.ok;
      expect(createdJob).to.be.eql(executedJob);
      expect(executedJob.result).to.be.equal('testMethodCall');
    }
    else
      assert.fail('Job was not created');
  })

  it('Should execute multiple job respecting pushing order', () => {
    const instance = new TestClass();
    const expectedValues:any[] = [];
    const actualValues:any[] = [];
    jm.stop()
    jm = new JobManager()
    q = jm.createQueue('Test', { workerPoolSize:100 })
    jm.createWorker('Test', (value) => {
      actualValues.unshift(instance.returnValue(value));
    });
    const numberOfJobs = 500;
    for(let jobCounter =0; jobCounter < numberOfJobs; jobCounter++) {
      jm.execute('Test', jobCounter).then(() => {
        expectedValues.unshift(jobCounter);
      })
    }
    const p = new Promise((resolve) => {
      jm.start();
      q.on(JobEvents.success, (job, result) => {
        // console.log(`Values : ${actualValues}`);
        // console.log(`Waiting : ${Array.from((q as InMemoryQueue).getAllWaitingJob(), (j) => j.id)}`);
        // console.log(`Running : ${Array.from((q as InMemoryQueue).getAllRunningJob(), (j:Job) => j.id)}`);
        if(actualValues.length === numberOfJobs){
          resolve(actualValues);
        }
      })
    })
    return expect(p).to.eventually.eql(expectedValues);
  });

  it('Should raise error event when worker failed', () => {
    jm.createWorker('Test', () => {
      throw new Error('Custom Error');
    });
    const p = new Promise((resolve, reject) => {
      jm.execute('Test').then((job) => {
        job.subscribeToFailed( (event) => {
          reject(job.err)
        }, true);
      })
    })
    return expect(p).to.be.rejectedWith('Custom Error')
  })

  it('Should reject promise when worker failed',  async () => {
    jm.createWorker('Test', () => {
      throw new Error('Custom Error');
    });
    const job = await jm.execute('Test');
    return expect(job.waitForCompletion()).to.be.rejectedWith('Custom Error');
  })

  it('Should get a job with a specific id', async() => {
    jm.createWorker('Test', () => {
      return 'done';
    })
    const job = await jm.execute('Test');
    await expect(job.waitForCompletion()).to.be.fulfilled;
    const searchJob = await jm.getJob(job.id);
    expect(job).to.be.eql(searchJob);
  })

  it('Should get jobs with a filter on payload value', async() => {
    jm.createWorker('Test', () => {
      return 'done';
    })
    const semaphores = [];
    semaphores.push(await ( await jm.execute('Test',{ category:'aCategory', prop:'aProp'}   )).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aCategory', prop:'aProp2'}   )).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aSecondCategory', prop:'aProp3'}   )).waitForCompletion());
    await Promise.all(semaphores);
    const found = await jm.getJobs({ valueFilter:{ category: 'aCategory'} });
    expect(found.length).to.be.eql(2);
    if(found[0].payload && found[1].payload){
      expect(found[0].payload.value).to.be.eql({ category:'aCategory', prop:'aProp'});
      expect(found[1].payload.value).to.be.eql({ category:'aCategory', prop:'aProp2'});
    } else {
      assert.fail('Job not found')
    }
  })

  it('Should get jobs with a filter on payload metadata', async() => {
    jm.createWorker('Test', () => {
      return 'done';
    })
    const semaphores = [];
    semaphores.push(await (await jm.execute('Test',{ category:'aCategory', prop:'aProp'}, {userName: 'aUser'}   )).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aCategory', prop:'aProp2'}, {userName: 'aSecondUser'}   )).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aSecondCategory', prop:'aProp3'}, {userName: 'aSecondUser'}  ) ).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aSecondCategory', prop:'aProp4'}, {userName: 'aUser'}   )).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aSecondCategory', prop:'aProp5'}, {userName: 'aUser'}   )).waitForCompletion());
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
    semaphores.push(await (await jm.execute('Test',{ category:'aCategory', prop:'aProp2'}, {userName: 'aSecondUser'}  ) ).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aSecondCategory', prop:'aProp3'}, {userName: 'aSecondUser'})   ).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aSecondCategory', prop:'aProp4'}, {userName: 'aUser'}   )).waitForCompletion());
    semaphores.push(await (await jm.execute('Test',{ category:'aCategory', prop:'aProp5'}, {userName: 'aUser'}   )).waitForCompletion());
    await Promise.all(semaphores);
    const found = await jm.getJobs({ valueFilter:{category:'aCategory'}, metadataFilter:{ userName: 'aUser'} });
    expect(found.length).to.be.eql(2);
  })

  it('Should raise success event if a job is already success when subscribing to event', async () => {
    jm.createWorker('Test', (payload:any) => {
      return  `${payload} done`
    })
    const job = await jm.execute('Test', { value:'test' })
    await job.waitForCompletion();
    const p = new Promise(async (resolve) => {
        job.subscribeToSuccess((j) => {
          console.log('Success is raised')
          resolve(undefined);
        }, true)
    })
    return expect(p).to.be.fulfilled;
  })

  it('Should raise completed event if a job is already success when subscribing to event', async () => {
    jm.createWorker('Test', (payload:any) => {
      return  `${payload} done`
    })
    const job = await jm.execute('Test', { value:'test' })
    await job.waitForCompletion();
    const p = new Promise(async (resolve) => {
      job.subscribeToCompleted((j) => {
        console.log('Completed is raised')
        resolve(undefined);
      }, true)
    })
    return expect(p).to.be.fulfilled;
  })

})
