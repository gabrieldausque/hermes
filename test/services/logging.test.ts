// @ts-ignore
import disableConsole from '../disablelog';
disableConsole();


import assert from 'assert';
import app from '../../src/app';

describe('\'logging\' service', () => {

  after((done) => {
    app.jobManager.stop()
  })

  it('registered the service', () => {
    const service = app.service('logging');

    assert.ok(service, 'Registered the service');
  });
});
