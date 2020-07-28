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
* [clusterClient](topicservice.md#private-clusterclient)
* [config](topicservice.md#private-config)
* [serverId](topicservice.md#serverid)
* [metadata](topicservice.md#static-metadata)

### Methods

* [addClient](topicservice.md#addclient)
* [initializeCluster](topicservice.md#initializecluster)
* [publish](topicservice.md#publish)
* [removeClient](topicservice.md#removeclient)

## Constructors

###  constructor

\+ **new TopicService**(`config?`: [TopicServiceConfiguration](topicserviceconfiguration.md)): *[TopicService](topicservice.md)*

Defined in TopicService.ts:34

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config?` | [TopicServiceConfiguration](topicserviceconfiguration.md) | The configuration used to initialize a TopicService cluster and other configuration parameters  |

**Returns:** *[TopicService](topicservice.md)*

## Properties

### `Private` clients

• **clients**: *[ITopicClient](../interfaces/itopicclient.md)[]*

Defined in TopicService.ts:26

The list of [ITopicClient](../interfaces/itopicclient.md) that are using this topic service instance

___

### `Private` clusterClient

• **clusterClient**: *[SocketIOTopicServiceClientProxy](socketiotopicserviceclientproxy.md)*

Defined in TopicService.ts:34

___

### `Private` config

• **config**: *[TopicServiceConfiguration](topicserviceconfiguration.md)*

Defined in TopicService.ts:30

The service configuration. Used for cluster.

___

###  serverId

• **serverId**: *string*

Defined in TopicService.ts:22

The id of the server. Used pattern : server_ + uuid (v4)

___

### `Static` metadata

▪ **metadata**: *any[]* = [
    {
      contractType:'TopicService',
      contractName:'Default',
      isShared:true
    }
  ]

Defined in TopicService.ts:12

## Methods

###  addClient

▸ **addClient**(`newClient`: [ITopicClient](../interfaces/itopicclient.md)): *void*

Defined in TopicService.ts:74

Add a [ITopicClient](../interfaces/itopicclient.md) to listen to message send on this [TopicService](topicservice.md) instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`newClient` | [ITopicClient](../interfaces/itopicclient.md) | The client that will be added  |

**Returns:** *void*

___

###  initializeCluster

▸ **initializeCluster**(`previousHost?`: string): *Promise‹void›*

Defined in TopicService.ts:96

Initialize the cluster configuration

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`previousHost?` | string | The previous peer will be excluded from the authorized peer to connect  |

**Returns:** *Promise‹void›*

___

###  publish

▸ **publish**(`topic`: string, `topicMessage`: [TopicMessage](topicmessage.md) | any): *Promise‹void›*

Defined in TopicService.ts:53

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

Defined in TopicService.ts:85

Remove a [ITopicClient](../interfaces/itopicclient.md) from the listening clients

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`clientToDelete` | [ITopicClient](../interfaces/itopicclient.md) | the client to remove  |

**Returns:** *void*
