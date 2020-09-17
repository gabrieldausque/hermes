[@hermes/jobs](../README.md) › [Globals](../globals.md) › [BullJob](bulljob.md)

# Class: BullJob

The job implementation used for Bull, especially to encapsulate value type as payload (not natively success in bull)

## Hierarchy

  ↳ [Job](job.md)

  ↳ **BullJob**

## Index

### Constructors

* [constructor](bulljob.md#constructor)

### Properties

* [err](bulljob.md#err)
* [id](bulljob.md#id)
* [innerJob](bulljob.md#innerjob)
* [jobOptions](bulljob.md#joboptions)
* [payload](bulljob.md#payload)
* [progress](bulljob.md#progress)
* [progressMessage](bulljob.md#progressmessage)
* [result](bulljob.md#result)
* [state](bulljob.md#state)
* [toExecute](bulljob.md#toexecute)

### Methods

* [addListener](bulljob.md#addlistener)
* [emit](bulljob.md#emit)
* [eventNames](bulljob.md#eventnames)
* [getMaxListeners](bulljob.md#getmaxlisteners)
* [getPayload](bulljob.md#getpayload)
* [listenerCount](bulljob.md#listenercount)
* [listeners](bulljob.md#listeners)
* [off](bulljob.md#off)
* [on](bulljob.md#on)
* [once](bulljob.md#once)
* [prependListener](bulljob.md#prependlistener)
* [prependOnceListener](bulljob.md#prependoncelistener)
* [raiseCompletedEvent](bulljob.md#raisecompletedevent)
* [raiseFailedEvent](bulljob.md#raisefailedevent)
* [raiseProgressEvent](bulljob.md#raiseprogressevent)
* [raiseSuccessEvent](bulljob.md#raisesuccessevent)
* [rawListeners](bulljob.md#rawlisteners)
* [removeAllListeners](bulljob.md#removealllisteners)
* [removeListener](bulljob.md#removelistener)
* [setInnerJob](bulljob.md#setinnerjob)
* [setMaxListeners](bulljob.md#setmaxlisteners)
* [subscribe](bulljob.md#protected-subscribe)
* [subscribeToCompleted](bulljob.md#subscribetocompleted)
* [subscribeToFailed](bulljob.md#subscribetofailed)
* [subscribeToProgress](bulljob.md#subscribetoprogress)
* [subscribeToSuccess](bulljob.md#subscribetosuccess)
* [waitForCompletion](bulljob.md#waitforcompletion)

## Constructors

###  constructor

\+ **new BullJob**(`toExecute`: any, `payload?`: [PayLoad](../interfaces/payload.md), `jobOptions?`: object): *[BullJob](bulljob.md)*

*Inherited from [Job](job.md).[constructor](job.md#constructor)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:51

Create a new Job

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`toExecute` | any | function to be executed |
`payload?` | [PayLoad](../interfaces/payload.md) | payload to use for execution |
`jobOptions?` | object | options to use for execution  |

**Returns:** *[BullJob](bulljob.md)*

## Properties

###  err

• **err**: *any*

*Inherited from [Job](job.md).[err](job.md#err)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:31

err that may occured during execution

___

###  id

• **id**: *string*

*Inherited from [Job](job.md).[id](job.md#id)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:11

The id of the current job

___

###  innerJob

• **innerJob**: *InnerJob*

Defined in src/hermes_modules/bull-jobs/BullJob.ts:13

The bull job

___

###  jobOptions

• **jobOptions**: *object*

*Inherited from [Job](job.md).[jobOptions](job.md#joboptions)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:41

options that may be used for the execution

#### Type declaration:

* \[ **p**: *string*\]: any

___

###  payload

• **payload**: *[PayLoad](../interfaces/payload.md)*

*Inherited from [Job](job.md).[payload](job.md#payload)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:26

payload passed to the function that will be executed

___

###  progress

• **progress**: *number*

*Inherited from [Job](job.md).[progress](job.md#progress)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:46

The progress percentage

___

###  progressMessage

• **progressMessage**: *string*

*Inherited from [Job](job.md).[progressMessage](job.md#progressmessage)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:51

Last progress message

___

###  result

• **result**: *any*

*Inherited from [Job](job.md).[result](job.md#result)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:16

Result of the job execution

___

###  state

• **state**: *string*

*Inherited from [Job](job.md).[state](job.md#state)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:36

state of the current job. see JobStates

___

###  toExecute

• **toExecute**: *any*

*Inherited from [Job](job.md).[toExecute](job.md#toexecute)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:21

function that will be executed

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

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Ticker](ticker.md).[getMaxListeners](ticker.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:554

**Returns:** *number*

___

###  getPayload

▸ **getPayload**(): *object*

Defined in src/hermes_modules/bull-jobs/BullJob.ts:18

Get the payload as an object even if it is a value type

**Returns:** *object*

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

###  raiseCompletedEvent

▸ **raiseCompletedEvent**(): *void*

*Inherited from [Job](job.md).[raiseCompletedEvent](job.md#raisecompletedevent)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:110

As an EventEmitter, raise the 'completed' event of the job, even if it fails or success

**Returns:** *void*

___

###  raiseFailedEvent

▸ **raiseFailedEvent**(`err`: any): *void*

*Inherited from [Job](job.md).[raiseFailedEvent](job.md#raisefailedevent)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:95

As an EventEmitter, raise the 'failed' event of the job

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | any | The error that fails the job  |

**Returns:** *void*

___

###  raiseProgressEvent

▸ **raiseProgressEvent**(`completionPercentage`: number, `completionMessage?`: string): *void*

*Overrides [Job](job.md).[raiseProgressEvent](job.md#raiseprogressevent)*

Defined in src/hermes_modules/bull-jobs/BullJob.ts:41

As an EventEmitter, raise the 'progress' event for the job

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`completionPercentage` | number | Percentage of completion of the job |
`completionMessage?` | string | Associated message for this progression state  |

**Returns:** *void*

___

###  raiseSuccessEvent

▸ **raiseSuccessEvent**(`result`: any): *void*

*Inherited from [Job](job.md).[raiseSuccessEvent](job.md#raisesuccessevent)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:130

As an EventEmitter, raise the 'success' event of the job

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`result` | any | The result obtained from the execution  |

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

###  setInnerJob

▸ **setInnerJob**(`job`: InnerJob): *void*

Defined in src/hermes_modules/bull-jobs/BullJob.ts:30

Set the bull job

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`job` | InnerJob | The bull job corresponding to this job  |

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

### `Protected` subscribe

▸ **subscribe**(`eventName`: string, `listener`: function, `once`: boolean): *void*

*Inherited from [Job](job.md).[subscribe](job.md#protected-subscribe)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:191

Subscribe to a JobEvents.X event with the corresponding listener

**Parameters:**

▪ **eventName**: *string*

the event to subscribe to

▪ **listener**: *function*

the listener

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Default value`  **once**: *boolean*= false

true if you want the listener to be executed once

**Returns:** *void*

___

###  subscribeToCompleted

▸ **subscribeToCompleted**(`listener`: function, `once`: boolean): *void*

*Inherited from [Job](job.md).[subscribeToCompleted](job.md#subscribetocompleted)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:166

Subscribe to the JobEvents.completed event with the corresponding listener

**Parameters:**

▪ **listener**: *function*

the listener

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Default value`  **once**: *boolean*= false

true if you want the listener to be executed once

**Returns:** *void*

___

###  subscribeToFailed

▸ **subscribeToFailed**(`listener`: function, `once`: boolean): *void*

*Inherited from [Job](job.md).[subscribeToFailed](job.md#subscribetofailed)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:154

Subscribe to the JobEvents.failed event with the corresponding listener

**Parameters:**

▪ **listener**: *function*

the listener

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Default value`  **once**: *boolean*= false

true if you want the listener to be executed once

**Returns:** *void*

___

###  subscribeToProgress

▸ **subscribeToProgress**(`listener`: function, `once`: boolean): *void*

*Inherited from [Job](job.md).[subscribeToProgress](job.md#subscribetoprogress)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:178

Subscribe to the JobEvents.progress event with the corresponding listener

**Parameters:**

▪ **listener**: *function*

the listener

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Default value`  **once**: *boolean*= false

true if you want the listener to be executed once

**Returns:** *void*

___

###  subscribeToSuccess

▸ **subscribeToSuccess**(`listener`: function, `once`: boolean): *void*

*Inherited from [Job](job.md).[subscribeToSuccess](job.md#subscribetosuccess)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:142

Subscribe to the JobEvents.success event with the corresponding listener

**Parameters:**

▪ **listener**: *function*

the listener

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Default value`  **once**: *boolean*= false

true if you want the listener to be executed once

**Returns:** *void*

___

###  waitForCompletion

▸ **waitForCompletion**(`timeoutInMs?`: any): *Promise‹unknown›*

*Inherited from [Job](job.md).[waitForCompletion](job.md#waitforcompletion)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:72

Semaphore that helps you wait for the execution of the job

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`timeoutInMs?` | any |   |

**Returns:** *Promise‹unknown›*
