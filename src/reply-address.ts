import { Guid } from "guid-typescript";

export class ReplyAddress {
  Topic: string;

  CorrelationId: Guid;

  constructor(topic: string, correlationId: Guid) {
    this.Topic = topic;
    this.CorrelationId = correlationId;
  }
}
