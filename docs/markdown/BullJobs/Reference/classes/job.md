[@hermes/jobs](../README.md) › [Globals](../globals.md) › [Job](job.md)

# Class: Job

## Hierarchy

* EventEmitter

  ↳ **Job**

  ↳ [BullJob](bulljob.md)

## Index

### Constructors

* [constructor](job.md#constructor)

### Properties

* [err](job.md#err)
* [id](job.md#id)
* [jobOptions](job.md#joboptions)
* [payload](job.md#payload)
* [progress](job.md#progress)
* [progressMessage](job.md#progressmessage)
* [result](job.md#result)
* [state](job.md#state)
* [toExecute](job.md#toexecute)
* [defaultMaxListeners](job.md#static-defaultmaxlisteners)

### Methods

* [addListener](job.md#addlistener)
* [emit](job.md#emit)
* [eventNames](job.md#eventnames)
* [getMaxListeners](job.md#getmaxlisteners)
* [listenerCount](job.md#listenercount)
* [listeners](job.md#listeners)
* [off](job.md#off)
* [on](job.md#on)
* [once](job.md#once)
* [prependListener](job.md#prependlistener)
* [prependOnceListener](job.md#prependoncelistener)
* [raiseCompletedEvent](job.md#raisecompletedevent)
* [raiseFailedEvent](job.md#raisefailedevent)
* [raiseProgressEvent](job.md#raiseprogressevent)
* [raiseSuccessEvent](job.md#raisesuccessevent)
* [rawListeners](job.md#rawlisteners)
* [removeAllListeners](job.md#removealllisteners)
* [removeListener](job.md#removelistener)
* [setMaxListeners](job.md#setmaxlisteners)
* [subscribe](job.md#protected-subscribe)
* [subscribeToCompleted](job.md#subscribetocompleted)
* [subscribeToFailed](job.md#subscribetofailed)
* [subscribeToProgress](job.md#subscribetoprogress)
* [subscribeToSuccess](job.md#subscribetosuccess)
* [waitForCompletion](job.md#waitforcompletion)
* [listenerCount](job.md#static-listenercount)

## Constructors

###  constructor

\+ **new Job**(`toExecute`: any, `payload?`: [PayLoad](../interfaces/payload.md), `jobOptions?`: object): *[Job](job.md)*

*Overrides void*

Defined in src/hermes_modules/jobs/jobs/Job.ts:51

Create a new Job

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`toExecute` | any | function to be executed |
`payload?` | [PayLoad](../interfaces/payload.md) | payload to use for execution |
`jobOptions?` | object | options to use for execution  |

**Returns:** *[Job](job.md)*

## Properties

###  err

• **err**: *any*

Defined in src/hermes_modules/jobs/jobs/Job.ts:31

err that may occured during execution

___

###  id

• **id**: *string*

Defined in src/hermes_modules/jobs/jobs/Job.ts:11

The id of the current job

___

###  jobOptions

• **jobOptions**: *object*

Defined in src/hermes_modules/jobs/jobs/Job.ts:41

options that may be used for the execution

#### Type declaration:

* \[ **p**: *string*\]: any

___

###  payload

• **payload**: *[PayLoad](../interfaces/payload.md)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:26

payload passed to the function that will be executed

___

###  progress

• **progress**: *number*

Defined in src/hermes_modules/jobs/jobs/Job.ts:46

The progress percentage

___

###  progressMessage

• **progressMessage**: *string*

Defined in src/hermes_modules/jobs/jobs/Job.ts:51

Last progress message

___

###  result

• **result**: *any*

Defined in src/hermes_modules/jobs/jobs/Job.ts:16

Result of the job execution

___

###  state

• **state**: *string*

Defined in src/hermes_modules/jobs/jobs/Job.ts:36

state of the current job. see JobStates

___

###  toExecute

• **toExecute**: *any*

Defined in src/hermes_modules/jobs/jobs/Job.ts:21

function that will be executed

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [Ticker](ticker.md).[defaultMaxListeners](ticker.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:45

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

Defined in src/hermes_modules/jobs/jobs/Job.ts:110

As an EventEmitter, raise the 'completed' event of the job, even if it fails or success

**Returns:** *void*

___

###  raiseFailedEvent

▸ **raiseFailedEvent**(`err`: any): *void*

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

Defined in src/hermes_modules/jobs/jobs/Job.ts:120

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

Defined in src/hermes_modules/jobs/jobs/Job.ts:72

Semaphore that helps you wait for the execution of the job

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`timeoutInMs?` | any |   |

**Returns:** *Promise‹unknown›*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [Ticker](ticker.md).[listenerCount](ticker.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:44

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
