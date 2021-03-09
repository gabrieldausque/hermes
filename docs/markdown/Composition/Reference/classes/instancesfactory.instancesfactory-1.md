[@hermes/composition](../README.md) / [Exports](../modules.md) / [InstancesFactory](../modules/instancesfactory.md) / InstancesFactory

# Class: InstancesFactory

[InstancesFactory](../modules/instancesfactory.md).InstancesFactory

Factory to discover, import and create any object instance based on contract type (aka interface) and name (a key to distinguish
each implementation) to compose easily an object or a service

## Table of contents

### Constructors

- [constructor](instancesfactory.instancesfactory-1.md#constructor)

### Properties

- [catalogs](instancesfactory.instancesfactory-1.md#catalogs)
- [directoryCatalogRoot](instancesfactory.instancesfactory-1.md#directorycatalogroot)

### Methods

- [getInstanceFromCatalogs](instancesfactory.instancesfactory-1.md#getinstancefromcatalogs)
- [getInstanceFromModule](instancesfactory.instancesfactory-1.md#getinstancefrommodule)
- [loadExportedClassesFromDirectory](instancesfactory.instancesfactory-1.md#loadexportedclassesfromdirectory)

## Constructors

### constructor

\+ **new InstancesFactory**(`directoryCatalogRoot?`: *string*): [*InstancesFactory*](instancesfactory.instancesfactory-1.md)

Create instance of a factory

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`directoryCatalogRoot?` | *string* | the path of the current running application the catalogs directory root path. Default to path.dirname(require.main.filename)    |

**Returns:** [*InstancesFactory*](instancesfactory.instancesfactory-1.md)

Defined in: packages/composition/src/InstancesFactory.ts:18

## Properties

### catalogs

• `Private` `Readonly` **catalogs**: [*ExportCatalog*](exportcatalog.exportcatalog-1.md)[]

The list of catalogs that contains exportable class

Defined in: packages/composition/src/InstancesFactory.ts:14

___

### directoryCatalogRoot

• **directoryCatalogRoot**: *string*

The default root path from which to load catalogs.

Defined in: packages/composition/src/InstancesFactory.ts:18

## Methods

### getInstanceFromCatalogs

▸ **getInstanceFromCatalogs**(`contractType`: *string*, `contractName`: *string*, ...`constructorArgs`: *any*): *any*

Get an instance from a discovered catalog.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`contractType` | *string* | the contract type that you want to get   |
`contractName` | *string* | the contract name related to the contract type that you want to get   |
`...constructorArgs` | *any* | args to be passed to the constructors    |

**Returns:** *any*

Defined in: packages/composition/src/InstancesFactory.ts:77

___

### getInstanceFromModule

▸ **getInstanceFromModule**(`exportName`: *string*, `modulePath`: *string*, ...`constructorArgs`: *any*): *any*

Create instance from a node module

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`exportName` | *string* | the export name to create from   |
`modulePath` | *string* | the path to the module   |
`...constructorArgs` | *any* | args to be passed to the constructors    |

**Returns:** *any*

Defined in: packages/composition/src/InstancesFactory.ts:59

___

### loadExportedClassesFromDirectory

▸ **loadExportedClassesFromDirectory**(`directoryCatalogRoot`: *string*, `isAbsolutePath?`: *boolean*): *void*

Discover classes from a specified directory

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`directoryCatalogRoot` | *string* | - | The path to the catalog to discover. Can be absolute path, if you want to discover a catalog not under the default directory catalog root   |
`isAbsolutePath` | *boolean* | false | must be set to true if the directoryCatalogRoot is an absolute path.    |

**Returns:** *void*

Defined in: packages/composition/src/InstancesFactory.ts:42
