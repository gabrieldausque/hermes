[@hermes/topicservice](README.md) › [Globals](globals.md)

# @hermes/topicservice

## Index

### Classes

* [BaseTopicClient](classes/basetopicclient.md)
* [MemoryTopicServiceClient](classes/memorytopicserviceclient.md)
* [SocketIOTopicServiceClient](classes/socketiotopicserviceclient.md)
* [SocketIOTopicServiceClientProxy](classes/socketiotopicserviceclientproxy.md)
* [TopicHandler](classes/topichandler.md)
* [TopicMessage](classes/topicmessage.md)
* [TopicService](classes/topicservice.md)
* [TopicServiceConfiguration](classes/topicserviceconfiguration.md)

### Interfaces

* [ITopicClient](interfaces/itopicclient.md)
* [SocketIOTopicServiceClientProxyReadyFunction](interfaces/socketiotopicserviceclientproxyreadyfunction.md)
* [TopicHandlerFunction](interfaces/topichandlerfunction.md)

### Variables

* [Socket](globals.md#socket)
* [Timeout](globals.md#timeout)
* [sleep](globals.md#const-sleep)

## Variables

###  Socket

• **Socket**: *any*

Defined in clients/SocketIOTopicServiceClient.ts:4

Defined in clients/SocketIOTopicServiceClientProxy.ts:2

Defined in TopicService.ts:6

___

###  Timeout

• **Timeout**: *any*

Defined in TopicService.ts:12

___

### `Const` sleep

• **sleep**: *__promisify__* = util.promisify(setTimeout)

Defined in TopicService.ts:13
