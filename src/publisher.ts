import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './publisher-events/ticket-created-publisher';

console.clear();

const stan = nats.connect('ticketing', 'abc', {
  url: 'http://10.1.0.229:4222'
});

stan.on('connect', async () => {
  console.log('Publisher connected to NATS')
  const publisher = new TicketCreatedPublisher(stan);
  await publisher.publish({
    id: '123',
    title: 'concert',
    price: 20
  });
});