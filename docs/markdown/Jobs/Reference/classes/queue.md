[@hermes/jobs](../README.md) › [Globals](../globals.md) › [Queue](queue.md)

# Class: Queue

A Queue that will execute associated worker with specified payload in FIFO mode.

## Hierarchy

* EventEmitter

  ↳ **Queue**

  ↳ [InMemoryQueue](inmemoryqueue.md)

## Index

### Constructors

* [constructor](queue.md#protected-constructor)

### Properties

* [action](queue.md#protected-action)
* [configuration](queue.md#protected-configuration)
* [isQueue](queue.md#isqueue)
* [jobs](queue.md#protected-jobs)
* [name](queue.md#protected-name)
* [paused](queue.md#protected-paused)
* [defaultMaxListeners](queue.md#static-defaultmaxlisteners)

### Methods

* [addListener](queue.md#addlistener)
* [emit](queue.md#emit)
* [eventNames](queue.md#eventnames)
* [getConfiguration](queue.md#getconfiguration)
* [getMaxListeners](queue.md#getmaxlisteners)
* [getName](queue.md#getname)
* [isPaused](queue.md#ispaused)
* [listenerCount](queue.md#listenercount)
* [listeners](queue.md#listeners)
* [off](queue.md#off)
* [on](queue.md#on)
* [onJobToProcess](queue.md#onjobtoprocess)
* [once](queue.md#once)
* [pause](queue.md#pause)
* [prependListener](queue.md#prependlistener)
* [prependOnceListener](queue.md#prependoncelistener)
* [push](queue.md#abstract-push)
* [raiseJobCompleted](queue.md#raisejobcompleted)
* [raiseJobFailed](queue.md#raisejobfailed)
* [raiseJobSuccess](queue.md#raisejobsuccess)
* [raiseQueueError](queue.md#raisequeueerror)
* [raiseReady](queue.md#raiseready)
* [rawListeners](queue.md#rawlisteners)
* [removeAllListeners](queue.md#removealllisteners)
* [removeListener](queue.md#removelistener)
* [resume](queue.md#resume)
* [setMaxListeners](queue.md#setmaxlisteners)
* [start](queue.md#abstract-start)
* [stop](queue.md#abstract-stop)
* [listenerCount](queue.md#static-listenercount)

## Constructors

### `Protected` constructor

\+ **new Queue**(`name`: string, `configuration?`: any): *[Queue](queue.md)*

*Overrides void*

Defined in src/hermes_modules/jobs/queues/Queue.ts:39

Create a new queue instance.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the Queue |
`configuration?` | any | The configuration of the queue. May override default queue options  |

**Returns:** *[Queue](queue.md)*

## Properties

### `Protected` action

• **action**: *[Action](../globals.md#action)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:19

The action to be executed on job received

___

### `Protected` configuration

• **configuration**: *any*

Defined in src/hermes_modules/jobs/queues/Queue.ts:34

Configuration of the queue used on creation

___

###  isQueue

• **isQueue**: *boolean* = true

Defined in src/hermes_modules/jobs/queues/Queue.ts:14

Indicate if the object is a Queue

___

### `Protected` jobs

• **jobs**: *[Job](job.md)[]*

Defined in src/hermes_modules/jobs/queues/Queue.ts:24

A list of jobs to be used internally - TO BE REMOVED

___

### `Protected` name

• **name**: *string*

Defined in src/hermes_modules/jobs/queues/Queue.ts:39

Name of the current Queue

___

### `Protected` paused

• **paused**: *boolean*

Defined in src/hermes_modules/jobs/queues/Queue.ts:29

True if the queue is paused. Usage depends on implementation

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [Job](job.md).[defaultMaxListeners](job.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:45

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

###  getConfiguration

▸ **getConfiguration**(): *any*

Defined in src/hermes_modules/jobs/queues/Queue.ts:66

Get the configuration used on creation

**Returns:** *any*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Job](job.md).[getMaxListeners](job.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:554

**Returns:** *number*

___

###  getName

▸ **getName**(): *string*

Defined in src/hermes_modules/jobs/queues/Queue.ts:73

Get the name of the Queue

**Returns:** *string*

___

###  isPaused

▸ **isPaused**(): *boolean*

Defined in src/hermes_modules/jobs/queues/Queue.ts:111

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

Defined in src/hermes_modules/jobs/queues/Queue.ts:59

Set the action to be executed on reception of a Job

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`action` | [Action](../globals.md#action) | The Action to execute on a job reception |
`processingOptions?` | [ProcessingOptions](../interfaces/processingoptions.md) | Specific configuration to use on creation of the worker (Depend of the implementation). May override Queue options  |

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

Defined in src/hermes_modules/jobs/queues/Queue.ts:97

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

### `Abstract` push

▸ **push**(`actionPayload`: any, `jobOptions`: object): *[Job](job.md)*

Defined in src/hermes_modules/jobs/queues/Queue.ts:82

Push a Job with a payload for execution. Return the job that will be executed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actionPayload` | any | The payload for the job execution |
`jobOptions` | object | The options that can be used for this specific execution. May override processing options.  |

**Returns:** *[Job](job.md)*

___

###  raiseJobCompleted

▸ **raiseJobCompleted**(`job`: [Job](job.md)): *void*

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

Defined in src/hermes_modules/jobs/queues/Queue.ts:155

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

###  resume

▸ **resume**(): *void*

Defined in src/hermes_modules/jobs/queues/Queue.ts:104

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

### `Abstract` start

▸ **start**(): *void*

Defined in src/hermes_modules/jobs/queues/Queue.ts:87

Start the current Queue

**Returns:** *void*

___

### `Abstract` stop

▸ **stop**(): *void*

Defined in src/hermes_modules/jobs/queues/Queue.ts:92

Stop the current Queue

**Returns:** *void*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [Job](job.md).[listenerCount](job.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:44

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
