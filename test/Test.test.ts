import assert from 'assert';
import app from '../src/app';

describe('Test', () => {

  after((done) => {
    app.jobManager.stop();
    done();
  })

  it('should test', () => {
    const service = app.service('logging');
    assert.equal(true,true);
  })
})
