[@hermes/topicservice](../README.md) / [Exports](../modules.md) / [errors/NoCreatedSocketError](../modules/errors_nocreatedsocketerror.md) / NoCreatedSocketError

# Class: NoCreatedSocketError

[errors/NoCreatedSocketError](../modules/errors_nocreatedsocketerror.md).NoCreatedSocketError

## Hierarchy

* *Error*

  ↳ **NoCreatedSocketError**

## Table of contents

### Constructors

- [constructor](errors_nocreatedsocketerror.nocreatedsocketerror.md#constructor)

### Properties

- [message](errors_nocreatedsocketerror.nocreatedsocketerror.md#message)
- [name](errors_nocreatedsocketerror.nocreatedsocketerror.md#name)
- [prepareStackTrace](errors_nocreatedsocketerror.nocreatedsocketerror.md#preparestacktrace)
- [stack](errors_nocreatedsocketerror.nocreatedsocketerror.md#stack)
- [stackTraceLimit](errors_nocreatedsocketerror.nocreatedsocketerror.md#stacktracelimit)

### Methods

- [captureStackTrace](errors_nocreatedsocketerror.nocreatedsocketerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new NoCreatedSocketError**(): [*NoCreatedSocketError*](errors_nocreatedsocketerror.nocreatedsocketerror.md)

**Returns:** [*NoCreatedSocketError*](errors_nocreatedsocketerror.nocreatedsocketerror.md)

Defined in: packages/topic/src/errors/NoCreatedSocketError.ts:1

## Properties

### message

• **message**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### prepareStackTrace

• `Optional` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration:

▸ (`err`: Error, `stackTraces`: CallSite[]): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | Error |
`stackTraces` | CallSite[] |

**Returns:** *any*

Defined in: node_modules/@types/node/globals.d.ts:11

Defined in: node_modules/@types/node/globals.d.ts:11

___

### stack

• `Optional` **stack**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### stackTraceLimit

• **stackTraceLimit**: *number*

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
:------ | :------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*

Defined in: node_modules/@types/node/globals.d.ts:4
