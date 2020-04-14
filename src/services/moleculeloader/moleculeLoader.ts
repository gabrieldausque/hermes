import util from 'util';
import {BackEndService} from '../backend/BackEndService';
import {ProjectEntity} from '../../datas/entities/ProjectEntity';
import {MoleculeEntity} from '../../datas/entities/MoleculeEntity';
import {TopicMessage, TopicService, ITopicClient} from "../topic";
const setTimeoutPromise = util.promisify(setTimeout);

export class MoleculeLoader {
  private topicClient: ITopicClient;
  private backendService: BackEndService;
  private topicService: TopicService;
  constructor(topicClient:ITopicClient, backendService:BackEndService, topicService:TopicService) {
    this.topicService = topicService;
    this.topicClient = topicClient;
    this.backendService = backendService;
    this.topicClient.subscribe('global.project_created', this.loadMolecules, this);
    this.topicClient.subscribe('global.project_addmolecule', this.addMolecule, this);
  }

  private async loadMolecules(topicTriggered:string, topicMessage:TopicMessage) {
    const content = topicMessage.content as ProjectEntity;
    const project:ProjectEntity = this.backendService.getProject(content.id.toString());
    if(project) {
      const currentService = this;
      setTimeoutPromise(1000, project).then(this.addRandomMolecule.bind(currentService));
      setTimeoutPromise(3000, project).then(this.addRandomMolecule.bind(currentService))
    }
  }

  private addRandomMolecule(project:ProjectEntity){
      const moleculeIndex = project.molecules.length + 1;
      project.addMolecule(new MoleculeEntity('molecule-' + moleculeIndex,'molecule ' + moleculeIndex  +  ' of the project'));
      this.backendService.updateProject(project);
      this.topicClient.publish(project.id + '.molecule_loaded', project).then(() => {}).catch((error) => console.log('on error : ' + error));
  }

  private async addMolecule(topicTriggered:string, topicMessage:TopicMessage) {
    const projectId = topicMessage.content;
    const currentProject = this.backendService.getProject(projectId);
    if(currentProject !== null){
      this.addRandomMolecule(currentProject);
    } else if(topicMessage.publishedOnServer === this.topicService.serverId) {
      this.topicClient.publish(topicMessage.senderId + ".errors", {
        fromMethod:"addMolecule",
        error: "Missing project with id " + projectId + " in current storage"
      }).catch((error) => "Error while publishing error : " + error);
    }
  }
}
