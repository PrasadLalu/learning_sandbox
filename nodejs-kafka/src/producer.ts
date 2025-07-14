import kafka from './config/kafka';

const producer = kafka.producer();

async function runProducer() {
    try {
        await producer.connect();
        console.log('Producer connected');

        await producer.send({
            topic: 'test-topic',
            messages: [{ value: 'Hello from producer!' }],
        });
        console.log('Message sent');
    } catch (error) {
        console.error('Producer error:', error);
    } finally {
        await producer.disconnect();
        console.log('Producer disconnected');
    }
}

runProducer();
