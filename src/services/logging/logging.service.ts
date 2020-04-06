// Initializes the `logging` service on path `/logging`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Logging } from './logging.class';
import hooks from './logging.hooks';
import {MemoryTopicServiceClient} from "../topic/MemoryTopicServiceClient";

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'logging': Logging & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/logging', new Logging(options, app, new MemoryTopicServiceClient(app.topicService)));

  // Get our initialized service so that we can register hooks
  const service = app.service('logging');

  service.hooks(hooks);
}
