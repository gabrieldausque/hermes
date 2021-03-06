// Initializes the `search` service on path `/search`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Search } from './search.class';
import hooks from './search.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'search': Search & ServiceAddons<any>;
  }
}

export default function (app: Application): void {

  // Define a plugins property initialized as an empty array
  const options = {
    paginate: app.get('paginate'),
    plugins: []
  };

  // Read the configuration and add plugins in it
  const searchPlugins = app.get('search').plugins;
  options.plugins = searchPlugins;

  // Initialize our service with any options it requires
  app.use('/search', new Search(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('search');

  service.hooks(hooks);
}
