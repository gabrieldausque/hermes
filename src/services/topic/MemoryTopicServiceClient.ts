import {TopicService} from "./TopicService";
import {BaseTopicClient} from "./BaseTopicClient";

/**
 * A client that is in the same memory space as the listened {@link TopicService} (in the same nodejs instance)
 */
export class MemoryTopicServiceClient extends BaseTopicClient {
  constructor(service:TopicService){
    super(service);
  }
}
