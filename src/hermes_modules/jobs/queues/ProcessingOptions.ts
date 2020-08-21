/**
 * Options to be used by workers, depending on implementation
 */
export interface ProcessingOptions {
  /**
   * handler to be executed when a job is success
   */
  doneHandler:any

  /**
   * handler that will indicate the progress of a job execution
   */
  progressHandler:any

  /**
   * handler to be executed when a job is in error
   */
  errorHandler:any
}
