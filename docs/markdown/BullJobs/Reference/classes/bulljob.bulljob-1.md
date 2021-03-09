[@hermes/bull-jobs](../README.md) / [Exports](../modules.md) / [BullJob](../modules/bulljob.md) / BullJob

# Class: BullJob

[BullJob](../modules/bulljob.md).BullJob

The job implementation used for Bull, especially to encapsulate value type as payload (not natively success in bull)

## Hierarchy

* *Job*

  ↳ **BullJob**

## Table of contents

### Constructors

- [constructor](bulljob.bulljob-1.md#constructor)

### Properties

- [err](bulljob.bulljob-1.md#err)
- [id](bulljob.bulljob-1.md#id)
- [innerJob](bulljob.bulljob-1.md#innerjob)
- [jobOptions](bulljob.bulljob-1.md#joboptions)
- [payload](bulljob.bulljob-1.md#payload)
- [progress](bulljob.bulljob-1.md#progress)
- [progressMessage](bulljob.bulljob-1.md#progressmessage)
- [result](bulljob.bulljob-1.md#result)
- [state](bulljob.bulljob-1.md#state)
- [toExecute](bulljob.bulljob-1.md#toexecute)
- [captureRejectionSymbol](bulljob.bulljob-1.md#capturerejectionsymbol)
- [captureRejections](bulljob.bulljob-1.md#capturerejections)
- [defaultMaxListeners](bulljob.bulljob-1.md#defaultmaxlisteners)
- [errorMonitor](bulljob.bulljob-1.md#errormonitor)

### Methods

- [addListener](bulljob.bulljob-1.md#addlistener)
- [emit](bulljob.bulljob-1.md#emit)
- [eventNames](bulljob.bulljob-1.md#eventnames)
- [getMaxListeners](bulljob.bulljob-1.md#getmaxlisteners)
- [getPayload](bulljob.bulljob-1.md#getpayload)
- [listenerCount](bulljob.bulljob-1.md#listenercount)
- [listeners](bulljob.bulljob-1.md#listeners)
- [off](bulljob.bulljob-1.md#off)
- [on](bulljob.bulljob-1.md#on)
- [once](bulljob.bulljob-1.md#once)
- [prependListener](bulljob.bulljob-1.md#prependlistener)
- [prependOnceListener](bulljob.bulljob-1.md#prependoncelistener)
- [raiseCompletedEvent](bulljob.bulljob-1.md#raisecompletedevent)
- [raiseFailedEvent](bulljob.bulljob-1.md#raisefailedevent)
- [raiseProgressEvent](bulljob.bulljob-1.md#raiseprogressevent)
- [raiseSuccessEvent](bulljob.bulljob-1.md#raisesuccessevent)
- [rawListeners](bulljob.bulljob-1.md#rawlisteners)
- [removeAllListeners](bulljob.bulljob-1.md#removealllisteners)
- [removeListener](bulljob.bulljob-1.md#removelistener)
- [setInnerJob](bulljob.bulljob-1.md#setinnerjob)
- [setMaxListeners](bulljob.bulljob-1.md#setmaxlisteners)
- [subscribe](bulljob.bulljob-1.md#subscribe)
- [subscribeToCompleted](bulljob.bulljob-1.md#subscribetocompleted)
- [subscribeToFailed](bulljob.bulljob-1.md#subscribetofailed)
- [subscribeToProgress](bulljob.bulljob-1.md#subscribetoprogress)
- [subscribeToSuccess](bulljob.bulljob-1.md#subscribetosuccess)
- [waitForCompletion](bulljob.bulljob-1.md#waitforcompletion)
- [listenerCount](bulljob.bulljob-1.md#listenercount)
- [on](bulljob.bulljob-1.md#on)
- [once](bulljob.bulljob-1.md#once)

## Constructors

### constructor

\+ **new BullJob**(`toExecute`: *any*, `payload?`: PayLoad, `jobOptions?`: { [p: string]: *any*;  }): [*BullJob*](bulljob.bulljob-1.md)

Create a new Job

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`toExecute` | *any* | function to be executed   |
`payload?` | PayLoad | payload to use for execution   |
`jobOptions?` | *object* | options to use for execution    |

**Returns:** [*BullJob*](bulljob.bulljob-1.md)

Defined in: packages/jobs/dist/jobs/Job.d.ts:42

## Properties

### err

• **err**: *any*

err that may occured during execution

Defined in: packages/jobs/dist/jobs/Job.d.ts:24

___

### id

• **id**: *string*

The id of the current job

Defined in: packages/jobs/dist/jobs/Job.d.ts:8

___

### innerJob

• `Optional` **innerJob**: *Job*<any\>

The bull job

Defined in: packages/bull-jobs/src/BullJob.ts:13

___

### jobOptions

• `Optional` **jobOptions**: *object*

options that may be used for the execution

#### Type declaration:

Defined in: packages/jobs/dist/jobs/Job.d.ts:32

___

### payload

• `Optional` **payload**: PayLoad

payload passed to the function that will be executed

Defined in: packages/jobs/dist/jobs/Job.d.ts:20

___

### progress

• **progress**: *number*

The progress percentage

Defined in: packages/jobs/dist/jobs/Job.d.ts:38

___

### progressMessage

• `Optional` **progressMessage**: *string*

Last progress message

Defined in: packages/jobs/dist/jobs/Job.d.ts:42

___

### result

• **result**: *any*

Result of the job execution

Defined in: packages/jobs/dist/jobs/Job.d.ts:12

___

### state

• **state**: *string*

state of the current job. see JobStates

Defined in: packages/jobs/dist/jobs/Job.d.ts:28

___

### toExecute

• **toExecute**: *any*

function that will be executed

Defined in: packages/jobs/dist/jobs/Job.d.ts:16

___

### captureRejectionSymbol

▪ `Readonly` `Static` **captureRejectionSymbol**: *typeof* [*captureRejectionSymbol*](bulljob.bulljob-1.md#capturerejectionsymbol)

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

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](bulljob.bulljob-1.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:42

## Methods

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*BullJob*](bulljob.bulljob-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*BullJob*](bulljob.bulljob-1.md)

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

### getPayload

▸ **getPayload**(): *object*

Get the payload as an object even if it is a value type

**Returns:** *object*

Defined in: packages/bull-jobs/src/BullJob.ts:18

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

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*BullJob*](bulljob.bulljob-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*BullJob*](bulljob.bulljob-1.md)

Defined in: node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*BullJob*](bulljob.bulljob-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*BullJob*](bulljob.bulljob-1.md)

Defined in: node_modules/@types/node/events.d.ts:63

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*BullJob*](bulljob.bulljob-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*BullJob*](bulljob.bulljob-1.md)

Defined in: node_modules/@types/node/events.d.ts:64

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*BullJob*](bulljob.bulljob-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*BullJob*](bulljob.bulljob-1.md)

Defined in: node_modules/@types/node/events.d.ts:75

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*BullJob*](bulljob.bulljob-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*BullJob*](bulljob.bulljob-1.md)

Defined in: node_modules/@types/node/events.d.ts:76

___

### raiseCompletedEvent

▸ **raiseCompletedEvent**(): *void*

As an EventEmitter, raise the 'completed' event of the job, even if it fails or success

**Returns:** *void*

Defined in: packages/jobs/dist/jobs/Job.d.ts:65

___

### raiseFailedEvent

▸ **raiseFailedEvent**(`err`: *any*): *void*

As an EventEmitter, raise the 'failed' event of the job

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`err` | *any* | The error that fails the job    |

**Returns:** *void*

Defined in: packages/jobs/dist/jobs/Job.d.ts:61

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

Defined in: packages/bull-jobs/src/BullJob.ts:41

___

### raiseSuccessEvent

▸ **raiseSuccessEvent**(`result`: *any*): *void*

As an EventEmitter, raise the 'success' event of the job

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`result` | *any* | The result obtained from the execution    |

**Returns:** *void*

Defined in: packages/jobs/dist/jobs/Job.d.ts:76

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

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*BullJob*](bulljob.bulljob-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *string* \| *symbol* |

**Returns:** [*BullJob*](bulljob.bulljob-1.md)

Defined in: node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*BullJob*](bulljob.bulljob-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*BullJob*](bulljob.bulljob-1.md)

Defined in: node_modules/@types/node/events.d.ts:65

___

### setInnerJob

▸ **setInnerJob**(`job`: *Job*<any\>): *void*

Set the bull job

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`job` | *Job*<any\> | The bull job corresponding to this job    |

**Returns:** *void*

Defined in: packages/bull-jobs/src/BullJob.ts:30

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*BullJob*](bulljob.bulljob-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*BullJob*](bulljob.bulljob-1.md)

Defined in: node_modules/@types/node/events.d.ts:68

___

### subscribe

▸ `Protected`**subscribe**(`eventName`: *string*, `listener`: (...`args`: *any*[]) => *void*, `once?`: *boolean*): *void*

Subscribe to a JobEvents.X event with the corresponding listener

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`eventName` | *string* | the event to subscribe to   |
`listener` | (...`args`: *any*[]) => *void* | the listener   |
`once?` | *boolean* | true if you want the listener to be executed once    |

**Returns:** *void*

Defined in: packages/jobs/dist/jobs/Job.d.ts:107

___

### subscribeToCompleted

▸ **subscribeToCompleted**(`listener`: (...`args`: *any*[]) => *void*, `once?`: *boolean*): *void*

Subscribe to the JobEvents.completed event with the corresponding listener

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`listener` | (...`args`: *any*[]) => *void* | the listener   |
`once?` | *boolean* | true if you want the listener to be executed once    |

**Returns:** *void*

Defined in: packages/jobs/dist/jobs/Job.d.ts:94

___

### subscribeToFailed

▸ **subscribeToFailed**(`listener`: (...`args`: *any*[]) => *void*, `once?`: *boolean*): *void*

Subscribe to the JobEvents.failed event with the corresponding listener

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`listener` | (...`args`: *any*[]) => *void* | the listener   |
`once?` | *boolean* | true if you want the listener to be executed once    |

**Returns:** *void*

Defined in: packages/jobs/dist/jobs/Job.d.ts:88

___

### subscribeToProgress

▸ **subscribeToProgress**(`listener`: (...`args`: *any*[]) => *void*, `once?`: *boolean*): *void*

Subscribe to the JobEvents.progress event with the corresponding listener

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`listener` | (...`args`: *any*[]) => *void* | the listener   |
`once?` | *boolean* | true if you want the listener to be executed once    |

**Returns:** *void*

Defined in: packages/jobs/dist/jobs/Job.d.ts:100

___

### subscribeToSuccess

▸ **subscribeToSuccess**(`listener`: (...`args`: *any*[]) => *void*, `once?`: *boolean*): *void*

Subscribe to the JobEvents.success event with the corresponding listener

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`listener` | (...`args`: *any*[]) => *void* | the listener   |
`once?` | *boolean* | true if you want the listener to be executed once    |

**Returns:** *void*

Defined in: packages/jobs/dist/jobs/Job.d.ts:82

___

### waitForCompletion

▸ **waitForCompletion**(`timeoutInMs?`: *number*): *Promise*<any\>

Semaphore that helps you wait for the execution of the job

#### Parameters:

Name | Type |
:------ | :------ |
`timeoutInMs?` | *number* |

**Returns:** *Promise*<any\>

Defined in: packages/jobs/dist/jobs/Job.d.ts:56

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
