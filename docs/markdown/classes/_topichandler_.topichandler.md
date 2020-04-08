[theloneblacksheep-topicservice](../README.md) › [Globals](../globals.md) › ["TopicHandler"](../modules/_topichandler_.md) › [TopicHandler](_topichandler_.topichandler.md)

# Class: TopicHandler

The object that is responsible for invoking the [TopicHandlerFunction](../interfaces/_interfaces_itopicclient_.topichandlerfunction.md) using the right 'this' object

## Hierarchy

* **TopicHandler**

## Index

### Constructors

* [constructor](_topichandler_.topichandler.md#constructor)

### Properties

* [callingContext](_topichandler_.topichandler.md#callingcontext)
* [topicHandlerFunction](_topichandler_.topichandler.md#topichandlerfunction)

### Methods

* [call](_topichandler_.topichandler.md#call)

## Constructors

###  constructor

\+ **new TopicHandler**(`topicHandlerFunction`: [TopicHandlerFunction](../interfaces/_interfaces_itopicclient_.topichandlerfunction.md), `topicHandlerThisObject`: any): *[TopicHandler](_topichandler_.topichandler.md)*

Defined in TopicHandler.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`topicHandlerFunction` | [TopicHandlerFunction](../interfaces/_interfaces_itopicclient_.topichandlerfunction.md) |
`topicHandlerThisObject` | any |

**Returns:** *[TopicHandler](_topichandler_.topichandler.md)*

## Properties

###  callingContext

• **callingContext**: *any*

Defined in TopicHandler.ts:15

the 'this' instance used when calling the [topicHandlerFunction](_topichandler_.topichandler.md#topichandlerfunction)

___

###  topicHandlerFunction

• **topicHandlerFunction**: *[TopicHandlerFunction](../interfaces/_interfaces_itopicclient_.topichandlerfunction.md)*

Defined in TopicHandler.ts:11

the [TopicHandlerFunction](../interfaces/_interfaces_itopicclient_.topichandlerfunction.md) that this instance will call

## Methods

###  call

▸ **call**(`topic`: String, `topicMessage`: [TopicMessage](_datas_topicmessage_.topicmessage.md)): *void*

Defined in TopicHandler.ts:26

Invoke the [topicHandlerFunction](_topichandler_.topichandler.md#topichandlerfunction) with the [callingContext](_topichandler_.topichandler.md#callingcontext) as 'this'

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | String | The topic used when calling the [topicHandlerFunction](_topichandler_.topichandler.md#topichandlerfunction) |
`topicMessage` | [TopicMessage](_datas_topicmessage_.topicmessage.md) | The topicMessage that will be passed to the [topicHandlerFunction](_topichandler_.topichandler.md#topichandlerfunction)  |

**Returns:** *void*
