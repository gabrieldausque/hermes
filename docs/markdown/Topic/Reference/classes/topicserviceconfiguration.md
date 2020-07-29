[@hermes/topicservice](../README.md) › [Globals](../globals.md) › [TopicServiceConfiguration](topicserviceconfiguration.md)

# Class: TopicServiceConfiguration

Represents the configuration used by TopicService for initialization

## Hierarchy

* **TopicServiceConfiguration**

## Index

### Constructors

* [constructor](topicserviceconfiguration.md#constructor)

### Properties

* [clusterNodes](topicserviceconfiguration.md#clusternodes)
* [host](topicserviceconfiguration.md#host)
* [standAlone](topicserviceconfiguration.md#standalone)

### Methods

* [getRandomHost](topicserviceconfiguration.md#getrandomhost)
* [validate](topicserviceconfiguration.md#validate)
* [load](topicserviceconfiguration.md#static-load)

## Constructors

###  constructor

\+ **new TopicServiceConfiguration**(): *[TopicServiceConfiguration](topicserviceconfiguration.md)*

Defined in configuration/TopicServiceConfiguration.ts:18

**Returns:** *[TopicServiceConfiguration](topicserviceconfiguration.md)*

## Properties

###  clusterNodes

• **clusterNodes**: *string[]*

Defined in configuration/TopicServiceConfiguration.ts:13

define the list of available nodes for the current cluster topic

___

###  host

• **host**: *string*

Defined in configuration/TopicServiceConfiguration.ts:9

define the host key for this topic instance, used only for peer to peer selection when connecting to the cluster

___

###  standAlone

• **standAlone**: *boolean*

Defined in configuration/TopicServiceConfiguration.ts:18

indicate if the cluster needs to be initialized

## Methods

###  getRandomHost

▸ **getRandomHost**(`excludeHosts?`: string[]): *string*

Defined in configuration/TopicServiceConfiguration.ts:36

Get a random host from current configuration excluding a list of host

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`excludeHosts?` | string[] | The list of host to exclude from the list of host to obtain from  |

**Returns:** *string*

___

###  validate

▸ **validate**(): *boolean*

Defined in configuration/TopicServiceConfiguration.ts:28

Validate the current configuration

**Returns:** *boolean*

___

### `Static` load

▸ **load**(`topicServiceConfiguration`: any): *[TopicServiceConfiguration](topicserviceconfiguration.md)‹›*

Defined in configuration/TopicServiceConfiguration.ts:53

Load a topic service configuration from a json object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topicServiceConfiguration` | any |   |

**Returns:** *[TopicServiceConfiguration](topicserviceconfiguration.md)‹›*
