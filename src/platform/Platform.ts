import {BackEndService} from "../services/backend/BackEndService";
import {TopicService} from "../services/topic";
import {globalInstancesFactory} from "../services/composition/InstancesFactory";
import {TopicServiceConfiguration} from "../services/topic/configuration/TopicServiceConfiguration";

interface PlatformConfiguration {
  topicService?:object,
  platform?:{
    plugins:any[]
  }
}

export class Platform {
  backend?:BackEndService;
  topicService?:TopicService;
  workers:any[];

  constructor(configuration:PlatformConfiguration) {
    this.workers = [];
    const topicConfiguration = TopicServiceConfiguration.load(configuration.topicService);
    this.topicService = globalInstancesFactory.getInstanceFromCatalogs('TopicService', 'Default', topicConfiguration);
    this.backend = globalInstancesFactory.getInstanceFromCatalogs('BackEndService', 'Default');
    configuration.platform.plugins.forEach((plugin) => {
      const {contractType, contractName} = plugin;
      this.workers.push(globalInstancesFactory.getInstanceFromCatalogs(contractType, contractName))
    });

    // TODO : from configuration, read the list of workers, create them using global composition
  }
}
