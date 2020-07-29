[@hermes/composition](../README.md) › [Globals](../globals.md) › [InstancesFactory](instancesfactory.md)

# Class: InstancesFactory

Factory to discover, import and create any object instance based on contract type (aka interface) and name (a key to distinguish
each implementation) to compose easily an object or a service

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

Defined in InstancesFactory.ts:17

Create instance of a factory

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`directoryCatalogRoot?` | string | the path of the current running application the catalogs directory root path. Default to path.dirname(require.main.filename)  |

**Returns:** *[InstancesFactory](instancesfactory.md)*

## Properties

### `Private` catalogs

• **catalogs**: *[ExportCatalog](exportcatalog.md)[]*

Defined in InstancesFactory.ts:13

The list of catalogs that contains exportable class

___

###  directoryCatalogRoot

• **directoryCatalogRoot**: *string*

Defined in InstancesFactory.ts:17

The default root path from which to load catalogs.

## Methods

###  getInstanceFromCatalogs

▸ **getInstanceFromCatalogs**(`contractType`: string, `contractName`: string, ...`constructorArgs`: any): *any*

Defined in InstancesFactory.ts:74

Get an instance from a discovered catalog.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contractType` | string | the contract type that you want to get |
`contractName` | string | the contract name related to the contract type that you want to get |
`...constructorArgs` | any | args to be passed to the constructors  |

**Returns:** *any*

___

###  getInstanceFromModule

▸ **getInstanceFromModule**(`exportName`: string, `modulePath`: string, ...`constructorArgs`: any): *any*

Defined in InstancesFactory.ts:56

Create instance from a node module

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`exportName` | string | the export name to create from |
`modulePath` | string | the path to the module |
`...constructorArgs` | any | args to be passed to the constructors  |

**Returns:** *any*

___

###  loadExportedClassesFromDirectory

▸ **loadExportedClassesFromDirectory**(`directoryCatalogRoot`: string, `isAbsolutePath`: boolean): *void*

Defined in InstancesFactory.ts:39

Discover classes from a specified directory

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`directoryCatalogRoot` | string | - | The path to the catalog to discover. Can be absolute path, if you want to discover a catalog not under the default directory catalog root |
`isAbsolutePath` | boolean | false | must be set to true if the directoryCatalogRoot is an absolute path.  |

**Returns:** *void*
