import { Id, NullableId, Paginated, Params, ServiceMethods } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import {NullableProjectDto, ProjectDto} from "../../datas/dtos/ProjectDto";

type Data = NullableProjectDto | null;

interface ServiceOptions {}

export class Project implements ServiceMethods<Data> {
  app: Application;
  options: ServiceOptions;
  docs:any;
  constructor (options: ServiceOptions = {}, app: Application) {
    this.options = options;
    this.app = app;
    this.docs = {
      description: 'The project CRUD Service',
      definitions: {
        project:{
          type:'object',
          required:[
            'name',
            'code'
          ],
          properties: {
            id: {
              type:'string',
              description: 'the id of the project: uuidv4'
            },
            name: {
              type:'string',
              description:'the name of the project'
            },
            code:{
              type:'string',
              description: 'the code of the project'
            },
            description:{
              type:'string',
              description:'the description of the project'
            }
          }
        },
        project_list:{
          type:'array',
          items:{
            $ref: '#/components/schemas/project'
          }
        }
      },
      operations:{
        get:{
          description:'Get a project by id',
          'parameters[0]': {
            description:'The id of the searched project',
            in:'path',
            name:'id',
            required:true,
            schema:{
              type:'string',
              format:'uuid'
            }
          }
        },
        create:{
          description:'Create a new project',
          requestBody:{
            description:"a project dto without id",
            content:{
              "application/json":{
                schema:{
                  type:'object',
                  required:[
                    'name',
                    'code'
                  ],
                  properties: {
                    name: {
                      type:'string',
                      description:'the name of the project'
                    },
                    code:{
                      type:'string',
                      description: 'the code of the project'
                    },
                    description:{
                      type:'string',
                      description:'the description of the project'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  async find (params?: Params): Promise<Data[] | Paginated<Data>> {
    return this.app.backend.all().map(p => ProjectDto.createFromEntity(p));
  }

  async get (id: Id, params?: Params): Promise<Data> {
    const project = this.app.backend.getProject(id.toString());
    return ProjectDto.createFromEntity(project);
  }

  async create (data: Data, params?: Params): Promise<any> {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }
    const project = this.app.backend.createProject(data);
    return ProjectDto.createFromEntity(project);
  }

  async update (id: NullableId, data: Data, params?: Params): Promise<Data> {
    const project = await this.get(id.toString(), params);
    if(project === null)
      this.create(data, params);
    else
    {
      this.app.backend.updateProject(data);
    }

    return data;
  }

  async patch (id: NullableId, data: Data, params?: Params): Promise<Data>
  {
    return await this.update(id, data, params);
  }

  async remove (id: NullableId, params?: Params): Promise<Data> {
    const projectToDelete = this.app.backend.getProject(id.toString());
    if(projectToDelete !== null){
      this.app.backend.deleteProject(projectToDelete);
    }
    return projectToDelete;
  }
}
