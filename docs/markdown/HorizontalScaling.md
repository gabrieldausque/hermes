[Home](/Home.md) > [Horizontal Scaling](/HorizontalScaling.md)

# Horizontal Scaling And Cluster mode

> This feature is currently experimental and must be strongly tested before using in production environment as its usage needs attention of your developers on the way they will use it.

TopicService API allow you to have multiple node that will receive same set of message, using a peer-to-peer approach

Each node will be connected to only one node and listen to all message on it, and will send all message to its clients, browser client or other TopicService node (throught socketio);

If the TopicService on which the current TopicService is connected stopped, then the current TopicService will try to connect to another node of the cluster each 5s until it manage to connect.

## HowTo activate cluster mode ?

First you need to configure the service. to do that, just create a TopicServiceConfiguration doing this :

- For a featherjs application

Add this configuration in application file : 

``` json
{
 ...
 "topicService":{
    "host":"http://localhost:3031",
    "standAlone":false,
    "clusterNodes":[
      "http://localhost:3031",
      "http://localhost:3030",
      "http://localhost:3032"
    ]
  }
...
}
```

_host_ property is mandatory and define the current socketio host used (including port).

_standAlone_ property is default to true, and needs to be set to false to activate the cluster mode

_clusterNodes_ property needs to be set up if _standAlone_ is set to true. It will contains all available nodes of the cluster 

In the app.ts file, when creating the TopicService, create the TopicServiceConfiguration object and passed it to the constructor of the service

``` typescript
...
app.configure(configuration());

const topicConfiguration:TopicServiceConfiguration = TopicServiceConfiguration.load(app.get("topicService"));
app.topicService = new TopicService(topicConfiguration);
...
```

And after the socketio connection is initialized, call the initializeCluster method :

``` typescript
...
app.configure(socketio((io) => {
  console.log('Socket.Io server created and listening on ');
  io.on('connection', (socket) => {
    const topicClient = new SocketIOTopicServiceClient(app.topicService, socket);
    console.log("Connecting new client " + topicClient.topicClientId);
  });
  app.topicService.initializeCluster().catch((error) => console.error(error));
}));
...
```

- For other kind of application

The sequence is quite the, but the difference is that you will need to pass to the TopicServiceConfiguration.load method that kind of object :

``` typescript
{
    host:"http://localhost:3030",
    standAlone: false,
    clusterNodes:[
      "http://localhost:3031",
      "http://localhost:3030",
      "http://localhost:3032"
    ]
}
```

When starting application, you will see following log 

``` bash
Socket.Io server created and listening on 
Initialize cluster
Trying to connect to http://localhost:3031
info: Feathers application started on http://localhost:3030
```

If the random server on which the current node is trying to connect is not available, an error occured, and the process of connection will restart each 5s, until a connection succeed :

``` bash
Error while connecting to server http://localhost:3031 : Error: xhr poll error
socketId : bf21f640-c705-410e-8475-81d936f6799c
Waiting 5s before retrying ....
Connecting new client 29beb39d-a81b-4e73-a04c-d3f4958b8b9d
Connecting new client 9e0ca351-99c4-45df-b330-9534c9cf722e
Initialize cluster
Trying to connect to http://localhost:3032
Error while connecting to server http://localhost:3032 : Error: xhr poll error
socketId : e3deccf7-fea5-46fe-b975-aaca7c45d5cf
Waiting 5s before retrying ....
```
When a connection succeed, you obtain following log : 

``` bash

Initialize cluster
Trying to connect to http://localhost:3031
connection tohttp://localhost:3031 done.
Subscribing to all event from other cluster node : http://localhost:3031

```

If a disconnect occured during the life of the current node, then the process of connection restart, to ensure that the process will always be connected to an available node

