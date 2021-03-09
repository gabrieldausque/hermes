[@hermes/composition](../README.md) / [Exports](../modules.md) / [ExportCatalog](../modules/exportcatalog.md) / ExportCatalog

# Class: ExportCatalog

[ExportCatalog](../modules/exportcatalog.md).ExportCatalog

A catalog that contains exported class.

## Table of contents

### Constructors

- [constructor](exportcatalog.exportcatalog-1.md#constructor)

### Properties

- [exportedTypes](exportcatalog.exportcatalog-1.md#exportedtypes)
- [factoryOwner](exportcatalog.exportcatalog-1.md#factoryowner)
- [sharedInstances](exportcatalog.exportcatalog-1.md#sharedinstances)

### Methods

- [addExportedType](exportcatalog.exportcatalog-1.md#addexportedtype)
- [addSharedInstance](exportcatalog.exportcatalog-1.md#addsharedinstance)
- [getExport](exportcatalog.exportcatalog-1.md#getexport)
- [hasExport](exportcatalog.exportcatalog-1.md#hasexport)
- [loadFromDirectory](exportcatalog.exportcatalog-1.md#loadfromdirectory)

## Constructors

### constructor

\+ **new ExportCatalog**(`factoryOwner?`: [*InstancesFactory*](instancesfactory.instancesfactory-1.md)): [*ExportCatalog*](exportcatalog.exportcatalog-1.md)

Create new catalog instance

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`factoryOwner?` | [*InstancesFactory*](instancesfactory.instancesfactory-1.md) | the factory that will own the catalog, used for complex composition scenario    |

**Returns:** [*ExportCatalog*](exportcatalog.exportcatalog-1.md)

Defined in: packages/composition/src/ExportCatalog.ts:24

## Properties

### exportedTypes

• `Private` **exportedTypes**: *object*

Hashset of exported class indexed by contract type/contract name

#### Type declaration:

Defined in: packages/composition/src/ExportCatalog.ts:14

___

### factoryOwner

• `Private` `Optional` **factoryOwner**: [*InstancesFactory*](instancesfactory.instancesfactory-1.md)

The Instances factory that own this catalog, used for injection

Defined in: packages/composition/src/ExportCatalog.ts:24

___

### sharedInstances

• `Private` **sharedInstances**: *object*

Hashset of shared instance of exported class indexed by contract type/contract name

#### Type declaration:

Defined in: packages/composition/src/ExportCatalog.ts:19

## Methods

### addExportedType

▸ **addExportedType**(`exportedClass`: [*AutoDescribed*](../interfaces/autodescribed.autodescribed-1.md)): *void*

Add an AutoDescribed class in this catalog for the specified contract types and names (can be multiple)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`exportedClass` | [*AutoDescribed*](../interfaces/autodescribed.autodescribed-1.md) | exported class to add    |

**Returns:** *void*

Defined in: packages/composition/src/ExportCatalog.ts:71

___

### addSharedInstance

▸ **addSharedInstance**(`exportedClass`: [*AutoDescribed*](../interfaces/autodescribed.autodescribed-1.md), `createdInstance`: *any*): *void*

Add a shared instance to the current catalog for all specified exported class

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`exportedClass` | [*AutoDescribed*](../interfaces/autodescribed.autodescribed-1.md) | the corresponding exported class   |
`createdInstance` | *any* | the shared instance    |

**Returns:** *void*

Defined in: packages/composition/src/ExportCatalog.ts:139

___

### getExport

▸ **getExport**(`contractType`: *string*, `contractName`: *string*, ...`constructorArgs`: *any*): *any*

return an instance of the exported class corresponding to the specified contract type and name. Can be also a shared instance.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`contractType` | *string* | the interface to get an instance for   |
`contractName` | *string* | the specific implementation label to get an instance for   |
`...constructorArgs` | *any* | the args the constructors needs    |

**Returns:** *any*

Defined in: packages/composition/src/ExportCatalog.ts:98

___

### hasExport

▸ **hasExport**(`contractType`: *string*, `contractName`: *string*): *boolean*

Check if this catalog contains a specific export

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`contractType` | *string* | the contract type to test   |
`contractName` | *string* | the contract name for the specified contract type to test    |

**Returns:** *boolean*

Defined in: packages/composition/src/ExportCatalog.ts:88

___

### loadFromDirectory

▸ **loadFromDirectory**(`directoryCatalogPath`: *string*): *void*

Discover all exported class from a specified directory

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`directoryCatalogPath` | *string* | directory from which to load exported class catalog    |

**Returns:** *void*

Defined in: packages/composition/src/ExportCatalog.ts:42
