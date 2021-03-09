[@hermes/topicservice](../README.md) / [Exports](../modules.md) / [clients/SocketIOTopicServiceClientProxy](../modules/clients_socketiotopicserviceclientproxy.md) / SocketIOTopicServiceClientProxy

# Class: SocketIOTopicServiceClientProxy

[clients/SocketIOTopicServiceClientProxy](../modules/clients_socketiotopicserviceclientproxy.md).SocketIOTopicServiceClientProxy

## Table of contents

### Constructors

- [constructor](clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxy.md#constructor)

### Properties

- [isReady](clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxy.md#isready)
- [readyHandler](clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxy.md#readyhandler)
- [socket](clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxy.md#socket)
- [subscriptions](clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxy.md#subscriptions)
- [topicClientId](clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxy.md#topicclientid)

### Methods

- [getSubscriptions](clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxy.md#getsubscriptions)
- [publish](clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxy.md#publish)
- [ready](clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxy.md#ready)
- [subscribe](clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxy.md#subscribe)
- [unSubscribe](clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxy.md#unsubscribe)

## Constructors

### constructor

\+ **new SocketIOTopicServiceClientProxy**(`socket`: Socket, `readyHandler?`: [*SocketIOTopicServiceClientProxyReadyFunction*](../interfaces/clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxyreadyfunction.md)): [*SocketIOTopicServiceClientProxy*](clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxy.md)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`socket` | Socket | The socket used to connect to the topicservice server   |
`readyHandler?` | [*SocketIOTopicServiceClientProxyReadyFunction*](../interfaces/clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxyreadyfunction.md) | The handler to be executed just after the client has been registered    |

**Returns:** [*SocketIOTopicServiceClientProxy*](clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxy.md)

Defined in: packages/topic/src/clients/SocketIOTopicServiceClientProxy.ts:26

## Properties

### isReady

• **isReady**: *boolean*

True if the client has been correctly registered to the server (aka the topicClientId has been set)

Defined in: packages/topic/src/clients/SocketIOTopicServiceClientProxy.ts:10

___

### readyHandler

• `Optional` **readyHandler**: [*SocketIOTopicServiceClientProxyReadyFunction*](../interfaces/clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxyreadyfunction.md)

handler to be execute just after the client has been registered on server side

Defined in: packages/topic/src/clients/SocketIOTopicServiceClientProxy.ts:18

___

### socket

• **socket**: Socket

the socket used to communicate to the client object on server side

Defined in: packages/topic/src/clients/SocketIOTopicServiceClientProxy.ts:22

___

### subscriptions

• **subscriptions**: *string*[]

The list of current subscriptions

Defined in: packages/topic/src/clients/SocketIOTopicServiceClientProxy.ts:26

___

### topicClientId

• `Optional` **topicClientId**: *string*

id of the client that has been received from the server after registering

Defined in: packages/topic/src/clients/SocketIOTopicServiceClientProxy.ts:14

## Methods

### getSubscriptions

▸ **getSubscriptions**(`callback`: [*TopicHandlerFunction*](../interfaces/interfaces_topicclient.topichandlerfunction.md)): *Promise*<void\>

List all subscriptions registered on server side

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callback` | [*TopicHandlerFunction*](../interfaces/interfaces_topicclient.topichandlerfunction.md) | the callback to be executed when the list of subscriptions are received    |

**Returns:** *Promise*<void\>

Defined in: packages/topic/src/clients/SocketIOTopicServiceClientProxy.ts:90

___

### publish

▸ **publish**(`topic`: *string*, `topicContent`: *any*): *Promise*<void\>

Publish a message on a specific topic

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | The topic to publish on   |
`topicContent` | *any* | The content of the message to be published    |

**Returns:** *Promise*<void\>

Defined in: packages/topic/src/clients/SocketIOTopicServiceClientProxy.ts:79

___

### ready

▸ **ready**(`readyHandler?`: [*SocketIOTopicServiceClientProxyReadyFunction*](../interfaces/clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxyreadyfunction.md)): *void*

Set the Handler to be executed just after the client has been registered on server side

#### Parameters:

Name | Type |
:------ | :------ |
`readyHandler?` | [*SocketIOTopicServiceClientProxyReadyFunction*](../interfaces/clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxyreadyfunction.md) |

**Returns:** *void*

Defined in: packages/topic/src/clients/SocketIOTopicServiceClientProxy.ts:54

___

### subscribe

▸ **subscribe**(`topic`: *string*, `handler`: [*TopicHandlerFunction*](../interfaces/interfaces_topicclient.topichandlerfunction.md)): *Promise*<void\>

Subscribe to a topic and execute the handler when the corresponding topic is raised by the server

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | The topic to listen   |
`handler` | [*TopicHandlerFunction*](../interfaces/interfaces_topicclient.topichandlerfunction.md) | The handler to be executed when a message is received for the listened topic    |

**Returns:** *Promise*<void\>

Defined in: packages/topic/src/clients/SocketIOTopicServiceClientProxy.ts:64

___

### unSubscribe

▸ **unSubscribe**(`topic`: *string*): *Promise*<void\>

Unsubscribe all handlers for the specified topic

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | the topic to unsubscribe    |

**Returns:** *Promise*<void\>

Defined in: packages/topic/src/clients/SocketIOTopicServiceClientProxy.ts:104
