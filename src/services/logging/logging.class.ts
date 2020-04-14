import { Id, NullableId, Paginated, Params, ServiceMethods } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import {TopicMessage} from "../topic/datas/TopicMessage";
import {ITopicClient} from "../topic/interfaces/ITopicClient";

type Data = TopicMessage | null;

interface ServiceOptions {}

export class Logging implements ServiceMethods<Data> {
  app: Application;
  options: ServiceOptions;
  private topicClient: ITopicClient;
  private memoryStorage: TopicMessage[];

  constructor (options: ServiceOptions = {}, app: Application, topicClient:ITopicClient) {
    this.options = options;
    this.app = app;
    this.memoryStorage = [];
    this.topicClient = topicClient;
    this.topicClient.subscribe('#', (topic:string,topicMessage:TopicMessage) => {
      this.memoryStorage.push(topicMessage);
      if(topicMessage.fromTopic !== 'global.log_received') {
        this.topicClient.publish('global.log_received', topicMessage.content);
      }

    }, this);

  }

  async find (params?: Params): Promise<Data[] | Paginated<Data>> {
    return this.memoryStorage;
  }

  async get (id: Id, params?: Params): Promise<Data> {
    return null;
  }

  async create (data: Data, params?: Params): Promise<Data> {
   return null;
  }

  async update (id: NullableId, data: Data, params?: Params): Promise<Data> {
    return null;
  }

  async patch (id: NullableId, data: Data, params?: Params): Promise<Data> {
    return null;
  }

  async remove (id: NullableId, params?: Params): Promise<Data> {
    return null;
  }
}
