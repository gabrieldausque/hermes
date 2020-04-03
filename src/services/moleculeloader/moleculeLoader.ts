import {TopicClient} from "../topic/TopicClient";
import {BackEndService} from "../backend/BackEndService";
import {ProjectDto} from "../../datas/dtos/ProjectDto";
import util from 'util';
const setTimeoutPromise = util.promisify(setTimeout);

export class MoleculeLoader {
  private topicClient: TopicClient;
  private backendService: BackEndService;
  constructor(topicClient:TopicClient, backendService:BackEndService) {
    this.topicClient = topicClient;
    this.backendService = backendService;
    this.topicClient.subscribe('global.project_created', this.loadMolecules, this);
  }

  private async loadMolecules(topicTriggered:string, topicMessage:any) {
    const project = topicMessage.content;
    try{
      this.backendService.updateProject(project);
      this.topicClient.publish(project.id + '.molecule_loaded', project.id).then(() => {}).catch((error) => console.log('on error : ' + error));
    }
    catch(error)
    {
      console.error("Error while loading molecule : " + error);
    }
    setTimeoutPromise(3000, project).then((p) => {
      this.topicClient.publish(project.id + '.molecule_loaded', project.id).then(() => {});
    })
  }
}
