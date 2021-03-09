# Hermes - Frameworks
> Decoupling Frameworks for Nodejs

Hermes Frameworks is a set of frameworks developed to simplify the decoupling and the modularity of any node application.

## State of developments

Today, Hermes frameworks is composed of 5 packages : 

- [Composition](/HomeComposition.md) : a dependency injection framework that help compose a service or an application based on contract 
and metadata worn by class
- [TopicService](/HomeTopic.md) : a realtime framework powered by socket.io that provides a notification service which can be used from inner node
process and from external clients (browser or other node process)
- [Job](/HomeJob.md) : a framework that provides a queue and jobs management that can be customized through Composition
- [Bull-Job](/HomeBullJob.md) : the specific implementation using bull (with underlying redis) of the Job framework
- [BullMQ-Job](/HomeBullMQJob.md) : the specific implementation using bullmq (with underlying redis) of the Job framework



 
