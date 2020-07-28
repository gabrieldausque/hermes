[@hermes/topicservice](../README.md) › [Globals](../globals.md) › [SocketIOTopicServiceClientProxy](socketiotopicserviceclientproxy.md)

# Class: SocketIOTopicServiceClientProxy

## Hierarchy

* **SocketIOTopicServiceClientProxy**

## Index

### Constructors

* [constructor](socketiotopicserviceclientproxy.md#constructor)

### Properties

* [isReady](socketiotopicserviceclientproxy.md#isready)
* [readyHandler](socketiotopicserviceclientproxy.md#readyhandler)
* [socket](socketiotopicserviceclientproxy.md#socket)
* [subscriptions](socketiotopicserviceclientproxy.md#subscriptions)
* [topicClientId](socketiotopicserviceclientproxy.md#topicclientid)

### Methods

* [getSubscriptions](socketiotopicserviceclientproxy.md#getsubscriptions)
* [publish](socketiotopicserviceclientproxy.md#publish)
* [ready](socketiotopicserviceclientproxy.md#ready)
* [subscribe](socketiotopicserviceclientproxy.md#subscribe)
* [unSubscribe](socketiotopicserviceclientproxy.md#unsubscribe)

## Constructors

###  constructor

\+ **new SocketIOTopicServiceClientProxy**(`socket`: Socket, `readyHandler?`: [SocketIOTopicServiceClientProxyReadyFunction](../interfaces/socketiotopicserviceclientproxyreadyfunction.md)): *[SocketIOTopicServiceClientProxy](socketiotopicserviceclientproxy.md)*

Defined in clients/SocketIOTopicServiceClientProxy.ts:26

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`socket` | Socket | The socket used to connect to the topicservice server |
`readyHandler?` | [SocketIOTopicServiceClientProxyReadyFunction](../interfaces/socketiotopicserviceclientproxyreadyfunction.md) | The handler to be executed just after the client has been registered  |

**Returns:** *[SocketIOTopicServiceClientProxy](socketiotopicserviceclientproxy.md)*

## Properties

###  isReady

• **isReady**: *boolean*

Defined in clients/SocketIOTopicServiceClientProxy.ts:10

True if the client has been correctly registered to the server (aka the topicClientId has been set)

___

###  readyHandler

• **readyHandler**: *[SocketIOTopicServiceClientProxyReadyFunction](../interfaces/socketiotopicserviceclientproxyreadyfunction.md)*

Defined in clients/SocketIOTopicServiceClientProxy.ts:18

handler to be execute just after the client has been registered on server side

___

###  socket

• **socket**: *Socket*

Defined in clients/SocketIOTopicServiceClientProxy.ts:22

the socket used to communicate to the client object on server side

___

###  subscriptions

• **subscriptions**: *string[]*

Defined in clients/SocketIOTopicServiceClientProxy.ts:26

The list of current subscriptions

___

###  topicClientId

• **topicClientId**: *string*

Defined in clients/SocketIOTopicServiceClientProxy.ts:14

id of the client that has been received from the server after registering

## Methods

###  getSubscriptions

▸ **getSubscriptions**(`callback`: [TopicHandlerFunction](../interfaces/topichandlerfunction.md)): *Promise‹void›*

Defined in clients/SocketIOTopicServiceClientProxy.ts:90

List all subscriptions registered on server side

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | [TopicHandlerFunction](../interfaces/topichandlerfunction.md) | the callback to be executed when the list of subscriptions are received  |

**Returns:** *Promise‹void›*

___

###  publish

▸ **publish**(`topic`: string, `topicContent`: any): *Promise‹void›*

Defined in clients/SocketIOTopicServiceClientProxy.ts:79

Publish a message on a specific topic

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string | The topic to publish on |
`topicContent` | any | The content of the message to be published  |

**Returns:** *Promise‹void›*

___

###  ready

▸ **ready**(`readyHandler`: [SocketIOTopicServiceClientProxyReadyFunction](../interfaces/socketiotopicserviceclientproxyreadyfunction.md)): *void*

Defined in clients/SocketIOTopicServiceClientProxy.ts:54

Set the Handler to be executed just after the client has been registered on server side

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`readyHandler` | [SocketIOTopicServiceClientProxyReadyFunction](../interfaces/socketiotopicserviceclientproxyreadyfunction.md) |   |

**Returns:** *void*

___

###  subscribe

▸ **subscribe**(`topic`: string, `handler`: [TopicHandlerFunction](../interfaces/topichandlerfunction.md)): *Promise‹void›*

Defined in clients/SocketIOTopicServiceClientProxy.ts:64

Subscribe to a topic and execute the handler when the corresponding topic is raised by the server

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string | The topic to listen |
`handler` | [TopicHandlerFunction](../interfaces/topichandlerfunction.md) | The handler to be executed when a message is received for the listened topic  |

**Returns:** *Promise‹void›*

___

###  unSubscribe

▸ **unSubscribe**(`topic`: string): *Promise‹void›*

Defined in clients/SocketIOTopicServiceClientProxy.ts:104

Unsubscribe all handlers for the specified topic

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string | the topic to unsubscribe  |

**Returns:** *Promise‹void›*
