[@hermes/jobs](../README.md) › [Globals](../globals.md) › [BullProcessingOptions](bullprocessingoptions.md)

# Interface: BullProcessingOptions

Specialization of the processing options for bull

## Hierarchy

* [ProcessingOptions](processingoptions.md)

  ↳ **BullProcessingOptions**

## Index

### Properties

* [concurrency](bullprocessingoptions.md#concurrency)
* [doneHandler](bullprocessingoptions.md#donehandler)
* [errorHandler](bullprocessingoptions.md#errorhandler)
* [name](bullprocessingoptions.md#name)
* [progressHandler](bullprocessingoptions.md#progresshandler)

## Properties

###  concurrency

• **concurrency**: *number*

Defined in src/hermes_modules/bullmq-jobs/configuration/BullProcessingOptions.ts:14

The number of parallelized execution to be available

___

###  doneHandler

• **doneHandler**: *any*

*Inherited from [ProcessingOptions](processingoptions.md).[doneHandler](processingoptions.md#donehandler)*

Defined in src/hermes_modules/jobs/queues/ProcessingOptions.ts:8

handler to be executed when a job is success

___

###  errorHandler

• **errorHandler**: *any*

*Inherited from [ProcessingOptions](processingoptions.md).[errorHandler](processingoptions.md#errorhandler)*

Defined in src/hermes_modules/jobs/queues/ProcessingOptions.ts:18

handler to be executed when a job is in error

___

###  name

• **name**: *string*

Defined in src/hermes_modules/bullmq-jobs/configuration/BullProcessingOptions.ts:10

The named jobs for workers

___

###  progressHandler

• **progressHandler**: *any*

*Inherited from [ProcessingOptions](processingoptions.md).[progressHandler](processingoptions.md#progresshandler)*

Defined in src/hermes_modules/jobs/queues/ProcessingOptions.ts:13

handler that will indicate the progress of a job execution
