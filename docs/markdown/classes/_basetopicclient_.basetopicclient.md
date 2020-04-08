[theloneblacksheep-topicservice](../README.md) › [Globals](../globals.md) › ["BaseTopicClient"](../modules/_basetopicclient_.md) › [BaseTopicClient](_basetopicclient_.basetopicclient.md)

# Class: BaseTopicClient

Represents basic implementation of all TopicClient.

## Hierarchy

* **BaseTopicClient**

  ↳ [MemoryTopicServiceClient](_memorytopicserviceclient_.memorytopicserviceclient.md)

  ↳ [SocketIOTopicServiceClient](_socketiotopicserviceclient_.socketiotopicserviceclient.md)

## Implements

* [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md)

## Index

### Constructors

* [constructor](_basetopicclient_.basetopicclient.md#protected-constructor)

### Properties

* [topicClientId](_basetopicclient_.basetopicclient.md#topicclientid)
* [topicHandlers](_basetopicclient_.basetopicclient.md#protected-topichandlers)
* [topicService](_basetopicclient_.basetopicclient.md#protected-topicservice)

### Methods

* [disconnect](_basetopicclient_.basetopicclient.md#disconnect)
* [getPatternForTopic](_basetopicclient_.basetopicclient.md#private-getpatternfortopic)
* [isListeningTo](_basetopicclient_.basetopicclient.md#islisteningto)
* [publish](_basetopicclient_.basetopicclient.md#publish)
* [subscribe](_basetopicclient_.basetopicclient.md#subscribe)
* [topicTriggered](_basetopicclient_.basetopicclient.md#topictriggered)
* [unsubscribe](_basetopicclient_.basetopicclient.md#unsubscribe)

## Constructors

### `Protected` constructor

\+ **new BaseTopicClient**(`topicService`: [TopicService](_topicservice_.topicservice.md)): *[BaseTopicClient](_basetopicclient_.basetopicclient.md)*

Defined in BaseTopicClient.ts:23

Create a new client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topicService` | [TopicService](_topicservice_.topicservice.md) | The service that the client will listen on  |

**Returns:** *[BaseTopicClient](_basetopicclient_.basetopicclient.md)*

## Properties

###  topicClientId

• **topicClientId**: *string*

*Implementation of [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md).[topicClientId](../interfaces/_interfaces_itopicclient_.itopicclient.md#topicclientid)*

Defined in BaseTopicClient.ts:19

The Id of the client, based on uuid v4 specifications

___

### `Protected` topicHandlers

• **topicHandlers**: *object*

Defined in BaseTopicClient.ts:23

The lists of [TopicHandlerFunction](../interfaces/_interfaces_itopicclient_.topichandlerfunction.md) by topic listened

#### Type declaration:

___

### `Protected` topicService

• **topicService**: *[TopicService](_topicservice_.topicservice.md)*

Defined in BaseTopicClient.ts:15

The topicService on which the current is listening on

## Methods

###  disconnect

▸ **disconnect**(): *void*

*Implementation of [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md)*

Defined in BaseTopicClient.ts:147

Disconnect definitively the client of the topicService

**Returns:** *void*

___

### `Private` getPatternForTopic

▸ **getPatternForTopic**(`topic`: string): *string*

Defined in BaseTopicClient.ts:52

Get the regexp pattern to test if the tested topic is listened to

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string | the topic to test  |

**Returns:** *string*

___

###  isListeningTo

▸ **isListeningTo**(`topic`: string): *boolean*

*Implementation of [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md)*

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

Defined in BaseTopicClient.ts:154

Unsubscribe the specified topic

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *void*
