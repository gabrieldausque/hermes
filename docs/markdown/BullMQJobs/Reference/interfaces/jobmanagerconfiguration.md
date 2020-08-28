[@hermes/jobs](../README.md) › [Globals](../globals.md) › [JobManagerConfiguration](jobmanagerconfiguration.md)

# Interface: JobManagerConfiguration

The configuration needed for the JobManager

## Hierarchy

* **JobManagerConfiguration**

## Index

### Properties

* [defaultQueueConfiguration](jobmanagerconfiguration.md#optional-defaultqueueconfiguration)
* [queuesFactoryExportName](jobmanagerconfiguration.md#queuesfactoryexportname)

## Properties

### `Optional` defaultQueueConfiguration

• **defaultQueueConfiguration**? : *any*

Defined in src/hermes_modules/jobs/JobManagerConfiguration.ts:8

A default configuration that will be passed to any queue created without a configuration specified

___

###  queuesFactoryExportName

• **queuesFactoryExportName**: *string*

Defined in src/hermes_modules/jobs/JobManagerConfiguration.ts:13

The export name used to specify the right QueuesFactory
