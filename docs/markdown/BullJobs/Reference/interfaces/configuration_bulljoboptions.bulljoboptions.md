[@hermes/bull-jobs](../README.md) / [Exports](../modules.md) / [configuration/BullJobOptions](../modules/configuration_bulljoboptions.md) / BullJobOptions

# Interface: BullJobOptions

[configuration/BullJobOptions](../modules/configuration_bulljoboptions.md).BullJobOptions

The options to be used for a job

## Table of contents

### Properties

- [bullOptions](configuration_bulljoboptions.bulljoboptions.md#bulloptions)
- [name](configuration_bulljoboptions.bulljoboptions.md#name)

## Properties

### bullOptions

• `Optional` **bullOptions**: JobOptions

The JobOpts to be used for execution. see [https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueadd](https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueadd)
Note that the id will be set to the id of the BullJob (a guid).

Defined in: packages/bull-jobs/src/configuration/BullJobOptions.ts:15

___

### name

• **name**: *string*

The name of the worker to be used for this execution

Defined in: packages/bull-jobs/src/configuration/BullJobOptions.ts:10
