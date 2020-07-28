[@hermes/composition](../README.md) › [Globals](../globals.md) › [InstancesFactory](instancesfactory.md)

# Class: InstancesFactory

## Hierarchy

* **InstancesFactory**

## Index

### Constructors

* [constructor](instancesfactory.md#constructor)

### Properties

* [catalogs](instancesfactory.md#private-catalogs)
* [directoryCatalogRoot](instancesfactory.md#directorycatalogroot)

### Methods

* [getInstanceFromCatalogs](instancesfactory.md#getinstancefromcatalogs)
* [getInstanceFromModule](instancesfactory.md#getinstancefrommodule)
* [loadExportedClassesFromDirectory](instancesfactory.md#loadexportedclassesfromdirectory)

## Constructors

###  constructor

\+ **new InstancesFactory**(`directoryCatalogRoot?`: string): *[InstancesFactory](instancesfactory.md)*

Defined in InstancesFactory.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`directoryCatalogRoot?` | string |

**Returns:** *[InstancesFactory](instancesfactory.md)*

## Properties

### `Private` catalogs

• **catalogs**: *[ExportCatalog](exportcatalog.md)[]*

Defined in InstancesFactory.ts:5

___

###  directoryCatalogRoot

• **directoryCatalogRoot**: *string*

Defined in InstancesFactory.ts:6

## Methods

###  getInstanceFromCatalogs

▸ **getInstanceFromCatalogs**(`contractType`: string, `contractName`: string, ...`constructorArgs`: any): *any*

Defined in InstancesFactory.ts:36

**Parameters:**

Name | Type |
------ | ------ |
`contractType` | string |
`contractName` | string |
`...constructorArgs` | any |

**Returns:** *any*

___

###  getInstanceFromModule

▸ **getInstanceFromModule**(`exportName`: string, `modulePath`: string, ...`constructorArgs`: any): *any*

Defined in InstancesFactory.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`exportName` | string |
`modulePath` | string |
`...constructorArgs` | any |

**Returns:** *any*

___

###  loadExportedClassesFromDirectory

▸ **loadExportedClassesFromDirectory**(`directoryCatalogRoot`: string, `isAbsolutePath`: boolean): *void*

Defined in InstancesFactory.ts:15

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`directoryCatalogRoot` | string | - |
`isAbsolutePath` | boolean | false |

**Returns:** *void*
