[@hermes/jobs](../README.md) / [Exports](../modules.md) / [JobManager](../modules/jobmanager.md) / JobManager

# Class: JobManager

[JobManager](../modules/jobmanager.md).JobManager

A class that will manage execution of jobs through queues. It will help protect usage of crucial resources, limit working rates, etc ...

## Table of contents

### Constructors

- [constructor](jobmanager.jobmanager-1.md#constructor)

### Properties

- [defaultQueueConfiguration](jobmanager.jobmanager-1.md#defaultqueueconfiguration)
- [queues](jobmanager.jobmanager-1.md#queues)
- [queuesFactory](jobmanager.jobmanager-1.md#queuesfactory)

### Methods

- [createQueue](jobmanager.jobmanager-1.md#createqueue)
- [createWorker](jobmanager.jobmanager-1.md#createworker)
- [execute](jobmanager.jobmanager-1.md#execute)
- [getJob](jobmanager.jobmanager-1.md#getjob)
- [getJobs](jobmanager.jobmanager-1.md#getjobs)
- [getQueue](jobmanager.jobmanager-1.md#getqueue)
- [getQueues](jobmanager.jobmanager-1.md#getqueues)
- [queueExists](jobmanager.jobmanager-1.md#queueexists)
- [start](jobmanager.jobmanager-1.md#start)
- [stop](jobmanager.jobmanager-1.md#stop)

## Constructors

### constructor

\+ **new JobManager**(`configuration?`: [*JobManagerConfiguration*](../interfaces/jobmanagerconfiguration.jobmanagerconfiguration-1.md)): [*JobManager*](jobmanager.jobmanager-1.md)

Create an instance of JobManager

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`configuration?` | [*JobManagerConfiguration*](../interfaces/jobmanagerconfiguration.jobmanagerconfiguration-1.md) | The configuration used by the JobManager    |

**Returns:** [*JobManager*](jobmanager.jobmanager-1.md)

Defined in: packages/jobs/src/JobManager.ts:52

## Properties

### defaultQueueConfiguration

• `Readonly` **defaultQueueConfiguration**: *any*

The default configuration to be used in queues

Defined in: packages/jobs/src/JobManager.ts:52

___

### queues

• `Private` `Readonly` **queues**: *object*

All queues by name

#### Type declaration:

Defined in: packages/jobs/src/JobManager.ts:47

___

### queuesFactory

• `Private` **queuesFactory**: [*QueuesFactory*](../interfaces/queues_queuesfactory.queuesfactory.md)

The QueuesFactory that will create queues

Defined in: packages/jobs/src/JobManager.ts:42

## Methods

### createQueue

▸ **createQueue**(`queueName`: *string*, `queueOptions?`: *object*): [*Queue*](queues_queue.queue.md)

Create a queue with the specified name and specified options and return it. If no options specified, use the default.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`queueName` | *string* | The name of the Queue to create   |
`queueOptions?` | *object* | The options to use for the creation of the Queue    |

**Returns:** [*Queue*](queues_queue.queue.md)

Defined in: packages/jobs/src/JobManager.ts:148

___

### createWorker

▸ **createWorker**(`queueName`: *string*, `action`: [*Action*](../modules/queues_action.md#action)): *void*

Attach the specified Action to be executed on post of a job in the Queue

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`queueName` | *string* | The name of the Queue to attach the worker on   |
`action` | [*Action*](../modules/queues_action.md#action) | The Action to be executed    |

**Returns:** *void*

Defined in: packages/jobs/src/JobManager.ts:161

___

### execute

▸ **execute**(`queueName`: *string*, `actionPayload?`: *any*, `metadata?`: *any*, `jobOption?`: *any*): *Promise*<[*Job*](jobs_job.job.md)\>

Execute a job in the specified Queue, with the specified payload

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`queueName` | *string* | - | The name of the queue to post the job in   |
`actionPayload` | *any* | null | The payload to use in the job   |
`metadata` | *any* | null | Metadata to enrich information on the job   |
`jobOption?` | *any* | - | A jobOption object that can be used in the queue (Experimental)    |

**Returns:** *Promise*<[*Job*](jobs_job.job.md)\>

Defined in: packages/jobs/src/JobManager.ts:174

___

### getJob

▸ **getJob**(`jobId`: *string*, `queueName?`: *string*): *Promise*<*null* \| [*Job*](jobs_job.job.md)\>

Get a job to see status and error or result for monitoring or post mortem result consumption

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`jobId` | *string* | The job id to find   |
`queueName?` | *string* | The queue name where to look for the job id    |

**Returns:** *Promise*<*null* \| [*Job*](jobs_job.job.md)\>

Defined in: packages/jobs/src/JobManager.ts:99

___

### getJobs

▸ **getJobs**(`filter`: [*JobFilter*](../interfaces/jobs_jobfilter.jobfilter.md), `queueName?`: *string*): *Promise*<[*Job*](jobs_job.job.md)[]\>

Get jobs corresponding to the specified filter

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`filter` | [*JobFilter*](../interfaces/jobs_jobfilter.jobfilter.md) | The filter on which to get jobs. valueFilter will be applied on payload functional value, metadata filter on metadata   |
`queueName?` | *string* | The queue name where job has to be searched. If not present, search will be done on all queues    |

**Returns:** *Promise*<[*Job*](jobs_job.job.md)[]\>

Defined in: packages/jobs/src/JobManager.ts:116

___

### getQueue

▸ **getQueue**(`queueName`: *string*): [*Queue*](queues_queue.queue.md)

Get the Queue of the specified name. Create the queue with default configuration if it doesn't exist

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`queueName` | *string* | The name of the Queue wanted    |

**Returns:** [*Queue*](queues_queue.queue.md)

Defined in: packages/jobs/src/JobManager.ts:87

___

### getQueues

▸ **getQueues**(): [*Queue*](queues_queue.queue.md)[]

Get all Queues of the current JobManager

**Returns:** [*Queue*](queues_queue.queue.md)[]

Defined in: packages/jobs/src/JobManager.ts:133

___

### queueExists

▸ **queueExists**(`queueName`: *string*): *boolean*

Test if a Queue with specified name exists

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`queueName` | *string* | The name of the queue tested    |

**Returns:** *boolean*

Defined in: packages/jobs/src/JobManager.ts:79

___

### start

▸ **start**(): *void*

Start all queues of this JobManager

**Returns:** *void*

Defined in: packages/jobs/src/JobManager.ts:184

___

### stop

▸ **stop**(): *void*

Stop all queues of this JobManager

**Returns:** *void*

Defined in: packages/jobs/src/JobManager.ts:194
