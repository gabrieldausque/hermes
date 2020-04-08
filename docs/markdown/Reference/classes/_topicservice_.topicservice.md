[theloneblacksheep-topicservice](../README.md) › [Globals](../globals.md) › ["TopicService"](../modules/_topicservice_.md) › [TopicService](_topicservice_.topicservice.md)

# Class: TopicService

The topic service that represents the hub on which all message will be send across

## Hierarchy

* **TopicService**

## Index

### Constructors

* [constructor](_topicservice_.topicservice.md#constructor)

### Properties

* [clients](_topicservice_.topicservice.md#private-clients)
* [serverId](_topicservice_.topicservice.md#private-serverid)

### Methods

* [addClient](_topicservice_.topicservice.md#addclient)
* [publish](_topicservice_.topicservice.md#publish)
* [removeClient](_topicservice_.topicservice.md#removeclient)

## Constructors

###  constructor

\+ **new TopicService**(): *[TopicService](_topicservice_.topicservice.md)*

Defined in TopicService.ts:16

**Returns:** *[TopicService](_topicservice_.topicservice.md)*

## Properties

### `Private` clients

• **clients**: *[ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md)[]*

Defined in TopicService.ts:16

The list of [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md) that are using this topic service instance

___

### `Private` serverId

• **serverId**: *string*

Defined in TopicService.ts:12

The id of the server. Used pattern : server_ + uuid (v4)

## Methods

###  addClient

▸ **addClient**(`newClient`: [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md)): *void*

Defined in TopicService.ts:44

Add a [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md) to listen to message send on this [TopicService](_topicservice_.topicservice.md) instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`newClient` | [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md) | The client that will be added  |

**Returns:** *void*

___

###  publish

▸ **publish**(`topic`: string, `topicMessage`: [TopicMessage](_datas_topicmessage_.topicmessage.md) | any): *Promise‹void›*

Defined in TopicService.ts:27

Publish a [TopicMessage](_datas_topicmessage_.topicmessage.md) for all [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md) that are listening to the corresponding topic

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string | the topic to publish on |
`topicMessage` | [TopicMessage](_datas_topicmessage_.topicmessage.md) &#124; any | the [TopicMessage](_datas_topicmessage_.topicmessage.md) that will be send to listening [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md)  |

**Returns:** *Promise‹void›*

___

###  removeClient

▸ **removeClient**(`clientToDelete`: [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md)): *void*

Defined in TopicService.ts:55

Remove a [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md) from the listening clients

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`clientToDelete` | [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md) | the client to remove  |

**Returns:** *void*
