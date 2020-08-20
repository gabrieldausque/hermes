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
* [forwardedMessageIds](topicservice.md#private-forwardedmessageids)
* [forwardedMessagesPurgeTimer](topicservice.md#private-forwardedmessagespurgetimer)
* [lastPurge](topicservice.md#private-lastpurge)
* [serverId](topicservice.md#serverid)
* [metadata](topicservice.md#static-metadata)

### Methods

* [addClient](topicservice.md#addclient)
* [addForwardedMessages](topicservice.md#addforwardedmessages)
* [initializeCluster](topicservice.md#initializecluster)
* [initializeNodeJsClusterMode](topicservice.md#initializenodejsclustermode)
* [isMessageAlreadyForwarded](topicservice.md#ismessagealreadyforwarded)
* [publish](topicservice.md#publish)
* [purgeForwardedMessages](topicservice.md#purgeforwardedmessages)
* [removeClient](topicservice.md#removeclient)

## Constructors

###  constructor

\+ **new TopicService**(`config?`: [TopicServiceConfiguration](topicserviceconfiguration.md)): *[TopicService](topicservice.md)*

Defined in TopicService.ts:55

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config?` | [TopicServiceConfiguration](topicserviceconfiguration.md) | The configuration used to initialize a TopicService cluster and other configuration parameters  |

**Returns:** *[TopicService](topicservice.md)*

## Properties

### `Private` clients

• **clients**: *[ITopicClient](../interfaces/itopicclient.md)[]*

Defined in TopicService.ts:32

The list of [ITopicClient](../interfaces/itopicclient.md) that are using this topic service instance

___

### `Private` clusterClient

• **clusterClient**: *[SocketIOTopicServiceClientProxy](socketiotopicserviceclientproxy.md)*

Defined in TopicService.ts:40

Distant cluster nodes client

___

### `Private` config

• **config**: *[TopicServiceConfiguration](topicserviceconfiguration.md)*

Defined in TopicService.ts:36

The service configuration. Used for cluster.

___

### `Private` forwardedMessageIds

• **forwardedMessageIds**: *object[]*

Defined in TopicService.ts:50

The buffer for message already send

___

### `Private` forwardedMessagesPurgeTimer

• **forwardedMessagesPurgeTimer**: *Timeout*

Defined in TopicService.ts:55

The timeout reference for the forwardedMessage purge

___

### `Private` lastPurge

• **lastPurge**: *Date*

Defined in TopicService.ts:46

The date of the last purge

___

###  serverId

• **serverId**: *string*

Defined in TopicService.ts:28

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

Defined in TopicService.ts:18

## Methods

###  addClient

▸ **addClient**(`newClient`: [ITopicClient](../interfaces/itopicclient.md)): *void*

Defined in TopicService.ts:187

Add a [ITopicClient](../interfaces/itopicclient.md) to listen to message send on this [TopicService](topicservice.md) instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`newClient` | [ITopicClient](../interfaces/itopicclient.md) | The client that will be added  |

**Returns:** *void*

___

###  addForwardedMessages

▸ **addForwardedMessages**(`message`: [TopicMessage](topicmessage.md)): *void*

Defined in TopicService.ts:76

**Parameters:**

Name | Type |
------ | ------ |
`message` | [TopicMessage](topicmessage.md) |

**Returns:** *void*

___

###  initializeCluster

▸ **initializeCluster**(`previousHost?`: string): *Promise‹void›*

Defined in TopicService.ts:209

Initialize the cluster configuration

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`previousHost?` | string | The previous peer will be excluded from the authorized peer to connect  |

**Returns:** *Promise‹void›*

___

###  initializeNodeJsClusterMode

▸ **initializeNodeJsClusterMode**(): *void*

Defined in TopicService.ts:110

**Returns:** *void*

___

###  isMessageAlreadyForwarded

▸ **isMessageAlreadyForwarded**(`messageId`: string): *boolean*

Defined in TopicService.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`messageId` | string |

**Returns:** *boolean*

___

###  publish

▸ **publish**(`topic`: string, `topicMessage`: [TopicMessage](topicmessage.md) | any): *Promise‹void›*

Defined in TopicService.ts:153

Publish a [TopicMessage](topicmessage.md) for all [ITopicClient](../interfaces/itopicclient.md) that are listening to the corresponding topic

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string | the topic to publish on |
`topicMessage` | [TopicMessage](topicmessage.md) &#124; any | the [TopicMessage](topicmessage.md) that will be send to listening [ITopicClient](../interfaces/itopicclient.md)  |

**Returns:** *Promise‹void›*

___

###  purgeForwardedMessages

▸ **purgeForwardedMessages**(): *void*

Defined in TopicService.ts:86

**Returns:** *void*

___

###  removeClient

▸ **removeClient**(`clientToDelete`: [ITopicClient](../interfaces/itopicclient.md)): *void*

Defined in TopicService.ts:198

Remove a [ITopicClient](../interfaces/itopicclient.md) from the listening clients

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`clientToDelete` | [ITopicClient](../interfaces/itopicclient.md) | the client to remove  |

**Returns:** *void*
