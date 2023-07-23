
/*  ‼️ Please note that there may be multiple instances 
of duplicated errors in the example code provided. 
This code is intended to serve as a reference for 
you to copy and paste individual functions into 
your own code. By doing so, you can adapt and utilize 
the functions as needed within your project. */

/* Run `npm install @novu/node` to add novu as a dependency 
(make sure you initialize the project by running `npm init`) */

// <-----------------Importing Novu Into Your APP----------------->

import { Novu } from '@novu/node';

const novu = new Novu('NOVU_API_KEY');

// <-----------------Create a subscriber----------------->

const subscriberId = '7789'; // Replace this with a unique user ID that matches your database.
await novu.subscribers.identify(subscriberId, {
    email: 'abc@gmail.com', // optional
    firstName: 'John', // optional
    lastName: 'Doe', // optional
    phone: '', // optional
    avatar: '', // optional
    locale: '', // optional
    data: { customKey1: 'customVal1', customKey2: 'customVal2' }, // optional
});

// <-----------------Update subscriber detail----------------->

const subscriberId = '7789'; // Replace this with a unique user ID that matches your database.
await novu.subscribers.update(subscriberId, {
    // new email
    email: 'validemail@gmail.com', // optional
    // new phone
    phone: '+19874567832', // optional
});

// <-----------------Trigger A Notification----------------->

const notificationTemplateId = 'first-email';

novu.trigger(notificationTemplateId, {
    to: {
        subscriberId: '7789'
    },
    payload: {}
});


// <-----------------Create a topic----------------->

const result = await novu.topics.create({
    key: 'unique-topic-identifier',
    name: 'descriptive-topic-name',
});

// <-----------------Add subscribers to a topic----------------->

const topicKey = '<YOUR TOPIC KEY>';

const response = await novu.topics.addSubscribers(topicKey, {
    subscribers: ['subscriber-id-1', 'subscriber-id-2', ...],
});

// <-----------------Trigger notification to a topic----------------->


const topicKey = '<TOPIC_KEY>';
const notificationTemplateId = '<NOTIFICATION_TEMPLATE_ID>';

await novu.trigger(notificationTemplateId, {
    to: [{ type: 'Topic', topicKey: topicKey }],
    payload: {},
});



