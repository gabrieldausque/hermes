import { Application as ExpressFeathers } from '@feathersjs/express';
import {Platform} from "./platform/Platform";

// A mapping of service names to types. Will be extended in service files.
export interface ServiceTypes {}

export class HermesApp {
  platform?:Platform
}

// The application instance type that will be used everywhere else
export type Application = ExpressFeathers<ServiceTypes> & HermesApp;
