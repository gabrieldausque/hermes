[Home](./Home.md) > [Jobs](HomeJob.md)

# Hermes - Job : All Resources
>All resources from Source code for Job Management, including example 

## What it does

The Job module is a nodejs library written in typescript using composition to help you manage execution of job (aka function) 
using queues, with lazy coupling of underlying technologies. 

This library is designed with :
- a simple and standard interfaces for long terme integration
- a composable system based on [@hermes/composition](/HomeComposition) to have lazy coupling on underlying technologies
- three implementations currently available :
    - InMemoryQueues (in the library itself)
    - Bull using bull. See [@hermes/bull-jobs](/HomeBullJob)
    - BullMQ using bullmq. See [@hermes/bullmq-jobs](/HomeBullMQJob)

## Installation

A npm package is available to make installation easiest as possible

### Configuration of the registry

First you need to be autorize as a reader of the Hermes project. If you are not at least readers, please contact : 

[gabrieldausque.pro@gmail.com](mailto:gabrieldausque.pro@gmail.com)

Then you will need to add the Hermes registry. A complete tutorial is available in *npm* section : [click here](https://gdausquepro.visualstudio.com/Hermes/_packaging?_a=connect&feed=hermes)

![](Images/npm-feed-connect-001.png)

In summary, create a .npmrc file if you do not have one next to your package.json file, and add following npm scoped registry:

```
registry=https://registry.npmjs.org
@hermes:registry=https://gdausquepro.pkgs.visualstudio.com/Hermes/_packaging/hermes/npm/registry/
always-auth=true
```   

Obtain a Personal Access Token for azure devops, by following this steps: 

Connect to the personal access tokens forms:

[https://gdausquepro.visualstudio.com/_usersSettings/tokens](https://gdausquepro.visualstudio.com/_usersSettings/tokens)

Create a new token with maximum durability you want : 

![](Images/pat-001.png)

![](Images/pat-002.png)

Copy the value, and encode it in base64 using following command :

 ```
 node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
 ```

In your user .npmrc file (in %USERPROFILE%\.npmrc for windows and ~/.npmrc for linux system), add following lines :

```
; begin auth token
//gdausquepro.pkgs.visualstudio.com/Hermes/_packaging/hermes/npm/registry/:username=[your username]
//gdausquepro.pkgs.visualstudio.com/Hermes/_packaging/hermes/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
//gdausquepro.pkgs.visualstudio.com/Hermes/_packaging/hermes/npm/registry/:email=[an email]
//gdausquepro.pkgs.visualstudio.com/Hermes/_packaging/hermes/npm/:username=[your username]
//gdausquepro.pkgs.visualstudio.com/Hermes/_packaging/hermes/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
//gdausquepro.pkgs.visualstudio.com/Hermes/_packaging/hermes/npm/:email=[an email]
; end auth token
```
Replace terms in [] with the right value (don't forget the PAT value encode in base64 !)

**<u>NB :</u>** the username to use is indicated in the [official tutorial](https://gdausquepro.visualstudio.com/Hermes/_packaging?_a=connect&feed=hermes)

### Installation 
Run npm command to install dependencies:

```
npm install @hermes/jobs --save
```

### Usage

Now, to use the JobManager, 

Create a configuration object where you will specified the plugins to import, and some configuration related to the specific underlying implementations :

``` json
{
  ...
  "jobManager": {
    "queuesFactoryExportName":"Bull",
    "defaultQueueConfiguration":{
      "redisUrl":"redis://localhost:6379",
      "bullQueueOptions": {
        "redis":{
          "host":"localhost",
          "port":"6379",
          "maxRetriesPerRequest": 2,
          "connectTimeout":250
        }
      }
    }
  }
  ...
}
```

Here in the configuration you have the usage of the Bull implementation, using bull nodejs library, and you specify a default configuration (optional)
for queues : you can see here the needs of the resids url, and some specific info for the host, the port, max retries, etc ...

Add available implementations in InstancesFactory : 

``` ts
import {getJobManagerInstancesFactory, getGlobalJobManager, setGlobalJobManager, JobManager} from '@hermes/jobs';
import config from 'config';
...
getJobManagerInstancesFactory().loadExportedClassesFromDirectory('../node_modules/@hermes/bull-jobs/lib');
...
```

Change the globalJobManager or use the default one (which will use InMemoryQueue implementation) if you do not have specific configuraiton

For the default one 

``` ts
const jobManager = getGlobalJobManager();
```

For a specific one 

``` ts

setGlobalJobManager(new JobManager(config.get('jobManager')))
const jobManager = getGlobalJobManager();

```

Now you'll have two phases : 

A declarative one, where you will declare queues that may receive jobs and payloads, and workers to execute some actions : 

The queue creation

``` ts

jobManager.createQueue('SomeActionName');

```

The worker creation 

``` ts

jobManager.createWorker('SomeActionName', async (payload:JobData, job) => {
    return SomeStuffToDoWith(payload);
});
 
```

The action can return a value or not, can be async or not, etc ...

NB : the declaration of the worker is mandatory, not the queue one, except if you need some specific options for the queue creation.

The second phase is the execution one, where you will push the payload for the execution :

``` ts

const data:any = createPayload();
const job = jobManager.execute('SomeActionName', data)

```

To get the result of the job, you have two choice :
 
- job has a semaphore method which return a promise that you can use to wait completion :

``` ts

async DoSomeStuff() => {
...
    const data:any = createPayload();
    let result:any = null;
    const job = jobManager.execute('SomeActionName', data)
...
    await job.waitForCompletion()
...
    if(job.state === JobStates.success) {
        result = job.result;
    }
...

} 

```

- job is an EventEmitter where you can listen on some specific event (see [Code Reference](/Jobs/Reference/globals) for details)

``` ts
    ...
    const data:any = createPayload();
    let result:any = null;
    const job = jobManager.execute('SomeActionName', data)
    job.on('completed', (resultOrErr) => {
        if(job.state === JobStates.success) {
            DoSomeStuff(resultOrErr)
        }
    })
    ...
    // OR
    ...
    job.on('success', (result) => {
        DoSomeStuff(result)
    })
    job.on('failed', (err) => {
        DoSomeStuffOnError(err)
    })
    ...
``` 

## Resources :

[Examples](/Examples)

[Code Reference](/Jobs/Reference/globals)

