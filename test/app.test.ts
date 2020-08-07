// @ts-ignore
import disableConsole from './disablelog';
disableConsole();

import assert from 'assert';
import { Server } from 'http';
import url from 'url';
import axios from 'axios';
import * as path from 'path';

import { globalInstancesFactory } from '@hermes/composition';

globalInstancesFactory.directoryCatalogRoot = path.resolve(__dirname);
globalInstancesFactory.loadExportedClassesFromDirectory('../src/DirectoryCatalog');
globalInstancesFactory.loadExportedClassesFromDirectory('../src/services/backend');
globalInstancesFactory.loadExportedClassesFromDirectory('../src/services/moleculeloader');
globalInstancesFactory.loadExportedClassesFromDirectory('../src/services/propertyLoader');
globalInstancesFactory.loadExportedClassesFromDirectory('../src/services/runtimeLoadedService');
globalInstancesFactory.loadExportedClassesFromDirectory('../src/hermes_modules/topic');

import app from '../src/app';

const port = app.get('port') || 8998;
const getUrl = (pathname?: string) => url.format({
  hostname: app.get('host') || 'localhost',
  protocol: 'http',
  port,
  pathname
});

describe('Feathers application tests', () => {
  let server: Server;

  before((done) => {
    server = app.listen(port);
    server.once('listening', () => done());
  });

  after((done) => {
    app.jobManager.stop();
    server.close(done);
  });

  it('starts and shows the index page', async () => {
    const { data } = await axios.get(getUrl());

    assert.ok(data.indexOf('<html lang="en">') !== -1);
  });

  describe('404', () => {
    it('shows a 404 HTML page', async () => {
      try {
        await axios.get(getUrl('path/to/nowhere'), {
          headers: {
            'Accept': 'text/html'
          }
        });
        assert.fail('should never get here');
      } catch (error) {
        const { response } = error;

        assert.equal(response.status, 404);
        assert.ok(response.data.indexOf('<html>') !== -1);
      }
    });

    it('shows a 404 JSON error without stack trace', async () => {
      try {
        await axios.get(getUrl('path/to/nowhere'));
        assert.fail('should never get here');
      } catch (error) {
        const { response } = error;

        assert.equal(response.status, 404);
        assert.equal(response.data.code, 404);
        assert.equal(response.data.message, 'Page not found');
        assert.equal(response.data.name, 'NotFound');
      }
    });
  });
});
