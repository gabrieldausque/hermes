[@hermes/jobs](../README.md) / [Exports](../modules.md) / [queues/InMemoryQueue](../modules/queues_inmemoryqueue.md) / InMemoryQueue

# Class: InMemoryQueue

[queues/InMemoryQueue](../modules/queues_inmemoryqueue.md).InMemoryQueue

An in memory implementation of queues
Beware : Work In Progress ! Not all features are implemented from now

## Hierarchy

* [*Queue*](queues_queue.queue.md)

  ↳ **InMemoryQueue**

## Table of contents

### Constructors

- [constructor](queues_inmemoryqueue.inmemoryqueue.md#constructor)

### Properties

- [action](queues_inmemoryqueue.inmemoryqueue.md#action)
- [bindedOnTick](queues_inmemoryqueue.inmemoryqueue.md#bindedontick)
- [configuration](queues_inmemoryqueue.inmemoryqueue.md#configuration)
- [id](queues_inmemoryqueue.inmemoryqueue.md#id)
- [isQueue](queues_inmemoryqueue.inmemoryqueue.md#isqueue)
- [jobs](queues_inmemoryqueue.inmemoryqueue.md#jobs)
- [name](queues_inmemoryqueue.inmemoryqueue.md#name)
- [paused](queues_inmemoryqueue.inmemoryqueue.md#paused)
- [runningJobs](queues_inmemoryqueue.inmemoryqueue.md#runningjobs)
- [started](queues_inmemoryqueue.inmemoryqueue.md#started)
- [startedAtCreation](queues_inmemoryqueue.inmemoryqueue.md#startedatcreation)
- [ticker](queues_inmemoryqueue.inmemoryqueue.md#ticker)
- [waitingJobs](queues_inmemoryqueue.inmemoryqueue.md#waitingjobs)
- [workerPoolSize](queues_inmemoryqueue.inmemoryqueue.md#workerpoolsize)
- [captureRejectionSymbol](queues_inmemoryqueue.inmemoryqueue.md#capturerejectionsymbol)
- [captureRejections](queues_inmemoryqueue.inmemoryqueue.md#capturerejections)
- [defaultMaxListeners](queues_inmemoryqueue.inmemoryqueue.md#defaultmaxlisteners)
- [errorMonitor](queues_inmemoryqueue.inmemoryqueue.md#errormonitor)
- [nextId](queues_inmemoryqueue.inmemoryqueue.md#nextid)

### Methods

- [addListener](queues_inmemoryqueue.inmemoryqueue.md#addlistener)
- [addRunningJob](queues_inmemoryqueue.inmemoryqueue.md#addrunningjob)
- [emit](queues_inmemoryqueue.inmemoryqueue.md#emit)
- [eventNames](queues_inmemoryqueue.inmemoryqueue.md#eventnames)
- [executeJob](queues_inmemoryqueue.inmemoryqueue.md#executejob)
- [getAllRunningJob](queues_inmemoryqueue.inmemoryqueue.md#getallrunningjob)
- [getAllWaitingJob](queues_inmemoryqueue.inmemoryqueue.md#getallwaitingjob)
- [getAvailableWorker](queues_inmemoryqueue.inmemoryqueue.md#getavailableworker)
- [getConfiguration](queues_inmemoryqueue.inmemoryqueue.md#getconfiguration)
- [getJob](queues_inmemoryqueue.inmemoryqueue.md#getjob)
- [getJobs](queues_inmemoryqueue.inmemoryqueue.md#getjobs)
- [getLastRunningJob](queues_inmemoryqueue.inmemoryqueue.md#getlastrunningjob)
- [getLastWaitingJob](queues_inmemoryqueue.inmemoryqueue.md#getlastwaitingjob)
- [getMaxListeners](queues_inmemoryqueue.inmemoryqueue.md#getmaxlisteners)
- [getName](queues_inmemoryqueue.inmemoryqueue.md#getname)
- [hasJob](queues_inmemoryqueue.inmemoryqueue.md#hasjob)
- [hasRunningJobs](queues_inmemoryqueue.inmemoryqueue.md#hasrunningjobs)
- [hasWaitingJobs](queues_inmemoryqueue.inmemoryqueue.md#haswaitingjobs)
- [isPaused](queues_inmemoryqueue.inmemoryqueue.md#ispaused)
- [listenerCount](queues_inmemoryqueue.inmemoryqueue.md#listenercount)
- [listeners](queues_inmemoryqueue.inmemoryqueue.md#listeners)
- [off](queues_inmemoryqueue.inmemoryqueue.md#off)
- [on](queues_inmemoryqueue.inmemoryqueue.md#on)
- [onJobToProcess](queues_inmemoryqueue.inmemoryqueue.md#onjobtoprocess)
- [onTick](queues_inmemoryqueue.inmemoryqueue.md#ontick)
- [once](queues_inmemoryqueue.inmemoryqueue.md#once)
- [pause](queues_inmemoryqueue.inmemoryqueue.md#pause)
- [prependListener](queues_inmemoryqueue.inmemoryqueue.md#prependlistener)
- [prependOnceListener](queues_inmemoryqueue.inmemoryqueue.md#prependoncelistener)
- [push](queues_inmemoryqueue.inmemoryqueue.md#push)
- [raiseJobCompleted](queues_inmemoryqueue.inmemoryqueue.md#raisejobcompleted)
- [raiseJobFailed](queues_inmemoryqueue.inmemoryqueue.md#raisejobfailed)
- [raiseJobSuccess](queues_inmemoryqueue.inmemoryqueue.md#raisejobsuccess)
- [raiseQueueError](queues_inmemoryqueue.inmemoryqueue.md#raisequeueerror)
- [raiseReady](queues_inmemoryqueue.inmemoryqueue.md#raiseready)
- [rawListeners](queues_inmemoryqueue.inmemoryqueue.md#rawlisteners)
- [removeAllListeners](queues_inmemoryqueue.inmemoryqueue.md#removealllisteners)
- [removeListener](queues_inmemoryqueue.inmemoryqueue.md#removelistener)
- [removeRunningJob](queues_inmemoryqueue.inmemoryqueue.md#removerunningjob)
- [resume](queues_inmemoryqueue.inmemoryqueue.md#resume)
- [setMaxListeners](queues_inmemoryqueue.inmemoryqueue.md#setmaxlisteners)
- [start](queues_inmemoryqueue.inmemoryqueue.md#start)
- [stop](queues_inmemoryqueue.inmemoryqueue.md#stop)
- [listenerCount](queues_inmemoryqueue.inmemoryqueue.md#listenercount)
- [on](queues_inmemoryqueue.inmemoryqueue.md#on)
- [once](queues_inmemoryqueue.inmemoryqueue.md#once)

## Constructors

### constructor

\+ **new InMemoryQueue**(`name`: *string*, `configuration?`: *any*): [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

Create an InMemoryQueue

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name` | *string* | The name of the InMemoryQueue   |
`configuration?` | *any* | The configuration to be used for the created InMemoryQueue    |

**Returns:** [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

Inherited from: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:57

## Properties

### action

• `Protected` `Optional` **action**: [*Action*](../modules/queues_action.md#action)

The action to be executed on job received

Inherited from: [Queue](queues_queue.queue.md).[action](queues_queue.queue.md#action)

Defined in: packages/jobs/src/queues/Queue.ts:18

___

### bindedOnTick

• `Private` `Readonly` **bindedOnTick**: *any*

The binded to 'this' onTick method

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:52

___

### configuration

• `Protected` **configuration**: *any*

Configuration of the queue used on creation

Inherited from: [Queue](queues_queue.queue.md).[configuration](queues_queue.queue.md#configuration)

Defined in: packages/jobs/src/queues/Queue.ts:33

___

### id

• `Private` **id**: *number*

id of the current InMemoryQueue

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:27

___

### isQueue

• `Readonly` **isQueue**: *boolean*= true

Indicate if the object is a Queue

Inherited from: [Queue](queues_queue.queue.md).[isQueue](queues_queue.queue.md#isqueue)

Defined in: packages/jobs/src/queues/Queue.ts:13

___

### jobs

• `Protected` **jobs**: [*Job*](jobs_job.job.md)[]

A list of jobs to be used internally - TO BE REMOVED

Inherited from: [Queue](queues_queue.queue.md).[jobs](queues_queue.queue.md#jobs)

Defined in: packages/jobs/src/queues/Queue.ts:23

___

### name

• `Protected` **name**: *string*

Name of the current Queue

Inherited from: [Queue](queues_queue.queue.md).[name](queues_queue.queue.md#name)

Defined in: packages/jobs/src/queues/Queue.ts:38

___

### paused

• `Protected` **paused**: *boolean*

True if the queue is paused. Usage depends on implementation

Inherited from: [Queue](queues_queue.queue.md).[paused](queues_queue.queue.md#paused)

Defined in: packages/jobs/src/queues/Queue.ts:28

___

### runningJobs

• `Private` `Readonly` **runningJobs**: [*Job*](jobs_job.job.md)[]

Jobs currently in execution

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:32

___

### started

• `Private` **started**: *boolean*

Indicate if the queue is currently started

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:47

___

### startedAtCreation

• `Private` `Readonly` **startedAtCreation**: *boolean*

Indicate if the current queue as to be started directly on creation (at the end of the constructor execution)

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:42

___

### ticker

• `Private` **ticker**: [*Ticker*](helpers_ticker.ticker.md)

The inner Ticker object, used to treat all waiting jobs

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:57

___

### waitingJobs

• `Private` `Readonly` **waitingJobs**: [*Job*](jobs_job.job.md)[]

Jobs waiting for executions

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:22

___

### workerPoolSize

• `Private` `Readonly` **workerPoolSize**: *number*

Size of workers to be executed "simultaneously" (beware, this is not a multithreaded execution)

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:37

___

### captureRejectionSymbol

▪ `Readonly` `Static` **captureRejectionSymbol**: *typeof* [*captureRejectionSymbol*](helpers_ticker.ticker.md#capturerejectionsymbol)

Inherited from: [Queue](queues_queue.queue.md).[captureRejectionSymbol](queues_queue.queue.md#capturerejectionsymbol)

Defined in: node_modules/@types/node/events.d.ts:43

___

### captureRejections

▪ `Static` **captureRejections**: *boolean*

Sets or gets the default captureRejection value for all emitters.

Inherited from: [Queue](queues_queue.queue.md).[captureRejections](queues_queue.queue.md#capturerejections)

Defined in: node_modules/@types/node/events.d.ts:49

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Inherited from: [Queue](queues_queue.queue.md).[defaultMaxListeners](queues_queue.queue.md#defaultmaxlisteners)

Defined in: node_modules/@types/node/events.d.ts:50

___

### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](helpers_ticker.ticker.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Inherited from: [Queue](queues_queue.queue.md).[errorMonitor](queues_queue.queue.md#errormonitor)

Defined in: node_modules/@types/node/events.d.ts:42

___

### nextId

▪ `Static` **nextId**: *number*= 0

the id management of InMemoryQueues

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:17

## Methods

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:62

___

### addRunningJob

▸ **addRunningJob**(`jobToAdd`: [*Job*](jobs_job.job.md)): *void*

Add a job to the running jobs list

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`jobToAdd` | [*Job*](jobs_job.job.md) | The job to be added to the running jobs list    |

**Returns:** *void*

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:164

___

### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:72

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:77

___

### executeJob

▸ **executeJob**(`job`: [*Job*](jobs_job.job.md)): *Promise*<any\>

Execute the action for the specified job and return the result

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`job` | [*Job*](jobs_job.job.md) | The job to be executed    |

**Returns:** *Promise*<any\>

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:185

___

### getAllRunningJob

▸ **getAllRunningJob**(): [*Job*](jobs_job.job.md)[]

Return the list of running jobs

**Returns:** [*Job*](jobs_job.job.md)[]

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:132

___

### getAllWaitingJob

▸ **getAllWaitingJob**(): [*Job*](jobs_job.job.md)[]

Return the list of waiting jobs

**Returns:** [*Job*](jobs_job.job.md)[]

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:125

___

### getAvailableWorker

▸ **getAvailableWorker**(): *number*

Get number of idle workers

**Returns:** *number*

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:92

___

### getConfiguration

▸ **getConfiguration**(): *any*

Get the configuration used on creation

**Returns:** *any*

Inherited from: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/Queue.ts:65

___

### getJob

▸ **getJob**(`jobId`: *string*): *Promise*<[*Job*](jobs_job.job.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`jobId` | *string* |

**Returns:** *Promise*<[*Job*](jobs_job.job.md)\>

Overrides: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:261

___

### getJobs

▸ **getJobs**(`filter`: [*JobFilter*](../interfaces/jobs_jobfilter.jobfilter.md)): *Promise*<[*Job*](jobs_job.job.md)[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`filter` | [*JobFilter*](../interfaces/jobs_jobfilter.jobfilter.md) |

**Returns:** *Promise*<[*Job*](jobs_job.job.md)[]\>

Overrides: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:272

___

### getLastRunningJob

▸ **getLastRunningJob**(): *null* \| [*Job*](jobs_job.job.md)

Get the oldest running job

**Returns:** *null* \| [*Job*](jobs_job.job.md)

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:151

___

### getLastWaitingJob

▸ **getLastWaitingJob**(): *null* \| [*Job*](jobs_job.job.md)

Pop the oldest waiting job that needs execution

**Returns:** *null* \| [*Job*](jobs_job.job.md)

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:139

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:69

___

### getName

▸ **getName**(): *string*

Get the name of the Queue

**Returns:** *string*

Inherited from: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/Queue.ts:72

___

### hasJob

▸ **hasJob**(`jobId`: *string*): *Promise*<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`jobId` | *string* |

**Returns:** *Promise*<boolean\>

Overrides: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:268

___

### hasRunningJobs

▸ `Private`**hasRunningJobs**(): *boolean*

Indicates if the current InMemoryQueue has running jobs

**Returns:** *boolean*

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:118

___

### hasWaitingJobs

▸ **hasWaitingJobs**(): *boolean*

Indicates if the current InMemoryQueue has waiting jobs

**Returns:** *boolean*

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:111

___

### isPaused

▸ **isPaused**(): *boolean*

Indicate if the current Queue is paused

**Returns:** *boolean*

Inherited from: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/Queue.ts:128

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:73

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:70

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:63

___

### onJobToProcess

▸ **onJobToProcess**(`action`: [*Action*](../modules/queues_action.md#action), `processingOptions?`: [*ProcessingOptions*](../interfaces/queues_processingoptions.processingoptions.md)): *void*

Set the action to be executed on reception of a Job

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`action` | [*Action*](../modules/queues_action.md#action) | The Action to execute on a job reception   |
`processingOptions?` | [*ProcessingOptions*](../interfaces/queues_processingoptions.processingoptions.md) | Specific configuration to use on creation of the worker (Depend of the implementation). May override Queue options    |

**Returns:** *void*

Inherited from: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/Queue.ts:58

___

### onTick

▸ **onTick**(): *void*

Create running workers based on configuration and current state for waiting jobs

**Returns:** *void*

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:215

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:64

___

### pause

▸ **pause**(): *void*

Pause the current Queue

**Returns:** *void*

Inherited from: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/Queue.ts:114

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:75

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:76

___

### push

▸ **push**(`actionPayload`: *any*, `jobOptions?`: *any*): *Promise*<[*Job*](jobs_job.job.md)\>

Push a new Job to be executed at the start of the queue

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`actionPayload` | *any* | The payload to use for the Job execution   |
`jobOptions?` | *any* | Options to be used for the current execution    |

**Returns:** *Promise*<[*Job*](jobs_job.job.md)\>

Overrides: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:101

___

### raiseJobCompleted

▸ **raiseJobCompleted**(`job`: [*Job*](jobs_job.job.md)): *void*

As an EventEmitter will raise the 'completed' event for a job that is successful or failed.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`job` | [*Job*](jobs_job.job.md) | The completed job    |

**Returns:** *void*

Inherited from: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/Queue.ts:156

___

### raiseJobFailed

▸ **raiseJobFailed**(`job`: [*Job*](jobs_job.job.md), `err`: *any*): *void*

As an EventEmitter, will raise the 'failed' event to indicate when a job is failed. Return the job concerned and the Error

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`job` | [*Job*](jobs_job.job.md) | The failed Job   |
`err` | *any* | The Error or message of the failed execution of the Job    |

**Returns:** *void*

Inherited from: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/Queue.ts:147

___

### raiseJobSuccess

▸ **raiseJobSuccess**(`job`: [*Job*](jobs_job.job.md), `result`: *any*): *void*

As an EventEmitter, will raise the 'success' event to indicate when a job is successful. Return the job concerned and the result

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`job` | [*Job*](jobs_job.job.md) | The successful Job   |
`result` | *any* | The result of the execution of the Job    |

**Returns:** *void*

Inherited from: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/Queue.ts:137

___

### raiseQueueError

▸ **raiseQueueError**(`err`: *any*): *void*

As an EventEmitter will raise the 'error' event if the queue encounters an Error

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`err` | *any* | The error encountered on the queue    |

**Returns:** *void*

Inherited from: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/Queue.ts:165

___

### raiseReady

▸ **raiseReady**(): *void*

As an EventEmitter will raise the 'ready' event to indicate if the queue is usable

**Returns:** *void*

Inherited from: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/Queue.ts:172

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:71

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *string* \| *symbol* |

**Returns:** [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:65

___

### removeRunningJob

▸ **removeRunningJob**(`jobToRemove`: [*Job*](jobs_job.job.md)): *void*

Remove the specified job from the running jobs list

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`jobToRemove` | [*Job*](jobs_job.job.md) | The jobs to remove from the running jobs list    |

**Returns:** *void*

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:174

___

### resume

▸ **resume**(): *void*

Resume the current Queue treatment

**Returns:** *void*

Inherited from: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/Queue.ts:121

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:68

___

### start

▸ **start**(): *void*

Start the queue watch and start running jobs if needed

**Returns:** *void*

Overrides: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:244

___

### stop

▸ **stop**(): *void*

Stop the watch of the queue

**Returns:** *void*

Overrides: [Queue](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/InMemoryQueue.ts:254

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | *EventEmitter* |
`event` | *string* \| *symbol* |

**Returns:** *number*

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:31

___

### on

▸ `Static`**on**(`emitter`: *EventEmitter*, `event`: *string*): *AsyncIterableIterator*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | *EventEmitter* |
`event` | *string* |

**Returns:** *AsyncIterableIterator*<any\>

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:28

___

### once

▸ `Static`**once**(`emitter`: *NodeEventTarget*, `event`: *string* \| *symbol*): *Promise*<any[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | *NodeEventTarget* |
`event` | *string* \| *symbol* |

**Returns:** *Promise*<any[]\>

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:26

▸ `Static`**once**(`emitter`: DOMEventTarget, `event`: *string*): *Promise*<any[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | DOMEventTarget |
`event` | *string* |

**Returns:** *Promise*<any[]\>

Inherited from: [Queue](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:27
