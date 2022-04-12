import { Guid } from "guid-typescript";
import { Call } from "./call";
import { Command } from "./command";
import { ReplyAddress } from "./reply-address";

export interface Request {
  id: Guid;
}
export class Request extends Command implements Call {
  ReplyAddress: ReplyAddress;

  constructor(replyAddress: ReplyAddress) {
    super(Guid.create());
    this.ReplyAddress = replyAddress;
  }
}
