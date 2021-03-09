import { Id, NullableId, Paginated, Params, ServiceMethods } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import {globalInstancesFactory} from '@hermes/composition';
import { SearchPlugin } from '../../plugins/search/SearchPlugin';
import { BadRequest } from '@feathersjs/errors';

type Data = string[]

interface ServiceOptions {
  [key: string]: any | any[];
}

export class Search implements ServiceMethods<Data> {
  app: Application;
  options: ServiceOptions;
  plugins: SearchPlugin[];

  constructor (options: ServiceOptions = { plugins:[] }, app: Application) {
    this.options = options;
    this.app = app;
    this.plugins = [];
    for(const pluginName of options.plugins)
    {
      console.log(`Activate search plugin ${pluginName}`)
      this.plugins.push(globalInstancesFactory.getInstanceFromCatalogs('SearchPlugin', pluginName));
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async find (params?: Params): Promise<Data[] | Paginated<Data>> {
    console.debug(params.query);
    if(params && params.query && params.query.keywords){
      const allSearch = [];
      let values = [];
      for(const sp of this.plugins) {
        allSearch.push(sp.search(params.query.keywords))
      }
      await Promise.all(allSearch).then((searchResults) => {
        for(const oneEngineSearchResult of searchResults) {
          values = values.concat(oneEngineSearchResult);
        }
      });
      return values;
    }
    throw new BadRequest('your request was empty. Please add query request')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async get (id: Id, params?: Params): Promise<Data> {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create (data: Data, params?: Params): Promise<Data> {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update (id: NullableId, data: Data, params?: Params): Promise<Data> {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async patch (id: NullableId, data: Data, params?: Params): Promise<Data> {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async remove (id: NullableId, params?: Params): Promise<Data> {
    return null;
  }
}
