[@hermes/bull-jobs](../README.md) › [Globals](../globals.md) › [BullQueuesFactory](bullqueuesfactory.md)

# Class: BullQueuesFactory

## Hierarchy

* **BullQueuesFactory**

## Implements

* QueuesFactory

## Index

### Properties

* [metadata](bullqueuesfactory.md#static-metadata)

### Methods

* [createQueue](bullqueuesfactory.md#createqueue)

## Properties

### `Static` metadata

▪ **metadata**: *any[]* = [ {
    contractType: 'QueuesFactory',
    contractName: 'Bull',
    isShared: true
  }]

Defined in src/hermes_modules/bull-jobs/BullQueuesFactory.ts:6

## Methods

###  createQueue

▸ **createQueue**(`queueName`: string, `queueOptions?`: [BullQueueConfiguration](../interfaces/bullqueueconfiguration.md)): *Queue*

Defined in src/hermes_modules/bull-jobs/BullQueuesFactory.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`queueName` | string |
`queueOptions?` | [BullQueueConfiguration](../interfaces/bullqueueconfiguration.md) |

**Returns:** *Queue*
