[@hermes/topicservice](../README.md) / [Exports](../modules.md) / [configuration/TopicServiceConfiguration](../modules/configuration_topicserviceconfiguration.md) / TopicServiceConfiguration

# Class: TopicServiceConfiguration

[configuration/TopicServiceConfiguration](../modules/configuration_topicserviceconfiguration.md).TopicServiceConfiguration

Represents the configuration used by TopicService for initialization

## Table of contents

### Constructors

- [constructor](configuration_topicserviceconfiguration.topicserviceconfiguration.md#constructor)

### Properties

- [clusterNodes](configuration_topicserviceconfiguration.topicserviceconfiguration.md#clusternodes)
- [host](configuration_topicserviceconfiguration.topicserviceconfiguration.md#host)
- [standAlone](configuration_topicserviceconfiguration.topicserviceconfiguration.md#standalone)

### Methods

- [getRandomHost](configuration_topicserviceconfiguration.topicserviceconfiguration.md#getrandomhost)
- [validate](configuration_topicserviceconfiguration.topicserviceconfiguration.md#validate)
- [load](configuration_topicserviceconfiguration.topicserviceconfiguration.md#load)

## Constructors

### constructor

\+ **new TopicServiceConfiguration**(): [*TopicServiceConfiguration*](configuration_topicserviceconfiguration.topicserviceconfiguration.md)

**Returns:** [*TopicServiceConfiguration*](configuration_topicserviceconfiguration.topicserviceconfiguration.md)

Defined in: packages/topic/src/configuration/TopicServiceConfiguration.ts:18

## Properties

### clusterNodes

• **clusterNodes**: *string*[]

define the list of available nodes for the current cluster topic

Defined in: packages/topic/src/configuration/TopicServiceConfiguration.ts:13

___

### host

• **host**: *string*

define the host key for this topic instance, used only for peer to peer selection when connecting to the cluster

Defined in: packages/topic/src/configuration/TopicServiceConfiguration.ts:9

___

### standAlone

• **standAlone**: *boolean*

indicate if a cluster with distant process needs to be initialized

Defined in: packages/topic/src/configuration/TopicServiceConfiguration.ts:18

## Methods

### getRandomHost

▸ **getRandomHost**(`excludedHosts?`: *string*[]): *string*

Get a random host from current configuration excluding a list of host

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`excludedHosts?` | *string*[] | The list of host to exclude from the list of host to obtain from    |

**Returns:** *string*

Defined in: packages/topic/src/configuration/TopicServiceConfiguration.ts:39

___

### validate

▸ **validate**(): *boolean* \| **

Validate the current configuration

**Returns:** *boolean* \| **

Defined in: packages/topic/src/configuration/TopicServiceConfiguration.ts:29

___

### load

▸ `Static`**load**(`topicServiceConfiguration`: *any*): [*TopicServiceConfiguration*](configuration_topicserviceconfiguration.topicserviceconfiguration.md)

Load a topic service configuration from a json object

#### Parameters:

Name | Type |
:------ | :------ |
`topicServiceConfiguration` | *any* |

**Returns:** [*TopicServiceConfiguration*](configuration_topicserviceconfiguration.topicserviceconfiguration.md)

Defined in: packages/topic/src/configuration/TopicServiceConfiguration.ts:73
