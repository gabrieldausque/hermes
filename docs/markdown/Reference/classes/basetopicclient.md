[@hermes/topicservice](../README.md) › [Globals](../globals.md) › [BaseTopicClient](basetopicclient.md)

# Class: BaseTopicClient

Represents basic implementation of all TopicClient.

## Hierarchy

* **BaseTopicClient**

  ↳ [MemoryTopicServiceClient](memorytopicserviceclient.md)

  ↳ [SocketIOTopicServiceClient](socketiotopicserviceclient.md)

## Implements

* [ITopicClient](../interfaces/itopicclient.md)

## Index

### Constructors

* [constructor](basetopicclient.md#protected-constructor)

### Properties

* [topicClientId](basetopicclient.md#topicclientid)
* [topicHandlers](basetopicclient.md#protected-topichandlers)
* [topicService](basetopicclient.md#protected-topicservice)

### Methods

* [disconnect](basetopicclient.md#disconnect)
* [getPatternForTopic](basetopicclient.md#private-getpatternfortopic)
* [isListeningTo](basetopicclient.md#islisteningto)
* [publish](basetopicclient.md#publish)
* [subscribe](basetopicclient.md#subscribe)
* [topicTriggered](basetopicclient.md#topictriggered)
* [unsubscribe](basetopicclient.md#unsubscribe)

## Constructors

### `Protected` constructor

\+ **new BaseTopicClient**(`topicService`: [TopicService](topicservice.md)): *[BaseTopicClient](basetopicclient.md)*

Defined in BaseTopicClient.ts:23

Create a new client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topicService` | [TopicService](topicservice.md) | The service that the client will listen on  |

**Returns:** *[BaseTopicClient](basetopicclient.md)*

## Properties

###  topicClientId

• **topicClientId**: *string*

*Implementation of [ITopicClient](../interfaces/itopicclient.md).[topicClientId](../interfaces/itopicclient.md#topicclientid)*

Defined in BaseTopicClient.ts:19

The Id of the client, based on uuid v4 specifications

___

### `Protected` topicHandlers

• **topicHandlers**: *object*

Defined in BaseTopicClient.ts:23

The lists of [TopicHandlerFunction](../interfaces/topichandlerfunction.md) by topic listened

#### Type declaration:

___

### `Protected` topicService

• **topicService**: *[TopicService](topicservice.md)*

Defined in BaseTopicClient.ts:15

The topicService on which the current is listening on

## Methods

###  disconnect

▸ **disconnect**(): *void*

*Implementation of [ITopicClient](../interfaces/itopicclient.md)*

Defined in BaseTopicClient.ts:174

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

*Implementation of [ITopicClient](../interfaces/itopicclient.md)*

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

*Implementation of [ITopicClient](../interfaces/itopicclient.md)*

Defined in BaseTopicClient.ts:104

Publish a message to all client that are listening the specified topic

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`messageContent` | any |

**Returns:** *Promise‹void›*

___

###  subscribe

▸ **subscribe**(`topic`: string, `handler`: [TopicHandlerFunction](../interfaces/topichandlerfunction.md), `handlerOwner`: any): *void*

*Implementation of [ITopicClient](../interfaces/itopicclient.md)*

Defined in BaseTopicClient.ts:117

Subscribe a topic to execute the specified handler using the handlerContext as the 'this' keyword.

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`handler` | [TopicHandlerFunction](../interfaces/topichandlerfunction.md) |
`handlerOwner` | any |

**Returns:** *void*

___

###  topicTriggered

▸ **topicTriggered**(`topicTriggered`: string, `topicMessage`: [TopicMessage](topicmessage.md)): *Promise‹void›*

*Implementation of [ITopicClient](../interfaces/itopicclient.md)*

Defined in BaseTopicClient.ts:135

Execute all [TopicHandlerFunction](../interfaces/topichandlerfunction.md) when receiving a message for the subscribed topic

**Parameters:**

Name | Type |
------ | ------ |
`topicTriggered` | string |
`topicMessage` | [TopicMessage](topicmessage.md) |

**Returns:** *Promise‹void›*

___

###  unsubscribe

▸ **unsubscribe**(`topic`: string): *void*

*Implementation of [ITopicClient](../interfaces/itopicclient.md)*

Defined in BaseTopicClient.ts:181

Unsubscribe the specified topic

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *void*
