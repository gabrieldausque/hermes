[@hermes/jobs](../README.md) / [Exports](../modules.md) / JobManager

# Module: JobManager

## Table of contents

### Classes

- [JobManager](../classes/jobmanager.jobmanager-1.md)

### Functions

- [getGlobalJobManager](jobmanager.md#getglobaljobmanager)
- [getJobManagerInstancesFactory](jobmanager.md#getjobmanagerinstancesfactory)
- [setGlobalJobManager](jobmanager.md#setglobaljobmanager)
- [setJobManagerInstancesFactory](jobmanager.md#setjobmanagerinstancesfactory)

## Functions

### getGlobalJobManager

▸ **getGlobalJobManager**(): [*JobManager*](../classes/jobmanager.jobmanager-1.md)

Get the global shared instance of the JobManager

**Returns:** [*JobManager*](../classes/jobmanager.jobmanager-1.md)

Defined in: packages/jobs/src/JobManager.ts:225

___

### getJobManagerInstancesFactory

▸ **getJobManagerInstancesFactory**(): InstancesFactory

Get the InstancesFactory that will be used by JobManager

**Returns:** InstancesFactory

Defined in: packages/jobs/src/JobManager.ts:30

___

### setGlobalJobManager

▸ **setGlobalJobManager**(`jobManager`: [*JobManager*](../classes/jobmanager.jobmanager-1.md)): *void*

Change the global shared instance of the JobManager by the specified instance

#### Parameters:

Name | Type |
:------ | :------ |
`jobManager` | [*JobManager*](../classes/jobmanager.jobmanager-1.md) |

**Returns:** *void*

Defined in: packages/jobs/src/JobManager.ts:217

___

### setJobManagerInstancesFactory

▸ **setJobManagerInstancesFactory**(`factory`: InstancesFactory): *void*

Set the InstancesFactory that will be used to create the QueuesFactory of further created JobManager

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`factory` | InstancesFactory | The factory to use in all futur JobManager    |

**Returns:** *void*

Defined in: packages/jobs/src/JobManager.ts:20
