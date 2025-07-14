import kafka from './config/kafka';

const consumer = kafka.consumer({ groupId: 'node-kafka-multiple-consumers-3' });

const runConsumer = async () => {
    try {
        await consumer.connect();
        console.log('✅ Consumer-3 connected');

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
