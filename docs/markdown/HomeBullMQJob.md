[Home](./Home.md) > [BullMQJob](HomeBullMQJob.md)

# Hermes - Bull MQ Job : All Resources
>All resources from Source code for JobManagement using BullMQ, including example 

## What it does

The bullmq-job module is a nodejs library to use with [@hermes/job](HomeJob.md) module, to use [bullmq](https://www.npmjs.com/package/bullmq) implementation that relies on
 redis under the JobManager facade. 

NB : for more details on JobManager, see [Jobs](HomeJob.md) home

For more documentation on bullmq, see [here](https://docs.bullmq.io/)

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
npm install @hermes/bullmq-jobs --save
```

### Usage

For usage, see the [Jobs Usage section](/HomeJob#Usage), but replace configuration with this :

``` json
{
  ...
  "jobManager": {
    "queuesFactoryExportName":"BullMQ",
    "defaultQueueConfiguration":{
      "bullQueueOptions": {
        "connection":{
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

And load the following directory in the InstanceFactory : 


``` ts
import {getJobManagerInstancesFactory, getGlobalJobManager, setGlobalJobManager, JobManager} from '@hermes/jobs';
import config from 'config';
...
getJobManagerInstancesFactory().loadExportedClassesFromDirectory('../node_modules/@hermes/bullmq-jobs/lib');
...
```

## Resources :

[Examples](/Examples)

[Code Reference](/BullMQJobs/Reference/globals)

