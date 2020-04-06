import assert from 'assert';
import app from '../../src/app';

describe('\'logging\' service', () => {
  it('registered the service', () => {
    const service = app.service('logging');

    assert.ok(service, 'Registered the service');
  });
});
