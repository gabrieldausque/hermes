[theloneblacksheep-topicservice](../README.md) › [Globals](../globals.md) › ["SocketIOTopicServiceClient"](../modules/_socketiotopicserviceclient_.md) › [SocketIOTopicServiceClient](_socketiotopicserviceclient_.socketiotopicserviceclient.md)

# Class: SocketIOTopicServiceClient

A client that represents in the server side (node instance of the topic service) a distant client connected using Socket.Io

## Hierarchy

* [BaseTopicClient](_basetopicclient_.basetopicclient.md)

  ↳ **SocketIOTopicServiceClient**

## Implements

* [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md)

## Index

### Constructors

* [constructor](_socketiotopicserviceclient_.socketiotopicserviceclient.md#constructor)

### Properties

* [socket](_socketiotopicserviceclient_.socketiotopicserviceclient.md#private-socket)
* [topicClientId](_socketiotopicserviceclient_.socketiotopicserviceclient.md#topicclientid)
* [topicHandlers](_socketiotopicserviceclient_.socketiotopicserviceclient.md#protected-topichandlers)
* [topicService](_socketiotopicserviceclient_.socketiotopicserviceclient.md#protected-topicservice)

### Methods

* [disconnect](_socketiotopicserviceclient_.socketiotopicserviceclient.md#disconnect)
* [isListeningTo](_socketiotopicserviceclient_.socketiotopicserviceclient.md#islisteningto)
* [publish](_socketiotopicserviceclient_.socketiotopicserviceclient.md#publish)
* [sendToSocketIO](_socketiotopicserviceclient_.socketiotopicserviceclient.md#private-sendtosocketio)
* [subscribe](_socketiotopicserviceclient_.socketiotopicserviceclient.md#subscribe)
* [topicTriggered](_socketiotopicserviceclient_.socketiotopicserviceclient.md#topictriggered)
* [unsubscribe](_socketiotopicserviceclient_.socketiotopicserviceclient.md#unsubscribe)

## Constructors

###  constructor

\+ **new SocketIOTopicServiceClient**(`service`: [TopicService](_topicservice_.topicservice.md), `socket`: any): *[SocketIOTopicServiceClient](_socketiotopicserviceclient_.socketiotopicserviceclient.md)*

*Overrides [BaseTopicClient](_basetopicclient_.basetopicclient.md).[constructor](_basetopicclient_.basetopicclient.md#protected-constructor)*

Defined in SocketIOTopicServiceClient.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`service` | [TopicService](_topicservice_.topicservice.md) |
`socket` | any |

**Returns:** *[SocketIOTopicServiceClient](_socketiotopicserviceclient_.socketiotopicserviceclient.md)*

## Properties

### `Private` socket

• **socket**: *Socket*

Defined in SocketIOTopicServiceClient.ts:13

the socket that allow communication with distant client

___

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

### `Private` sendToSocketIO

▸ **sendToSocketIO**(`topicTriggered`: string, `topicMessage`: [TopicMessage](_datas_topicmessage_.topicmessage.md)): *void*

Defined in SocketIOTopicServiceClient.ts:41

The [TopicHandlerFunction](../interfaces/_interfaces_itopicclient_.topichandlerfunction.md) used to transmit topic triggered in the topicService to the distant client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topicTriggered` | string | the topic listened to on which the message is received |
`topicMessage` | [TopicMessage](_datas_topicmessage_.topicmessage.md) | the message received  |

**Returns:** *void*

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
