[@hermes/topicservice](../README.md) › [Globals](../globals.md) › [TopicHandlerFunction](topichandlerfunction.md)

# Interface: TopicHandlerFunction

The handler that will be executed when receiving a message from the topicservice

## Hierarchy

* **TopicHandlerFunction**

## Callable

▸ (`topic`: string, `topicMessage`: [TopicMessage](../classes/topicmessage.md)): *void*

Defined in interfaces/ITopicClient.ts:8

The handler that will be executed when receiving a message from the topicservice

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string | the topic listened to that has raised the handler |
`topicMessage` | [TopicMessage](../classes/topicmessage.md) | the message received from the topic  |

**Returns:** *void*
