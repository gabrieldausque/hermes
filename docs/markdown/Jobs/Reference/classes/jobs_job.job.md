[@hermes/jobs](../README.md) / [Exports](../modules.md) / [jobs/Job](../modules/jobs_job.md) / Job

# Class: Job

[jobs/Job](../modules/jobs_job.md).Job

## Hierarchy

* *EventEmitter*

  ↳ **Job**

## Table of contents

### Constructors

- [constructor](jobs_job.job.md#constructor)

### Properties

- [err](jobs_job.job.md#err)
- [id](jobs_job.job.md#id)
- [jobOptions](jobs_job.job.md#joboptions)
- [payload](jobs_job.job.md#payload)
- [progress](jobs_job.job.md#progress)
- [progressMessage](jobs_job.job.md#progressmessage)
- [result](jobs_job.job.md#result)
- [state](jobs_job.job.md#state)
- [toExecute](jobs_job.job.md#toexecute)
- [captureRejectionSymbol](jobs_job.job.md#capturerejectionsymbol)
- [captureRejections](jobs_job.job.md#capturerejections)
- [defaultMaxListeners](jobs_job.job.md#defaultmaxlisteners)
- [errorMonitor](jobs_job.job.md#errormonitor)

### Methods

- [addListener](jobs_job.job.md#addlistener)
- [emit](jobs_job.job.md#emit)
- [eventNames](jobs_job.job.md#eventnames)
- [getMaxListeners](jobs_job.job.md#getmaxlisteners)
- [listenerCount](jobs_job.job.md#listenercount)
- [listeners](jobs_job.job.md#listeners)
- [off](jobs_job.job.md#off)
- [on](jobs_job.job.md#on)
- [once](jobs_job.job.md#once)
- [prependListener](jobs_job.job.md#prependlistener)
- [prependOnceListener](jobs_job.job.md#prependoncelistener)
- [raiseCompletedEvent](jobs_job.job.md#raisecompletedevent)
- [raiseFailedEvent](jobs_job.job.md#raisefailedevent)
- [raiseProgressEvent](jobs_job.job.md#raiseprogressevent)
- [raiseSuccessEvent](jobs_job.job.md#raisesuccessevent)
- [rawListeners](jobs_job.job.md#rawlisteners)
- [removeAllListeners](jobs_job.job.md#removealllisteners)
- [removeListener](jobs_job.job.md#removelistener)
- [setMaxListeners](jobs_job.job.md#setmaxlisteners)
- [subscribe](jobs_job.job.md#subscribe)
- [subscribeToCompleted](jobs_job.job.md#subscribetocompleted)
- [subscribeToFailed](jobs_job.job.md#subscribetofailed)
- [subscribeToProgress](jobs_job.job.md#subscribetoprogress)
- [subscribeToSuccess](jobs_job.job.md#subscribetosuccess)
- [waitForCompletion](jobs_job.job.md#waitforcompletion)
- [listenerCount](jobs_job.job.md#listenercount)
- [on](jobs_job.job.md#on)
- [once](jobs_job.job.md#once)

## Constructors

### constructor

\+ **new Job**(`toExecute`: *any*, `payload?`: [*PayLoad*](../interfaces/jobs_payload.payload.md), `jobOptions?`: { [p: string]: *any*;  }): [*Job*](jobs_job.job.md)

Create a new Job

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`toExecute` | *any* | function to be executed   |
`payload?` | [*PayLoad*](../interfaces/jobs_payload.payload.md) | payload to use for execution   |
`jobOptions?` | *object* | options to use for execution    |

**Returns:** [*Job*](jobs_job.job.md)

Defined in: packages/jobs/src/jobs/Job.ts:51

## Properties

### err

• **err**: *any*

err that may occured during execution

Defined in: packages/jobs/src/jobs/Job.ts:31

___

### id

• **id**: *string*

The id of the current job

Defined in: packages/jobs/src/jobs/Job.ts:11

___

### jobOptions

• `Optional` **jobOptions**: *object*

options that may be used for the execution

#### Type declaration:

Defined in: packages/jobs/src/jobs/Job.ts:41

___

### payload

• `Optional` **payload**: [*PayLoad*](../interfaces/jobs_payload.payload.md)

payload passed to the function that will be executed

Defined in: packages/jobs/src/jobs/Job.ts:26

___

### progress

• **progress**: *number*

The progress percentage

Defined in: packages/jobs/src/jobs/Job.ts:46

___

### progressMessage

• `Optional` **progressMessage**: *string*

Last progress message

Defined in: packages/jobs/src/jobs/Job.ts:51

___

### result

• **result**: *any*

Result of the job execution

Defined in: packages/jobs/src/jobs/Job.ts:16

___

### state

• **state**: *string*

state of the current job. see JobStates

Defined in: packages/jobs/src/jobs/Job.ts:36

___

### toExecute

• **toExecute**: *any*

function that will be executed

Defined in: packages/jobs/src/jobs/Job.ts:21

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

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Job*](jobs_job.job.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Job*](jobs_job.job.md)

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

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:69

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

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Job*](jobs_job.job.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Job*](jobs_job.job.md)

Defined in: node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Job*](jobs_job.job.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Job*](jobs_job.job.md)

Defined in: node_modules/@types/node/events.d.ts:63

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Job*](jobs_job.job.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Job*](jobs_job.job.md)

Defined in: node_modules/@types/node/events.d.ts:64

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Job*](jobs_job.job.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Job*](jobs_job.job.md)

Defined in: node_modules/@types/node/events.d.ts:75

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Job*](jobs_job.job.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Job*](jobs_job.job.md)

Defined in: node_modules/@types/node/events.d.ts:76

___

### raiseCompletedEvent

▸ **raiseCompletedEvent**(): *void*

As an EventEmitter, raise the 'completed' event of the job, even if it fails or success

**Returns:** *void*

Defined in: packages/jobs/src/jobs/Job.ts:112

___

### raiseFailedEvent

▸ **raiseFailedEvent**(`err`: *any*): *void*

As an EventEmitter, raise the 'failed' event of the job

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`err` | *any* | The error that fails the job    |

**Returns:** *void*

Defined in: packages/jobs/src/jobs/Job.ts:97

___

### raiseProgressEvent

▸ **raiseProgressEvent**(`completionPercentage`: *number*, `completionMessage?`: *string*): *void*

As an EventEmitter, raise the 'progress' event for the job

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`completionPercentage` | *number* | Percentage of completion of the job   |
`completionMessage?` | *string* | Associated message for this progression state    |

**Returns:** *void*

Defined in: packages/jobs/src/jobs/Job.ts:122

___

### raiseSuccessEvent

▸ **raiseSuccessEvent**(`result`: *any*): *void*

As an EventEmitter, raise the 'success' event of the job

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`result` | *any* | The result obtained from the execution    |

**Returns:** *void*

Defined in: packages/jobs/src/jobs/Job.ts:132

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

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*Job*](jobs_job.job.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *string* \| *symbol* |

**Returns:** [*Job*](jobs_job.job.md)

Defined in: node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Job*](jobs_job.job.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Job*](jobs_job.job.md)

Defined in: node_modules/@types/node/events.d.ts:65

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*Job*](jobs_job.job.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*Job*](jobs_job.job.md)

Defined in: node_modules/@types/node/events.d.ts:68

___

### subscribe

▸ `Protected`**subscribe**(`eventName`: *string*, `listener`: (...`args`: *any*[]) => *void*, `once?`: *boolean*): *void*

Subscribe to a JobEvents.X event with the corresponding listener

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`eventName` | *string* | - | the event to subscribe to   |
`listener` | (...`args`: *any*[]) => *void* | - | the listener   |
`once` | *boolean* | false | true if you want the listener to be executed once    |

**Returns:** *void*

Defined in: packages/jobs/src/jobs/Job.ts:193

___

### subscribeToCompleted

▸ **subscribeToCompleted**(`listener`: (...`args`: *any*[]) => *void*, `once?`: *boolean*): *void*

Subscribe to the JobEvents.completed event with the corresponding listener

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`listener` | (...`args`: *any*[]) => *void* | - | the listener   |
`once` | *boolean* | false | true if you want the listener to be executed once    |

**Returns:** *void*

Defined in: packages/jobs/src/jobs/Job.ts:168

___

### subscribeToFailed

▸ **subscribeToFailed**(`listener`: (...`args`: *any*[]) => *void*, `once?`: *boolean*): *void*

Subscribe to the JobEvents.failed event with the corresponding listener

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`listener` | (...`args`: *any*[]) => *void* | - | the listener   |
`once` | *boolean* | false | true if you want the listener to be executed once    |

**Returns:** *void*

Defined in: packages/jobs/src/jobs/Job.ts:156

___

### subscribeToProgress

▸ **subscribeToProgress**(`listener`: (...`args`: *any*[]) => *void*, `once?`: *boolean*): *void*

Subscribe to the JobEvents.progress event with the corresponding listener

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`listener` | (...`args`: *any*[]) => *void* | - | the listener   |
`once` | *boolean* | false | true if you want the listener to be executed once    |

**Returns:** *void*

Defined in: packages/jobs/src/jobs/Job.ts:180

___

### subscribeToSuccess

▸ **subscribeToSuccess**(`listener`: (...`args`: *any*[]) => *void*, `once?`: *boolean*): *void*

Subscribe to the JobEvents.success event with the corresponding listener

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`listener` | (...`args`: *any*[]) => *void* | - | the listener   |
`once` | *boolean* | false | true if you want the listener to be executed once    |

**Returns:** *void*

Defined in: packages/jobs/src/jobs/Job.ts:144

___

### waitForCompletion

▸ **waitForCompletion**(`timeoutInMs?`: *number*): *Promise*<any\>

Semaphore that helps you wait for the execution of the job

#### Parameters:

Name | Type |
:------ | :------ |
`timeoutInMs?` | *number* |

**Returns:** *Promise*<any\>

Defined in: packages/jobs/src/jobs/Job.ts:74

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
