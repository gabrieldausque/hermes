import assert from 'assert';
import app from '../../src/app';

describe('\'InMemoryTest\' service', () => {
  it('registered the service', () => {
    const service = app.service('in-memory-test');

    assert.ok(service, 'Registered the service');
  });
});
