import {TopicService} from "./TopicService";
import {BaseTopicClient} from "./BaseTopicClient";

export class MemoryTopicServiceClient extends BaseTopicClient {
  constructor(service:TopicService){
    super(service);
  }
}
