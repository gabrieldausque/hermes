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
import {BackEndService} from "./services/backend/BackEndService";
import {TopicService} from "./services/topic/TopicService";
import {SocketIOTopicServiceClient} from "./services/topic/clients/SocketIOTopicServiceClient";
import {MoleculeLoader} from "./services/moleculeloader/moleculeLoader";
import {MemoryTopicServiceClient} from "./services/topic/clients/MemoryTopicServiceClient";
import {TopicServiceConfiguration} from "./services/topic/configuration/TopicServiceConfiguration";

// Don't remove this comment. It's needed to format import lines nicely.

const app: Application = express(feathers());

// Load app configuration
app.configure(configuration());

const topicConfiguration:TopicServiceConfiguration = TopicServiceConfiguration.load(app.get("topicService"));
app.topicService = new TopicService(topicConfiguration);
app.backend = new BackEndService();
app.moleculeLoader = new MoleculeLoader(new MemoryTopicServiceClient(app.topicService), app.backend);


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
    const topicClient = new SocketIOTopicServiceClient(app.topicService, socket);
    console.log("Connecting new client " + topicClient.topicClientId);
  });
  app.topicService.initializeCluster().catch((error) => console.error(error));
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
