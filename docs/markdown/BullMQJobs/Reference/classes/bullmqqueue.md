[@hermes/jobs](../README.md) › [Globals](../globals.md) › [BullMQQueue](bullmqqueue.md)

# Class: BullMQQueue

The Queue implementation for Bull

## Hierarchy

  ↳ [Queue](queue.md)

  ↳ **BullMQQueue**

## Index

### Constructors

* [constructor](bullmqqueue.md#constructor)

### Properties

* [action](bullmqqueue.md#protected-action)
* [configuration](bullmqqueue.md#protected-configuration)
* [innerQueue](bullmqqueue.md#innerqueue)
* [innerQueueEvents](bullmqqueue.md#innerqueueevents)
* [innerQueueWorker](bullmqqueue.md#innerqueueworker)
* [isClosed](bullmqqueue.md#private-isclosed)
* [isQueue](bullmqqueue.md#isqueue)
* [jobs](bullmqqueue.md#protected-jobs)
* [name](bullmqqueue.md#protected-name)
* [namedAction](bullmqqueue.md#private-namedaction)
* [paused](bullmqqueue.md#protected-paused)
* [runningJobs](bullmqqueue.md#private-runningjobs)

### Methods

* [addListener](bullmqqueue.md#addlistener)
* [emit](bullmqqueue.md#emit)
* [eventNames](bullmqqueue.md#eventnames)
* [executeJob](bullmqqueue.md#private-executejob)
* [getConfiguration](bullmqqueue.md#getconfiguration)
* [getHost](bullmqqueue.md#gethost)
* [getMaxListeners](bullmqqueue.md#getmaxlisteners)
* [getName](bullmqqueue.md#getname)
* [getPort](bullmqqueue.md#getport)
* [isPaused](bullmqqueue.md#ispaused)
* [listenerCount](bullmqqueue.md#listenercount)
* [listeners](bullmqqueue.md#listeners)
* [off](bullmqqueue.md#off)
* [on](bullmqqueue.md#on)
* [onJobToProcess](bullmqqueue.md#onjobtoprocess)
* [once](bullmqqueue.md#once)
* [pause](bullmqqueue.md#pause)
* [prependListener](bullmqqueue.md#prependlistener)
* [prependOnceListener](bullmqqueue.md#prependoncelistener)
* [push](bullmqqueue.md#push)
* [raiseJobCompleted](bullmqqueue.md#raisejobcompleted)
* [raiseJobFailed](bullmqqueue.md#raisejobfailed)
* [raiseJobSuccess](bullmqqueue.md#raisejobsuccess)
* [raiseQueueError](bullmqqueue.md#raisequeueerror)
* [raiseReady](bullmqqueue.md#raiseready)
* [rawListeners](bullmqqueue.md#rawlisteners)
* [removeAllListeners](bullmqqueue.md#removealllisteners)
* [removeListener](bullmqqueue.md#removelistener)
* [resume](bullmqqueue.md#resume)
* [setMaxListeners](bullmqqueue.md#setmaxlisteners)
* [start](bullmqqueue.md#start)
* [stop](bullmqqueue.md#stop)

## Constructors

###  constructor

\+ **new BullMQQueue**(`name`: string, `configuration?`: [BullMQQueueConfiguration](../interfaces/bullmqqueueconfiguration.md)): *[BullMQQueue](bullmqqueue.md)*

*Overrides [Queue](queue.md).[constructor](queue.md#protected-constructor)*

Defined in src/hermes_modules/bullmq-jobs/BullMQQueue.ts:38

Create a new BullQueue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the queue |
`configuration?` | [BullMQQueueConfiguration](../interfaces/bullmqqueueconfiguration.md) | The configuration of the queue.  |

**Returns:** *[BullMQQueue](bullmqqueue.md)*

## Properties

### `Protected` action

• **action**: *[Action](../globals.md#action)*

*Inherited from [Queue](queue.md).[action](queue.md#protected-action)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:19

The action to be executed on job received

___

### `Protected` configuration

• **configuration**: *any*

*Inherited from [Queue](queue.md).[configuration](queue.md#protected-configuration)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:34

Configuration of the queue used on creation

___

###  innerQueue

• **innerQueue**: *InnerQueue*

Defined in src/hermes_modules/bullmq-jobs/BullMQQueue.ts:17

The inner bull queue

___

###  innerQueueEvents

• **innerQueueEvents**: *InnerQueueEvents*

Defined in src/hermes_modules/bullmq-jobs/BullMQQueue.ts:22

The inner bull queue

___

###  innerQueueWorker

• **innerQueueWorker**: *InnerWorker*

Defined in src/hermes_modules/bullmq-jobs/BullMQQueue.ts:27

The inner bull worker

___

### `Private` isClosed

• **isClosed**: *boolean*

Defined in src/hermes_modules/bullmq-jobs/BullMQQueue.ts:38

___

###  isQueue

• **isQueue**: *boolean* = true

*Inherited from [Queue](queue.md).[isQueue](queue.md#isqueue)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:14

Indicate if the object is a Queue

___

### `Protected` jobs

• **jobs**: *[Job](job.md)[]*

*Inherited from [Queue](queue.md).[jobs](queue.md#protected-jobs)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:24

A list of jobs to be used internally - TO BE REMOVED

___

### `Protected` name

• **name**: *string*

*Inherited from [Queue](queue.md).[name](queue.md#protected-name)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:39

Name of the current Queue

___

### `Private` namedAction

• **namedAction**: *object*

Defined in src/hermes_modules/bullmq-jobs/BullMQQueue.ts:32

The set of action used for named jobs

#### Type declaration:

___

### `Protected` paused

• **paused**: *boolean*

*Inherited from [Queue](queue.md).[paused](queue.md#protected-paused)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:29

True if the queue is paused. Usage depends on implementation

___

### `Private` runningJobs

• **runningJobs**: *[BullMQJob](bullmqjob.md)[]*

Defined in src/hermes_modules/bullmq-jobs/BullMQQueue.ts:37

The list of runnings job for the current queue

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Ticker](ticker.md).[addListener](ticker.md#addlistener)*

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

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [Ticker](ticker.md).[emit](ticker.md#emit)*

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

*Inherited from [Ticker](ticker.md).[eventNames](ticker.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:562

**Returns:** *Array‹string | symbol›*

___

### `Private` executeJob

▸ **executeJob**(`bullJob`: InnerJob‹any›): *Promise‹any›*

Defined in src/hermes_modules/bullmq-jobs/BullMQQueue.ts:113

Execute a job

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bullJob` | InnerJob‹any› | the bull job to execute  |

**Returns:** *Promise‹any›*

___

###  getConfiguration

▸ **getConfiguration**(): *any*

*Inherited from [Queue](queue.md).[getConfiguration](queue.md#getconfiguration)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:66

Get the configuration used on creation

**Returns:** *any*

___

###  getHost

▸ **getHost**(): *Promise‹string›*

Defined in src/hermes_modules/bullmq-jobs/BullMQQueue.ts:203

Get the redis host used by this queue

**Returns:** *Promise‹string›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Ticker](ticker.md).[getMaxListeners](ticker.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:554

**Returns:** *number*

___

###  getName

▸ **getName**(): *string*

*Inherited from [Queue](queue.md).[getName](queue.md#getname)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:73

Get the name of the Queue

**Returns:** *string*

___

###  getPort

▸ **getPort**(): *Promise‹number›*

Defined in src/hermes_modules/bullmq-jobs/BullMQQueue.ts:210

Get the port used for the redis connexion

**Returns:** *Promise‹number›*

___

###  isPaused

▸ **isPaused**(): *boolean*

*Inherited from [Queue](queue.md).[isPaused](queue.md#ispaused)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:111

Indicate if the current Queue is paused

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [Ticker](ticker.md).[listenerCount](ticker.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:558

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [Ticker](ticker.md).[listeners](ticker.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:555

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Ticker](ticker.md).[off](ticker.md#off)*

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

*Inherited from [Ticker](ticker.md).[on](ticker.md#on)*

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

▸ **onJobToProcess**(`action`: any, `processingOptions`: [BullProcessingOptions](../interfaces/bullprocessingoptions.md)): *void*

*Overrides [Queue](queue.md).[onJobToProcess](queue.md#onjobtoprocess)*

Defined in src/hermes_modules/bullmq-jobs/BullMQQueue.ts:152

Create the worker to execute on job execution request
See [bullmq](https://docs.bullmq.io/) for processingOptions details

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`action` | any | - | The function to execute on a job receive |
`processingOptions` | [BullProcessingOptions](../interfaces/bullprocessingoptions.md) | {
    name:'default',
    concurrency:1,
    doneHandler: () => { /** Do nothing */ },
    errorHandler: () => { /** Do nothing */ },
    progressHandler: () => { /** Do nothing */ }
  } | The options for the current worker :  |

**Returns:** *void*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Ticker](ticker.md).[once](ticker.md#once)*

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

Defined in src/hermes_modules/jobs/queues/Queue.ts:97

Pause the current Queue

**Returns:** *void*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Ticker](ticker.md).[prependListener](ticker.md#prependlistener)*

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

*Inherited from [Ticker](ticker.md).[prependOnceListener](ticker.md#prependoncelistener)*

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

▸ **push**(`actionPayloadOrJob`: any, `jobOptions`: [BullMQJobOptions](../interfaces/bullmqjoboptions.md)): *[Job](job.md)*

*Overrides [Queue](queue.md).[push](queue.md#abstract-push)*

Defined in src/hermes_modules/bullmq-jobs/BullMQQueue.ts:173

Push a job to be executed

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actionPayloadOrJob` | any | The payload or the job to execute |
`jobOptions` | [BullMQJobOptions](../interfaces/bullmqjoboptions.md) | The options to use for this execution  |

**Returns:** *[Job](job.md)*

___

###  raiseJobCompleted

▸ **raiseJobCompleted**(`job`: [Job](job.md)): *void*

*Inherited from [Queue](queue.md).[raiseJobCompleted](queue.md#raisejobcompleted)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:139

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

Defined in src/hermes_modules/jobs/queues/Queue.ts:130

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

Defined in src/hermes_modules/jobs/queues/Queue.ts:120

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

Defined in src/hermes_modules/jobs/queues/Queue.ts:148

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

Defined in src/hermes_modules/jobs/queues/Queue.ts:155

As an EventEmitter will raise the 'ready' event to indicate if the queue is usable

**Returns:** *void*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [Ticker](ticker.md).[rawListeners](ticker.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:556

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [Ticker](ticker.md).[removeAllListeners](ticker.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:552

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Ticker](ticker.md).[removeListener](ticker.md#removelistener)*

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

###  resume

▸ **resume**(): *void*

*Inherited from [Queue](queue.md).[resume](queue.md#resume)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:104

Resume the current Queue treatment

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [Ticker](ticker.md).[setMaxListeners](ticker.md#setmaxlisteners)*

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

Defined in src/hermes_modules/bullmq-jobs/BullMQQueue.ts:217

Do nothing, bull has no need for a start

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Overrides [Queue](queue.md).[stop](queue.md#abstract-stop)*

Defined in src/hermes_modules/bullmq-jobs/BullMQQueue.ts:280

Close the inner queue

**Returns:** *void*
