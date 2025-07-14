import kafka from './config/kafka';

const producer = kafka.producer();

const runProducer = async () => {
    try {
        await producer.connect();
        console.log('✅ Producer connected');

        await producer.send({
            topic: 'test-topic-multiple',
            messages: [{ value: `Hello From Producer! - #${new Date().getTime()}` }],
        });
        console.log('📨 Message sent');
    } catch (error) {
        console.log('Producer error', error);
    } finally {
        await producer.disconnect();
        console.log('❌ Producer disconnected');
    }
}

runProducer();
