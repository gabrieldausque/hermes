[@hermes/jobs](../README.md) › [Globals](../globals.md) › [InMemoryQueuesFactory](inmemoryqueuesfactory.md)

# Class: InMemoryQueuesFactory

Factory that will create InMemoryQueue

## Hierarchy

* **InMemoryQueuesFactory**

## Implements

* [QueuesFactory](../interfaces/queuesfactory.md)

## Index

### Properties

* [metadata](inmemoryqueuesfactory.md#static-metadata)

### Methods

* [createQueue](inmemoryqueuesfactory.md#createqueue)

## Properties

### `Static` metadata

▪ **metadata**: *any[]* = [ {
    contractType: 'QueuesFactory',
    contractName: 'Default',
    isShared: true
  },{
    contractType: 'QueuesFactory',
    contractName: 'InMemory',
    isShared: true
  }]

Defined in src/hermes_modules/jobs/queues/InMemoryQueuesFactory.ts:12

Export datas to be used by InstancesFactory

## Methods

###  createQueue

▸ **createQueue**(`queueName`: string, `queueOptions?`: object): *[Queue](queue.md)*

*Implementation of [QueuesFactory](../interfaces/queuesfactory.md)*

Defined in src/hermes_modules/jobs/queues/InMemoryQueuesFactory.ts:27

Create InMemoryQueue with specified name and options

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queueName` | string | - |
`queueOptions?` | object |   |

**Returns:** *[Queue](queue.md)*
