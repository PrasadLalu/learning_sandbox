import kafka from './config/kafka';
import { faker } from '@faker-js/faker';

const producer = kafka.producer();

async function runProducer() {
    try {
        await producer.connect();
        console.log('✅ Producer connected');

        const batchSize = 10;
        const totalMessages = 1000;

        for (let i = 0; i < totalMessages; i += batchSize) { 
            const messages = Array.from({ length: batchSize }).map(() => {
                const user = {
                    name: faker.person.fullName(),
                    email: faker.internet.email(),
                    address: faker.location.streetAddress(),
                    city: faker.location.city(),
                    country: faker.location.country(),
                };
                return { value: JSON.stringify(user) }
            });

            await producer.send({
                topic: 'test-topic-data',
                messages
            });
            console.log(`📨 Sent batch ${i / batchSize + 1}`);
        }
        console.log('✅ Message sent');
    } catch (error) {
        console.error('Producer error:', error);
    } finally {
        await producer.disconnect();
        console.log('❌ Producer disconnected');
    }
}

runProducer();
