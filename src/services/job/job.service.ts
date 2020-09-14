// Initializes the `Job` service on path `/job`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Job } from './job.class';
import hooks from './job.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'job': Job & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/job', new Job(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('job');

  service.hooks(hooks);
}
