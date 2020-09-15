[@hermes/jobs](../README.md) › [Globals](../globals.md) › [InMemoryQueue](inmemoryqueue.md)

# Class: InMemoryQueue

An in memory implementation of queues
Beware : Work In Progress ! Not all features are implemented from now

## Hierarchy

  ↳ [Queue](queue.md)

  ↳ **InMemoryQueue**

## Index

### Constructors

* [constructor](inmemoryqueue.md#constructor)

### Properties

* [action](inmemoryqueue.md#protected-action)
* [bindedOnTick](inmemoryqueue.md#private-bindedontick)
* [configuration](inmemoryqueue.md#protected-configuration)
* [id](inmemoryqueue.md#private-id)
* [isQueue](inmemoryqueue.md#isqueue)
* [jobs](inmemoryqueue.md#protected-jobs)
* [name](inmemoryqueue.md#protected-name)
* [paused](inmemoryqueue.md#protected-paused)
* [runningJobs](inmemoryqueue.md#private-runningjobs)
* [started](inmemoryqueue.md#private-started)
* [startedAtCreation](inmemoryqueue.md#private-startedatcreation)
* [ticker](inmemoryqueue.md#private-ticker)
* [waitingJobs](inmemoryqueue.md#private-waitingjobs)
* [workerPoolSize](inmemoryqueue.md#private-workerpoolsize)
* [nextId](inmemoryqueue.md#static-nextid)

### Methods

* [addListener](inmemoryqueue.md#addlistener)
* [addRunningJob](inmemoryqueue.md#addrunningjob)
* [emit](inmemoryqueue.md#emit)
* [eventNames](inmemoryqueue.md#eventnames)
* [executeJob](inmemoryqueue.md#executejob)
* [getAllRunningJob](inmemoryqueue.md#getallrunningjob)
* [getAllWaitingJob](inmemoryqueue.md#getallwaitingjob)
* [getAvailableWorker](inmemoryqueue.md#getavailableworker)
* [getConfiguration](inmemoryqueue.md#getconfiguration)
* [getJob](inmemoryqueue.md#getjob)
* [getJobs](inmemoryqueue.md#getjobs)
* [getLastRunningJob](inmemoryqueue.md#getlastrunningjob)
* [getLastWaitingJob](inmemoryqueue.md#getlastwaitingjob)
* [getMaxListeners](inmemoryqueue.md#getmaxlisteners)
* [getName](inmemoryqueue.md#getname)
* [hasJob](inmemoryqueue.md#hasjob)
* [hasRunningJobs](inmemoryqueue.md#private-hasrunningjobs)
* [hasWaitingJobs](inmemoryqueue.md#haswaitingjobs)
* [isPaused](inmemoryqueue.md#ispaused)
* [listenerCount](inmemoryqueue.md#listenercount)
* [listeners](inmemoryqueue.md#listeners)
* [off](inmemoryqueue.md#off)
* [on](inmemoryqueue.md#on)
* [onJobToProcess](inmemoryqueue.md#onjobtoprocess)
* [onTick](inmemoryqueue.md#ontick)
* [once](inmemoryqueue.md#once)
* [pause](inmemoryqueue.md#pause)
* [prependListener](inmemoryqueue.md#prependlistener)
* [prependOnceListener](inmemoryqueue.md#prependoncelistener)
* [push](inmemoryqueue.md#push)
* [raiseJobCompleted](inmemoryqueue.md#raisejobcompleted)
* [raiseJobFailed](inmemoryqueue.md#raisejobfailed)
* [raiseJobSuccess](inmemoryqueue.md#raisejobsuccess)
* [raiseQueueError](inmemoryqueue.md#raisequeueerror)
* [raiseReady](inmemoryqueue.md#raiseready)
* [rawListeners](inmemoryqueue.md#rawlisteners)
* [removeAllListeners](inmemoryqueue.md#removealllisteners)
* [removeListener](inmemoryqueue.md#removelistener)
* [removeRunningJob](inmemoryqueue.md#removerunningjob)
* [resume](inmemoryqueue.md#resume)
* [setMaxListeners](inmemoryqueue.md#setmaxlisteners)
* [start](inmemoryqueue.md#start)
* [stop](inmemoryqueue.md#stop)

## Constructors

###  constructor

\+ **new InMemoryQueue**(`name`: any, `configuration?`: any): *[InMemoryQueue](inmemoryqueue.md)*

*Overrides [Queue](queue.md).[constructor](queue.md#protected-constructor)*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:57

Create an InMemoryQueue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | any | The name of the InMemoryQueue |
`configuration?` | any | The configuration to be used for the created InMemoryQueue  |

**Returns:** *[InMemoryQueue](inmemoryqueue.md)*

## Properties

### `Protected` action

• **action**: *[Action](../globals.md#action)*

*Inherited from [Queue](queue.md).[action](queue.md#protected-action)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:18

The action to be executed on job received

___

### `Private` bindedOnTick

• **bindedOnTick**: *any*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:52

The binded to 'this' onTick method

___

### `Protected` configuration

• **configuration**: *any*

*Inherited from [Queue](queue.md).[configuration](queue.md#protected-configuration)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:33

Configuration of the queue used on creation

___

### `Private` id

• **id**: *number*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:27

id of the current InMemoryQueue

___

###  isQueue

• **isQueue**: *boolean* = true

*Inherited from [Queue](queue.md).[isQueue](queue.md#isqueue)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:13

Indicate if the object is a Queue

___

### `Protected` jobs

• **jobs**: *[Job](job.md)[]*

*Inherited from [Queue](queue.md).[jobs](queue.md#protected-jobs)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:23

A list of jobs to be used internally - TO BE REMOVED

___

### `Protected` name

• **name**: *string*

*Inherited from [Queue](queue.md).[name](queue.md#protected-name)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:38

Name of the current Queue

___

### `Protected` paused

• **paused**: *boolean*

*Inherited from [Queue](queue.md).[paused](queue.md#protected-paused)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:28

True if the queue is paused. Usage depends on implementation

___

### `Private` runningJobs

• **runningJobs**: *[Job](job.md)[]*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:32

Jobs currently in execution

___

### `Private` started

• **started**: *boolean*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:47

Indicate if the queue is currently started

___

### `Private` startedAtCreation

• **startedAtCreation**: *boolean*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:42

Indicate if the current queue as to be started directly on creation (at the end of the constructor execution)

___

### `Private` ticker

• **ticker**: *[Ticker](ticker.md)*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:57

The inner Ticker object, used to treat all waiting jobs

___

### `Private` waitingJobs

• **waitingJobs**: *[Job](job.md)[]*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:22

Jobs waiting for executions

___

### `Private` workerPoolSize

• **workerPoolSize**: *number*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:37

Size of workers to be executed "simultaneously" (beware, this is not a multithreaded execution)

___

### `Static` nextId

▪ **nextId**: *number* = 0

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:17

the id management of InMemoryQueues

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Job](job.md).[addListener](job.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:547

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  addRunningJob

▸ **addRunningJob**(`jobToAdd`: [Job](job.md)): *void*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:159

Add a job to the running jobs list

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`jobToAdd` | [Job](job.md) | The job to be added to the running jobs list  |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [Job](job.md).[emit](job.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:557

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [Job](job.md).[eventNames](job.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:562

**Returns:** *Array‹string | symbol›*

___

###  executeJob

▸ **executeJob**(`job`: [Job](job.md)): *Promise‹any›*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:180

Execute the action for the specified job and return the result

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`job` | [Job](job.md) | The job to be executed  |

**Returns:** *Promise‹any›*

___

###  getAllRunningJob

▸ **getAllRunningJob**(): *[Job](job.md)‹›[]*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:131

Return the list of running jobs

**Returns:** *[Job](job.md)‹›[]*

___

###  getAllWaitingJob

▸ **getAllWaitingJob**(): *[Job](job.md)‹›[]*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:124

Return the list of waiting jobs

**Returns:** *[Job](job.md)‹›[]*

___

###  getAvailableWorker

▸ **getAvailableWorker**(): *number*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:91

Get number of idle workers

**Returns:** *number*

___

###  getConfiguration

▸ **getConfiguration**(): *any*

*Inherited from [Queue](queue.md).[getConfiguration](queue.md#getconfiguration)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:65

Get the configuration used on creation

**Returns:** *any*

___

###  getJob

▸ **getJob**(`jobId`: string): *Promise‹[Job](job.md)›*

*Overrides [Queue](queue.md).[getJob](queue.md#abstract-getjob)*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:249

**Parameters:**

Name | Type |
------ | ------ |
`jobId` | string |

**Returns:** *Promise‹[Job](job.md)›*

___

###  getJobs

▸ **getJobs**(`filter`: [JobFilter](../interfaces/jobfilter.md)): *Promise‹[Job](job.md)[]›*

*Overrides [Queue](queue.md).[getJobs](queue.md#abstract-getjobs)*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:257

**Parameters:**

Name | Type |
------ | ------ |
`filter` | [JobFilter](../interfaces/jobfilter.md) |

**Returns:** *Promise‹[Job](job.md)[]›*

___

###  getLastRunningJob

▸ **getLastRunningJob**(): *[Job](job.md)*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:148

Get the oldest running job

**Returns:** *[Job](job.md)*

___

###  getLastWaitingJob

▸ **getLastWaitingJob**(): *[Job](job.md)*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:138

Pop the oldest waiting job that needs execution

**Returns:** *[Job](job.md)*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Job](job.md).[getMaxListeners](job.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:554

**Returns:** *number*

___

###  getName

▸ **getName**(): *string*

*Inherited from [Queue](queue.md).[getName](queue.md#getname)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:72

Get the name of the Queue

**Returns:** *string*

___

###  hasJob

▸ **hasJob**(`jobId`: string): *Promise‹boolean›*

*Overrides [Queue](queue.md).[hasJob](queue.md#abstract-hasjob)*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:253

**Parameters:**

Name | Type |
------ | ------ |
`jobId` | string |

**Returns:** *Promise‹boolean›*

___

### `Private` hasRunningJobs

▸ **hasRunningJobs**(): *boolean*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:117

Indicates if the current InMemoryQueue has running jobs

**Returns:** *boolean*

___

###  hasWaitingJobs

▸ **hasWaitingJobs**(): *boolean*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:110

Indicates if the current InMemoryQueue has waiting jobs

**Returns:** *boolean*

___

###  isPaused

▸ **isPaused**(): *boolean*

*Inherited from [Queue](queue.md).[isPaused](queue.md#ispaused)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:128

Indicate if the current Queue is paused

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [Job](job.md).[listenerCount](job.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:558

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [Job](job.md).[listeners](job.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:555

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Job](job.md).[off](job.md#off)*

Defined in node_modules/@types/node/globals.d.ts:551

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Job](job.md).[on](job.md#on)*

Defined in node_modules/@types/node/globals.d.ts:548

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  onJobToProcess

▸ **onJobToProcess**(`action`: [Action](../globals.md#action), `processingOptions?`: [ProcessingOptions](../interfaces/processingoptions.md)): *void*

*Inherited from [Queue](queue.md).[onJobToProcess](queue.md#onjobtoprocess)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:58

Set the action to be executed on reception of a Job

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`action` | [Action](../globals.md#action) | The Action to execute on a job reception |
`processingOptions?` | [ProcessingOptions](../interfaces/processingoptions.md) | Specific configuration to use on creation of the worker (Depend of the implementation). May override Queue options  |

**Returns:** *void*

___

###  onTick

▸ **onTick**(): *void*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:203

Create running workers based on configuration and current state for waiting jobs

**Returns:** *void*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Job](job.md).[once](job.md#once)*

Defined in node_modules/@types/node/globals.d.ts:549

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  pause

▸ **pause**(): *void*

*Inherited from [Queue](queue.md).[pause](queue.md#pause)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:114

Pause the current Queue

**Returns:** *void*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Job](job.md).[prependListener](job.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:560

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Job](job.md).[prependOnceListener](job.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:561

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  push

▸ **push**(`actionPayload`: any, `jobOptions?`: any): *[Job](job.md)*

*Overrides [Queue](queue.md).[push](queue.md#abstract-push)*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:100

Push a new Job to be executed at the start of the queue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actionPayload` | any | The payload to use for the Job execution |
`jobOptions?` | any | Options to be used for the current execution  |

**Returns:** *[Job](job.md)*

___

###  raiseJobCompleted

▸ **raiseJobCompleted**(`job`: [Job](job.md)): *void*

*Inherited from [Queue](queue.md).[raiseJobCompleted](queue.md#raisejobcompleted)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:156

As an EventEmitter will raise the 'completed' event for a job that is successful or failed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`job` | [Job](job.md) | The completed job  |

**Returns:** *void*

___

###  raiseJobFailed

▸ **raiseJobFailed**(`job`: [Job](job.md), `err`: any): *void*

*Inherited from [Queue](queue.md).[raiseJobFailed](queue.md#raisejobfailed)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:147

As an EventEmitter, will raise the 'failed' event to indicate when a job is failed. Return the job concerned and the Error

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`job` | [Job](job.md) | The failed Job |
`err` | any | The Error or message of the failed execution of the Job  |

**Returns:** *void*

___

###  raiseJobSuccess

▸ **raiseJobSuccess**(`job`: [Job](job.md), `result`: any): *void*

*Inherited from [Queue](queue.md).[raiseJobSuccess](queue.md#raisejobsuccess)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:137

As an EventEmitter, will raise the 'success' event to indicate when a job is successful. Return the job concerned and the result

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`job` | [Job](job.md) | The successful Job |
`result` | any | The result of the execution of the Job  |

**Returns:** *void*

___

###  raiseQueueError

▸ **raiseQueueError**(`err`: any): *void*

*Inherited from [Queue](queue.md).[raiseQueueError](queue.md#raisequeueerror)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:165

As an EventEmitter will raise the 'error' event if the queue encounters an Error

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | any | The error encountered on the queue  |

**Returns:** *void*

___

###  raiseReady

▸ **raiseReady**(): *void*

*Inherited from [Queue](queue.md).[raiseReady](queue.md#raiseready)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:172

As an EventEmitter will raise the 'ready' event to indicate if the queue is usable

**Returns:** *void*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [Job](job.md).[rawListeners](job.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:556

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [Job](job.md).[removeAllListeners](job.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:552

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Job](job.md).[removeListener](job.md#removelistener)*

Defined in node_modules/@types/node/globals.d.ts:550

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  removeRunningJob

▸ **removeRunningJob**(`jobToRemove`: [Job](job.md)): *void*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:169

Remove the specified job from the running jobs list

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`jobToRemove` | [Job](job.md) | The jobs to remove from the running jobs list  |

**Returns:** *void*

___

###  resume

▸ **resume**(): *void*

*Inherited from [Queue](queue.md).[resume](queue.md#resume)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:121

Resume the current Queue treatment

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [Job](job.md).[setMaxListeners](job.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:553

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  start

▸ **start**(): *void*

*Overrides [Queue](queue.md).[start](queue.md#abstract-start)*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:232

Start the queue watch and start running jobs if needed

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Overrides [Queue](queue.md).[stop](queue.md#abstract-stop)*

Defined in src/hermes_modules/jobs/queues/InMemoryQueue.ts:242

Stop the watch of the queue

**Returns:** *void*
