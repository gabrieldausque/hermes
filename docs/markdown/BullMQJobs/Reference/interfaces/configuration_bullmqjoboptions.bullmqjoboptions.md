[@hermes/bullmq-jobs](../README.md) / [Exports](../modules.md) / [configuration/BullMQJobOptions](../modules/configuration_bullmqjoboptions.md) / BullMQJobOptions

# Interface: BullMQJobOptions

[configuration/BullMQJobOptions](../modules/configuration_bullmqjoboptions.md).BullMQJobOptions

The options to be used for a job

## Table of contents

### Properties

- [bullOptions](configuration_bullmqjoboptions.bullmqjoboptions.md#bulloptions)
- [name](configuration_bullmqjoboptions.bullmqjoboptions.md#name)

## Properties

### bullOptions

• `Optional` **bullOptions**: JobOptions

The JobOpts to be used for execution.
Note that the id will be set to the id of the BullJob (a guid).

Defined in: packages/bullmq-jobs/src/configuration/BullMQJobOptions.ts:16

___

### name

• **name**: *string*

The name of the worker to be used for this execution

Defined in: packages/bullmq-jobs/src/configuration/BullMQJobOptions.ts:10
