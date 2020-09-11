[@hermes/jobs](../README.md) › [Globals](../globals.md) › [BullMQJob](bullmqjob.md)

# Class: BullMQJob

The job implementation used for Bull, especially to encapsulate value type as payload (not natively success in bull)

## Hierarchy

  ↳ [Job](job.md)

  ↳ **BullMQJob**

## Index

### Constructors

* [constructor](bullmqjob.md#constructor)

### Properties

* [err](bullmqjob.md#err)
* [id](bullmqjob.md#id)
* [innerJob](bullmqjob.md#innerjob)
* [jobOptions](bullmqjob.md#joboptions)
* [payload](bullmqjob.md#payload)
* [result](bullmqjob.md#result)
* [state](bullmqjob.md#state)
* [toExecute](bullmqjob.md#toexecute)

### Methods

* [addListener](bullmqjob.md#addlistener)
* [emit](bullmqjob.md#emit)
* [eventNames](bullmqjob.md#eventnames)
* [getMaxListeners](bullmqjob.md#getmaxlisteners)
* [getPayload](bullmqjob.md#getpayload)
* [listenerCount](bullmqjob.md#listenercount)
* [listeners](bullmqjob.md#listeners)
* [off](bullmqjob.md#off)
* [on](bullmqjob.md#on)
* [once](bullmqjob.md#once)
* [prependListener](bullmqjob.md#prependlistener)
* [prependOnceListener](bullmqjob.md#prependoncelistener)
* [raiseCompletedEvent](bullmqjob.md#raisecompletedevent)
* [raiseFailedEvent](bullmqjob.md#raisefailedevent)
* [raiseProgressEvent](bullmqjob.md#raiseprogressevent)
* [raiseSuccessEvent](bullmqjob.md#raisesuccessevent)
* [rawListeners](bullmqjob.md#rawlisteners)
* [removeAllListeners](bullmqjob.md#removealllisteners)
* [removeListener](bullmqjob.md#removelistener)
* [setInnerJob](bullmqjob.md#setinnerjob)
* [setMaxListeners](bullmqjob.md#setmaxlisteners)
* [waitForCompletion](bullmqjob.md#waitforcompletion)

## Constructors

###  constructor

\+ **new BullMQJob**(`toExecute`: any, `payload?`: any, `jobOptions?`: object): *[BullMQJob](bullmqjob.md)*

*Inherited from [Job](job.md).[constructor](job.md#constructor)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:45

Create a new Job

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`toExecute` | any | function to be executed |
`payload?` | any | payload to use for execution |
`jobOptions?` | object | options to use for execution  |

**Returns:** *[BullMQJob](bullmqjob.md)*

## Properties

###  err

• **err**: *any*

*Inherited from [Job](job.md).[err](job.md#err)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:30

err that may occured during execution

___

###  id

• **id**: *string*

*Inherited from [Job](job.md).[id](job.md#id)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:10

The id of the current job

___

###  innerJob

• **innerJob**: *InnerJob*

Defined in src/hermes_modules/bullmq-jobs/BullMQJob.ts:13

The bull job

___

###  jobOptions

• **jobOptions**: *object*

*Inherited from [Job](job.md).[jobOptions](job.md#joboptions)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:40

options that may be used for the execution

#### Type declaration:

* \[ **p**: *string*\]: any

___

###  payload

• **payload**: *any*

*Inherited from [Job](job.md).[payload](job.md#payload)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:25

payload passed to the function that will be executed

___

###  result

• **result**: *any*

*Inherited from [Job](job.md).[result](job.md#result)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:15

Result of the job execution

___

###  state

• **state**: *number*

*Inherited from [Job](job.md).[state](job.md#state)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:35

state of the current job. see JobStates

___

###  toExecute

• **toExecute**: *any*

*Inherited from [Job](job.md).[toExecute](job.md#toexecute)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:20

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

Defined in src/hermes_modules/bullmq-jobs/BullMQJob.ts:18

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

Defined in src/hermes_modules/jobs/jobs/Job.ts:105

As an EventEmitter, raise the 'completed' event of the job, even if it fails or success

**Returns:** *void*

___

###  raiseFailedEvent

▸ **raiseFailedEvent**(`err`: any): *void*

*Inherited from [Job](job.md).[raiseFailedEvent](job.md#raisefailedevent)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:90

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

Defined in src/hermes_modules/bullmq-jobs/BullMQJob.ts:40

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

Defined in src/hermes_modules/jobs/jobs/Job.ts:124

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

Defined in src/hermes_modules/bullmq-jobs/BullMQJob.ts:30

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

###  waitForCompletion

▸ **waitForCompletion**(`timeoutInMs?`: any): *Promise‹void›*

*Inherited from [Job](job.md).[waitForCompletion](job.md#waitforcompletion)*

Defined in src/hermes_modules/jobs/jobs/Job.ts:66

Semaphore that helps you wait for the execution of the job

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`timeoutInMs?` | any |   |

**Returns:** *Promise‹void›*
