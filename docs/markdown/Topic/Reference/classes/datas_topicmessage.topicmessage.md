[@hermes/topicservice](../README.md) / [Exports](../modules.md) / [datas/TopicMessage](../modules/datas_topicmessage.md) / TopicMessage

# Class: TopicMessage

[datas/TopicMessage](../modules/datas_topicmessage.md).TopicMessage

## Table of contents

### Constructors

- [constructor](datas_topicmessage.topicmessage.md#constructor)

### Properties

- [content](datas_topicmessage.topicmessage.md#content)
- [createdAt](datas_topicmessage.topicmessage.md#createdat)
- [fromTopic](datas_topicmessage.topicmessage.md#fromtopic)
- [id](datas_topicmessage.topicmessage.md#id)
- [isForwardedByCluster](datas_topicmessage.topicmessage.md#isforwardedbycluster)
- [listenedTopic](datas_topicmessage.topicmessage.md#listenedtopic)
- [publishedOnServer](datas_topicmessage.topicmessage.md#publishedonserver)
- [senderId](datas_topicmessage.topicmessage.md#senderid)

### Methods

- [clone](datas_topicmessage.topicmessage.md#clone)
- [deserialize](datas_topicmessage.topicmessage.md#deserialize)

## Constructors

### constructor

\+ **new TopicMessage**(`content`: *any*, `senderId`: *string*): [*TopicMessage*](datas_topicmessage.topicmessage.md)

Create a new message

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`content` | *any* | the content that will be send across the [TopicService](../modules/topicservice.md)   |
`senderId` | *string* | the {@link ITopicClient} id    |

**Returns:** [*TopicMessage*](datas_topicmessage.topicmessage.md)

Defined in: packages/topic/src/datas/TopicMessage.ts:41

## Properties

### content

• **content**: *any*

The content of the message

Defined in: packages/topic/src/datas/TopicMessage.ts:10

___

### createdAt

• **createdAt**: *number*

The Date when the message has been created

Defined in: packages/topic/src/datas/TopicMessage.ts:14

___

### fromTopic

• **fromTopic**: *string*

the topic on which the message has been send

Defined in: packages/topic/src/datas/TopicMessage.ts:22

___

### id

• **id**: *string*

The id of the message

Defined in: packages/topic/src/datas/TopicMessage.ts:41

___

### isForwardedByCluster

• **isForwardedByCluster**: *boolean*

Indicate if this message is a forward from another node of a distant (TopicService implementation) or local cluster (NodeJS)

Defined in: packages/topic/src/datas/TopicMessage.ts:36

___

### listenedTopic

• `Optional` **listenedTopic**: *string*

the topic that is listened to that has been tested to raise the handler

Defined in: packages/topic/src/datas/TopicMessage.ts:26

___

### publishedOnServer

• `Optional` **publishedOnServer**: *string*

Id of the topicService where the message has been published on the first time

Defined in: packages/topic/src/datas/TopicMessage.ts:31

___

### senderId

• **senderId**: *string*

the id of the {@link ITopicClient} that has send the message

Defined in: packages/topic/src/datas/TopicMessage.ts:18

## Methods

### clone

▸ **clone**(): [*TopicMessage*](datas_topicmessage.topicmessage.md)

Clone the current message. Beware ! Methods and function of the content are not clone !

**Returns:** [*TopicMessage*](datas_topicmessage.topicmessage.md)

Defined in: packages/topic/src/datas/TopicMessage.ts:60

___

### deserialize

▸ `Static`**deserialize**(`topicMessage`: [*TopicMessage*](datas_topicmessage.topicmessage.md)): [*TopicMessage*](datas_topicmessage.topicmessage.md)

#### Parameters:

Name | Type |
:------ | :------ |
`topicMessage` | [*TopicMessage*](datas_topicmessage.topicmessage.md) |

**Returns:** [*TopicMessage*](datas_topicmessage.topicmessage.md)

Defined in: packages/topic/src/datas/TopicMessage.ts:71
