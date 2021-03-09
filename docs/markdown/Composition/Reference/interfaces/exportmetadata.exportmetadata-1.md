[@hermes/composition](../README.md) / [Exports](../modules.md) / [ExportMetadata](../modules/exportmetadata.md) / ExportMetadata

# Interface: ExportMetadata

[ExportMetadata](../modules/exportmetadata.md).ExportMetadata

A metadata to be worn by any class that allow instance factory to discover a class and add it to an export catalog

## Table of contents

### Properties

- [constructorInjectedArgs](exportmetadata.exportmetadata-1.md#constructorinjectedargs)
- [contractName](exportmetadata.exportmetadata-1.md#contractname)
- [contractType](exportmetadata.exportmetadata-1.md#contracttype)
- [isShared](exportmetadata.exportmetadata-1.md#isshared)

## Properties

### constructorInjectedArgs

• `Optional` **constructorInjectedArgs**: [{ `contractName`: *string* ; `contractType`: *string*  }]

If the class need to import some component during creation, contains the list of couple contract type/name to inject
to the constructor

Defined in: packages/composition/src/ExportMetadata.ts:21

___

### contractName

• **contractName**: *string*

The contract name identifier. a key to distinguish underlying implementation of the contract type.

Defined in: packages/composition/src/ExportMetadata.ts:16

___

### contractType

• **contractType**: *string*

The contract type identifier. Prefer the interface name

Defined in: packages/composition/src/ExportMetadata.ts:12

___

### isShared

• **isShared**: *boolean*

Indicates to the factory if the exported instance is shared, aka is a singleton

Defined in: packages/composition/src/ExportMetadata.ts:8
