import {ExportMetadatas} from "../composition";
import {MemoryTopicServiceClient, TopicMessage, TopicService} from "../topic";
import {BackEndService} from "../backend/BackEndService";
import {ProjectEntity} from "../../datas/entities/ProjectEntity";
import {MoleculeEntity} from "../../datas/entities/MoleculeEntity";
import util from "util";
const setTimeoutPromise = util.promisify(setTimeout);

export class PropertyLoader {
  public static metadatas:ExportMetadatas[] = [
    {
      contractType:'PropertyLoader',
      contractName:'Default',
      isShared:false,
      constructorInjectedArgs:[
        {
          contractType:'TopicService',
          contractName:'Default'
        },
        {
          contractType:'BackEndService',
          contractName:'Default'
        }
      ]
    }
  ];
  private topicService: TopicService;
  private topicClient: MemoryTopicServiceClient;
  private backendService: BackEndService;
  constructor(topicService:TopicService, backendService:BackEndService){
    this.topicService = topicService;
    this.backendService = backendService;
    this.topicClient = new MemoryTopicServiceClient(topicService);
    this.topicClient.subscribe('*.molecule_loaded', this.onMoleculeLoaded,this);
  }

  private onMoleculeLoaded(topic,topicMessage:TopicMessage) {
    const projectId:string = topicMessage.content.id.toString();
    const project:ProjectEntity = this.backendService.getProject(projectId);
    if(project) {
      const currentService = this;
      const lastMolecule:MoleculeEntity = project.molecules[project.molecules.length-1];
      setTimeoutPromise(3000, lastMolecule).then((m) => {
        m.addProperty({
          aNewProperty:'ValueOfTheNewProperty'
        });
        currentService.topicClient.publish(projectId + '.' + lastMolecule.moleculeId + '.property_added', project).catch((error) => {
          console.error('Error during molecule property added : ' + error);
        })
      })
    }
  }
}
