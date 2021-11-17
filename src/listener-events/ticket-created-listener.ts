import { Message } from 'node-nats-streaming';
import { Listener } from '../listener-events/base-listener';
import { Subjects } from '../events/subjects';
import { TicketCreatedEvent } from '../events/ticket-created-event';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = 'payments-service';

  onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    console.log('Event data!:', data);
    msg.ack();
  }
}