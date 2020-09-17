[@hermes/jobs](../README.md) › [Globals](../globals.md) › [BullMQJobOptions](bullmqjoboptions.md)

# Interface: BullMQJobOptions

The options to be used for a job

## Hierarchy

* **BullMQJobOptions**

## Index

### Properties

* [bullOptions](bullmqjoboptions.md#optional-bulloptions)
* [name](bullmqjoboptions.md#name)

## Properties

### `Optional` bullOptions

• **bullOptions**? : *JobOptions*

Defined in src/hermes_modules/bullmq-jobs/configuration/BullMQJobOptions.ts:16

The JobOpts to be used for execution.
Note that the id will be set to the id of the BullJob (a guid).

___

###  name

• **name**: *string*

Defined in src/hermes_modules/bullmq-jobs/configuration/BullMQJobOptions.ts:10

The name of the worker to be used for this execution
