[@hermes/bullmq-jobs](../README.md) / [Exports](../modules.md) / [BullMQQueue](../modules/bullmqqueue.md) / BullMQQueue

# Class: BullMQQueue

[BullMQQueue](../modules/bullmqqueue.md).BullMQQueue

The Queue implementation for Bull

## Hierarchy

* *Queue*

  ↳ **BullMQQueue**

## Table of contents

### Constructors

- [constructor](bullmqqueue.bullmqqueue-1.md#constructor)

### Properties

- [action](bullmqqueue.bullmqqueue-1.md#action)
- [configuration](bullmqqueue.bullmqqueue-1.md#configuration)
- [innerQueue](bullmqqueue.bullmqqueue-1.md#innerqueue)
- [innerQueueEvents](bullmqqueue.bullmqqueue-1.md#innerqueueevents)
- [innerQueueWorker](bullmqqueue.bullmqqueue-1.md#innerqueueworker)
- [isClosed](bullmqqueue.bullmqqueue-1.md#isclosed)
- [isQueue](bullmqqueue.bullmqqueue-1.md#isqueue)
- [jobs](bullmqqueue.bullmqqueue-1.md#jobs)
- [name](bullmqqueue.bullmqqueue-1.md#name)
- [namedAction](bullmqqueue.bullmqqueue-1.md#namedaction)
- [paused](bullmqqueue.bullmqqueue-1.md#paused)
- [runningJobs](bullmqqueue.bullmqqueue-1.md#runningjobs)
- [captureRejectionSymbol](bullmqqueue.bullmqqueue-1.md#capturerejectionsymbol)
- [captureRejections](bullmqqueue.bullmqqueue-1.md#capturerejections)
- [defaultMaxListeners](bullmqqueue.bullmqqueue-1.md#defaultmaxlisteners)
- [errorMonitor](bullmqqueue.bullmqqueue-1.md#errormonitor)

### Methods

- [addListener](bullmqqueue.bullmqqueue-1.md#addlistener)
- [convertInnerJobToBullJob](bullmqqueue.bullmqqueue-1.md#convertinnerjobtobulljob)
- [emit](bullmqqueue.bullmqqueue-1.md#emit)
- [eventNames](bullmqqueue.bullmqqueue-1.md#eventnames)
- [executeJob](bullmqqueue.bullmqqueue-1.md#executejob)
- [getConfiguration](bullmqqueue.bullmqqueue-1.md#getconfiguration)
- [getHost](bullmqqueue.bullmqqueue-1.md#gethost)
- [getJob](bullmqqueue.bullmqqueue-1.md#getjob)
- [getJobs](bullmqqueue.bullmqqueue-1.md#getjobs)
- [getMaxListeners](bullmqqueue.bullmqqueue-1.md#getmaxlisteners)
- [getName](bullmqqueue.bullmqqueue-1.md#getname)
- [getPort](bullmqqueue.bullmqqueue-1.md#getport)
- [hasJob](bullmqqueue.bullmqqueue-1.md#hasjob)
- [isPaused](bullmqqueue.bullmqqueue-1.md#ispaused)
- [listenerCount](bullmqqueue.bullmqqueue-1.md#listenercount)
- [listeners](bullmqqueue.bullmqqueue-1.md#listeners)
- [off](bullmqqueue.bullmqqueue-1.md#off)
- [on](bullmqqueue.bullmqqueue-1.md#on)
- [onJobToProcess](bullmqqueue.bullmqqueue-1.md#onjobtoprocess)
- [once](bullmqqueue.bullmqqueue-1.md#once)
- [pause](bullmqqueue.bullmqqueue-1.md#pause)
- [prependListener](bullmqqueue.bullmqqueue-1.md#prependlistener)
- [prependOnceListener](bullmqqueue.bullmqqueue-1.md#prependoncelistener)
- [push](bullmqqueue.bullmqqueue-1.md#push)
- [raiseJobCompleted](bullmqqueue.bullmqqueue-1.md#raisejobcompleted)
- [raiseJobFailed](bullmqqueue.bullmqqueue-1.md#raisejobfailed)
- [raiseJobSuccess](bullmqqueue.bullmqqueue-1.md#raisejobsuccess)
- [raiseQueueError](bullmqqueue.bullmqqueue-1.md#raisequeueerror)
- [raiseReady](bullmqqueue.bullmqqueue-1.md#raiseready)
- [rawListeners](bullmqqueue.bullmqqueue-1.md#rawlisteners)
- [removeAllListeners](bullmqqueue.bullmqqueue-1.md#removealllisteners)
- [removeListener](bullmqqueue.bullmqqueue-1.md#removelistener)
- [resume](bullmqqueue.bullmqqueue-1.md#resume)
- [setMaxListeners](bullmqqueue.bullmqqueue-1.md#setmaxlisteners)
- [start](bullmqqueue.bullmqqueue-1.md#start)
- [stop](bullmqqueue.bullmqqueue-1.md#stop)
- [listenerCount](bullmqqueue.bullmqqueue-1.md#listenercount)
- [on](bullmqqueue.bullmqqueue-1.md#on)
- [once](bullmqqueue.bullmqqueue-1.md#once)

## Constructors

### constructor

\+ **new BullMQQueue**(`name`: *string*, `configuration?`: [*BullMQQueueConfiguration*](../interfaces/configuration_bullmqqueueconfiguration.bullmqqueueconfiguration.md)): [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

Create a new BullQueue

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name` | *string* | The name of the queue   |
`configuration?` | [*BullMQQueueConfiguration*](../interfaces/configuration_bullmqqueueconfiguration.bullmqqueueconfiguration.md) | The configuration of the queue.    |

**Returns:** [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:38

## Properties

### action

• `Protected` `Optional` **action**: Action

The action to be executed on job received

Defined in: packages/jobs/dist/queues/Queue.d.ts:17

___

### configuration

• `Protected` **configuration**: *any*

Configuration of the queue used on creation

Defined in: packages/jobs/dist/queues/Queue.d.ts:29

___

### innerQueue

• **innerQueue**: *Queue*<any, any, string\>

The inner bull queue

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:17

___

### innerQueueEvents

• **innerQueueEvents**: *QueueEvents*

The inner bull queue

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:22

___

### innerQueueWorker

• `Optional` **innerQueueWorker**: *Worker*<any, any, string\>

The inner bull worker

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:27

___

### isClosed

• `Private` **isClosed**: *boolean*

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:38

___

### isQueue

• `Readonly` **isQueue**: *boolean*

Indicate if the object is a Queue

Defined in: packages/jobs/dist/queues/Queue.d.ts:13

___

### jobs

• `Protected` **jobs**: *Job*[]

A list of jobs to be used internally - TO BE REMOVED

Defined in: packages/jobs/dist/queues/Queue.d.ts:21

___

### name

• `Protected` **name**: *string*

Name of the current Queue

Defined in: packages/jobs/dist/queues/Queue.d.ts:33

___

### namedAction

• `Private` `Readonly` **namedAction**: *object*

The set of action used for named jobs

#### Type declaration:

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:32

___

### paused

• `Protected` **paused**: *boolean*

True if the queue is paused. Usage depends on implementation

Defined in: packages/jobs/dist/queues/Queue.d.ts:25

___

### runningJobs

• `Private` `Readonly` **runningJobs**: [*BullMQJob*](bullmqjob.bullmqjob-1.md)[]

The list of runnings job for the current queue

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:37

___

### captureRejectionSymbol

▪ `Readonly` `Static` **captureRejectionSymbol**: *typeof* [*captureRejectionSymbol*](bullmqjob.bullmqjob-1.md#capturerejectionsymbol)

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

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](bullmqjob.bullmqjob-1.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:42

## Methods

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

Defined in: node_modules/@types/node/events.d.ts:62

___

### convertInnerJobToBullJob

▸ `Private`**convertInnerJobToBullJob**(`bullJob`: *Job*<any, any, string\>): *Promise*<[*BullMQJob*](bullmqjob.bullmqjob-1.md)\>

Convert a job object from bull package to BullJob object

#### Parameters:

Name | Type |
:------ | :------ |
`bullJob` | *Job*<any, any, string\> |

**Returns:** *Promise*<[*BullMQJob*](bullmqjob.bullmqjob-1.md)\>

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:296

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

### executeJob

▸ `Private`**executeJob**(`bullJob`: *Job*<any, any, string\>): *Promise*<any\>

Execute a job

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`bullJob` | *Job*<any, any, string\> | the bull job to execute    |

**Returns:** *Promise*<any\>

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:116

___

### getConfiguration

▸ **getConfiguration**(): *any*

Get the configuration used on creation

**Returns:** *any*

Defined in: packages/jobs/dist/queues/Queue.d.ts:49

___

### getHost

▸ **getHost**(): *Promise*<undefined \| string\>

Get the redis host used by this queue

**Returns:** *Promise*<undefined \| string\>

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:207

___

### getJob

▸ **getJob**(`jobId`: *string*): *Promise*<Job\>

Get the job with the corresponding id

#### Parameters:

Name | Type |
:------ | :------ |
`jobId` | *string* |

**Returns:** *Promise*<Job\>

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:325

___

### getJobs

▸ **getJobs**(`filter`: JobFilter): *Promise*<Job[]\>

Get a list of jobs that match payload value filter and/or metadata filter

#### Parameters:

Name | Type |
:------ | :------ |
`filter` | JobFilter |

**Returns:** *Promise*<Job[]\>

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:349

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

Defined in: packages/jobs/dist/queues/Queue.d.ts:53

___

### getPort

▸ **getPort**(): *Promise*<undefined \| number\>

Get the port used for the redis connexion

**Returns:** *Promise*<undefined \| number\>

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:214

___

### hasJob

▸ **hasJob**(`jobId`: *string*): *Promise*<boolean\>

Check if the job with corresponding id is in the current queue

#### Parameters:

Name | Type |
:------ | :------ |
`jobId` | *string* |

**Returns:** *Promise*<boolean\>

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:340

___

### isPaused

▸ **isPaused**(): *boolean*

Indicate if the current Queue is paused

**Returns:** *boolean*

Defined in: packages/jobs/dist/queues/Queue.d.ts:96

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

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

Defined in: node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

Defined in: node_modules/@types/node/events.d.ts:63

___

### onJobToProcess

▸ **onJobToProcess**(`action`: *any*, `processingOptions?`: [*BullProcessingOptions*](../interfaces/configuration_bullprocessingoptions.bullprocessingoptions.md)): *void*

Create the worker to execute on job execution request
See [bullmq](https://docs.bullmq.io/) for processingOptions details

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`action` | *any* | The function to execute on a job receive   |
`processingOptions` | [*BullProcessingOptions*](../interfaces/configuration_bullprocessingoptions.bullprocessingoptions.md) | The options for the current worker :    |

**Returns:** *void*

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:154

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

Defined in: node_modules/@types/node/events.d.ts:64

___

### pause

▸ **pause**(): *void*

Pause the current Queue

**Returns:** *void*

Defined in: packages/jobs/dist/queues/Queue.d.ts:88

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

Defined in: node_modules/@types/node/events.d.ts:75

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

Defined in: node_modules/@types/node/events.d.ts:76

___

### push

▸ **push**(`actionPayloadOrJob`: *any*, `jobOptions`: [*BullMQJobOptions*](../interfaces/configuration_bullmqjoboptions.bullmqjoboptions.md)): *Promise*<Job\>

Push a job to be executed

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`actionPayloadOrJob` | *any* | The payload or the job to execute   |
`jobOptions` | [*BullMQJobOptions*](../interfaces/configuration_bullmqjoboptions.bullmqjoboptions.md) | The options to use for this execution    |

**Returns:** *Promise*<Job\>

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:175

___

### raiseJobCompleted

▸ **raiseJobCompleted**(`job`: *Job*): *void*

As an EventEmitter will raise the 'completed' event for a job that is successful or failed.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`job` | *Job* | The completed job    |

**Returns:** *void*

Defined in: packages/jobs/dist/queues/Queue.d.ts:113

___

### raiseJobFailed

▸ **raiseJobFailed**(`job`: *Job*, `err`: *any*): *void*

As an EventEmitter, will raise the 'failed' event to indicate when a job is failed. Return the job concerned and the Error

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`job` | *Job* | The failed Job   |
`err` | *any* | The Error or message of the failed execution of the Job    |

**Returns:** *void*

Defined in: packages/jobs/dist/queues/Queue.d.ts:108

___

### raiseJobSuccess

▸ **raiseJobSuccess**(`job`: *Job*, `result`: *any*): *void*

As an EventEmitter, will raise the 'success' event to indicate when a job is successful. Return the job concerned and the result

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`job` | *Job* | The successful Job   |
`result` | *any* | The result of the execution of the Job    |

**Returns:** *void*

Defined in: packages/jobs/dist/queues/Queue.d.ts:102

___

### raiseQueueError

▸ **raiseQueueError**(`err`: *any*): *void*

As an EventEmitter will raise the 'error' event if the queue encounters an Error

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`err` | *any* | The error encountered on the queue    |

**Returns:** *void*

Defined in: packages/jobs/dist/queues/Queue.d.ts:118

___

### raiseReady

▸ **raiseReady**(): *void*

As an EventEmitter will raise the 'ready' event to indicate if the queue is usable

**Returns:** *void*

Defined in: packages/jobs/dist/queues/Queue.d.ts:122

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

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *string* \| *symbol* |

**Returns:** [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

Defined in: node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

Defined in: node_modules/@types/node/events.d.ts:65

___

### resume

▸ **resume**(): *void*

Resume the current Queue treatment

**Returns:** *void*

Defined in: packages/jobs/dist/queues/Queue.d.ts:92

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*BullMQQueue*](bullmqqueue.bullmqqueue-1.md)

Defined in: node_modules/@types/node/events.d.ts:68

___

### start

▸ **start**(): *void*

Do nothing, bull has no need for a start

**Returns:** *void*

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:221

___

### stop

▸ **stop**(): *void*

Close the inner queue

**Returns:** *void*

Defined in: packages/bullmq-jobs/src/BullMQQueue.ts:284

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
