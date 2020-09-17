[@hermes/jobs](../README.md) › [Globals](../globals.md) › [JobManager](jobmanager.md)

# Class: JobManager

A class that will manage execution of jobs through queues. It will help protect usage of crucial resources, limit working rates, etc ...

## Hierarchy

* **JobManager**

## Index

### Constructors

* [constructor](jobmanager.md#constructor)

### Properties

* [defaultQueueConfiguration](jobmanager.md#defaultqueueconfiguration)
* [queues](jobmanager.md#private-queues)
* [queuesFactory](jobmanager.md#private-queuesfactory)

### Methods

* [createQueue](jobmanager.md#createqueue)
* [createWorker](jobmanager.md#createworker)
* [execute](jobmanager.md#execute)
* [getJob](jobmanager.md#getjob)
* [getJobs](jobmanager.md#getjobs)
* [getQueue](jobmanager.md#getqueue)
* [getQueues](jobmanager.md#getqueues)
* [queueExists](jobmanager.md#queueexists)
* [start](jobmanager.md#start)
* [stop](jobmanager.md#stop)

## Constructors

###  constructor

\+ **new JobManager**(`configuration?`: [JobManagerConfiguration](../interfaces/jobmanagerconfiguration.md)): *[JobManager](jobmanager.md)*

Defined in src/hermes_modules/jobs/JobManager.ts:52

Create an instance of JobManager

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`configuration?` | [JobManagerConfiguration](../interfaces/jobmanagerconfiguration.md) | The configuration used by the JobManager  |

**Returns:** *[JobManager](jobmanager.md)*

## Properties

###  defaultQueueConfiguration

• **defaultQueueConfiguration**: *any*

Defined in src/hermes_modules/jobs/JobManager.ts:52

The default configuration to be used in queues

___

### `Private` queues

• **queues**: *object*

Defined in src/hermes_modules/jobs/JobManager.ts:47

All queues by name

#### Type declaration:

* \[ **queueName**: *string*\]: [Queue](queue.md)

___

### `Private` queuesFactory

• **queuesFactory**: *[QueuesFactory](../interfaces/queuesfactory.md)*

Defined in src/hermes_modules/jobs/JobManager.ts:42

The QueuesFactory that will create queues

## Methods

###  createQueue

▸ **createQueue**(`queueName`: string, `queueOptions?`: object): *[Queue](queue.md)*

Defined in src/hermes_modules/jobs/JobManager.ts:148

Create a queue with the specified name and specified options and return it. If no options specified, use the default.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queueName` | string | The name of the Queue to create |
`queueOptions?` | object | The options to use for the creation of the Queue  |

**Returns:** *[Queue](queue.md)*

___

###  createWorker

▸ **createWorker**(`queueName`: string, `action`: [Action](../globals.md#action)): *void*

Defined in src/hermes_modules/jobs/JobManager.ts:161

Attach the specified Action to be executed on post of a job in the Queue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queueName` | string | The name of the Queue to attach the worker on |
`action` | [Action](../globals.md#action) | The Action to be executed  |

**Returns:** *void*

___

###  execute

▸ **execute**(`queueName`: string, `actionPayload`: any, `metadata`: any, `jobOption?`: any): *Promise‹[Job](job.md)›*

Defined in src/hermes_modules/jobs/JobManager.ts:174

Execute a job in the specified Queue, with the specified payload

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`queueName` | string | - | The name of the queue to post the job in |
`actionPayload` | any | null | The payload to use in the job |
`metadata` | any | null | Metadata to enrich information on the job |
`jobOption?` | any | - | A jobOption object that can be used in the queue (Experimental)  |

**Returns:** *Promise‹[Job](job.md)›*

___

###  getJob

▸ **getJob**(`jobId`: string, `queueName?`: string): *Promise‹[Job](job.md)›*

Defined in src/hermes_modules/jobs/JobManager.ts:99

Get a job to see status and error or result for monitoring or post mortem result consumption

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`jobId` | string | The job id to find |
`queueName?` | string | The queue name where to look for the job id  |

**Returns:** *Promise‹[Job](job.md)›*

___

###  getJobs

▸ **getJobs**(`filter`: [JobFilter](../interfaces/jobfilter.md), `queueName?`: string): *Promise‹[Job](job.md)[]›*

Defined in src/hermes_modules/jobs/JobManager.ts:116

Get jobs corresponding to the specified filter

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filter` | [JobFilter](../interfaces/jobfilter.md) | The filter on which to get jobs. valueFilter will be applied on payload functional value, metadata filter on metadata |
`queueName?` | string | The queue name where job has to be searched. If not present, search will be done on all queues  |

**Returns:** *Promise‹[Job](job.md)[]›*

___

###  getQueue

▸ **getQueue**(`queueName`: any): *[Queue](queue.md)‹›*

Defined in src/hermes_modules/jobs/JobManager.ts:87

Get the Queue of the specified name. Create the queue with default configuration if it doesn't exist

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queueName` | any | The name of the Queue wanted  |

**Returns:** *[Queue](queue.md)‹›*

___

###  getQueues

▸ **getQueues**(): *any[]*

Defined in src/hermes_modules/jobs/JobManager.ts:133

Get all Queues of the current JobManager

**Returns:** *any[]*

___

###  queueExists

▸ **queueExists**(`queueName`: string): *boolean*

Defined in src/hermes_modules/jobs/JobManager.ts:79

Test if a Queue with specified name exists

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queueName` | string | The name of the queue tested  |

**Returns:** *boolean*

___

###  start

▸ **start**(): *void*

Defined in src/hermes_modules/jobs/JobManager.ts:184

Start all queues of this JobManager

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

Defined in src/hermes_modules/jobs/JobManager.ts:194

Stop all queues of this JobManager

**Returns:** *void*
