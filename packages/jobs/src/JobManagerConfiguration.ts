/**
 * The configuration needed for the JobManager
 */
export interface JobManagerConfiguration {
  /**
   * A default configuration that will be passed to any queue created without a configuration specified
   */
  defaultQueueConfiguration?: any;

  /**
   * The export name used to specify the right QueuesFactory
   */
  queuesFactoryExportName:string
}
