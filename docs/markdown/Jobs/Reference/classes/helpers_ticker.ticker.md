[@hermes/jobs](../README.md) / [Exports](../modules.md) / [helpers/Ticker](../modules/helpers_ticker.md) / Ticker

# Class: Ticker

[helpers/Ticker](../modules/helpers_ticker.md).Ticker

A timer that raise a 'tick' event for the specified period

## Hierarchy

* *EventEmitter*

  ↳ **Ticker**

## Table of contents

### Constructors

- [constructor](helpers_ticker.ticker.md#constructor)

### Properties

- [intervalId](helpers_ticker.ticker.md#intervalid)
- [intervalInMs](helpers_ticker.ticker.md#intervalinms)
- [captureRejectionSymbol](helpers_ticker.ticker.md#capturerejectionsymbol)
- [captureRejections](helpers_ticker.ticker.md#capturerejections)
- [defaultMaxListeners](helpers_ticker.ticker.md#defaultmaxlisteners)
- [errorMonitor](helpers_ticker.ticker.md#errormonitor)

### Methods

- [addListener](helpers_ticker.ticker.md#addlistener)
- [emit](helpers_ticker.ticker.md#emit)
- [eventNames](helpers_ticker.ticker.md#eventnames)
- [getMaxListeners](helpers_ticker.ticker.md#getmaxlisteners)
- [listenerCount](helpers_ticker.ticker.md#listenercount)
- [listeners](helpers_ticker.ticker.md#listeners)
- [off](helpers_ticker.ticker.md#off)
- [on](helpers_ticker.ticker.md#on)
- [once](helpers_ticker.ticker.md#once)
- [prependListener](helpers_ticker.ticker.md#prependlistener)
- [prependOnceListener](helpers_ticker.ticker.md#prependoncelistener)
- [rawListeners](helpers_ticker.ticker.md#rawlisteners)
- [removeAllListeners](helpers_ticker.ticker.md#removealllisteners)
- [removeListener](helpers_ticker.ticker.md#removelistener)
- [setMaxListeners](helpers_ticker.ticker.md#setmaxlisteners)
- [start](helpers_ticker.ticker.md#start)
- [stop](helpers_ticker.ticker.md#stop)
- [listenerCount](helpers_ticker.ticker.md#listenercount)
- [on](helpers_ticker.ticker.md#on)
- [once](helpers_ticker.ticker.md#once)

## Constructors

### constructor

\+ **new Ticker**(`intervalInMs?`: *number*, `startAtCreation?`: *boolean*): [*Ticker*](helpers_ticker.ticker.md)

Create a new Ticker

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`intervalInMs` | *number* | 100 | The period in ms   |
`startAtCreation` | *boolean* | false | Indicate if the Ticker will start at creation    |

**Returns:** [*Ticker*](helpers_ticker.ticker.md)

Defined in: packages/jobs/src/helpers/Ticker.ts:16

## Properties

### intervalId

• `Private` `Optional` **intervalId**: *Timeout*

The interval Id currently activated

Defined in: packages/jobs/src/helpers/Ticker.ts:16

___

### intervalInMs

• `Private` `Readonly` **intervalInMs**: *number*

The interval of the timer

Defined in: packages/jobs/src/helpers/Ticker.ts:11

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

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ticker*](helpers_ticker.ticker.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ticker*](helpers_ticker.ticker.md)

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

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ticker*](helpers_ticker.ticker.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ticker*](helpers_ticker.ticker.md)

Defined in: node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ticker*](helpers_ticker.ticker.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ticker*](helpers_ticker.ticker.md)

Defined in: node_modules/@types/node/events.d.ts:63

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ticker*](helpers_ticker.ticker.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ticker*](helpers_ticker.ticker.md)

Defined in: node_modules/@types/node/events.d.ts:64

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ticker*](helpers_ticker.ticker.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ticker*](helpers_ticker.ticker.md)

Defined in: node_modules/@types/node/events.d.ts:75

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ticker*](helpers_ticker.ticker.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ticker*](helpers_ticker.ticker.md)

Defined in: node_modules/@types/node/events.d.ts:76

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

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*Ticker*](helpers_ticker.ticker.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *string* \| *symbol* |

**Returns:** [*Ticker*](helpers_ticker.ticker.md)

Defined in: node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ticker*](helpers_ticker.ticker.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ticker*](helpers_ticker.ticker.md)

Defined in: node_modules/@types/node/events.d.ts:65

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*Ticker*](helpers_ticker.ticker.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*Ticker*](helpers_ticker.ticker.md)

Defined in: node_modules/@types/node/events.d.ts:68

___

### start

▸ **start**(): *void*

Start the timer

**Returns:** *void*

Defined in: packages/jobs/src/helpers/Ticker.ts:34

___

### stop

▸ **stop**(): *void*

Stop the timer

**Returns:** *void*

Defined in: packages/jobs/src/helpers/Ticker.ts:44

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
