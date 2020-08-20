import assert from 'assert';
import app from '../src/app';

describe('Test', () => {

  after((done) => {
    const a = app;
    a.jobManager.stop();
    done();
  })

  it('should test', () => {
    const service = app.service('logging');
    assert.equal(true,true);
  })
})
