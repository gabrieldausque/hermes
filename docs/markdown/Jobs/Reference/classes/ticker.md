[@hermes/jobs](../README.md) › [Globals](../globals.md) › [Ticker](ticker.md)

# Class: Ticker

A timer that raise a 'tick' event for the specified period

## Hierarchy

* EventEmitter

  ↳ **Ticker**

## Index

### Constructors

* [constructor](ticker.md#constructor)

### Properties

* [intervalId](ticker.md#private-intervalid)
* [intervalInMs](ticker.md#private-intervalinms)
* [defaultMaxListeners](ticker.md#static-defaultmaxlisteners)

### Methods

* [addListener](ticker.md#addlistener)
* [emit](ticker.md#emit)
* [eventNames](ticker.md#eventnames)
* [getMaxListeners](ticker.md#getmaxlisteners)
* [listenerCount](ticker.md#listenercount)
* [listeners](ticker.md#listeners)
* [off](ticker.md#off)
* [on](ticker.md#on)
* [once](ticker.md#once)
* [prependListener](ticker.md#prependlistener)
* [prependOnceListener](ticker.md#prependoncelistener)
* [rawListeners](ticker.md#rawlisteners)
* [removeAllListeners](ticker.md#removealllisteners)
* [removeListener](ticker.md#removelistener)
* [setMaxListeners](ticker.md#setmaxlisteners)
* [start](ticker.md#start)
* [stop](ticker.md#stop)
* [listenerCount](ticker.md#static-listenercount)

## Constructors

###  constructor

\+ **new Ticker**(`intervalInMs`: number, `startAtCreation`: boolean): *[Ticker](ticker.md)*

*Overrides void*

Defined in src/hermes_modules/jobs/helpers/Ticker.ts:16

Create a new Ticker

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`intervalInMs` | number | 100 | The period in ms |
`startAtCreation` | boolean | false | Indicate if the Ticker will start at creation  |

**Returns:** *[Ticker](ticker.md)*

## Properties

### `Private` intervalId

• **intervalId**: *Timeout*

Defined in src/hermes_modules/jobs/helpers/Ticker.ts:16

The interval Id currently activated

___

### `Private` intervalInMs

• **intervalInMs**: *number*

Defined in src/hermes_modules/jobs/helpers/Ticker.ts:11

The interval of the timer

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

###  start

▸ **start**(): *void*

Defined in src/hermes_modules/jobs/helpers/Ticker.ts:34

Start the timer

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

Defined in src/hermes_modules/jobs/helpers/Ticker.ts:44

Stop the timer

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
