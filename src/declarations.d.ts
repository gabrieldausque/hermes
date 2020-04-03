import { Application as ExpressFeathers } from '@feathersjs/express';
import {BackEndService} from "./services/backend/BackEndService";
import {TopicService} from "./services/topic/TopicService";

// A mapping of service names to types. Will be extended in service files.
export interface ServiceTypes {}

export class HermesApp {
  backend?:BackEndService;
  topicService?:TopicService;
}

// The application instance type that will be used everywhere else
export type Application = ExpressFeathers<ServiceTypes> & HermesApp;
