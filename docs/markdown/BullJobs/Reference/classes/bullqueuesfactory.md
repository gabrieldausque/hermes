[@hermes/jobs](../README.md) › [Globals](../globals.md) › [BullQueuesFactory](bullqueuesfactory.md)

# Class: BullQueuesFactory

The factory that will create queue using the bull framework

## Hierarchy

* **BullQueuesFactory**

## Implements

* [QueuesFactory](../interfaces/queuesfactory.md)

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

Defined in src/hermes_modules/bull-jobs/BullQueuesFactory.ts:12

Export metadata used by InstancesFactory

## Methods

###  createQueue

▸ **createQueue**(`queueName`: string, `queueOptions?`: [BullQueueConfiguration](../interfaces/bullqueueconfiguration.md)): *[Queue](queue.md)*

Defined in src/hermes_modules/bull-jobs/BullQueuesFactory.ts:23

Create a BullQueue with the specified name

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queueName` | string | The queue name |
`queueOptions?` | [BullQueueConfiguration](../interfaces/bullqueueconfiguration.md) | The options to use for the creation of the queue  |

**Returns:** *[Queue](queue.md)*
