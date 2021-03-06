import { Application as ExpressFeathers } from '@feathersjs/express';
import { TopicService} from '@hermes/topicservice'
import {BackEndService} from "./services/backend/BackEndService";
import {MoleculeLoader} from "./services/moleculeloader/moleculeLoader";

// A mapping of service names to types. Will be extended in service files.
export interface ServiceTypes {}

export class ProjectApp {
  topicService?:TopicService;
  backend?:BackEndService;
  moleculeLoader?:MoleculeLoader;
}

// The application instance type that will be used everywhere else
export type Application = ExpressFeathers<ServiceTypes> & ProjectApp;

