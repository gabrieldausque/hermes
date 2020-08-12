import { Id, NullableId, Paginated, Params, ServiceMethods } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import {NullableProjectDto, ProjectDto} from "../../datas/dtos/ProjectDto";
import {ProjectEntity} from '../../datas/entities/ProjectEntity';
import { getGlobalJobManager, JobStates } from '@hermes/jobs';
import { GeneralError, NotAcceptable, NotFound } from '@feathersjs/errors';

type Data = NullableProjectDto | null;

const jobManager = getGlobalJobManager();

// tslint:disable-next-line:no-empty-interface
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
        molecule:{
          type:'object',
          properties:{
            id: {
              type:'string',
              description: 'the id of the molecule: uuidv4'
            },
            name: {
              type:'string',
              description:'the name of the molecule'
            },
            description: {
              type:'string',
              description:'the description of the molecule'
            }
          }
        },
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
            },
            molecules:{
              $ref: '#/components/schemas/molecule_list'
            }
          }
        },
        molecule_list:{
          type:'array',
          items:{
            $ref: '#/components/schemas/molecule'
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
    const current = this;
    jobManager.createQueue('project#create');
    jobManager.createQueue('project#update');
    jobManager.createQueue('project#get');
    jobManager.createWorker('project#create', async (payload:ProjectDto, job) => {
      console.debug(`Executing ${job.id} from queue project#create`);
      return current.app.backend.createProject(ProjectEntity.loadFromDto(payload));
    });
    jobManager.createWorker('project#update', async (payload:ProjectDto, job) => {
      return current.app.backend.updateProject(ProjectEntity.loadFromDto(payload));
    });
    jobManager.createWorker('project#update', async (payload:ProjectDto, job) => {
      return current.app.backend.getProject(payload.id.toString());
    });
  }

  async find (params?: Params): Promise<Data[] | Paginated<Data>> {
    return this.app.backend.all().map(p => ProjectDto.createFromEntity(p));
  }

  async get (id: Id, params?: Params): Promise<Data> {
    let project:ProjectEntity;
    if(params.query.longProcess) {
      const job = jobManager.execute('project#get', id);
      await job.waitForCompletion();
      if(job.state === JobStates.done) {
        project = job.result;
      } else {
        throw new NotFound(job.err)
      }
    } else {
      project = this.app.backend.getProject(id.toString());
    }
    return ProjectDto.createFromEntity(project);
  }

  async create (data: Data, params?: Params): Promise<any> {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }
    let project:ProjectEntity;
    if(data.needLongProcess) {
      const job = jobManager.execute('project#create', data)
      await job.waitForCompletion();
      if(job.state === JobStates.done) {
        project = job.result;
      } else {
        throw new GeneralError(job.err);
      }
    } else {
      project = this.app.backend.createProject(ProjectEntity.loadFromDto(data));
    }
    const newProject = ProjectDto.createFromEntity(project);
    this.app.topicService.publish("global.project_created", project).catch((error) => {
      console.error("error in create : " + error);
    });
    return newProject;
  }

  async update (id: NullableId, data: Data, params?: Params): Promise<Data> {
    const project = await this.get(id.toString(), params);
    if(project === null)
      await this.create(data, params);
    else
    {
      if(data.needLongProcess) {
        const job = jobManager.execute('project#update', data);
        await job.waitForCompletion();
        if(job.result !== JobStates.done) {
          throw new GeneralError(job.err)
        }
      } else {
        this.app.backend.updateProject(ProjectEntity.loadFromDto(data));
      }
    }
    return data;
  }

  async patch (id: NullableId, data: Data, params?: Params): Promise<Data>
  {
    return this.update(id, data, params);
  }

  async remove (id: NullableId, params?: Params): Promise<Data> {
    const projectToDelete:ProjectEntity = this.app.backend.getProject(id.toString());
    if(projectToDelete !== null){
      this.app.backend.deleteProject(projectToDelete);
    }
    return ProjectDto.createFromEntity(projectToDelete);
  }
}
