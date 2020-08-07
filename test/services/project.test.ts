// @ts-ignore
import disableConsole from '../disablelog';
disableConsole();


import assert from 'assert';
import app from '../../src/app';

describe('\'ProjectEntity\' service', () => {

  after((done) => {
    app.jobManager.stop()
    done();
  })

  it('registered the service', () => {
    const service = app.service('project');

    assert.ok(service, 'Registered the service');
  });
});
