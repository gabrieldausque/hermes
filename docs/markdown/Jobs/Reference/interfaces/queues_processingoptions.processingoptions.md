[@hermes/jobs](../README.md) / [Exports](../modules.md) / [queues/ProcessingOptions](../modules/queues_processingoptions.md) / ProcessingOptions

# Interface: ProcessingOptions

[queues/ProcessingOptions](../modules/queues_processingoptions.md).ProcessingOptions

Options to be used by workers, depending on implementation

## Table of contents

### Properties

- [doneHandler](queues_processingoptions.processingoptions.md#donehandler)
- [errorHandler](queues_processingoptions.processingoptions.md#errorhandler)
- [progressHandler](queues_processingoptions.processingoptions.md#progresshandler)

## Properties

### doneHandler

• **doneHandler**: *any*

handler to be executed when a job is success

Defined in: packages/jobs/src/queues/ProcessingOptions.ts:8

___

### errorHandler

• **errorHandler**: *any*

handler to be executed when a job is in error

Defined in: packages/jobs/src/queues/ProcessingOptions.ts:18

___

### progressHandler

• **progressHandler**: *any*

handler that will indicate the progress of a job execution

Defined in: packages/jobs/src/queues/ProcessingOptions.ts:13
