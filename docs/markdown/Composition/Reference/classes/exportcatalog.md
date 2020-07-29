[@hermes/composition](../README.md) › [Globals](../globals.md) › [ExportCatalog](exportcatalog.md)

# Class: ExportCatalog

A catalog that contains exported class.

## Hierarchy

* **ExportCatalog**

## Index

### Constructors

* [constructor](exportcatalog.md#constructor)

### Properties

* [exportedTypes](exportcatalog.md#private-exportedtypes)
* [factoryOwner](exportcatalog.md#private-factoryowner)
* [sharedInstances](exportcatalog.md#private-sharedinstances)

### Methods

* [addExportedType](exportcatalog.md#addexportedtype)
* [addSharedInstance](exportcatalog.md#addsharedinstance)
* [getExport](exportcatalog.md#getexport)
* [hasExport](exportcatalog.md#hasexport)
* [loadFromDirectory](exportcatalog.md#loadfromdirectory)

## Constructors

###  constructor

\+ **new ExportCatalog**(`factoryOwner?`: [InstancesFactory](instancesfactory.md)): *[ExportCatalog](exportcatalog.md)*

Defined in ExportCatalog.ts:24

Create new catalog instance

**Parameters:**

Name | Type |
------ | ------ |
`factoryOwner?` | [InstancesFactory](instancesfactory.md) |

**Returns:** *[ExportCatalog](exportcatalog.md)*

## Properties

### `Private` exportedTypes

• **exportedTypes**: *object*

Defined in ExportCatalog.ts:14

Hashset of exported class indexed by contract type/contract name

___

### `Private` factoryOwner

• **factoryOwner**: *[InstancesFactory](instancesfactory.md)*

Defined in ExportCatalog.ts:24

The Instances factory that own this catalog, used for injection

___

### `Private` sharedInstances

• **sharedInstances**: *object*

Defined in ExportCatalog.ts:19

Hashset of shared instance of exported class indexed by contract type/contract name

## Methods

###  addExportedType

▸ **addExportedType**(`exportedClass`: [AutoDescribed](../interfaces/autodescribed.md)): *void*

Defined in ExportCatalog.ts:71

Add an AutoDescribed class in this catalog for the specified contract types and names (can be multiple)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`exportedClass` | [AutoDescribed](../interfaces/autodescribed.md) |   |

**Returns:** *void*

___

###  addSharedInstance

▸ **addSharedInstance**(`exportedClass`: [AutoDescribed](../interfaces/autodescribed.md), `createdInstance`: any): *void*

Defined in ExportCatalog.ts:137

Add a shared instance to the current catalog for all specified exported class

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`exportedClass` | [AutoDescribed](../interfaces/autodescribed.md) | the corresponding exported class |
`createdInstance` | any | the shared instance  |

**Returns:** *void*

___

###  getExport

▸ **getExport**(`contractType`: string, `contractName`: string, ...`constructorArgs`: any): *any*

Defined in ExportCatalog.ts:96

return an instance of the exported class corresponding to the specified contract type and name. Can be also a shared instance.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contractType` | string | the interface to get an instance for |
`contractName` | string | the specific implementation label to get an instance for |
`...constructorArgs` | any | - |

**Returns:** *any*

___

###  hasExport

▸ **hasExport**(`contractType`: string, `contractName`: string): *boolean*

Defined in ExportCatalog.ts:86

Check if this catalog contains a specific export

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contractType` | string | the contract type to test |
`contractName` | string | the contract name for the specified contract type to test  |

**Returns:** *boolean*

___

###  loadFromDirectory

▸ **loadFromDirectory**(`directoryCatalogPath`: string): *void*

Defined in ExportCatalog.ts:42

Discover all exported class from a specified directory

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`directoryCatalogPath` | string |   |

**Returns:** *void*
