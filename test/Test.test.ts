import assert from 'assert';
import app from '../src/app';

describe('Test', () => {
  it('should test', () => {
    const service = app.service('logging');
    assert.equal(true,true);
  })
})
