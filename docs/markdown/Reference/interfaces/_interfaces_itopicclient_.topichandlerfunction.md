[theloneblacksheep-topicservice](../README.md) › [Globals](../globals.md) › ["interfaces/ITopicClient"](../modules/_interfaces_itopicclient_.md) › [TopicHandlerFunction](_interfaces_itopicclient_.topichandlerfunction.md)

# Interface: TopicHandlerFunction

The handler that will be executed when receiving a message from the topicservice

## Hierarchy

* **TopicHandlerFunction**

## Callable

▸ (`topic`: string, `topicMessage`: [TopicMessage](../classes/_datas_topicmessage_.topicmessage.md)): *void*

Defined in interfaces/ITopicClient.ts:8

The handler that will be executed when receiving a message from the topicservice

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string | the topic listened to that has raised the handler |
`topicMessage` | [TopicMessage](../classes/_datas_topicmessage_.topicmessage.md) | the message received from the topic  |

**Returns:** *void*
