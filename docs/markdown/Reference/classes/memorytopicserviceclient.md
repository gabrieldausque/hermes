[@hermes/topicservice](../README.md) › [Globals](../globals.md) › [MemoryTopicServiceClient](memorytopicserviceclient.md)

# Class: MemoryTopicServiceClient

A client that is in the same memory space as the listened [TopicService](topicservice.md) (in the same nodejs instance)

## Hierarchy

* [BaseTopicClient](basetopicclient.md)

  ↳ **MemoryTopicServiceClient**

## Implements

* [ITopicClient](../interfaces/itopicclient.md)

## Index

### Constructors

* [constructor](memorytopicserviceclient.md#constructor)

### Properties

* [topicClientId](memorytopicserviceclient.md#topicclientid)
* [topicHandlers](memorytopicserviceclient.md#protected-topichandlers)
* [topicService](memorytopicserviceclient.md#protected-topicservice)

### Methods

* [disconnect](memorytopicserviceclient.md#disconnect)
* [isListeningTo](memorytopicserviceclient.md#islisteningto)
* [onError](memorytopicserviceclient.md#onerror)
* [publish](memorytopicserviceclient.md#publish)
* [subscribe](memorytopicserviceclient.md#subscribe)
* [topicTriggered](memorytopicserviceclient.md#topictriggered)
* [unsubscribe](memorytopicserviceclient.md#unsubscribe)

## Constructors

###  constructor

\+ **new MemoryTopicServiceClient**(`service`: [TopicService](topicservice.md)): *[MemoryTopicServiceClient](memorytopicserviceclient.md)*

*Overrides [BaseTopicClient](basetopicclient.md).[constructor](basetopicclient.md#protected-constructor)*

Defined in clients/MemoryTopicServiceClient.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`service` | [TopicService](topicservice.md) |

**Returns:** *[MemoryTopicServiceClient](memorytopicserviceclient.md)*

## Properties

###  topicClientId

• **topicClientId**: *string*

*Implementation of [ITopicClient](../interfaces/itopicclient.md).[topicClientId](../interfaces/itopicclient.md#topicclientid)*

*Inherited from [BaseTopicClient](basetopicclient.md).[topicClientId](basetopicclient.md#topicclientid)*

Defined in clients/BaseTopicClient.ts:19

The Id of the client, based on uuid v4 specifications

___

### `Protected` topicHandlers

• **topicHandlers**: *object*

*Inherited from [BaseTopicClient](basetopicclient.md).[topicHandlers](basetopicclient.md#protected-topichandlers)*

Defined in clients/BaseTopicClient.ts:23

The lists of [TopicHandlerFunction](../interfaces/topichandlerfunction.md) by topic listened

#### Type declaration:

___

### `Protected` topicService

• **topicService**: *[TopicService](topicservice.md)*

*Inherited from [BaseTopicClient](basetopicclient.md).[topicService](basetopicclient.md#protected-topicservice)*

Defined in clients/BaseTopicClient.ts:15

The topicService on which the current is listening on

## Methods

###  disconnect

▸ **disconnect**(): *void*

*Implementation of [ITopicClient](../interfaces/itopicclient.md)*

*Inherited from [BaseTopicClient](basetopicclient.md).[disconnect](basetopicclient.md#disconnect)*

Defined in clients/BaseTopicClient.ts:177

Disconnect definitively the client of the topicService

**Returns:** *void*

___

###  isListeningTo

▸ **isListeningTo**(`topic`: string): *boolean*

*Implementation of [ITopicClient](../interfaces/itopicclient.md)*

*Inherited from [BaseTopicClient](basetopicclient.md).[isListeningTo](basetopicclient.md#islisteningto)*

Defined in clients/BaseTopicClient.ts:77

Check if the current client is listening to a topic.

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *boolean*

___

###  onError

▸ **onError**(`errorsHandler`: [TopicHandlerFunction](../interfaces/topichandlerfunction.md)): *void*

*Implementation of [ITopicClient](../interfaces/itopicclient.md)*

*Inherited from [BaseTopicClient](basetopicclient.md).[onError](basetopicclient.md#onerror)*

Defined in clients/BaseTopicClient.ts:193

Set error when error is raised on topic topicClientId.error

**Parameters:**

Name | Type |
------ | ------ |
`errorsHandler` | [TopicHandlerFunction](../interfaces/topichandlerfunction.md) |

**Returns:** *void*

___

###  publish

▸ **publish**(`topic`: string, `messageContent`: any): *Promise‹void›*

*Implementation of [ITopicClient](../interfaces/itopicclient.md)*

*Inherited from [BaseTopicClient](basetopicclient.md).[publish](basetopicclient.md#publish)*

Defined in clients/BaseTopicClient.ts:107

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

*Inherited from [BaseTopicClient](basetopicclient.md).[subscribe](basetopicclient.md#subscribe)*

Defined in clients/BaseTopicClient.ts:120

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

*Inherited from [BaseTopicClient](basetopicclient.md).[topicTriggered](basetopicclient.md#topictriggered)*

Defined in clients/BaseTopicClient.ts:138

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

*Inherited from [BaseTopicClient](basetopicclient.md).[unsubscribe](basetopicclient.md#unsubscribe)*

Defined in clients/BaseTopicClient.ts:184

Unsubscribe the specified topic

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *void*
