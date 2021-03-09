[@hermes/topicservice](../README.md) / [Exports](../modules.md) / [interfaces/TopicClient](../modules/interfaces_topicclient.md) / TopicClient

# Interface: TopicClient

[interfaces/TopicClient](../modules/interfaces_topicclient.md).TopicClient

The TopicClient represents the operations contract of the client on server side.

## Implemented by

* [*BaseTopicClient*](../classes/clients_basetopicclient.basetopicclient.md)

## Table of contents

### Properties

- [topicClientId](interfaces_topicclient.topicclient.md#topicclientid)

### Methods

- [disconnect](interfaces_topicclient.topicclient.md#disconnect)
- [isListeningTo](interfaces_topicclient.topicclient.md#islisteningto)
- [onError](interfaces_topicclient.topicclient.md#onerror)
- [publish](interfaces_topicclient.topicclient.md#publish)
- [subscribe](interfaces_topicclient.topicclient.md#subscribe)
- [topicTriggered](interfaces_topicclient.topicclient.md#topictriggered)
- [unsubscribe](interfaces_topicclient.topicclient.md#unsubscribe)

## Properties

### topicClientId

• **topicClientId**: *string*

The Id of the client

Defined in: packages/topic/src/interfaces/TopicClient.ts:17

## Methods

### disconnect

▸ **disconnect**(): *void*

Disconnect definitively the client of the topicService

**Returns:** *void*

Defined in: packages/topic/src/interfaces/TopicClient.ts:56

___

### isListeningTo

▸ **isListeningTo**(`topic`: *string*): *boolean*

Check if the current client is listening to a topic.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | the topic to test    |

**Returns:** *boolean*

Defined in: packages/topic/src/interfaces/TopicClient.ts:51

___

### onError

▸ **onError**(`errorsHandler`: [*TopicHandlerFunction*](interfaces_topicclient.topichandlerfunction.md)): *void*

Set error when error is raised on topic topicClientId.error

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`errorsHandler` | [*TopicHandlerFunction*](interfaces_topicclient.topichandlerfunction.md) | The error handler to be executed when an error message is received    |

**Returns:** *void*

Defined in: packages/topic/src/interfaces/TopicClient.ts:62

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

Defined in: packages/topic/src/interfaces/TopicClient.ts:38

___

### subscribe

▸ **subscribe**(`topic`: *string*, `handler`: [*TopicHandlerFunction*](interfaces_topicclient.topichandlerfunction.md), `handlerContext`: *any*): *void*

Subscribe a topic to execute the specified handler using the handlerContext as the 'this' keyword.

#### Parameters:

Name | Type |
:------ | :------ |
`topic` | *string* |
`handler` | [*TopicHandlerFunction*](interfaces_topicclient.topichandlerfunction.md) |
`handlerContext` | *any* |

**Returns:** *void*

Defined in: packages/topic/src/interfaces/TopicClient.ts:25

___

### topicTriggered

▸ **topicTriggered**(`topicTriggered`: *string*, `topicMessage`: [*TopicMessage*](../classes/datas_topicmessage.topicmessage.md)): *Promise*<void\>

Execute all [TopicHandlerFunction](interfaces_topicclient.topichandlerfunction.md) when receiving a message for the subscribed topic

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topicTriggered` | *string* | the topic that has triggered the event   |
`topicMessage` | [*TopicMessage*](../classes/datas_topicmessage.topicmessage.md) | the message received on the topic    |

**Returns:** *Promise*<void\>

Defined in: packages/topic/src/interfaces/TopicClient.ts:45

___

### unsubscribe

▸ **unsubscribe**(`topic`: *string*): *void*

Unsubscribe the specified topic

#### Parameters:

Name | Type |
:------ | :------ |
`topic` | *string* |

**Returns:** *void*

Defined in: packages/topic/src/interfaces/TopicClient.ts:31
