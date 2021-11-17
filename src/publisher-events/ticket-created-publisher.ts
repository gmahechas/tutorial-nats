import { Publisher } from '../publisher-events/base-publisher';
import { Subjects } from '../events/subjects';
import { TicketCreatedEvent } from '../events/ticket-created-event';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject: Subjects.TicketCreated = Subjects.TicketCreated;
}