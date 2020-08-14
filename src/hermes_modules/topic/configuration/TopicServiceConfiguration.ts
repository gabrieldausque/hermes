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
   * indicate if a cluster with distant process needs to be initialized
   */
  public standAlone:boolean;

  /**
   * indicate number of local workers, active the nodejs cluster mode
   */
  public localWorkers: number;

  /**
   * List of all available ports for local TopicService used for nodejs cluster mode
   */
  public localWorkersPorts: number[]

  constructor() {
    this.clusterNodes = [];
    this.localWorkersPorts = [];
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
   * @param excludedHosts The list of host to exclude from the list of host to obtain from
   */
  getRandomHost(excludedHosts?: string[]) {
    if(!Array.isArray(excludedHosts)){
      excludedHosts = [];
    }
    let peerHost:string = '';
    while(!peerHost){
      const randomHost:string = this.clusterNodes[Math.floor(Math.random() * this.clusterNodes.length)];
      if(randomHost !== this.host && excludedHosts.indexOf(randomHost) < 0){
        peerHost = randomHost
      }
    }
    return peerHost;
  }

  getRandomNodejsClusterPort(excludedPorts?: number[]) {
    if(!Array.isArray(excludedPorts)){
      excludedPorts = [];
    }
    let port:number = 0;
    while(!port){
      const randomPort = this.localWorkersPorts[Math.floor(Math.random()* this.localWorkersPorts.length)];
      if (excludedPorts.indexOf(randomPort) < 0) {
        port = randomPort;
      }
    }
    return port;
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

        if(topicServiceConfiguration.localWorkers && topicServiceConfiguration.localWorkers > 1) {
          configurationToReturn.localWorkers = topicServiceConfiguration.localWorkers;
          if(Array.isArray(topicServiceConfiguration.localWorkersPorts)) {
            for(const port of topicServiceConfiguration.localWorkersPorts) {
              if(typeof port === 'number') {
                configurationToReturn.localWorkersPorts.push(port);
              }
            }
          }
        } else {
          configurationToReturn.localWorkers = 1;
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
