[@hermes/jobs](../README.md) › [Globals](../globals.md) › [ExportMetadata](exportmetadata.md)

# Class: ExportMetadata

A metadata to be worn by any class that allow instance factory to discover a class and add it to an export catalog

## Hierarchy

* **ExportMetadata**

## Index

### Properties

* [constructorInjectedArgs](exportmetadata.md#optional-constructorinjectedargs)
* [contractName](exportmetadata.md#contractname)
* [contractType](exportmetadata.md#contracttype)
* [isShared](exportmetadata.md#isshared)

## Properties

### `Optional` constructorInjectedArgs

• **constructorInjectedArgs**? : *any[]*

Defined in src/hermes_modules/composition/ExportMetadata.ts:21

If the class need to import some component during creation, contains the list of couple contract type/name to inject
to the constructor

___

###  contractName

• **contractName**: *string*

Defined in src/hermes_modules/composition/ExportMetadata.ts:16

The contract name identifier. a key to distinguish underlying implementation of the contract type.

___

###  contractType

• **contractType**: *string*

Defined in src/hermes_modules/composition/ExportMetadata.ts:12

The contract type identifier. Prefer the interface name

___

###  isShared

• **isShared**: *boolean*

Defined in src/hermes_modules/composition/ExportMetadata.ts:8

Indicates to the factory if the exported instance is shared, aka is a singleton
