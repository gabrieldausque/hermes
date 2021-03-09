[@hermes/topicservice](../README.md) / [Exports](../modules.md) / [clients/BaseTopicClient](../modules/clients_basetopicclient.md) / BaseTopicClient

# Class: BaseTopicClient

[clients/BaseTopicClient](../modules/clients_basetopicclient.md).BaseTopicClient

Represents basic implementation of all TopicClient.

## Hierarchy

* **BaseTopicClient**

  ↳ [*MemoryTopicServiceClient*](clients_memorytopicserviceclient.memorytopicserviceclient.md)

  ↳ [*SocketIOTopicServiceClient*](clients_socketiotopicserviceclient.socketiotopicserviceclient.md)

## Implements

* [*TopicClient*](../interfaces/interfaces_topicclient.topicclient.md)

## Table of contents

### Constructors

- [constructor](clients_basetopicclient.basetopicclient.md#constructor)

### Properties

- [topicClientId](clients_basetopicclient.basetopicclient.md#topicclientid)
- [topicHandlers](clients_basetopicclient.basetopicclient.md#topichandlers)
- [topicService](clients_basetopicclient.basetopicclient.md#topicservice)

### Methods

- [disconnect](clients_basetopicclient.basetopicclient.md#disconnect)
- [getPatternForTopic](clients_basetopicclient.basetopicclient.md#getpatternfortopic)
- [isListeningTo](clients_basetopicclient.basetopicclient.md#islisteningto)
- [onError](clients_basetopicclient.basetopicclient.md#onerror)
- [publish](clients_basetopicclient.basetopicclient.md#publish)
- [subscribe](clients_basetopicclient.basetopicclient.md#subscribe)
- [topicTriggered](clients_basetopicclient.basetopicclient.md#topictriggered)
- [unsubscribe](clients_basetopicclient.basetopicclient.md#unsubscribe)

## Constructors

### constructor

\+ `Protected`**new BaseTopicClient**(`topicService`: [*TopicService*](topicservice.topicservice-1.md)): [*BaseTopicClient*](clients_basetopicclient.basetopicclient.md)

Create a new client

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topicService` | [*TopicService*](topicservice.topicservice-1.md) | The service that the client will listen on    |

**Returns:** [*BaseTopicClient*](clients_basetopicclient.basetopicclient.md)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:23

## Properties

### topicClientId

• **topicClientId**: *string*

The Id of the client, based on uuid v4 specifications

Implementation of: [TopicClient](../interfaces/interfaces_topicclient.topicclient.md).[topicClientId](../interfaces/interfaces_topicclient.topicclient.md#topicclientid)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:19

___

### topicHandlers

• `Protected` **topicHandlers**: *object*

The lists of [TopicHandlerFunction](../interfaces/interfaces_topicclient.topichandlerfunction.md) by topic listened

#### Type declaration:

Defined in: packages/topic/src/clients/BaseTopicClient.ts:23

___

### topicService

• `Protected` **topicService**: [*TopicService*](topicservice.topicservice-1.md)

The topicService on which the current is listening on

Defined in: packages/topic/src/clients/BaseTopicClient.ts:15

## Methods

### disconnect

▸ **disconnect**(): *void*

Disconnect definitively the client of the topicService

**Returns:** *void*

Implementation of: [TopicClient](../interfaces/interfaces_topicclient.topicclient.md)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:178

___

### getPatternForTopic

▸ `Private`**getPatternForTopic**(`topic`: *string*): *string*

Get the regexp pattern to test if the tested topic is listened to

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | the topic to test    |

**Returns:** *string*

Defined in: packages/topic/src/clients/BaseTopicClient.ts:56

___

### isListeningTo

▸ **isListeningTo**(`topic`: *string*): *boolean*

Check if the current client is listening to a topic.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | the topic to test    |

**Returns:** *boolean*

Implementation of: [TopicClient](../interfaces/interfaces_topicclient.topicclient.md)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:78

___

### onError

▸ **onError**(`errorsHandler`: [*TopicHandlerFunction*](../interfaces/interfaces_topicclient.topichandlerfunction.md)): *void*

Set error when error is raised on topic topicClientId.error

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`errorsHandler` | [*TopicHandlerFunction*](../interfaces/interfaces_topicclient.topichandlerfunction.md) | The error handler to be executed when an error message is received    |

**Returns:** *void*

Implementation of: [TopicClient](../interfaces/interfaces_topicclient.topicclient.md)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:194

___

### publish

▸ **publish**(`topic`: *string*, `messageContent`: *any*): *Promise*<void\>

Publish a message to all client that are listening the specified topic

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | The topic to publish on   |
`messageContent` | *any* | The content that will be send on the message    |

**Returns:** *Promise*<void\>

Implementation of: [TopicClient](../interfaces/interfaces_topicclient.topicclient.md)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:108

___

### subscribe

▸ **subscribe**(`topic`: *string*, `handler`: [*TopicHandlerFunction*](../interfaces/interfaces_topicclient.topichandlerfunction.md), `handlerOwner`: *any*): *void*

Subscribe a topic to execute the specified handler using the handlerContext as the 'this' keyword.

#### Parameters:

Name | Type |
:------ | :------ |
`topic` | *string* |
`handler` | [*TopicHandlerFunction*](../interfaces/interfaces_topicclient.topichandlerfunction.md) |
`handlerOwner` | *any* |

**Returns:** *void*

Implementation of: [TopicClient](../interfaces/interfaces_topicclient.topicclient.md)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:121

___

### topicTriggered

▸ **topicTriggered**(`topicTriggered`: *string*, `topicMessage`: [*TopicMessage*](datas_topicmessage.topicmessage.md)): *Promise*<void\>

Execute all [TopicHandlerFunction](../interfaces/interfaces_topicclient.topichandlerfunction.md) when receiving a message for the subscribed topic

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topicTriggered` | *string* | the topic that has triggered the event   |
`topicMessage` | [*TopicMessage*](datas_topicmessage.topicmessage.md) | the message received on the topic    |

**Returns:** *Promise*<void\>

Implementation of: [TopicClient](../interfaces/interfaces_topicclient.topicclient.md)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:139

___

### unsubscribe

▸ **unsubscribe**(`topic`: *string*): *void*

Unsubscribe the specified topic

#### Parameters:

Name | Type |
:------ | :------ |
`topic` | *string* |

**Returns:** *void*

Implementation of: [TopicClient](../interfaces/interfaces_topicclient.topicclient.md)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:185
