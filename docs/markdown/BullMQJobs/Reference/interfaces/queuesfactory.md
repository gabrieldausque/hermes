[@hermes/jobs](../README.md) › [Globals](../globals.md) › [QueuesFactory](queuesfactory.md)

# Interface: QueuesFactory

Interface to be implemented by a Factory that will return Queue objects

## Hierarchy

* **QueuesFactory**

## Implemented by

* [BullMQQueuesFactory](../classes/bullmqqueuesfactory.md)
* [InMemoryQueuesFactory](../classes/inmemoryqueuesfactory.md)

## Index

### Methods

* [createQueue](queuesfactory.md#createqueue)

## Methods

###  createQueue

▸ **createQueue**(`queueName`: string, `queueOptions?`: object): *[Queue](../classes/queue.md)*

Defined in src/hermes_modules/jobs/queues/QueuesFactory.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`queueName` | string |
`queueOptions?` | object |

**Returns:** *[Queue](../classes/queue.md)*
