[@hermes/topicservice](../README.md) › [Globals](../globals.md) › [TopicHandler](topichandler.md)

# Class: TopicHandler

The object that is responsible for invoking the [TopicHandlerFunction](../interfaces/topichandlerfunction.md) using the right 'this' object

## Hierarchy

* **TopicHandler**

## Index

### Constructors

* [constructor](topichandler.md#constructor)

### Properties

* [callingContext](topichandler.md#callingcontext)
* [topicHandlerFunction](topichandler.md#topichandlerfunction)

### Methods

* [call](topichandler.md#call)

## Constructors

###  constructor

\+ **new TopicHandler**(`topicHandlerFunction`: [TopicHandlerFunction](../interfaces/topichandlerfunction.md), `topicHandlerThisObject`: any): *[TopicHandler](topichandler.md)*

Defined in TopicHandler.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`topicHandlerFunction` | [TopicHandlerFunction](../interfaces/topichandlerfunction.md) |
`topicHandlerThisObject` | any |

**Returns:** *[TopicHandler](topichandler.md)*

## Properties

###  callingContext

• **callingContext**: *any*

Defined in TopicHandler.ts:15

the 'this' instance used when calling the [topicHandlerFunction](topichandler.md#topichandlerfunction)

___

###  topicHandlerFunction

• **topicHandlerFunction**: *[TopicHandlerFunction](../interfaces/topichandlerfunction.md)*

Defined in TopicHandler.ts:11

the [TopicHandlerFunction](../interfaces/topichandlerfunction.md) that this instance will call

## Methods

###  call

▸ **call**(`topic`: String, `topicMessage`: [TopicMessage](topicmessage.md)): *void*

Defined in TopicHandler.ts:26

Invoke the [topicHandlerFunction](topichandler.md#topichandlerfunction) with the [callingContext](topichandler.md#callingcontext) as 'this'

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | String | The topic used when calling the [topicHandlerFunction](topichandler.md#topichandlerfunction) |
`topicMessage` | [TopicMessage](topicmessage.md) | The topicMessage that will be passed to the [topicHandlerFunction](topichandler.md#topichandlerfunction)  |

**Returns:** *void*
