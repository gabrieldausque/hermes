[@hermes/topicservice](../README.md) / [Exports](../modules.md) / [TopicService](../modules/topicservice.md) / TopicService

# Class: TopicService

[TopicService](../modules/topicservice.md).TopicService

The topic service that represents the hub on which all message will be send across

## Table of contents

### Constructors

- [constructor](topicservice.topicservice-1.md#constructor)

### Properties

- [clients](topicservice.topicservice-1.md#clients)
- [clusterClient](topicservice.topicservice-1.md#clusterclient)
- [config](topicservice.topicservice-1.md#config)
- [forwardedMessageIds](topicservice.topicservice-1.md#forwardedmessageids)
- [forwardedMessagesPurgeTimer](topicservice.topicservice-1.md#forwardedmessagespurgetimer)
- [lastPurge](topicservice.topicservice-1.md#lastpurge)
- [serverId](topicservice.topicservice-1.md#serverid)
- [metadata](topicservice.topicservice-1.md#metadata)

### Methods

- [addClient](topicservice.topicservice-1.md#addclient)
- [addForwardedMessages](topicservice.topicservice-1.md#addforwardedmessages)
- [initializeCluster](topicservice.topicservice-1.md#initializecluster)
- [initializeNodeJsClusterMode](topicservice.topicservice-1.md#initializenodejsclustermode)
- [isMessageAlreadyForwarded](topicservice.topicservice-1.md#ismessagealreadyforwarded)
- [publish](topicservice.topicservice-1.md#publish)
- [purgeForwardedMessages](topicservice.topicservice-1.md#purgeforwardedmessages)
- [removeClient](topicservice.topicservice-1.md#removeclient)

## Constructors

### constructor

\+ **new TopicService**(`config?`: [*TopicServiceConfiguration*](configuration_topicserviceconfiguration.topicserviceconfiguration.md)): [*TopicService*](topicservice.topicservice-1.md)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`config?` | [*TopicServiceConfiguration*](configuration_topicserviceconfiguration.topicserviceconfiguration.md) | The configuration used to initialize a TopicService cluster and other configuration parameters    |

**Returns:** [*TopicService*](topicservice.topicservice-1.md)

Defined in: packages/topic/src/TopicService.ts:54

## Properties

### clients

• `Private` `Readonly` **clients**: [*TopicClient*](../interfaces/interfaces_topicclient.topicclient.md)[]

The list of [TopicClient](../interfaces/interfaces_topicclient.topicclient.md) that are using this topic service instance

Defined in: packages/topic/src/TopicService.ts:32

___

### clusterClient

• `Private` `Optional` **clusterClient**: [*SocketIOTopicServiceClientProxy*](clients_socketiotopicserviceclientproxy.socketiotopicserviceclientproxy.md)

Distant cluster nodes client

Defined in: packages/topic/src/TopicService.ts:40

___

### config

• `Private` `Optional` `Readonly` **config**: [*TopicServiceConfiguration*](configuration_topicserviceconfiguration.topicserviceconfiguration.md)

The service configuration. Used for cluster.

Defined in: packages/topic/src/TopicService.ts:36

___

### forwardedMessageIds

• `Private` `Readonly` **forwardedMessageIds**: { `date`: Date ; `id`: *string*  }[]

The buffer for message already send

Defined in: packages/topic/src/TopicService.ts:49

___

### forwardedMessagesPurgeTimer

• `Private` `Optional` **forwardedMessagesPurgeTimer**: *Timeout*

The timeout reference for the forwardedMessage purge

Defined in: packages/topic/src/TopicService.ts:54

___

### lastPurge

• `Private` **lastPurge**: Date

The date of the last purge

Defined in: packages/topic/src/TopicService.ts:45

___

### serverId

• **serverId**: *string*

The id of the server. Used pattern : server_ + uuid (v4)

Defined in: packages/topic/src/TopicService.ts:28

___

### metadata

▪ `Static` **metadata**: *any*[]

Defined in: packages/topic/src/TopicService.ts:18

## Methods

### addClient

▸ **addClient**(`newClient`: [*TopicClient*](../interfaces/interfaces_topicclient.topicclient.md)): *void*

Add a [TopicClient](../interfaces/interfaces_topicclient.topicclient.md) to listen to message send on this [TopicService](topicservice.topicservice-1.md) instance

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`newClient` | [*TopicClient*](../interfaces/interfaces_topicclient.topicclient.md) | The client that will be added    |

**Returns:** *void*

Defined in: packages/topic/src/TopicService.ts:188

___

### addForwardedMessages

▸ **addForwardedMessages**(`message`: [*TopicMessage*](datas_topicmessage.topicmessage.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*TopicMessage*](datas_topicmessage.topicmessage.md) |

**Returns:** *void*

Defined in: packages/topic/src/TopicService.ts:75

___

### initializeCluster

▸ **initializeCluster**(`previousHost?`: *string*): *Promise*<void\>

Initialize the cluster configuration

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`previousHost?` | *string* | The previous peer will be excluded from the authorized peer to connect    |

**Returns:** *Promise*<void\>

Defined in: packages/topic/src/TopicService.ts:210

___

### initializeNodeJsClusterMode

▸ **initializeNodeJsClusterMode**(): *void*

**Returns:** *void*

Defined in: packages/topic/src/TopicService.ts:109

___

### isMessageAlreadyForwarded

▸ **isMessageAlreadyForwarded**(`messageId`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`messageId` | *string* |

**Returns:** *boolean*

Defined in: packages/topic/src/TopicService.ts:71

___

### publish

▸ **publish**(`topic`: *string*, `topicMessage`: *any*): *Promise*<void\>

Publish a [TopicMessage](datas_topicmessage.topicmessage.md) for all [TopicClient](../interfaces/interfaces_topicclient.topicclient.md) that are listening to the corresponding topic

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | the topic to publish on   |
`topicMessage` | *any* | the [TopicMessage](datas_topicmessage.topicmessage.md) that will be send to listening [TopicClient](../interfaces/interfaces_topicclient.topicclient.md)    |

**Returns:** *Promise*<void\>

Defined in: packages/topic/src/TopicService.ts:154

___

### purgeForwardedMessages

▸ **purgeForwardedMessages**(): *void*

**Returns:** *void*

Defined in: packages/topic/src/TopicService.ts:85

___

### removeClient

▸ **removeClient**(`clientToDelete`: [*TopicClient*](../interfaces/interfaces_topicclient.topicclient.md)): *void*

Remove a [TopicClient](../interfaces/interfaces_topicclient.topicclient.md) from the listening clients

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`clientToDelete` | [*TopicClient*](../interfaces/interfaces_topicclient.topicclient.md) | the client to remove    |

**Returns:** *void*

Defined in: packages/topic/src/TopicService.ts:199
