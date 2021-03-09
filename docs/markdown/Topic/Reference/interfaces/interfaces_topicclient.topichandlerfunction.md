[@hermes/topicservice](../README.md) / [Exports](../modules.md) / [interfaces/TopicClient](../modules/interfaces_topicclient.md) / TopicHandlerFunction

# Interface: TopicHandlerFunction

[interfaces/TopicClient](../modules/interfaces_topicclient.md).TopicHandlerFunction

The handler that will be executed when receiving a message from the topicservice

## Callable

▸ **TopicHandlerFunction**(`topic`: *string*, `topicMessage`: [*TopicMessage*](../classes/datas_topicmessage.topicmessage.md)): *void*

The handler that will be executed when receiving a message from the topicservice

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | the topic listened to that has raised the handler   |
`topicMessage` | [*TopicMessage*](../classes/datas_topicmessage.topicmessage.md) | the message received from the topic    |

**Returns:** *void*

Defined in: packages/topic/src/interfaces/TopicClient.ts:8
