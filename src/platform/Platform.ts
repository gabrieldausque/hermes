import {BackEndService} from "../services/backend/BackEndService";
import {MemoryTopicServiceClient, TopicService} from "../services/topic";
import {MoleculeLoader} from "../services/moleculeloader/moleculeLoader";
import {globalInstancesFactory} from "../services/composition/InstancesFactory";
import {TopicServiceConfiguration} from "../services/topic/configuration/TopicServiceConfiguration";

interface PlatformConfiguration {
  topicService?:object
}

export class Platform {
  backend?:BackEndService;
  topicService?:TopicService;
  moleculeLoader?:MoleculeLoader;
  workers:[];

  constructor(configuration:PlatformConfiguration) {
    this.workers = [];
    const topicConfiguration = TopicServiceConfiguration.load(configuration.topicService);
    this.topicService = globalInstancesFactory.getInstanceFromCatalogs('TopicService', 'Default', topicConfiguration);
    this.backend = new BackEndService();
    this.moleculeLoader = new MoleculeLoader(new MemoryTopicServiceClient(this.topicService), this.backend, this.topicService);
    // TODO : from configuration, read the list of workers, create them using global composition
  }
}
