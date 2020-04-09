[@hermes/topicservice](../README.md) › [Globals](../globals.md) › [TopicService](topicservice.md)

# Class: TopicService

The topic service that represents the hub on which all message will be send across

## Hierarchy

* **TopicService**

## Index

### Constructors

* [constructor](topicservice.md#constructor)

### Properties

* [clients](topicservice.md#private-clients)
* [serverId](topicservice.md#private-serverid)

### Methods

* [addClient](topicservice.md#addclient)
* [publish](topicservice.md#publish)
* [removeClient](topicservice.md#removeclient)

## Constructors

###  constructor

\+ **new TopicService**(): *[TopicService](topicservice.md)*

Defined in TopicService.ts:16

**Returns:** *[TopicService](topicservice.md)*

## Properties

### `Private` clients

• **clients**: *[ITopicClient](../interfaces/itopicclient.md)[]*

Defined in TopicService.ts:16

The list of [ITopicClient](../interfaces/itopicclient.md) that are using this topic service instance

___

### `Private` serverId

• **serverId**: *string*

Defined in TopicService.ts:12

The id of the server. Used pattern : server_ + uuid (v4)

## Methods

###  addClient

▸ **addClient**(`newClient`: [ITopicClient](../interfaces/itopicclient.md)): *void*

Defined in TopicService.ts:45

Add a [ITopicClient](../interfaces/itopicclient.md) to listen to message send on this [TopicService](topicservice.md) instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`newClient` | [ITopicClient](../interfaces/itopicclient.md) | The client that will be added  |

**Returns:** *void*

___

###  publish

▸ **publish**(`topic`: string, `topicMessage`: [TopicMessage](topicmessage.md) | any): *Promise‹void›*

Defined in TopicService.ts:27

Publish a [TopicMessage](topicmessage.md) for all [ITopicClient](../interfaces/itopicclient.md) that are listening to the corresponding topic

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string | the topic to publish on |
`topicMessage` | [TopicMessage](topicmessage.md) &#124; any | the [TopicMessage](topicmessage.md) that will be send to listening [ITopicClient](../interfaces/itopicclient.md)  |

**Returns:** *Promise‹void›*

___

###  removeClient

▸ **removeClient**(`clientToDelete`: [ITopicClient](../interfaces/itopicclient.md)): *void*

Defined in TopicService.ts:56

Remove a [ITopicClient](../interfaces/itopicclient.md) from the listening clients

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`clientToDelete` | [ITopicClient](../interfaces/itopicclient.md) | the client to remove  |

**Returns:** *void*
