[@hermes/jobs](../README.md) / [Exports](../modules.md) / [queues/QueuesFactory](../modules/queues_queuesfactory.md) / QueuesFactory

# Interface: QueuesFactory

[queues/QueuesFactory](../modules/queues_queuesfactory.md).QueuesFactory

Interface to be implemented by a Factory that will return Queue objects

## Implemented by

* [*InMemoryQueuesFactory*](../classes/queues_inmemoryqueuesfactory.inmemoryqueuesfactory.md)

## Table of contents

### Methods

- [createQueue](queues_queuesfactory.queuesfactory.md#createqueue)

## Methods

### createQueue

▸ **createQueue**(`queueName`: *string*, `queueOptions?`: *object*): [*Queue*](../classes/queues_queue.queue.md)

#### Parameters:

Name | Type |
:------ | :------ |
`queueName` | *string* |
`queueOptions?` | *object* |

**Returns:** [*Queue*](../classes/queues_queue.queue.md)

Defined in: packages/jobs/src/queues/QueuesFactory.ts:7
