import {expect} from 'chai';
import { JobManager } from '../../src/hermes_modules/jobs/JobManager';
// @ts-ignore
import {TestClass} from './TestClass';

describe('Job scheduling tests', () => {
  it('Should execute a job and get result when job is done for string result', (done) => {
      const functionToExecute = () => {
        return 'done';
      }

      const jm = new JobManager();
      jm.createQueue('Test');
      jm.createWorker('Test', functionToExecute);

      const job = jm.execute('Test')
      job.on('done', (event) => {
        expect(job.result).to.be.equal('done');
        done();
      });
  })

  it('Should execute a job and get result when job is done for complex result', (done) => {
      const functionToExecute = () => {
        return {
          prop1:'value',
          prop2:{
            prop21:45,
            prop22:'astring'
          }
        };
      }

      const jm = new JobManager();
      jm.createQueue('Test');
      jm.createWorker('Test', functionToExecute);      console.log("inside the promise");

      const job = jm.execute('Test')
      job.on('done', (event) => {
        expect(job.result.prop1).to.be.equal('value');
        expect(job.result.prop2.prop21).to.be.equal(45);
        expect(job.result.prop2.prop22).to.be.equal('astring');
        done();
      });
  })

  it('Should execute a method from class instance and send result', (done) => {
    const jm = new JobManager();
    const instance = new TestClass();
    jm.createQueue('Test');
    jm.createWorker('Test', () => {
      return instance.aTestMethod();
    });
    const job = jm.execute('Test');

    job.on('done', (event) => {
      expect(job.result).to.be.equal('testMethodCall');
      done();
    });
  })

})
