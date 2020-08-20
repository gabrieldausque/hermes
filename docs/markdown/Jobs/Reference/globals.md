[@hermes/jobs](README.md) › [Globals](globals.md)

# @hermes/jobs

## Index

### Classes

* [InMemoryQueue](classes/inmemoryqueue.md)
* [InMemoryQueuesFactory](classes/inmemoryqueuesfactory.md)
* [Job](classes/job.md)
* [JobManager](classes/jobmanager.md)
* [Queue](classes/queue.md)
* [Ticker](classes/ticker.md)

### Interfaces

* [JobManagerConfiguration](interfaces/jobmanagerconfiguration.md)
* [ProcessingOptions](interfaces/processingoptions.md)
* [QueuesFactory](interfaces/queuesfactory.md)

### Type aliases

* [Action](globals.md#action)

### Variables

* [globalJobManager](globals.md#let-globaljobmanager)
* [instancesFactory](globals.md#let-instancesfactory)

### Functions

* [getGlobalJobManager](globals.md#getglobaljobmanager)
* [getJobManagerInstancesFactory](globals.md#getjobmanagerinstancesfactory)
* [setGlobalJobManager](globals.md#setglobaljobmanager)
* [setJobManagerInstancesFactory](globals.md#setjobmanagerinstancesfactory)

### Object literals

* [JobStates](globals.md#const-jobstates)

## Type aliases

###  Action

Ƭ **Action**: *function*

Defined in src/hermes_modules/jobs/queues/Action.ts:6

Standard signature of an action to be executed on job reception

#### Type declaration:

▸ (`payloads`: any, `job`: [Job](classes/job.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`payloads` | any |
`job` | [Job](classes/job.md) |

## Variables

### `Let` globalJobManager

• **globalJobManager**: *[JobManager](classes/jobmanager.md)* = new JobManager()

Defined in src/hermes_modules/jobs/JobManager.ts:169

The global shared instance of the JobManager, by default using the InMemoryQueues

___

### `Let` instancesFactory

• **instancesFactory**: *any*

Defined in src/hermes_modules/jobs/JobManager.ts:12

The shared instances factory that can be change through setJobManagerInstancesFactory. Defaulted to globalInstancesFactory

## Functions

###  getGlobalJobManager

▸ **getGlobalJobManager**(): *[JobManager](classes/jobmanager.md)*

Defined in src/hermes_modules/jobs/JobManager.ts:182

Get the global shared instance of the JobManager

**Returns:** *[JobManager](classes/jobmanager.md)*

___

###  getJobManagerInstancesFactory

▸ **getJobManagerInstancesFactory**(): *InstancesFactory*

Defined in src/hermes_modules/jobs/JobManager.ts:28

Get the InstancesFactory that will be used by JobManager

**Returns:** *InstancesFactory*

___

###  setGlobalJobManager

▸ **setGlobalJobManager**(`jobManager`: [JobManager](classes/jobmanager.md)): *void*

Defined in src/hermes_modules/jobs/JobManager.ts:175

Change the global shared instance of the JobManager by the specified instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`jobManager` | [JobManager](classes/jobmanager.md) |   |

**Returns:** *void*

___

###  setJobManagerInstancesFactory

▸ **setJobManagerInstancesFactory**(`factory`: InstancesFactory): *void*

Defined in src/hermes_modules/jobs/JobManager.ts:18

Set the InstancesFactory that will be used to create the QueuesFactory of further created JobManager

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`factory` | InstancesFactory | The factory to use in all futur JobManager  |

**Returns:** *void*

## Object literals

### `Const` JobStates

### ▪ **JobStates**: *object*

Defined in src/hermes_modules/jobs/jobs/JobStates.ts:1

###  done

• **done**: *number* = 2

Defined in src/hermes_modules/jobs/jobs/JobStates.ts:4

###  error

• **error**: *number* = 666

Defined in src/hermes_modules/jobs/jobs/JobStates.ts:5

###  running

• **running**: *number* = 1

Defined in src/hermes_modules/jobs/jobs/JobStates.ts:3

###  timedOut

• **timedOut**: *number* = 777

Defined in src/hermes_modules/jobs/jobs/JobStates.ts:6

###  waiting

• **waiting**: *number* = 0

Defined in src/hermes_modules/jobs/jobs/JobStates.ts:2