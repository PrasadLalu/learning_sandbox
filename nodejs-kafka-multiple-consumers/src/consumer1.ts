import kafka from './config/kafka';

const consumer = kafka.consumer({ groupId: 'node-kafka-multiple-consumers-1' });

const runConsumer = async () => {
    try {
        await consumer.connect();
        console.log('✅ Consumer-1 connect');

        await consumer.subscribe({ topic: 'test-topic-multiple', fromBeginning: true });
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
        console.log('Consumer error: ', error);
    }
}

runConsumer();
