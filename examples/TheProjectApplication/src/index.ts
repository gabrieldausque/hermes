import logger from './logger';
import app from './app';
import cluster from 'cluster';

let server = null;
const port = app.get('port');
const clusterConfig = app.get("cluster");

if(!clusterConfig || !clusterConfig.isActive || !cluster.isMaster)
   server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server?.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
);
