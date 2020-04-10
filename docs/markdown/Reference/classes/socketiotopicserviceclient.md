[@hermes/topicservice](../README.md) › [Globals](../globals.md) › [SocketIOTopicServiceClient](socketiotopicserviceclient.md)

# Class: SocketIOTopicServiceClient

A client that represents in the server side (node instance of the topic service) a distant client connected using Socket.Io

## Hierarchy

* [BaseTopicClient](basetopicclient.md)

  ↳ **SocketIOTopicServiceClient**

## Implements

* [ITopicClient](../interfaces/itopicclient.md)

## Index

### Constructors

* [constructor](socketiotopicserviceclient.md#constructor)

### Properties

* [socket](socketiotopicserviceclient.md#private-socket)
* [topicClientId](socketiotopicserviceclient.md#topicclientid)
* [topicHandlers](socketiotopicserviceclient.md#protected-topichandlers)
* [topicService](socketiotopicserviceclient.md#protected-topicservice)

### Methods

* [disconnect](socketiotopicserviceclient.md#disconnect)
* [isListeningTo](socketiotopicserviceclient.md#islisteningto)
* [publish](socketiotopicserviceclient.md#publish)
* [sendToSocketIO](socketiotopicserviceclient.md#private-sendtosocketio)
* [subscribe](socketiotopicserviceclient.md#subscribe)
* [topicTriggered](socketiotopicserviceclient.md#topictriggered)
* [unsubscribe](socketiotopicserviceclient.md#unsubscribe)

## Constructors

###  constructor

\+ **new SocketIOTopicServiceClient**(`service`: [TopicService](topicservice.md), `socket`: any): *[SocketIOTopicServiceClient](socketiotopicserviceclient.md)*

*Overrides [BaseTopicClient](basetopicclient.md).[constructor](basetopicclient.md#protected-constructor)*

Defined in SocketIOTopicServiceClient.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`service` | [TopicService](topicservice.md) |
`socket` | any |

**Returns:** *[SocketIOTopicServiceClient](socketiotopicserviceclient.md)*

## Properties

### `Private` socket

• **socket**: *Socket*

Defined in SocketIOTopicServiceClient.ts:13

the socket that allow communication with distant client

___

###  topicClientId

• **topicClientId**: *string*

*Implementation of [ITopicClient](../interfaces/itopicclient.md).[topicClientId](../interfaces/itopicclient.md#topicclientid)*

*Inherited from [BaseTopicClient](basetopicclient.md).[topicClientId](basetopicclient.md#topicclientid)*

Defined in BaseTopicClient.ts:19

The Id of the client, based on uuid v4 specifications

___

### `Protected` topicHandlers

• **topicHandlers**: *object*

*Inherited from [BaseTopicClient](basetopicclient.md).[topicHandlers](basetopicclient.md#protected-topichandlers)*

Defined in BaseTopicClient.ts:23

The lists of [TopicHandlerFunction](../interfaces/topichandlerfunction.md) by topic listened

#### Type declaration:

___

### `Protected` topicService

• **topicService**: *[TopicService](topicservice.md)*

*Inherited from [BaseTopicClient](basetopicclient.md).[topicService](basetopicclient.md#protected-topicservice)*

Defined in BaseTopicClient.ts:15

The topicService on which the current is listening on

## Methods

###  disconnect

▸ **disconnect**(): *void*

*Implementation of [ITopicClient](../interfaces/itopicclient.md)*

*Inherited from [BaseTopicClient](basetopicclient.md).[disconnect](basetopicclient.md#disconnect)*

Defined in BaseTopicClient.ts:174

Disconnect definitively the client of the topicService

**Returns:** *void*

___

###  isListeningTo

▸ **isListeningTo**(`topic`: string): *boolean*

*Implementation of [ITopicClient](../interfaces/itopicclient.md)*

*Inherited from [BaseTopicClient](basetopicclient.md).[isListeningTo](basetopicclient.md#islisteningto)*

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

*Inherited from [BaseTopicClient](basetopicclient.md).[publish](basetopicclient.md#publish)*

Defined in BaseTopicClient.ts:104

Publish a message to all client that are listening the specified topic

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`messageContent` | any |

**Returns:** *Promise‹void›*

___

### `Private` sendToSocketIO

▸ **sendToSocketIO**(`topicTriggered`: string, `topicMessage`: [TopicMessage](topicmessage.md)): *void*

Defined in SocketIOTopicServiceClient.ts:41

The [TopicHandlerFunction](../interfaces/topichandlerfunction.md) used to transmit topic triggered in the topicService to the distant client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topicTriggered` | string | the topic listened to on which the message is received |
`topicMessage` | [TopicMessage](topicmessage.md) | the message received  |

**Returns:** *void*

___

###  subscribe

▸ **subscribe**(`topic`: string, `handler`: [TopicHandlerFunction](../interfaces/topichandlerfunction.md), `handlerOwner`: any): *void*

*Implementation of [ITopicClient](../interfaces/itopicclient.md)*

*Inherited from [BaseTopicClient](basetopicclient.md).[subscribe](basetopicclient.md#subscribe)*

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

*Inherited from [BaseTopicClient](basetopicclient.md).[topicTriggered](basetopicclient.md#topictriggered)*

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

*Inherited from [BaseTopicClient](basetopicclient.md).[unsubscribe](basetopicclient.md#unsubscribe)*

Defined in BaseTopicClient.ts:181

Unsubscribe the specified topic

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *void*