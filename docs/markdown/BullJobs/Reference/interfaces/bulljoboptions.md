[@hermes/jobs](../README.md) › [Globals](../globals.md) › [BullJobOptions](bulljoboptions.md)

# Interface: BullJobOptions

The options to be used for a job

## Hierarchy

* **BullJobOptions**

## Index

### Properties

* [bullOptions](bulljoboptions.md#optional-bulloptions)
* [name](bulljoboptions.md#name)

## Properties

### `Optional` bullOptions

• **bullOptions**? : *JobOptions*

Defined in src/hermes_modules/bull-jobs/configuration/BullJobOptions.ts:15

The JobOpts to be used for execution. see [https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueadd](https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueadd)
Note that the id will be set to the id of the BullJob (a guid).

___

###  name

• **name**: *string*

Defined in src/hermes_modules/bull-jobs/configuration/BullJobOptions.ts:10

The name of the worker to be used for this execution
