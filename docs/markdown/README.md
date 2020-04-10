# Hermes - TopicService : All Resources
>All resources from Source code, including example 

## What it does

The topic service of the Hermes project introduce a publish/subscribe pattern in a nodejs server with distant and nearby client. 
It allows lazy coupled communication by message between object or method or distant client (using socket.io). 
It uses also a hierarchical structure for the topic message that allows multicasting/broadcasting message to unknown subscribers.

The below schema explain what you can do with topic service : 

![](Images/topicservice-schemas.png)

## Installation

A npm package is available to make installation easiest as possible.

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

and now you can run npm command to install dependencies:

```
npm install @hermes/topicservice --save
```

Now, to use the topic service, declare a shared instance (a service) of TopicService (to use it accross all your script) : 

``` ts
import {TopicService, MemoryTopicServiceClient, TopicMessage} from '@hermes/topicservice';
const topicService = new TopicService();

const client1 = new MemoryTopicServiceClient(topicService);
const client2 = new MemoryTopicServiceClient(topicService);
client1.subscribe('atopic', (topic:string, topicMessage:TopicMessage) =>{
       console.log("a message has been received");
       console.log(topicMessage);
}, null);

client2.publish('atopic', "A content");

```

## Resources :

[Examples](Examples/globals.md)

[Code Reference](Reference/globals.md)

