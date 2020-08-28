[@hermes/jobs](../README.md) › [Globals](../globals.md) › [BullQueue](bullqueue.md)

# Class: BullQueue

The Queue implementation for Bull

## Hierarchy

  ↳ [Queue](queue.md)

  ↳ **BullQueue**

## Index

### Constructors

* [constructor](bullqueue.md#constructor)

### Properties

* [action](bullqueue.md#protected-action)
* [configuration](bullqueue.md#protected-configuration)
* [innerQueue](bullqueue.md#innerqueue)
* [isQueue](bullqueue.md#isqueue)
* [jobs](bullqueue.md#protected-jobs)
* [name](bullqueue.md#protected-name)
* [namedAction](bullqueue.md#private-namedaction)
* [paused](bullqueue.md#protected-paused)
* [runningJobs](bullqueue.md#private-runningjobs)

### Methods

* [addListener](bullqueue.md#addlistener)
* [emit](bullqueue.md#emit)
* [eventNames](bullqueue.md#eventnames)
* [executeJob](bullqueue.md#private-executejob)
* [getConfiguration](bullqueue.md#getconfiguration)
* [getHost](bullqueue.md#gethost)
* [getMaxListeners](bullqueue.md#getmaxlisteners)
* [getName](bullqueue.md#getname)
* [getPort](bullqueue.md#getport)
* [isPaused](bullqueue.md#ispaused)
* [listenerCount](bullqueue.md#listenercount)
* [listeners](bullqueue.md#listeners)
* [off](bullqueue.md#off)
* [on](bullqueue.md#on)
* [onJobToProcess](bullqueue.md#onjobtoprocess)
* [once](bullqueue.md#once)
* [pause](bullqueue.md#pause)
* [prependListener](bullqueue.md#prependlistener)
* [prependOnceListener](bullqueue.md#prependoncelistener)
* [push](bullqueue.md#push)
* [raiseJobCompleted](bullqueue.md#raisejobcompleted)
* [raiseJobFailed](bullqueue.md#raisejobfailed)
* [raiseJobSuccess](bullqueue.md#raisejobsuccess)
* [raiseQueueError](bullqueue.md#raisequeueerror)
* [raiseReady](bullqueue.md#raiseready)
* [rawListeners](bullqueue.md#rawlisteners)
* [removeAllListeners](bullqueue.md#removealllisteners)
* [removeListener](bullqueue.md#removelistener)
* [resume](bullqueue.md#resume)
* [setMaxListeners](bullqueue.md#setmaxlisteners)
* [start](bullqueue.md#start)
* [stop](bullqueue.md#stop)

## Constructors

###  constructor

\+ **new BullQueue**(`name`: string, `configuration?`: [BullQueueConfiguration](../interfaces/bullqueueconfiguration.md)): *[BullQueue](bullqueue.md)*

*Overrides [Queue](queue.md).[constructor](queue.md#protected-constructor)*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:27

Create a new BullQueue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the queue |
`configuration?` | [BullQueueConfiguration](../interfaces/bullqueueconfiguration.md) | The configuration of the queue.  |

**Returns:** *[BullQueue](bullqueue.md)*

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

• **innerQueue**: *any*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:17

The inner bull queue

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

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:22

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

• **runningJobs**: *[BullJob](bulljob.md)[]*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:27

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

▸ **executeJob**(`bullJob`: InnerQueue.Job‹any›): *Promise‹any›*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:99

Execute a job

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bullJob` | InnerQueue.Job‹any› | the bull job to execute  |

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

▸ **getHost**(): *any*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:187

Get the redis host used by this queue

**Returns:** *any*

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

▸ **getPort**(): *any*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:194

Get the port used for the redis connexion

**Returns:** *any*

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

▸ **onJobToProcess**(`action`: any, `processingOptions?`: [BullProcessingOptions](../interfaces/bullprocessingoptions.md)): *void*

*Overrides [Queue](queue.md).[onJobToProcess](queue.md#onjobtoprocess)*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:138

Create the worker to execute on job execution request
See [bull](https://github.com/OptimalBits/bull/blob/HEAD/REFERENCE.md#queueprocess) for processingOptions details

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`action` | any | The function to execute on a job receive |
`processingOptions?` | [BullProcessingOptions](../interfaces/bullprocessingoptions.md) | The options for the current worker :  |

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

▸ **push**(`actionPayloadOrJob`: any, `jobOptions`: [BullJobOptions](../interfaces/bulljoboptions.md)): *[Job](job.md)*

*Overrides [Queue](queue.md).[push](queue.md#abstract-push)*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:156

Push a job to be executed

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actionPayloadOrJob` | any | The payload or the job to execute |
`jobOptions` | [BullJobOptions](../interfaces/bulljoboptions.md) | The options to use for this execution  |

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

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:201

Do nothing, bull has no need for a start

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Overrides [Queue](queue.md).[stop](queue.md#abstract-stop)*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:208

Close the inner queue

**Returns:** *void*
