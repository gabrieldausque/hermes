import { Id, NullableId, Paginated, Params, ServiceMethods } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { NotImplemented } from '@feathersjs/errors';

interface Data {}

interface ServiceOptions {}

export class Job implements ServiceMethods<Data> {
  app: Application;
  options: ServiceOptions;
  private docs: any;

  constructor (options: ServiceOptions = {}, app: Application) {
    this.options = options;
    this.docs = {
      description: 'The job CRUD Service',
      definitions: {
        job:{
          type:'object',
          properties:{
            id: {
              type:'string',
              description: 'the id of the job'
            },
            name: {
              type:'string',
              description:'the name of the job'
            },
          }
        },
      },
      operations:{
        get:{
          description:'Get a project by id',
          'parameters[0]': {
            description:'The id of the searched jobs',
            in:'path',
            name:'id',
            required:true,
            schema:{
              type:'integer'
            }
          },
          'parameters[1]': {
            description:'The id of the searched jobs',
            in:'query',
            name:'queueName',
            required:false,
            schema:{
              type:'string'
            }
          }
        }
      }
    }
    this.app = app;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async find (params?: Params): Promise<Data[] | Paginated<Data>> {
    return [];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async get (id: Id | string, params?: Params): Promise<Data> {
    return await this.app.jobManager.getJob(id.toString(), params.query.queueName);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create (data: Data, params?: Params): Promise<Data> {
    throw new NotImplemented();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update (id: NullableId, data: Data, params?: Params): Promise<Data> {
    throw new NotImplemented();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async patch (id: NullableId, data: Data, params?: Params): Promise<Data> {
    throw new NotImplemented();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async remove (id: NullableId, params?: Params): Promise<Data> {
    throw new NotImplemented();
  }
}
