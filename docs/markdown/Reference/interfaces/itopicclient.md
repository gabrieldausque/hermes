[@hermes/topicservice](../README.md) › [Globals](../globals.md) › [ITopicClient](itopicclient.md)

# Interface: ITopicClient

The ITopicClient represents the operations contract of the client on server side.

## Hierarchy

* **ITopicClient**

## Implemented by

* [BaseTopicClient](../classes/basetopicclient.md)
* [MemoryTopicServiceClient](../classes/memorytopicserviceclient.md)
* [SocketIOTopicServiceClient](../classes/socketiotopicserviceclient.md)

## Index

### Properties

* [topicClientId](itopicclient.md#topicclientid)

### Methods

* [disconnect](itopicclient.md#disconnect)
* [isListeningTo](itopicclient.md#islisteningto)
* [publish](itopicclient.md#publish)
* [subscribe](itopicclient.md#subscribe)
* [topicTriggered](itopicclient.md#topictriggered)
* [unsubscribe](itopicclient.md#unsubscribe)

## Properties

###  topicClientId

• **topicClientId**: *string*

Defined in interfaces/ITopicClient.ts:17

The Id of the client

## Methods

###  disconnect

▸ **disconnect**(): *any*

Defined in interfaces/ITopicClient.ts:56

Disconnect definitively the client of the topicService

**Returns:** *any*

___

###  isListeningTo

▸ **isListeningTo**(`topic`: string): *boolean*

Defined in interfaces/ITopicClient.ts:51

Check if the current client is listening to a topic.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string | the topic to test  |

**Returns:** *boolean*

___

###  publish

▸ **publish**(`topic`: string, `messageContent`: any): *Promise‹void›*

Defined in interfaces/ITopicClient.ts:38

Publish a message to all client that are listening the specified topic

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string | The topic to publish on |
`messageContent` | any | The content that will be send on the message  |

**Returns:** *Promise‹void›*

___

###  subscribe

▸ **subscribe**(`topic`: string, `handler`: [TopicHandlerFunction](topichandlerfunction.md), `handlerContext`: any): *void*

Defined in interfaces/ITopicClient.ts:25

Subscribe a topic to execute the specified handler using the handlerContext as the 'this' keyword.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string | - |
`handler` | [TopicHandlerFunction](topichandlerfunction.md) | - |
`handlerContext` | any |   |

**Returns:** *void*

___

###  topicTriggered

▸ **topicTriggered**(`topicTriggered`: string, `topicMessage`: [TopicMessage](../classes/topicmessage.md)): *Promise‹void›*

Defined in interfaces/ITopicClient.ts:45

Execute all [TopicHandlerFunction](topichandlerfunction.md) when receiving a message for the subscribed topic

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topicTriggered` | string | the topic that has triggered the event |
`topicMessage` | [TopicMessage](../classes/topicmessage.md) | the message received on the topic  |

**Returns:** *Promise‹void›*

___

###  unsubscribe

▸ **unsubscribe**(`topic`: string): *void*

Defined in interfaces/ITopicClient.ts:31

Unsubscribe the specified topic

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string |   |

**Returns:** *void*
