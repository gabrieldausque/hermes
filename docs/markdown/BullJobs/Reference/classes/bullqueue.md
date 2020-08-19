[@hermes/bull-jobs](../README.md) › [Globals](../globals.md) › [BullQueue](bullqueue.md)

# Class: BullQueue

## Hierarchy

* Queue

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

*Overrides void*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`configuration?` | [BullQueueConfiguration](../interfaces/bullqueueconfiguration.md) |

**Returns:** *[BullQueue](bullqueue.md)*

## Properties

### `Protected` action

• **action**: *Action*

*Inherited from [BullQueue](bullqueue.md).[action](bullqueue.md#protected-action)*

Defined in src/hermes_modules/jobs/lib/queues/Queue.d.ts:17

The action to be executed on job received

___

### `Protected` configuration

• **configuration**: *any*

*Inherited from [BullQueue](bullqueue.md).[configuration](bullqueue.md#protected-configuration)*

Defined in src/hermes_modules/jobs/lib/queues/Queue.d.ts:29

Configuration of the queue used on creation

___

###  innerQueue

• **innerQueue**: *any*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:9

___

###  isQueue

• **isQueue**: *boolean*

*Inherited from [BullQueue](bullqueue.md).[isQueue](bullqueue.md#isqueue)*

Defined in src/hermes_modules/jobs/lib/queues/Queue.d.ts:13

Indicate if the object is a Queue

___

### `Protected` jobs

• **jobs**: *Job[]*

*Inherited from [BullQueue](bullqueue.md).[jobs](bullqueue.md#protected-jobs)*

Defined in src/hermes_modules/jobs/lib/queues/Queue.d.ts:21

A list of jobs to be used internally - TO BE REMOVED

___

### `Protected` name

• **name**: *string*

*Inherited from [BullQueue](bullqueue.md).[name](bullqueue.md#protected-name)*

Defined in src/hermes_modules/jobs/lib/queues/Queue.d.ts:33

Name of the current Queue

___

### `Private` namedAction

• **namedAction**: *object*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:10

#### Type declaration:

___

### `Protected` paused

• **paused**: *boolean*

*Inherited from [BullQueue](bullqueue.md).[paused](bullqueue.md#protected-paused)*

Defined in src/hermes_modules/jobs/lib/queues/Queue.d.ts:25

True if the queue is paused. Usage depends on implementation

___

### `Private` runningJobs

• **runningJobs**: *[BullJob](bulljob.md)[]*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:11

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [BullJob](bulljob.md).[addListener](bulljob.md#addlistener)*

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

*Inherited from [BullJob](bulljob.md).[emit](bulljob.md#emit)*

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

*Inherited from [BullJob](bulljob.md).[eventNames](bulljob.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:562

**Returns:** *Array‹string | symbol›*

___

### `Private` executeJob

▸ **executeJob**(`bullJob`: InnerQueue.Job‹any›): *Promise‹any›*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`bullJob` | InnerQueue.Job‹any› |

**Returns:** *Promise‹any›*

___

###  getConfiguration

▸ **getConfiguration**(): *any*

*Inherited from [BullQueue](bullqueue.md).[getConfiguration](bullqueue.md#getconfiguration)*

Defined in src/hermes_modules/jobs/lib/queues/Queue.d.ts:49

Get the configuration used on creation

**Returns:** *any*

___

###  getHost

▸ **getHost**(): *any*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:119

**Returns:** *any*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [BullJob](bulljob.md).[getMaxListeners](bulljob.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:554

**Returns:** *number*

___

###  getName

▸ **getName**(): *string*

*Inherited from [BullQueue](bullqueue.md).[getName](bullqueue.md#getname)*

Defined in src/hermes_modules/jobs/lib/queues/Queue.d.ts:53

Get the name of the Queue

**Returns:** *string*

___

###  getPort

▸ **getPort**(): *any*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:123

**Returns:** *any*

___

###  isPaused

▸ **isPaused**(): *boolean*

*Inherited from [BullQueue](bullqueue.md).[isPaused](bullqueue.md#ispaused)*

Defined in src/hermes_modules/jobs/lib/queues/Queue.d.ts:81

Indicate if the current Queue is paused

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [BullJob](bulljob.md).[listenerCount](bulljob.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:558

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [BullJob](bulljob.md).[listeners](bulljob.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:555

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [BullJob](bulljob.md).[off](bulljob.md#off)*

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

*Inherited from [BullJob](bulljob.md).[on](bulljob.md#on)*

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

▸ **onJobToProcess**(`action`: any, `processingOptions?`: any): *void*

*Overrides void*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:78

**Parameters:**

Name | Type |
------ | ------ |
`action` | any |
`processingOptions?` | any |

**Returns:** *void*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [BullJob](bulljob.md).[once](bulljob.md#once)*

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

*Inherited from [BullQueue](bullqueue.md).[pause](bullqueue.md#pause)*

Defined in src/hermes_modules/jobs/lib/queues/Queue.d.ts:73

Pause the current Queue

**Returns:** *void*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [BullJob](bulljob.md).[prependListener](bulljob.md#prependlistener)*

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

*Inherited from [BullJob](bulljob.md).[prependOnceListener](bulljob.md#prependoncelistener)*

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

▸ **push**(`actionPayloadOrJob`: any, `jobOptions`: object): *Job*

*Overrides void*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:91

**Parameters:**

Name | Type |
------ | ------ |
`actionPayloadOrJob` | any |
`jobOptions` | object |

**Returns:** *Job*

___

###  raiseJobCompleted

▸ **raiseJobCompleted**(`job`: Job): *void*

*Inherited from [BullQueue](bullqueue.md).[raiseJobCompleted](bullqueue.md#raisejobcompleted)*

Defined in src/hermes_modules/jobs/lib/queues/Queue.d.ts:98

As an EventEmitter will raise the 'completed' event for a job that is successful or failed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`job` | Job | The completed job  |

**Returns:** *void*

___

###  raiseJobFailed

▸ **raiseJobFailed**(`job`: Job, `err`: any): *void*

*Inherited from [BullQueue](bullqueue.md).[raiseJobFailed](bullqueue.md#raisejobfailed)*

Defined in src/hermes_modules/jobs/lib/queues/Queue.d.ts:93

As an EventEmitter, will raise the 'failed' event to indicate when a job is failed. Return the job concerned and the Error

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`job` | Job | The failed Job |
`err` | any | The Error or message of the failed execution of the Job  |

**Returns:** *void*

___

###  raiseJobSuccess

▸ **raiseJobSuccess**(`job`: Job, `result`: any): *void*

*Inherited from [BullQueue](bullqueue.md).[raiseJobSuccess](bullqueue.md#raisejobsuccess)*

Defined in src/hermes_modules/jobs/lib/queues/Queue.d.ts:87

As an EventEmitter, will raise the 'success' event to indicate when a job is successful. Return the job concerned and the result

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`job` | Job | The successful Job |
`result` | any | The result of the execution of the Job  |

**Returns:** *void*

___

###  raiseQueueError

▸ **raiseQueueError**(`err`: any): *void*

*Inherited from [BullQueue](bullqueue.md).[raiseQueueError](bullqueue.md#raisequeueerror)*

Defined in src/hermes_modules/jobs/lib/queues/Queue.d.ts:103

As an EventEmitter will raise the 'error' event if the queue encounters an Error

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | any | The error encountered on the queue  |

**Returns:** *void*

___

###  raiseReady

▸ **raiseReady**(): *void*

*Inherited from [BullQueue](bullqueue.md).[raiseReady](bullqueue.md#raiseready)*

Defined in src/hermes_modules/jobs/lib/queues/Queue.d.ts:107

As an EventEmitter will raise the 'ready' event to indicate if the queue is usable

**Returns:** *void*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [BullJob](bulljob.md).[rawListeners](bulljob.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:556

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [BullJob](bulljob.md).[removeAllListeners](bulljob.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:552

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [BullJob](bulljob.md).[removeListener](bulljob.md#removelistener)*

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

*Inherited from [BullQueue](bullqueue.md).[resume](bullqueue.md#resume)*

Defined in src/hermes_modules/jobs/lib/queues/Queue.d.ts:77

Resume the current Queue treatment

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [BullJob](bulljob.md).[setMaxListeners](bulljob.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:553

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  start

▸ **start**(): *void*

*Overrides void*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:127

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Overrides void*

Defined in src/hermes_modules/bull-jobs/BullQueue.ts:131

**Returns:** *void*
