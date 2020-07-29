/**
 * Represents the configuration used by TopicService for initialization
 */

export class TopicServiceConfiguration {
  /**
   * define the host key for this topic instance, used only for peer to peer selection when connecting to the cluster
   */
  public host:string;
  /**
   * define the list of available nodes for the current cluster topic
   */
  public clusterNodes:string[];

  /**
   * indicate if the cluster needs to be initialized
   */
  public standAlone:boolean;

  constructor() {
    this.clusterNodes = [];
    this.standAlone = true;
  }

  /**
   * Validate the current configuration
   */
  validate() {
    return this.host && Array.isArray(this.clusterNodes) && (this.clusterNodes.length > 0);
  }

  /**
   * Get a random host from current configuration excluding a list of host
   * @param excludeHosts The list of host to exclude from the list of host to obtain from
   */
  getRandomHost(excludeHosts?: string[]) {
    if(!Array.isArray(excludeHosts)){
      excludeHosts = [];
    }
    const peerHost:string = '';
    while(!peerHost){
      const randomHost:string = this.clusterNodes[Math.floor(Math.random() * this.clusterNodes.length)];
      if(randomHost !== this.host && excludeHosts.indexOf(randomHost) < 0){
        return randomHost
      }
    }
  }

  /**
   * Load a topic service configuration from a json object
   * @param topicServiceConfiguration
   */
  static load(topicServiceConfiguration: any) {
    const configurationToReturn = new TopicServiceConfiguration();
    if(topicServiceConfiguration){
        if(topicServiceConfiguration.host && typeof topicServiceConfiguration.host === 'string') {
          configurationToReturn.host = topicServiceConfiguration.host;
        }

        if(topicServiceConfiguration.standAlone === false) {
          configurationToReturn.standAlone = topicServiceConfiguration.standAlone;
        }

        if(Array.isArray(topicServiceConfiguration.clusterNodes)) {
          topicServiceConfiguration.clusterNodes.forEach((node:any) => {
            if(node && typeof node === 'string') {
              configurationToReturn.clusterNodes.push(node);
            }
          })
        }
    }
    return configurationToReturn;
  }
}
