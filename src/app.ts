import path from 'path';
import favicon from 'serve-favicon';
import compress from 'compression';
import helmet from 'helmet';
import cors from 'cors';

import feathers from '@feathersjs/feathers';
import configuration from '@feathersjs/configuration';
import express from '@feathersjs/express';
import socketio from '@feathersjs/socketio';
import swagger from 'feathers-swagger';


import { Application } from './declarations';
import logger from './logger';
import middleware from './middleware';
import services from './services';
import appHooks from './app.hooks';
import channels from './channels';
import {TopicService} from '@hermes/topicservice';
import {SocketIOTopicServiceClient} from '@hermes/topicservice';
import {InstancesFactory,globalInstancesFactory} from '@hermes/composition';
import {MemoryStorage} from "./services/backend/MemoryStorage";
import {IExportedClass} from "./DirectoryCatalog/IExportedClass";
import {Platform} from "./platform/Platform";

// Don't remove this comment. It's needed to format import lines nicely.
const app: Application = express(feathers());

// Load app configuration
const config = configuration();
app.configure(config);

const configurationObject = {
  topicService: app.get('topicService'),
  platform: app.get('platform')
};

// load class from constructed catalog (Work in progress)
globalInstancesFactory.loadExportedClassesFromDirectory(__dirname + '/services/');
app.platform = new Platform(configurationObject);

const topicService = globalInstancesFactory.getInstanceFromCatalogs('TopicService', 'Default');

// Enable security, CORS, compression, favicon and body parsing
app.use(helmet());
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', express.static(app.get('public')));

// Set up Plugins and providers
app.configure(express.rest());

app.configure(swagger({
  openApiVersion:3,
  specs:{
    uiIndex: true,
    info: {
      title: 'Hermes POC Service',
      description: 'The hermes POC service swagger',
      version:'0.0.1'
    }
  }
}));

app.configure(socketio((io) => {
  console.log('Socket.Io server created and listening on ');
  io.on('connection', (socket) => {
    const hub = globalInstancesFactory.getInstanceFromCatalogs('TopicService', 'Default');
    console.debug('is TopicService Shared ? ' + (hub === topicService));
    const topicClient = new SocketIOTopicServiceClient(hub, socket);
    console.log("Connecting new client " + topicClient.topicClientId);
  });
  app.platform.topicService.initializeCluster().catch((error) => console.error(error));
}));
// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);



// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger } as any));

app.hooks(appHooks);

export default app;
