import {TopicMessage as TM} from './datas/TopicMessage';
import {ITopicClient as ITC} from './interfaces/ITopicClient';
import {TopicHandler as TH} from "./TopicHandler";
import {BaseTopicClient as BTC} from "./BaseTopicClient";
import {MemoryTopicServiceClient as MTSC} from "./MemoryTopicServiceClient";
import {SocketIOTopicServiceClient as SIOTSC} from "./SocketIOTopicServiceClient";
import {TopicService as TS} from "./TopicService";

export namespace Hermes {
  export namespace Dtos {
    export type TopicMessage = TM;
  }
  export namespace Service {
    export type ITopicClient = ITC;
    export type TopicHandler = TH;
    export type BaseTopicClient = BTC;
    export type MemoryTopicServiceClient = MTSC;
    export type SocketIOTopicServiceClient = SIOTSC;
    export type TopicService = TS;
  }
}

