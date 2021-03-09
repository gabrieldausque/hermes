[@hermes/topicservice](../README.md) / [Exports](../modules.md) / [clients/MemoryTopicServiceClient](../modules/clients_memorytopicserviceclient.md) / MemoryTopicServiceClient

# Class: MemoryTopicServiceClient

[clients/MemoryTopicServiceClient](../modules/clients_memorytopicserviceclient.md).MemoryTopicServiceClient

A client that is in the same memory space as the listened [TopicService](../modules/topicservice.md) (in the same nodejs instance)

## Hierarchy

* [*BaseTopicClient*](clients_basetopicclient.basetopicclient.md)

  ↳ **MemoryTopicServiceClient**

## Table of contents

### Constructors

- [constructor](clients_memorytopicserviceclient.memorytopicserviceclient.md#constructor)

### Properties

- [topicClientId](clients_memorytopicserviceclient.memorytopicserviceclient.md#topicclientid)
- [topicHandlers](clients_memorytopicserviceclient.memorytopicserviceclient.md#topichandlers)
- [topicService](clients_memorytopicserviceclient.memorytopicserviceclient.md#topicservice)

### Methods

- [disconnect](clients_memorytopicserviceclient.memorytopicserviceclient.md#disconnect)
- [isListeningTo](clients_memorytopicserviceclient.memorytopicserviceclient.md#islisteningto)
- [onError](clients_memorytopicserviceclient.memorytopicserviceclient.md#onerror)
- [publish](clients_memorytopicserviceclient.memorytopicserviceclient.md#publish)
- [subscribe](clients_memorytopicserviceclient.memorytopicserviceclient.md#subscribe)
- [topicTriggered](clients_memorytopicserviceclient.memorytopicserviceclient.md#topictriggered)
- [unsubscribe](clients_memorytopicserviceclient.memorytopicserviceclient.md#unsubscribe)

## Constructors

### constructor

\+ **new MemoryTopicServiceClient**(`service`: [*TopicService*](topicservice.topicservice-1.md)): [*MemoryTopicServiceClient*](clients_memorytopicserviceclient.memorytopicserviceclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`service` | [*TopicService*](topicservice.topicservice-1.md) |

**Returns:** [*MemoryTopicServiceClient*](clients_memorytopicserviceclient.memorytopicserviceclient.md)

Inherited from: [BaseTopicClient](clients_basetopicclient.basetopicclient.md)

Defined in: packages/topic/src/clients/MemoryTopicServiceClient.ts:7

## Properties

### topicClientId

• **topicClientId**: *string*

The Id of the client, based on uuid v4 specifications

Inherited from: [BaseTopicClient](clients_basetopicclient.basetopicclient.md).[topicClientId](clients_basetopicclient.basetopicclient.md#topicclientid)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:19

___

### topicHandlers

• `Protected` **topicHandlers**: *object*

The lists of [TopicHandlerFunction](../interfaces/interfaces_topicclient.topichandlerfunction.md) by topic listened

#### Type declaration:

Inherited from: [BaseTopicClient](clients_basetopicclient.basetopicclient.md).[topicHandlers](clients_basetopicclient.basetopicclient.md#topichandlers)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:23

___

### topicService

• `Protected` **topicService**: [*TopicService*](topicservice.topicservice-1.md)

The topicService on which the current is listening on

Inherited from: [BaseTopicClient](clients_basetopicclient.basetopicclient.md).[topicService](clients_basetopicclient.basetopicclient.md#topicservice)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:15

## Methods

### disconnect

▸ **disconnect**(): *void*

**`inheritdoc`** 

**Returns:** *void*

Inherited from: [BaseTopicClient](clients_basetopicclient.basetopicclient.md)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:178

___

### isListeningTo

▸ **isListeningTo**(`topic`: *string*): *boolean*

**`inheritdoc`** 

#### Parameters:

Name | Type |
:------ | :------ |
`topic` | *string* |

**Returns:** *boolean*

Inherited from: [BaseTopicClient](clients_basetopicclient.basetopicclient.md)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:78

___

### onError

▸ **onError**(`errorsHandler`: [*TopicHandlerFunction*](../interfaces/interfaces_topicclient.topichandlerfunction.md)): *void*

**`inheritdoc`** 

#### Parameters:

Name | Type |
:------ | :------ |
`errorsHandler` | [*TopicHandlerFunction*](../interfaces/interfaces_topicclient.topichandlerfunction.md) |

**Returns:** *void*

Inherited from: [BaseTopicClient](clients_basetopicclient.basetopicclient.md)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:194

___

### publish

▸ **publish**(`topic`: *string*, `messageContent`: *any*): *Promise*<void\>

**`inheritdoc`** 

#### Parameters:

Name | Type |
:------ | :------ |
`topic` | *string* |
`messageContent` | *any* |

**Returns:** *Promise*<void\>

Inherited from: [BaseTopicClient](clients_basetopicclient.basetopicclient.md)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:108

___

### subscribe

▸ **subscribe**(`topic`: *string*, `handler`: [*TopicHandlerFunction*](../interfaces/interfaces_topicclient.topichandlerfunction.md), `handlerOwner`: *any*): *void*

**`inheritdoc`** 

#### Parameters:

Name | Type |
:------ | :------ |
`topic` | *string* |
`handler` | [*TopicHandlerFunction*](../interfaces/interfaces_topicclient.topichandlerfunction.md) |
`handlerOwner` | *any* |

**Returns:** *void*

Inherited from: [BaseTopicClient](clients_basetopicclient.basetopicclient.md)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:121

___

### topicTriggered

▸ **topicTriggered**(`topicTriggered`: *string*, `topicMessage`: [*TopicMessage*](datas_topicmessage.topicmessage.md)): *Promise*<void\>

**`inheritdoc`** 

#### Parameters:

Name | Type |
:------ | :------ |
`topicTriggered` | *string* |
`topicMessage` | [*TopicMessage*](datas_topicmessage.topicmessage.md) |

**Returns:** *Promise*<void\>

Inherited from: [BaseTopicClient](clients_basetopicclient.basetopicclient.md)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:139

___

### unsubscribe

▸ **unsubscribe**(`topic`: *string*): *void*

**`inheritdoc`** 

#### Parameters:

Name | Type |
:------ | :------ |
`topic` | *string* |

**Returns:** *void*

Inherited from: [BaseTopicClient](clients_basetopicclient.basetopicclient.md)

Defined in: packages/topic/src/clients/BaseTopicClient.ts:185
