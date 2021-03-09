[@hermes/bullmq-jobs](../README.md) / [Exports](../modules.md) / [configuration/BullProcessingOptions](../modules/configuration_bullprocessingoptions.md) / BullProcessingOptions

# Interface: BullProcessingOptions

[configuration/BullProcessingOptions](../modules/configuration_bullprocessingoptions.md).BullProcessingOptions

Specialization of the processing options for bull

## Hierarchy

* *ProcessingOptions*

  ↳ **BullProcessingOptions**

## Table of contents

### Properties

- [concurrency](configuration_bullprocessingoptions.bullprocessingoptions.md#concurrency)
- [doneHandler](configuration_bullprocessingoptions.bullprocessingoptions.md#donehandler)
- [errorHandler](configuration_bullprocessingoptions.bullprocessingoptions.md#errorhandler)
- [name](configuration_bullprocessingoptions.bullprocessingoptions.md#name)
- [progressHandler](configuration_bullprocessingoptions.bullprocessingoptions.md#progresshandler)

## Properties

### concurrency

• **concurrency**: *number*

The number of parallelized execution to be available

Defined in: packages/bullmq-jobs/src/configuration/BullProcessingOptions.ts:14

___

### doneHandler

• **doneHandler**: *any*

handler to be executed when a job is success

Defined in: packages/jobs/dist/queues/ProcessingOptions.d.ts:8

___

### errorHandler

• **errorHandler**: *any*

handler to be executed when a job is in error

Defined in: packages/jobs/dist/queues/ProcessingOptions.d.ts:16

___

### name

• **name**: *string*

The named jobs for workers

Defined in: packages/bullmq-jobs/src/configuration/BullProcessingOptions.ts:10

___

### progressHandler

• **progressHandler**: *any*

handler that will indicate the progress of a job execution

Defined in: packages/jobs/dist/queues/ProcessingOptions.d.ts:12
