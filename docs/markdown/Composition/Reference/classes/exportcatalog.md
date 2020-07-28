[@hermes/composition](../README.md) › [Globals](../globals.md) › [ExportCatalog](exportcatalog.md)

# Class: ExportCatalog

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

Defined in ExportCatalog.ts:9

**Parameters:**

Name | Type |
------ | ------ |
`factoryOwner?` | [InstancesFactory](instancesfactory.md) |

**Returns:** *[ExportCatalog](exportcatalog.md)*

## Properties

### `Private` exportedTypes

• **exportedTypes**: *object*

Defined in ExportCatalog.ts:7

___

### `Private` factoryOwner

• **factoryOwner**: *[InstancesFactory](instancesfactory.md)*

Defined in ExportCatalog.ts:9

___

### `Private` sharedInstances

• **sharedInstances**: *object*

Defined in ExportCatalog.ts:8

## Methods

###  addExportedType

▸ **addExportedType**(`exportedClass`: [IExportableClass](../interfaces/iexportableclass.md)): *void*

Defined in ExportCatalog.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`exportedClass` | [IExportableClass](../interfaces/iexportableclass.md) |

**Returns:** *void*

___

###  addSharedInstance

▸ **addSharedInstance**(`exportedClass`: any, `createdInstance`: any): *void*

Defined in ExportCatalog.ts:91

**Parameters:**

Name | Type |
------ | ------ |
`exportedClass` | any |
`createdInstance` | any |

**Returns:** *void*

___

###  getExport

▸ **getExport**(`contractType`: string, `contractName`: string, ...`constructorArgs`: any): *any*

Defined in ExportCatalog.ts:55

**Parameters:**

Name | Type |
------ | ------ |
`contractType` | string |
`contractName` | string |
`...constructorArgs` | any |

**Returns:** *any*

___

###  hasExport

▸ **hasExport**(`contractType`: string, `contractName`: string): *boolean*

Defined in ExportCatalog.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`contractType` | string |
`contractName` | string |

**Returns:** *boolean*

___

###  loadFromDirectory

▸ **loadFromDirectory**(`directoryCatalogPath`: string): *void*

Defined in ExportCatalog.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`directoryCatalogPath` | string |

**Returns:** *void*
