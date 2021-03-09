[@hermes/jobs](../README.md) / [Exports](../modules.md) / [errors/JobNotFoundError](../modules/errors_jobnotfounderror.md) / JobNotFoundError

# Class: JobNotFoundError

[errors/JobNotFoundError](../modules/errors_jobnotfounderror.md).JobNotFoundError

## Hierarchy

* *Error*

  ↳ **JobNotFoundError**

## Table of contents

### Constructors

- [constructor](errors_jobnotfounderror.jobnotfounderror.md#constructor)

### Properties

- [message](errors_jobnotfounderror.jobnotfounderror.md#message)
- [name](errors_jobnotfounderror.jobnotfounderror.md#name)
- [stack](errors_jobnotfounderror.jobnotfounderror.md#stack)
- [prepareStackTrace](errors_jobnotfounderror.jobnotfounderror.md#preparestacktrace)
- [stackTraceLimit](errors_jobnotfounderror.jobnotfounderror.md#stacktracelimit)

### Methods

- [captureStackTrace](errors_jobnotfounderror.jobnotfounderror.md#capturestacktrace)

## Constructors

### constructor

\+ **new JobNotFoundError**(`jobId`: *string*, `queueName`: *string*): [*JobNotFoundError*](errors_jobnotfounderror.jobnotfounderror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`jobId` | *string* |
`queueName` | *string* |

**Returns:** [*JobNotFoundError*](errors_jobnotfounderror.jobnotfounderror.md)

Defined in: packages/jobs/src/errors/JobNotFoundError.ts:1

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
