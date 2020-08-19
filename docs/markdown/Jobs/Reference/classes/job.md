[@hermes/jobs](../README.md) › [Globals](../globals.md) › [Job](job.md)

# Class: Job

## Hierarchy

* EventEmitter

  ↳ **Job**

## Index

### Constructors

* [constructor](job.md#constructor)

### Properties

* [err](job.md#err)
* [id](job.md#id)
* [jobOptions](job.md#joboptions)
* [payload](job.md#payload)
* [result](job.md#result)
* [state](job.md#state)
* [toExecute](job.md#toexecute)
* [defaultMaxListeners](job.md#static-defaultmaxlisteners)
* [nextId](job.md#static-nextid)

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
* [waitForCompletion](job.md#waitforcompletion)
* [listenerCount](job.md#static-listenercount)

## Constructors

###  constructor

\+ **new Job**(`toExecute`: any, `payload?`: any, `jobOptions?`: object): *[Job](job.md)*

*Overrides void*

Defined in src/hermes_modules/jobs/jobs/Job.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`toExecute` | any |
`payload?` | any |
`jobOptions?` | object |

**Returns:** *[Job](job.md)*

## Properties

###  err

• **err**: *any*

Defined in src/hermes_modules/jobs/jobs/Job.ts:12

___

###  id

• **id**: *string*

Defined in src/hermes_modules/jobs/jobs/Job.ts:8

___

###  jobOptions

• **jobOptions**: *object*

Defined in src/hermes_modules/jobs/jobs/Job.ts:14

#### Type declaration:

* \[ **p**: *string*\]: any

___

###  payload

• **payload**: *any*

Defined in src/hermes_modules/jobs/jobs/Job.ts:11

___

###  result

• **result**: *any*

Defined in src/hermes_modules/jobs/jobs/Job.ts:9

___

###  state

• **state**: *number*

Defined in src/hermes_modules/jobs/jobs/Job.ts:13

___

###  toExecute

• **toExecute**: *any*

Defined in src/hermes_modules/jobs/jobs/Job.ts:10

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [Job](job.md).[defaultMaxListeners](job.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:45

___

### `Static` nextId

▪ **nextId**: *number* = 0

Defined in src/hermes_modules/jobs/jobs/Job.ts:6

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

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Job](job.md).[getMaxListeners](job.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:554

**Returns:** *number*

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

###  raiseCompletedEvent

▸ **raiseCompletedEvent**(): *void*

Defined in src/hermes_modules/jobs/jobs/Job.ts:55

**Returns:** *void*

___

###  raiseFailedEvent

▸ **raiseFailedEvent**(`err`: any): *void*

Defined in src/hermes_modules/jobs/jobs/Job.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *void*

___

###  raiseProgressEvent

▸ **raiseProgressEvent**(`completionPercentage`: number, `completionMessage?`: string): *void*

Defined in src/hermes_modules/jobs/jobs/Job.ts:60

**Parameters:**

Name | Type |
------ | ------ |
`completionPercentage` | number |
`completionMessage?` | string |

**Returns:** *void*

___

###  raiseSuccessEvent

▸ **raiseSuccessEvent**(`result`: any): *void*

Defined in src/hermes_modules/jobs/jobs/Job.ts:64

**Parameters:**

Name | Type |
------ | ------ |
`result` | any |

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

###  waitForCompletion

▸ **waitForCompletion**(`timeoutInMs?`: any): *Promise‹void›*

Defined in src/hermes_modules/jobs/jobs/Job.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`timeoutInMs?` | any |

**Returns:** *Promise‹void›*

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
