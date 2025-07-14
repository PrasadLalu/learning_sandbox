import kafka from './config/kafka';

const consumer = kafka.consumer({ groupId: 'node-kafka-data-2' });

async function runConsumer() {
    try {
        await consumer.connect();
        console.log('✅ Consumer-2 connected');

        await consumer.subscribe({ topic: 'test-topic-data', fromBeginning: true });
        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log({
                    topic,
                    partition,
                    value: message.value?.toString(),
                });
            },
        });
    } catch (error) {
        console.error('Consumer error:', error);
    }
}

runConsumer();
