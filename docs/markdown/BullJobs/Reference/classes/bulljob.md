[@hermes/bull-jobs](../README.md) › [Globals](../globals.md) › [BullJob](bulljob.md)

# Class: BullJob

## Hierarchy

* Job

  ↳ **BullJob**

## Index

### Constructors

* [constructor](bulljob.md#constructor)

### Properties

* [err](bulljob.md#err)
* [id](bulljob.md#id)
* [innerJob](bulljob.md#private-innerjob)
* [jobOptions](bulljob.md#joboptions)
* [payload](bulljob.md#payload)
* [result](bulljob.md#result)
* [state](bulljob.md#state)
* [toExecute](bulljob.md#toexecute)
* [nextId](bulljob.md#static-nextid)

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
* [waitForCompletion](bulljob.md#waitforcompletion)

## Constructors

###  constructor

\+ **new BullJob**(`toExecute`: any, `payload?`: any, `jobOptions?`: object): *[BullJob](bulljob.md)*

*Inherited from [BullJob](bulljob.md).[constructor](bulljob.md#constructor)*

Defined in src/hermes_modules/jobs/lib/jobs/Job.d.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`toExecute` | any |
`payload?` | any |
`jobOptions?` | object |

**Returns:** *[BullJob](bulljob.md)*

## Properties

###  err

• **err**: *any*

*Inherited from [BullJob](bulljob.md).[err](bulljob.md#err)*

Defined in src/hermes_modules/jobs/lib/jobs/Job.d.ts:9

___

###  id

• **id**: *string*

*Inherited from [BullJob](bulljob.md).[id](bulljob.md#id)*

Defined in src/hermes_modules/jobs/lib/jobs/Job.d.ts:5

___

### `Private` innerJob

• **innerJob**: *InnerJob*

Defined in src/hermes_modules/bull-jobs/BullJob.ts:6

___

###  jobOptions

• **jobOptions**: *object*

*Inherited from [BullJob](bulljob.md).[jobOptions](bulljob.md#joboptions)*

Defined in src/hermes_modules/jobs/lib/jobs/Job.d.ts:11

#### Type declaration:

* \[ **p**: *string*\]: any

___

###  payload

• **payload**: *any*

*Inherited from [BullJob](bulljob.md).[payload](bulljob.md#payload)*

Defined in src/hermes_modules/jobs/lib/jobs/Job.d.ts:8

___

###  result

• **result**: *any*

*Inherited from [BullJob](bulljob.md).[result](bulljob.md#result)*

Defined in src/hermes_modules/jobs/lib/jobs/Job.d.ts:6

___

###  state

• **state**: *number*

*Inherited from [BullJob](bulljob.md).[state](bulljob.md#state)*

Defined in src/hermes_modules/jobs/lib/jobs/Job.d.ts:10

___

###  toExecute

• **toExecute**: *any*

*Inherited from [BullJob](bulljob.md).[toExecute](bulljob.md#toexecute)*

Defined in src/hermes_modules/jobs/lib/jobs/Job.d.ts:7

___

### `Static` nextId

▪ **nextId**: *number*

*Inherited from [BullJob](bulljob.md).[nextId](bulljob.md#static-nextid)*

Defined in src/hermes_modules/jobs/lib/jobs/Job.d.ts:4

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

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [BullJob](bulljob.md).[getMaxListeners](bulljob.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:554

**Returns:** *number*

___

###  getPayload

▸ **getPayload**(): *object*

Defined in src/hermes_modules/bull-jobs/BullJob.ts:8

**Returns:** *object*

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

###  raiseCompletedEvent

▸ **raiseCompletedEvent**(): *void*

*Inherited from [BullJob](bulljob.md).[raiseCompletedEvent](bulljob.md#raisecompletedevent)*

Defined in src/hermes_modules/jobs/lib/jobs/Job.d.ts:19

**Returns:** *void*

___

###  raiseFailedEvent

▸ **raiseFailedEvent**(`err`: any): *void*

*Inherited from [BullJob](bulljob.md).[raiseFailedEvent](bulljob.md#raisefailedevent)*

Defined in src/hermes_modules/jobs/lib/jobs/Job.d.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *void*

___

###  raiseProgressEvent

▸ **raiseProgressEvent**(`completionPercentage`: number, `completionMessage?`: string): *void*

*Inherited from [BullJob](bulljob.md).[raiseProgressEvent](bulljob.md#raiseprogressevent)*

Defined in src/hermes_modules/jobs/lib/jobs/Job.d.ts:20

**Parameters:**

Name | Type |
------ | ------ |
`completionPercentage` | number |
`completionMessage?` | string |

**Returns:** *void*

___

###  raiseSuccessEvent

▸ **raiseSuccessEvent**(`result`: any): *void*

*Inherited from [BullJob](bulljob.md).[raiseSuccessEvent](bulljob.md#raisesuccessevent)*

Defined in src/hermes_modules/jobs/lib/jobs/Job.d.ts:21

**Parameters:**

Name | Type |
------ | ------ |
`result` | any |

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

###  setInnerJob

▸ **setInnerJob**(`job`: InnerJob): *void*

Defined in src/hermes_modules/bull-jobs/BullJob.ts:16

**Parameters:**

Name | Type |
------ | ------ |
`job` | InnerJob |

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

###  waitForCompletion

▸ **waitForCompletion**(`timeoutInMs?`: any): *Promise‹void›*

*Inherited from [BullJob](bulljob.md).[waitForCompletion](bulljob.md#waitforcompletion)*

Defined in src/hermes_modules/jobs/lib/jobs/Job.d.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`timeoutInMs?` | any |

**Returns:** *Promise‹void›*
