import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'node-kafka-app',
    brokers: ['localhost:9092'],
});

export default kafka;
