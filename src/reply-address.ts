import { Guid } from "guid-typescript";

export class ReplyAddress {
  topic: string;
  correlationId: Guid;

  constructor(topic: string, correlationId: Guid) {
    this.topic = topic;
    this.correlationId = correlationId;
  }
}
