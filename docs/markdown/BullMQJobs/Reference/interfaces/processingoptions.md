[@hermes/jobs](../README.md) › [Globals](../globals.md) › [ProcessingOptions](processingoptions.md)

# Interface: ProcessingOptions

Options to be used by workers, depending on implementation

## Hierarchy

* **ProcessingOptions**

  ↳ [BullProcessingOptions](bullprocessingoptions.md)

## Index

### Properties

* [doneHandler](processingoptions.md#donehandler)
* [errorHandler](processingoptions.md#errorhandler)
* [progressHandler](processingoptions.md#progresshandler)

## Properties

###  doneHandler

• **doneHandler**: *any*

Defined in src/hermes_modules/jobs/queues/ProcessingOptions.ts:8

handler to be executed when a job is success

___

###  errorHandler

• **errorHandler**: *any*

Defined in src/hermes_modules/jobs/queues/ProcessingOptions.ts:18

handler to be executed when a job is in error

___

###  progressHandler

• **progressHandler**: *any*

Defined in src/hermes_modules/jobs/queues/ProcessingOptions.ts:13

handler that will indicate the progress of a job execution
