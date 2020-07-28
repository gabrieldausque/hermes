[@hermes/topicservice](../README.md) › [Globals](../globals.md) › [TopicMessage](topicmessage.md)

# Class: TopicMessage

Represents a message with a content and metadata describing the context of the current message

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
* [publishedOnServer](topicmessage.md#publishedonserver)
* [senderId](topicmessage.md#senderid)

### Methods

* [clone](topicmessage.md#clone)
* [deserialize](topicmessage.md#static-deserialize)

## Constructors

###  constructor

\+ **new TopicMessage**(`content`: any, `senderId`: string): *[TopicMessage](topicmessage.md)*

Defined in datas/TopicMessage.ts:29

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

• **createdAt**: *number*

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

###  publishedOnServer

• **publishedOnServer**: *string*

Defined in datas/TopicMessage.ts:29

Id of the topicService where the message has been published on the first time

___

###  senderId

• **senderId**: *string*

Defined in datas/TopicMessage.ts:16

the id of the [ITopicClient](../interfaces/itopicclient.md) that has send the message

## Methods

###  clone

▸ **clone**(): *[TopicMessage](topicmessage.md)*

Defined in datas/TopicMessage.ts:45

Clone the current message. Beware ! Methods and function of the content are not clone !

**Returns:** *[TopicMessage](topicmessage.md)*

___

### `Static` deserialize

▸ **deserialize**(`topicMessage`: [TopicMessage](topicmessage.md)): *[TopicMessage](topicmessage.md)*

Defined in datas/TopicMessage.ts:54

**Parameters:**

Name | Type |
------ | ------ |
`topicMessage` | [TopicMessage](topicmessage.md) |

**Returns:** *[TopicMessage](topicmessage.md)*
