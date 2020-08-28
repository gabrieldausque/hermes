[@hermes/jobs](../README.md) › [Globals](../globals.md) › [BullMQQueuesFactory](bullmqqueuesfactory.md)

# Class: BullMQQueuesFactory

The factory that will create queue using the bull framework

## Hierarchy

* **BullMQQueuesFactory**

## Implements

* [QueuesFactory](../interfaces/queuesfactory.md)

## Index

### Properties

* [metadata](bullmqqueuesfactory.md#static-metadata)

### Methods

* [createQueue](bullmqqueuesfactory.md#createqueue)

## Properties

### `Static` metadata

▪ **metadata**: *any[]* = [ {
    contractType: 'QueuesFactory',
    contractName: 'BullMQ',
    isShared: true
  }]

Defined in src/hermes_modules/bullmq-jobs/BullMQQueuesFactory.ts:12

Export metadata used by InstancesFactory

## Methods

###  createQueue

▸ **createQueue**(`queueName`: string, `queueOptions?`: [BullMQQueueConfiguration](../interfaces/bullmqqueueconfiguration.md)): *[Queue](queue.md)*

Defined in src/hermes_modules/bullmq-jobs/BullMQQueuesFactory.ts:23

Create a BullQueue with the specified name

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queueName` | string | The queue name |
`queueOptions?` | [BullMQQueueConfiguration](../interfaces/bullmqqueueconfiguration.md) | The options to use for the creation of the queue  |

**Returns:** *[Queue](queue.md)*
