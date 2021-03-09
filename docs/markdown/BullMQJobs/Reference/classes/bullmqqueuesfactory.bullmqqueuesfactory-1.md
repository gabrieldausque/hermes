[@hermes/bullmq-jobs](../README.md) / [Exports](../modules.md) / [BullMQQueuesFactory](../modules/bullmqqueuesfactory.md) / BullMQQueuesFactory

# Class: BullMQQueuesFactory

[BullMQQueuesFactory](../modules/bullmqqueuesfactory.md).BullMQQueuesFactory

The factory that will create queue using the bull framework

## Implements

* *QueuesFactory*

## Table of contents

### Constructors

- [constructor](bullmqqueuesfactory.bullmqqueuesfactory-1.md#constructor)

### Properties

- [metadata](bullmqqueuesfactory.bullmqqueuesfactory-1.md#metadata)

### Methods

- [createQueue](bullmqqueuesfactory.bullmqqueuesfactory-1.md#createqueue)

## Constructors

### constructor

\+ **new BullMQQueuesFactory**(): [*BullMQQueuesFactory*](bullmqqueuesfactory.bullmqqueuesfactory-1.md)

**Returns:** [*BullMQQueuesFactory*](bullmqqueuesfactory.bullmqqueuesfactory-1.md)

## Properties

### metadata

▪ `Static` **metadata**: *any*[]

Export metadata used by InstancesFactory

Defined in: packages/bullmq-jobs/src/BullMQQueuesFactory.ts:12

## Methods

### createQueue

▸ **createQueue**(`queueName`: *string*, `queueOptions?`: [*BullMQQueueConfiguration*](../interfaces/configuration_bullmqqueueconfiguration.bullmqqueueconfiguration.md)): *Queue*

Create a BullQueue with the specified name

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`queueName` | *string* | The queue name   |
`queueOptions?` | [*BullMQQueueConfiguration*](../interfaces/configuration_bullmqqueueconfiguration.bullmqqueueconfiguration.md) | The options to use for the creation of the queue    |

**Returns:** *Queue*

Defined in: packages/bullmq-jobs/src/BullMQQueuesFactory.ts:23
