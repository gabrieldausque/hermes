import assert from 'assert';
import app from '../../src/app';

describe('\'search\' service', () => {
  it('registered the service', () => {
    const service = app.service('search');

    assert.ok(service, 'Registered the service');
  });
});
