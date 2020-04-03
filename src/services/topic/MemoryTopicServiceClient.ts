import {TopicClient} from "./TopicClient";
import {TopicService} from "./TopicService";
import {uuid} from "uuidv4";
import {BaseTopicClient} from "./BaseTopicClient";

export class MemoryTopicServiceClient extends BaseTopicClient {
  constructor(service:TopicService){
    super(service);
  }
}
