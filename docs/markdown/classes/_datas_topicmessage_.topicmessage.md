[theloneblacksheep-topicservice](../README.md) › [Globals](../globals.md) › ["datas/TopicMessage"](../modules/_datas_topicmessage_.md) › [TopicMessage](_datas_topicmessage_.topicmessage.md)

# Class: TopicMessage

Represents a message with a content and metadatas describing the context of the current message

## Hierarchy

* **TopicMessage**

## Index

### Constructors

* [constructor](_datas_topicmessage_.topicmessage.md#constructor)

### Properties

* [content](_datas_topicmessage_.topicmessage.md#content)
* [createdAt](_datas_topicmessage_.topicmessage.md#createdat)
* [fromTopic](_datas_topicmessage_.topicmessage.md#fromtopic)
* [listenedTopic](_datas_topicmessage_.topicmessage.md#listenedtopic)
* [senderId](_datas_topicmessage_.topicmessage.md#senderid)

## Constructors

###  constructor

\+ **new TopicMessage**(`content`: any, `senderId`: string): *[TopicMessage](_datas_topicmessage_.topicmessage.md)*

Defined in datas/TopicMessage.ts:24

Create a new message

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`content` | any | the content that will be send across the [TopicService](_topicservice_.topicservice.md) |
`senderId` | string | the [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md) id  |

**Returns:** *[TopicMessage](_datas_topicmessage_.topicmessage.md)*

## Properties

###  content

• **content**: *any*

Defined in datas/TopicMessage.ts:8

The content of the message

___

###  createdAt

• **createdAt**: *Number*

Defined in datas/TopicMessage.ts:12

The Date when the message has been created

___

###  fromTopic

• **fromTopic**: *string*

Defined in datas/TopicMessage.ts:20

the topic on which the message has been send

___

###  listenedTopic

• **listenedTopic**: *string*

Defined in datas/TopicMessage.ts:24

the topic that is listened to that has been tested to raise the handler

___

###  senderId

• **senderId**: *string*

Defined in datas/TopicMessage.ts:16

the id of the [ITopicClient](../interfaces/_interfaces_itopicclient_.itopicclient.md) that has send the message
