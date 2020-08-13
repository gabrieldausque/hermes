import path from 'path';
import favicon from 'serve-favicon';
import compress from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import cluster, { worker } from 'cluster';

import feathers from '@feathersjs/feathers';
import configuration from '@feathersjs/configuration';
import express from '@feathersjs/express';
import socketio from '@feathersjs/socketio';

import { Application } from './declarations';
import logger from './logger';
import middleware from './middleware';
import services from './services';
import appHooks from './app.hooks';
import channels from './channels';
import {TopicService, SocketIOTopicServiceClient, MemoryTopicServiceClient} from "@hermes/topicservice";
import {BackEndService} from "./services/backend/BackEndService";
import {MoleculeLoader} from "./services/moleculeloader/moleculeLoader";
import {TopicServiceConfiguration} from "@hermes/topicservice/lib/configuration/TopicServiceConfiguration";
import {globalInstancesFactory} from "@hermes/composition";
import { setGlobalJobManager, JobManagerConfiguration, JobManager, getGlobalJobManager } from '@hermes/jobs';
import Arena from 'bull-arena'
import { BullQueue } from '@hermes/bull-jobs';
// Don't remove this comment. It's needed to format import lines nicely.

const app: Application = express(feathers());
app.configure(configuration());

// Load app configuration
const clusterConfig = app.get("cluster");
if(clusterConfig && clusterConfig.isActive && typeof clusterConfig.workers === 'number' && cluster.isMaster) {
  for(let workerIndex=0; workerIndex < clusterConfig.workers; workerIndex++) {
    cluster.fork();
  }
} else {
  // Initialize globalInstancesFactory
  globalInstancesFactory.loadExportedClassesFromDirectory('../node_modules/@hermes/topicservice/lib');
  globalInstancesFactory.loadExportedClassesFromDirectory('../node_modules/@hermes/bull-jobs/lib');
  globalInstancesFactory.loadExportedClassesFromDirectory('./services');
  globalInstancesFactory.loadExportedClassesFromDirectory('./plugins');

  const topicConfiguration:TopicServiceConfiguration = TopicServiceConfiguration.load(app.get("topicService"));
  app.topicService = globalInstancesFactory.getInstanceFromCatalogs("TopicService", "Default", topicConfiguration);
  app.backend = globalInstancesFactory.getInstanceFromCatalogs("BackEndService","Default");
  app.moleculeLoader = new MoleculeLoader();
  const jobManagerConfiguration:JobManagerConfiguration = app.get("jobManager");
  setGlobalJobManager(new JobManager(jobManagerConfiguration));

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
  app.configure(socketio({
    transports: ['websocket']
  }, (io) => {
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

// Enable Arena for queue monitoring of Bull
  if(jobManagerConfiguration.queuesFactoryExportName === 'Bull') {
    const arenaConfig = {
      Bull: require('bull'),
      queues:[]
    };
    const jobManager = getGlobalJobManager();
    for(const queue of jobManager.getQueues()) {
      const bullQueue = queue as BullQueue
      // @ts-ignore
      arenaConfig.queues.push({
        name:bullQueue.getName(),
        hostId:bullQueue.getName().split('#')[0],
        redis: {
          // @ts-ignore
          port: bullQueue.getPort(),
          // @ts-ignore
          host: bullQueue.getHost()
        }
      })
    }
    const arenaModule = Arena(arenaConfig, {
      basePath:'/jobs',
      disableListen: true,
      useCdn: false
    })
    app.use('/', arenaModule);
  }

// Set up event channels (see channels.js)
  app.configure(channels);

// Configure a middleware for 404s and the error handler
  app.use(express.notFound());
  app.use(express.errorHandler({ logger } as any));

  app.hooks(appHooks);
}

export default app;
