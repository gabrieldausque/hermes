[@hermes/jobs](../README.md) / [Exports](../modules.md) / [queues/InMemoryQueuesFactory](../modules/queues_inmemoryqueuesfactory.md) / InMemoryQueuesFactory

# Class: InMemoryQueuesFactory

[queues/InMemoryQueuesFactory](../modules/queues_inmemoryqueuesfactory.md).InMemoryQueuesFactory

Factory that will create InMemoryQueue

## Implements

* [*QueuesFactory*](../interfaces/queues_queuesfactory.queuesfactory.md)

## Table of contents

### Constructors

- [constructor](queues_inmemoryqueuesfactory.inmemoryqueuesfactory.md#constructor)

### Properties

- [metadata](queues_inmemoryqueuesfactory.inmemoryqueuesfactory.md#metadata)

### Methods

- [createQueue](queues_inmemoryqueuesfactory.inmemoryqueuesfactory.md#createqueue)

## Constructors

### constructor

\+ **new InMemoryQueuesFactory**(): [*InMemoryQueuesFactory*](queues_inmemoryqueuesfactory.inmemoryqueuesfactory.md)

**Returns:** [*InMemoryQueuesFactory*](queues_inmemoryqueuesfactory.inmemoryqueuesfactory.md)

## Properties

### metadata

▪ `Static` **metadata**: *any*[]

Export datas to be used by InstancesFactory

Defined in: packages/jobs/src/queues/InMemoryQueuesFactory.ts:12

## Methods

### createQueue

▸ **createQueue**(`queueName`: *string*, `queueOptions?`: *object*): [*Queue*](queues_queue.queue.md)

Create InMemoryQueue with specified name and options

#### Parameters:

Name | Type |
:------ | :------ |
`queueName` | *string* |
`queueOptions?` | *object* |

**Returns:** [*Queue*](queues_queue.queue.md)

Implementation of: [QueuesFactory](../interfaces/queues_queuesfactory.queuesfactory.md)

Defined in: packages/jobs/src/queues/InMemoryQueuesFactory.ts:27
