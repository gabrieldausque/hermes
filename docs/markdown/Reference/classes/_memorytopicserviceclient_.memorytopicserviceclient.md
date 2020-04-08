[theloneblacksheep-topicservice](../README.md) › [Globals](../globals.md) › ["MemoryTopicServiceClient"](../modules/_memorytopicserviceclient_.md) › [MemoryTopicServiceClient](_memorytopicserviceclient_.memorytopicserviceclient.md)

# Class: MemoryTopicServiceClient

A client that is in the same memory space as the listened [TopicService](_topicservice_.topicservice.md) (in the same nodejs instance)

## Hierarchy

* [BaseTopicClient](_basetopicclient_.basetopicclient.md)

  ↳ **MemoryTopicServiceClient**

## Implements

* [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md)

## Index

### Constructors

* [constructor](_memorytopicserviceclient_.memorytopicserviceclient.md#constructor)

### Properties

* [topicClientId](_memorytopicserviceclient_.memorytopicserviceclient.md#topicclientid)
* [topicHandlers](_memorytopicserviceclient_.memorytopicserviceclient.md#protected-topichandlers)
* [topicService](_memorytopicserviceclient_.memorytopicserviceclient.md#protected-topicservice)

### Methods

* [disconnect](_memorytopicserviceclient_.memorytopicserviceclient.md#disconnect)
* [isListeningTo](_memorytopicserviceclient_.memorytopicserviceclient.md#islisteningto)
* [publish](_memorytopicserviceclient_.memorytopicserviceclient.md#publish)
* [subscribe](_memorytopicserviceclient_.memorytopicserviceclient.md#subscribe)
* [topicTriggered](_memorytopicserviceclient_.memorytopicserviceclient.md#topictriggered)
* [unsubscribe](_memorytopicserviceclient_.memorytopicserviceclient.md#unsubscribe)

## Constructors

###  constructor

\+ **new MemoryTopicServiceClient**(`service`: [TopicService](_topicservice_.topicservice.md)): *[MemoryTopicServiceClient](_memorytopicserviceclient_.memorytopicserviceclient.md)*

*Overrides [BaseTopicClient](_basetopicclient_.basetopicclient.md).[constructor](_basetopicclient_.basetopicclient.md#protected-constructor)*

Defined in MemoryTopicServiceClient.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`service` | [TopicService](_topicservice_.topicservice.md) |

**Returns:** *[MemoryTopicServiceClient](_memorytopicserviceclient_.memorytopicserviceclient.md)*

## Properties

###  topicClientId

• **topicClientId**: *string*

*Implementation of [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md).[topicClientId](../interfaces/_interfaces_itopicclient_.itopicclient.md#topicclientid)*

*Inherited from [BaseTopicClient](_basetopicclient_.basetopicclient.md).[topicClientId](_basetopicclient_.basetopicclient.md#topicclientid)*

Defined in BaseTopicClient.ts:19

The Id of the client, based on uuid v4 specifications

___

### `Protected` topicHandlers

• **topicHandlers**: *object*

*Inherited from [BaseTopicClient](_basetopicclient_.basetopicclient.md).[topicHandlers](_basetopicclient_.basetopicclient.md#protected-topichandlers)*

Defined in BaseTopicClient.ts:23

The lists of [TopicHandlerFunction](../interfaces/_interfaces_itopicclient_.topichandlerfunction.md) by topic listened

#### Type declaration:

___

### `Protected` topicService

• **topicService**: *[TopicService](_topicservice_.topicservice.md)*

*Inherited from [BaseTopicClient](_basetopicclient_.basetopicclient.md).[topicService](_basetopicclient_.basetopicclient.md#protected-topicservice)*

Defined in BaseTopicClient.ts:15

The topicService on which the current is listening on

## Methods

###  disconnect

▸ **disconnect**(): *void*

*Implementation of [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md)*

*Inherited from [BaseTopicClient](_basetopicclient_.basetopicclient.md).[disconnect](_basetopicclient_.basetopicclient.md#disconnect)*

Defined in BaseTopicClient.ts:147

Disconnect definitively the client of the topicService

**Returns:** *void*

___

###  isListeningTo

▸ **isListeningTo**(`topic`: string): *boolean*

*Implementation of [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md)*

*Inherited from [BaseTopicClient](_basetopicclient_.basetopicclient.md).[isListeningTo](_basetopicclient_.basetopicclient.md#islisteningto)*

Defined in BaseTopicClient.ts:74

Check if the current client is listening to a topic.

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *boolean*

___

###  publish

▸ **publish**(`topic`: string, `messageContent`: any): *Promise‹void›*

*Implementation of [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md)*

*Inherited from [BaseTopicClient](_basetopicclient_.basetopicclient.md).[publish](_basetopicclient_.basetopicclient.md#publish)*

Defined in BaseTopicClient.ts:94

Publish a message to all client that are listening the specified topic

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`messageContent` | any |

**Returns:** *Promise‹void›*

___

###  subscribe

▸ **subscribe**(`topic`: string, `handler`: [TopicHandlerFunction](../interfaces/_interfaces_itopicclient_.topichandlerfunction.md), `handlerOwner`: any): *void*

*Implementation of [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md)*

*Inherited from [BaseTopicClient](_basetopicclient_.basetopicclient.md).[subscribe](_basetopicclient_.basetopicclient.md#subscribe)*

Defined in BaseTopicClient.ts:107

Subscribe a topic to execute the specified handler using the handlerContext as the 'this' keyword.

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`handler` | [TopicHandlerFunction](../interfaces/_interfaces_itopicclient_.topichandlerfunction.md) |
`handlerOwner` | any |

**Returns:** *void*

___

###  topicTriggered

▸ **topicTriggered**(`topicTriggered`: string, `topicMessage`: [TopicMessage](_datas_topicmessage_.topicmessage.md)): *Promise‹void›*

*Implementation of [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md)*

*Inherited from [BaseTopicClient](_basetopicclient_.basetopicclient.md).[topicTriggered](_basetopicclient_.basetopicclient.md#topictriggered)*

Defined in BaseTopicClient.ts:125

Execute all [TopicHandlerFunction](../interfaces/_interfaces_itopicclient_.topichandlerfunction.md) when receiving a message for the subscribed topic

**Parameters:**

Name | Type |
------ | ------ |
`topicTriggered` | string |
`topicMessage` | [TopicMessage](_datas_topicmessage_.topicmessage.md) |

**Returns:** *Promise‹void›*

___

###  unsubscribe

▸ **unsubscribe**(`topic`: string): *void*

*Implementation of [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md)*

*Inherited from [BaseTopicClient](_basetopicclient_.basetopicclient.md).[unsubscribe](_basetopicclient_.basetopicclient.md#unsubscribe)*

Defined in BaseTopicClient.ts:154

Unsubscribe the specified topic

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *void*
