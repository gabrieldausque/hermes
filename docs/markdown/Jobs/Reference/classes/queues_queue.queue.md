[@hermes/jobs](../README.md) / [Exports](../modules.md) / [queues/Queue](../modules/queues_queue.md) / Queue

# Class: Queue

[queues/Queue](../modules/queues_queue.md).Queue

A Queue that will execute associated worker with specified payload in FIFO mode.

## Hierarchy

* *EventEmitter*

  ↳ **Queue**

  ↳↳ [*InMemoryQueue*](queues_inmemoryqueue.inmemoryqueue.md)

## Table of contents

### Constructors

- [constructor](queues_queue.queue.md#constructor)

### Properties

- [action](queues_queue.queue.md#action)
- [configuration](queues_queue.queue.md#configuration)
- [isQueue](queues_queue.queue.md#isqueue)
- [jobs](queues_queue.queue.md#jobs)
- [name](queues_queue.queue.md#name)
- [paused](queues_queue.queue.md#paused)
- [captureRejectionSymbol](queues_queue.queue.md#capturerejectionsymbol)
- [captureRejections](queues_queue.queue.md#capturerejections)
- [defaultMaxListeners](queues_queue.queue.md#defaultmaxlisteners)
- [errorMonitor](queues_queue.queue.md#errormonitor)

### Methods

- [addListener](queues_queue.queue.md#addlistener)
- [emit](queues_queue.queue.md#emit)
- [eventNames](queues_queue.queue.md#eventnames)
- [getConfiguration](queues_queue.queue.md#getconfiguration)
- [getJob](queues_queue.queue.md#getjob)
- [getJobs](queues_queue.queue.md#getjobs)
- [getMaxListeners](queues_queue.queue.md#getmaxlisteners)
- [getName](queues_queue.queue.md#getname)
- [hasJob](queues_queue.queue.md#hasjob)
- [isPaused](queues_queue.queue.md#ispaused)
- [listenerCount](queues_queue.queue.md#listenercount)
- [listeners](queues_queue.queue.md#listeners)
- [off](queues_queue.queue.md#off)
- [on](queues_queue.queue.md#on)
- [onJobToProcess](queues_queue.queue.md#onjobtoprocess)
- [once](queues_queue.queue.md#once)
- [pause](queues_queue.queue.md#pause)
- [prependListener](queues_queue.queue.md#prependlistener)
- [prependOnceListener](queues_queue.queue.md#prependoncelistener)
- [push](queues_queue.queue.md#push)
- [raiseJobCompleted](queues_queue.queue.md#raisejobcompleted)
- [raiseJobFailed](queues_queue.queue.md#raisejobfailed)
- [raiseJobSuccess](queues_queue.queue.md#raisejobsuccess)
- [raiseQueueError](queues_queue.queue.md#raisequeueerror)
- [raiseReady](queues_queue.queue.md#raiseready)
- [rawListeners](queues_queue.queue.md#rawlisteners)
- [removeAllListeners](queues_queue.queue.md#removealllisteners)
- [removeListener](queues_queue.queue.md#removelistener)
- [resume](queues_queue.queue.md#resume)
- [setMaxListeners](queues_queue.queue.md#setmaxlisteners)
- [start](queues_queue.queue.md#start)
- [stop](queues_queue.queue.md#stop)
- [listenerCount](queues_queue.queue.md#listenercount)
- [on](queues_queue.queue.md#on)
- [once](queues_queue.queue.md#once)

## Constructors

### constructor

\+ `Protected`**new Queue**(`name`: *string*, `configuration?`: *any*): [*Queue*](queues_queue.queue.md)

Create a new queue instance.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name` | *string* | The name of the Queue   |
`configuration?` | *any* | The configuration of the queue. May override default queue options    |

**Returns:** [*Queue*](queues_queue.queue.md)

Defined in: packages/jobs/src/queues/Queue.ts:38

## Properties

### action

• `Protected` `Optional` **action**: [*Action*](../modules/queues_action.md#action)

The action to be executed on job received

Defined in: packages/jobs/src/queues/Queue.ts:18

___

### configuration

• `Protected` **configuration**: *any*

Configuration of the queue used on creation

Defined in: packages/jobs/src/queues/Queue.ts:33

___

### isQueue

• `Readonly` **isQueue**: *boolean*= true

Indicate if the object is a Queue

Defined in: packages/jobs/src/queues/Queue.ts:13

___

### jobs

• `Protected` **jobs**: [*Job*](jobs_job.job.md)[]

A list of jobs to be used internally - TO BE REMOVED

Defined in: packages/jobs/src/queues/Queue.ts:23

___

### name

• `Protected` **name**: *string*

Name of the current Queue

Defined in: packages/jobs/src/queues/Queue.ts:38

___

### paused

• `Protected` **paused**: *boolean*

True if the queue is paused. Usage depends on implementation

Defined in: packages/jobs/src/queues/Queue.ts:28

___

### captureRejectionSymbol

▪ `Readonly` `Static` **captureRejectionSymbol**: *typeof* [*captureRejectionSymbol*](helpers_ticker.ticker.md#capturerejectionsymbol)

Defined in: node_modules/@types/node/events.d.ts:43

___

### captureRejections

▪ `Static` **captureRejections**: *boolean*

Sets or gets the default captureRejection value for all emitters.

Defined in: node_modules/@types/node/events.d.ts:49

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

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

Defined in: node_modules/@types/node/events.d.ts:42

## Methods

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Queue*](queues_queue.queue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Queue*](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:62

___

### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Defined in: node_modules/@types/node/events.d.ts:72

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Defined in: node_modules/@types/node/events.d.ts:77

___

### getConfiguration

▸ **getConfiguration**(): *any*

Get the configuration used on creation

**Returns:** *any*

Defined in: packages/jobs/src/queues/Queue.ts:65

___

### getJob

▸ `Abstract`**getJob**(`jobId`: *string*): *Promise*<[*Job*](jobs_job.job.md)\>

Get the job with corresponding id

#### Parameters:

Name | Type |
:------ | :------ |
`jobId` | *string* |

**Returns:** *Promise*<[*Job*](jobs_job.job.md)\>

Defined in: packages/jobs/src/queues/Queue.ts:87

___

### getJobs

▸ `Abstract`**getJobs**(`filter`: [*JobFilter*](../interfaces/jobs_jobfilter.jobfilter.md)): *Promise*<[*Job*](jobs_job.job.md)[]\>

Get the job with corresponding id

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`filter` | [*JobFilter*](../interfaces/jobs_jobfilter.jobfilter.md) | the filter to get specific jobs    |

**Returns:** *Promise*<[*Job*](jobs_job.job.md)[]\>

Defined in: packages/jobs/src/queues/Queue.ts:93

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:69

___

### getName

▸ **getName**(): *string*

Get the name of the Queue

**Returns:** *string*

Defined in: packages/jobs/src/queues/Queue.ts:72

___

### hasJob

▸ `Abstract`**hasJob**(`jobId`: *string*): *Promise*<boolean\>

True if the queue owns the job with the specified id

#### Parameters:

Name | Type |
:------ | :------ |
`jobId` | *string* |

**Returns:** *Promise*<boolean\>

Defined in: packages/jobs/src/queues/Queue.ts:99

___

### isPaused

▸ **isPaused**(): *boolean*

Indicate if the current Queue is paused

**Returns:** *boolean*

Defined in: packages/jobs/src/queues/Queue.ts:128

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:73

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:70

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Queue*](queues_queue.queue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Queue*](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Queue*](queues_queue.queue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Queue*](queues_queue.queue.md)

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

Defined in: packages/jobs/src/queues/Queue.ts:58

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Queue*](queues_queue.queue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Queue*](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:64

___

### pause

▸ **pause**(): *void*

Pause the current Queue

**Returns:** *void*

Defined in: packages/jobs/src/queues/Queue.ts:114

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Queue*](queues_queue.queue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Queue*](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:75

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Queue*](queues_queue.queue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Queue*](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:76

___

### push

▸ `Abstract`**push**(`actionPayload`: [*PayLoad*](../interfaces/jobs_payload.payload.md), `jobOptions`: { [propName: string]: *any*;  }): *Promise*<[*Job*](jobs_job.job.md)\>

Push a Job with a payload for execution. Return the job that will be executed.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`actionPayload` | [*PayLoad*](../interfaces/jobs_payload.payload.md) | The payload for the job execution   |
`jobOptions` | *object* | The options that can be used for this specific execution. May override processing options.    |

**Returns:** *Promise*<[*Job*](jobs_job.job.md)\>

Defined in: packages/jobs/src/queues/Queue.ts:81

___

### raiseJobCompleted

▸ **raiseJobCompleted**(`job`: [*Job*](jobs_job.job.md)): *void*

As an EventEmitter will raise the 'completed' event for a job that is successful or failed.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`job` | [*Job*](jobs_job.job.md) | The completed job    |

**Returns:** *void*

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

Defined in: packages/jobs/src/queues/Queue.ts:165

___

### raiseReady

▸ **raiseReady**(): *void*

As an EventEmitter will raise the 'ready' event to indicate if the queue is usable

**Returns:** *void*

Defined in: packages/jobs/src/queues/Queue.ts:172

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:71

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*Queue*](queues_queue.queue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *string* \| *symbol* |

**Returns:** [*Queue*](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Queue*](queues_queue.queue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Queue*](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:65

___

### resume

▸ **resume**(): *void*

Resume the current Queue treatment

**Returns:** *void*

Defined in: packages/jobs/src/queues/Queue.ts:121

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*Queue*](queues_queue.queue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*Queue*](queues_queue.queue.md)

Defined in: node_modules/@types/node/events.d.ts:68

___

### start

▸ `Abstract`**start**(): *void*

Start the current Queue

**Returns:** *void*

Defined in: packages/jobs/src/queues/Queue.ts:104

___

### stop

▸ `Abstract`**stop**(): *void*

Stop the current Queue

**Returns:** *void*

Defined in: packages/jobs/src/queues/Queue.ts:109

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

Defined in: node_modules/@types/node/events.d.ts:26

▸ `Static`**once**(`emitter`: DOMEventTarget, `event`: *string*): *Promise*<any[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | DOMEventTarget |
`event` | *string* |

**Returns:** *Promise*<any[]\>

Defined in: node_modules/@types/node/events.d.ts:27
