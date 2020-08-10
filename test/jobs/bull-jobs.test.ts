import {expect} from 'chai';
import {instancesFactory, Job, JobManager , Queue} from '@hermes/jobs';
// @ts-ignore
import { TestClass } from './TestClass';
import { BullQueue } from '@hermes/bull-jobs/BullQueue';

instancesFactory.loadExportedClassesFromDirectory(__dirname + '/../plugins');

describe('Test JobManager relying on Bull', () => {
  let jm:JobManager = null;
  let q:Queue = null;

  beforeEach(() => {
    const i = instancesFactory;
    jm = new JobManager({
      QueuesFactoryExportName:'Bull'
    });
    q = jm.createQueue('Test', { redisUrl:"redis://localhost:6379" });
    jm.start();
  })

  afterEach(() => {
    jm.stop();
  })



  it('Should have a bullQueue instead of the default InMemoryQueue', () => {
    expect(q).to.be.instanceof(BullQueue);
  })
})
