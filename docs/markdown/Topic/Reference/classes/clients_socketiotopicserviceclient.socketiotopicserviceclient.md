[@hermes/topicservice](../README.md) / [Exports](../modules.md) / [clients/SocketIOTopicServiceClient](../modules/clients_socketiotopicserviceclient.md) / SocketIOTopicServiceClient

# Class: SocketIOTopicServiceClient

[clients/SocketIOTopicServiceClient](../modules/clients_socketiotopicserviceclient.md).SocketIOTopicServiceClient

A client that represents in the server side (node instance of the topic service) a distant client connected using Socket.Io

## Hierarchy

* [*BaseTopicClient*](clients_basetopicclient.basetopicclient.md)

  ↳ **SocketIOTopicServiceClient**

## Table of contents

### Constructors

- [constructor](clients_socketiotopicserviceclient.socketiotopicserviceclient.md#constructor)

### Properties

- [socket](clients_socketiotopicserviceclient.socketiotopicserviceclient.md#socket)
- [topicClientId](clients_socketiotopicserviceclient.socketiotopicserviceclient.md#topicclientid)
- [topicHandlers](clients_socketiotopicserviceclient.socketiotopicserviceclient.md#topichandlers)
- [topicService](clients_socketiotopicserviceclient.socketiotopicserviceclient.md#topicservice)

### Methods

- [disconnect](clients_socketiotopicserviceclient.socketiotopicserviceclient.md#disconnect)
- [initializeProxyChannelProtocol](clients_socketiotopicserviceclient.socketiotopicserviceclient.md#initializeproxychannelprotocol)
- [isListeningTo](clients_socketiotopicserviceclient.socketiotopicserviceclient.md#islisteningto)
- [onError](clients_socketiotopicserviceclient.socketiotopicserviceclient.md#onerror)
- [publish](clients_socketiotopicserviceclient.socketiotopicserviceclient.md#publish)
- [sendToSocketIO](clients_socketiotopicserviceclient.socketiotopicserviceclient.md#sendtosocketio)
- [subscribe](clients_socketiotopicserviceclient.socketiotopicserviceclient.md#subscribe)
- [topicTriggered](clients_socketiotopicserviceclient.socketiotopicserviceclient.md#topictriggered)
- [unsubscribe](clients_socketiotopicserviceclient.socketiotopicserviceclient.md#unsubscribe)

## Constructors

### constructor

\+ **new SocketIOTopicServiceClient**(`service`: [*TopicService*](topicservice.topicservice-1.md), `socket`: Socket): [*SocketIOTopicServiceClient*](clients_socketiotopicserviceclient.socketiotopicserviceclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`service` | [*TopicService*](topicservice.topicservice-1.md) |
`socket` | Socket |

**Returns:** [*SocketIOTopicServiceClient*](clients_socketiotopicserviceclient.socketiotopicserviceclient.md)

Inherited from: [BaseTopicClient](clients_basetopicclient.basetopicclient.md)

Defined in: packages/topic/src/clients/SocketIOTopicServiceClient.ts:13

## Properties

### socket

• `Private` **socket**: Socket

the socket that allow communication with distant client

Defined in: packages/topic/src/clients/SocketIOTopicServiceClient.ts:13

___

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

### initializeProxyChannelProtocol

▸ **initializeProxyChannelProtocol**(): *void*

Initialize communication with socketIo channel protocol (for subscribe, publish and changeId when reconnected)

**Returns:** *void*

Defined in: packages/topic/src/clients/SocketIOTopicServiceClient.ts:26

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

### sendToSocketIO

▸ `Private`**sendToSocketIO**(`topicTriggered`: *string*, `topicMessage`: [*TopicMessage*](datas_topicmessage.topicmessage.md)): *void*

The [TopicHandlerFunction](../interfaces/interfaces_topicclient.topichandlerfunction.md) used to transmit topic triggered in the topicService to the distant client

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topicTriggered` | *string* | the topic listened to on which the message is received   |
`topicMessage` | [*TopicMessage*](datas_topicmessage.topicmessage.md) | the message received    |

**Returns:** *void*

Defined in: packages/topic/src/clients/SocketIOTopicServiceClient.ts:59

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
