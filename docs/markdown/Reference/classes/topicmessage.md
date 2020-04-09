[@hermes/topicservice](../README.md) › [Globals](../globals.md) › [TopicMessage](topicmessage.md)

# Class: TopicMessage

Represents a message with a content and metadatas describing the context of the current message

## Hierarchy

* **TopicMessage**

## Index

### Constructors

* [constructor](topicmessage.md#constructor)

### Properties

* [content](topicmessage.md#content)
* [createdAt](topicmessage.md#createdat)
* [fromTopic](topicmessage.md#fromtopic)
* [listenedTopic](topicmessage.md#listenedtopic)
* [senderId](topicmessage.md#senderid)

### Methods

* [clone](topicmessage.md#clone)

## Constructors

###  constructor

\+ **new TopicMessage**(`content`: any, `senderId`: string): *[TopicMessage](topicmessage.md)*

Defined in datas/TopicMessage.ts:24

Create a new message

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`content` | any | the content that will be send across the [TopicService](topicservice.md) |
`senderId` | string | the [ITopicClient](../interfaces/itopicclient.md) id  |

**Returns:** *[TopicMessage](topicmessage.md)*

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

the id of the [ITopicClient](../interfaces/itopicclient.md) that has send the message

## Methods

###  clone

▸ **clone**(): *[TopicMessage](topicmessage.md)*

Defined in datas/TopicMessage.ts:40

Clone the current message

**Returns:** *[TopicMessage](topicmessage.md)*
