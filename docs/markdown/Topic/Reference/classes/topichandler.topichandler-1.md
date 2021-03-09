[@hermes/topicservice](../README.md) / [Exports](../modules.md) / [TopicHandler](../modules/topichandler.md) / TopicHandler

# Class: TopicHandler

[TopicHandler](../modules/topichandler.md).TopicHandler

The object that is responsible for invoking the [TopicHandlerFunction](../interfaces/interfaces_topicclient.topichandlerfunction.md) using the right 'this' object

## Table of contents

### Constructors

- [constructor](topichandler.topichandler-1.md#constructor)

### Properties

- [callingContext](topichandler.topichandler-1.md#callingcontext)
- [topicHandlerFunction](topichandler.topichandler-1.md#topichandlerfunction)

### Methods

- [call](topichandler.topichandler-1.md#call)

## Constructors

### constructor

\+ **new TopicHandler**(`topicHandlerFunction`: [*TopicHandlerFunction*](../interfaces/interfaces_topicclient.topichandlerfunction.md), `topicHandlerThisObject`: *any*): [*TopicHandler*](topichandler.topichandler-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`topicHandlerFunction` | [*TopicHandlerFunction*](../interfaces/interfaces_topicclient.topichandlerfunction.md) |
`topicHandlerThisObject` | *any* |

**Returns:** [*TopicHandler*](topichandler.topichandler-1.md)

Defined in: packages/topic/src/TopicHandler.ts:15

## Properties

### callingContext

• **callingContext**: *any*

the 'this' instance used when calling the [topicHandlerFunction](topichandler.topichandler-1.md#topichandlerfunction)

Defined in: packages/topic/src/TopicHandler.ts:15

___

### topicHandlerFunction

• **topicHandlerFunction**: [*TopicHandlerFunction*](../interfaces/interfaces_topicclient.topichandlerfunction.md)

the [TopicHandlerFunction](../interfaces/interfaces_topicclient.topichandlerfunction.md) that this instance will call

Defined in: packages/topic/src/TopicHandler.ts:11

## Methods

### call

▸ **call**(`topic`: *string*, `topicMessage`: [*TopicMessage*](datas_topicmessage.topicmessage.md)): *void*

Invoke the [topicHandlerFunction](topichandler.topichandler-1.md#topichandlerfunction) with the [callingContext](topichandler.topichandler-1.md#callingcontext) as 'this'

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | The topic used when calling the [topicHandlerFunction](topichandler.topichandler-1.md#topichandlerfunction)   |
`topicMessage` | [*TopicMessage*](datas_topicmessage.topicmessage.md) | The topicMessage that will be passed to the [topicHandlerFunction](topichandler.topichandler-1.md#topichandlerfunction)    |

**Returns:** *void*

Defined in: packages/topic/src/TopicHandler.ts:27
