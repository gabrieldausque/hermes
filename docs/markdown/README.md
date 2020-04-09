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

```   

## Resources :

[Examples](Examples/globals.md)

[Code Reference](Reference/globals.md)

