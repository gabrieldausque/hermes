[@hermes/composition](../README.md) / [Exports](../modules.md) / [NotInCatalogError](../modules/notincatalogerror.md) / NotInCatalogError

# Class: NotInCatalogError

[NotInCatalogError](../modules/notincatalogerror.md).NotInCatalogError

## Hierarchy

* *Error*

  ↳ **NotInCatalogError**

## Table of contents

### Constructors

- [constructor](notincatalogerror.notincatalogerror-1.md#constructor)

### Properties

- [message](notincatalogerror.notincatalogerror-1.md#message)
- [name](notincatalogerror.notincatalogerror-1.md#name)
- [stack](notincatalogerror.notincatalogerror-1.md#stack)
- [prepareStackTrace](notincatalogerror.notincatalogerror-1.md#preparestacktrace)
- [stackTraceLimit](notincatalogerror.notincatalogerror-1.md#stacktracelimit)

### Methods

- [captureStackTrace](notincatalogerror.notincatalogerror-1.md#capturestacktrace)

## Constructors

### constructor

\+ **new NotInCatalogError**(`contractType`: *string*, `contractName`: *string*): [*NotInCatalogError*](notincatalogerror.notincatalogerror-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`contractType` | *string* |
`contractName` | *string* |

**Returns:** [*NotInCatalogError*](notincatalogerror.notincatalogerror-1.md)

Defined in: packages/composition/src/NotInCatalogError.ts:1

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
