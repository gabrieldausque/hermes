[@hermes/bull-jobs](../README.md) / [Exports](../modules.md) / [BullQueuesFactory](../modules/bullqueuesfactory.md) / BullQueuesFactory

# Class: BullQueuesFactory

[BullQueuesFactory](../modules/bullqueuesfactory.md).BullQueuesFactory

The factory that will create queue using the bull framework

## Implements

* *QueuesFactory*

## Table of contents

### Constructors

- [constructor](bullqueuesfactory.bullqueuesfactory-1.md#constructor)

### Properties

- [metadata](bullqueuesfactory.bullqueuesfactory-1.md#metadata)

### Methods

- [createQueue](bullqueuesfactory.bullqueuesfactory-1.md#createqueue)

## Constructors

### constructor

\+ **new BullQueuesFactory**(): [*BullQueuesFactory*](bullqueuesfactory.bullqueuesfactory-1.md)

**Returns:** [*BullQueuesFactory*](bullqueuesfactory.bullqueuesfactory-1.md)

## Properties

### metadata

▪ `Static` **metadata**: *any*[]

Export metadata used by InstancesFactory

Defined in: packages/bull-jobs/src/BullQueuesFactory.ts:12

## Methods

### createQueue

▸ **createQueue**(`queueName`: *string*, `queueOptions?`: [*BullQueueConfiguration*](../interfaces/configuration_bullqueueconfiguration.bullqueueconfiguration.md)): *Queue*

Create a BullQueue with the specified name

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`queueName` | *string* | The queue name   |
`queueOptions?` | [*BullQueueConfiguration*](../interfaces/configuration_bullqueueconfiguration.bullqueueconfiguration.md) | The options to use for the creation of the queue    |

**Returns:** *Queue*

Defined in: packages/bull-jobs/src/BullQueuesFactory.ts:23
