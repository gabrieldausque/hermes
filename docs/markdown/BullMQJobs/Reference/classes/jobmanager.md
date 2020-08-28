[@hermes/jobs](../README.md) › [Globals](../globals.md) › [JobManager](jobmanager.md)

# Class: JobManager

A class that will manage execution of jobs through queues. It will help protect usage of crucial resources, limit working rates, etc ...

## Hierarchy

* **JobManager**

## Index

### Constructors

* [constructor](jobmanager.md#constructor)

### Properties

* [defaultQueueConfiguration](jobmanager.md#private-defaultqueueconfiguration)
* [queues](jobmanager.md#private-queues)
* [queuesFactory](jobmanager.md#private-queuesfactory)

### Methods

* [createQueue](jobmanager.md#createqueue)
* [createWorker](jobmanager.md#createworker)
* [execute](jobmanager.md#execute)
* [getQueue](jobmanager.md#getqueue)
* [getQueues](jobmanager.md#getqueues)
* [queueExists](jobmanager.md#queueexists)
* [start](jobmanager.md#start)
* [stop](jobmanager.md#stop)

## Constructors

###  constructor

\+ **new JobManager**(`configuration?`: [JobManagerConfiguration](../interfaces/jobmanagerconfiguration.md)): *[JobManager](jobmanager.md)*

Defined in src/hermes_modules/jobs/JobManager.ts:50

Create an instance of JobManager

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`configuration?` | [JobManagerConfiguration](../interfaces/jobmanagerconfiguration.md) | The configuration used by the JobManager  |

**Returns:** *[JobManager](jobmanager.md)*

## Properties

### `Private` defaultQueueConfiguration

• **defaultQueueConfiguration**: *any*

Defined in src/hermes_modules/jobs/JobManager.ts:50

The default configuration to be used in queues

___

### `Private` queues

• **queues**: *object*

Defined in src/hermes_modules/jobs/JobManager.ts:45

All queues by name

#### Type declaration:

* \[ **queueName**: *string*\]: [Queue](queue.md)

___

### `Private` queuesFactory

• **queuesFactory**: *[QueuesFactory](../interfaces/queuesfactory.md)*

Defined in src/hermes_modules/jobs/JobManager.ts:40

The QueuesFactory that will create queues

## Methods

###  createQueue

▸ **createQueue**(`queueName`: string, `queueOptions?`: object): *[Queue](queue.md)*

Defined in src/hermes_modules/jobs/JobManager.ts:110

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

Defined in src/hermes_modules/jobs/JobManager.ts:123

Attach the specified Action to be executed on post of a job in the Queue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queueName` | string | The name of the Queue to attach the worker on |
`action` | [Action](../globals.md#action) | The Action to be executed  |

**Returns:** *void*

___

###  execute

▸ **execute**(`queueName`: string, `actionPayload`: any, `context?`: any): *[Job](job.md)*

Defined in src/hermes_modules/jobs/JobManager.ts:135

Execute a job in the specified Queue, with the specified payload

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`queueName` | string | - | The name of the queue to post the job in |
`actionPayload` | any | null | The payload to use in the job |
`context?` | any | - | A context object that can be used in the queue (Experimental)  |

**Returns:** *[Job](job.md)*

___

###  getQueue

▸ **getQueue**(`queueName`: any): *[Queue](queue.md)‹›*

Defined in src/hermes_modules/jobs/JobManager.ts:85

Get the Queue of the specified name. Create the queue with default configuration if it doesn't exist

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queueName` | any | The name of the Queue wanted  |

**Returns:** *[Queue](queue.md)‹›*

___

###  getQueues

▸ **getQueues**(): *any[]*

Defined in src/hermes_modules/jobs/JobManager.ts:95

Get all Queues of the current JobManager

**Returns:** *any[]*

___

###  queueExists

▸ **queueExists**(`queueName`: string): *boolean*

Defined in src/hermes_modules/jobs/JobManager.ts:77

Test if a Queue with specified name exists

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queueName` | string | The name of the queue tested  |

**Returns:** *boolean*

___

###  start

▸ **start**(): *void*

Defined in src/hermes_modules/jobs/JobManager.ts:142

Start all queues of this JobManager

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

Defined in src/hermes_modules/jobs/JobManager.ts:152

Stop all queues of this JobManager

**Returns:** *void*
