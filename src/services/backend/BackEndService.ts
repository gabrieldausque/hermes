import {MemoryStorage} from "./MemoryStorage";
import {NullableProject, ProjectEntity} from "../../datas/entities/ProjectEntity";
import util from "util";
import { globalInstancesFactory } from '@hermes/composition';
import { MemoryTopicServiceClient, TopicService } from '@hermes/topicservice';
const setTimeoutPromise = util.promisify(setTimeout);

export class BackEndService {
  public static metadata:any[] = [
    {
      contractType:"BackEndService",
      contractName:"Default",
      isShared:true
    }
  ];
  private topicClient: MemoryTopicServiceClient;

  constructor(){
    this.store = new MemoryStorage();
    this.topicClient = new MemoryTopicServiceClient(globalInstancesFactory.getInstanceFromCatalogs('TopicService', 'Default'));
    this.topicClient.subscribe('global.project_created', ((topic, topicMessage) => {
      this.store.create(topicMessage.content.name, topicMessage.content.code, topicMessage.content.description);
    }), this);
    this.topicClient.subscribe('*.molecule_loaded', (topic, topicMessage ) => {
      this.store.update(topicMessage.content);
    }, this);
    this.topicClient.subscribe('#.property_added', (topic, topicMessage) => {
      this.store.update(topicMessage.content);
    }, this)
  }
  store:MemoryStorage;

  // usecase
  getProject(id: string):NullableProject {
    return this.store.get(id);
  }

  async createProject(data: ProjectEntity):Promise<ProjectEntity> {
    return await setTimeoutPromise(3000).then(() => {
      return this.store.create(data.name, data.code, data.description);
    })
  }

  updateProject(data: NullableProject) {
    if(data != null) {
      this.store.update(data);
    }
  }

  deleteProject(data: ProjectEntity) {
    this.store.delete(data);
  }

  all():ProjectEntity[] {
    return this.store.all();
  }
}
