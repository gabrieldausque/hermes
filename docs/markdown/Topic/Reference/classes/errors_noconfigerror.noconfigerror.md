[@hermes/topicservice](../README.md) / [Exports](../modules.md) / [errors/NoConfigError](../modules/errors_noconfigerror.md) / NoConfigError

# Class: NoConfigError

[errors/NoConfigError](../modules/errors_noconfigerror.md).NoConfigError

## Hierarchy

* *Error*

  ↳ **NoConfigError**

## Table of contents

### Constructors

- [constructor](errors_noconfigerror.noconfigerror.md#constructor)

### Properties

- [message](errors_noconfigerror.noconfigerror.md#message)
- [name](errors_noconfigerror.noconfigerror.md#name)
- [stack](errors_noconfigerror.noconfigerror.md#stack)
- [prepareStackTrace](errors_noconfigerror.noconfigerror.md#preparestacktrace)
- [stackTraceLimit](errors_noconfigerror.noconfigerror.md#stacktracelimit)

### Methods

- [captureStackTrace](errors_noconfigerror.noconfigerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new NoConfigError**(): [*NoConfigError*](errors_noconfigerror.noconfigerror.md)

**Returns:** [*NoConfigError*](errors_noconfigerror.noconfigerror.md)

Defined in: packages/topic/src/errors/NoConfigError.ts:1

## Properties

### message

• **message**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Optional` `Static` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

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

### stackTraceLimit

▪ `Static` **stackTraceLimit**: *number*

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static`**captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
:------ | :------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*

Defined in: node_modules/@types/node/globals.d.ts:4
