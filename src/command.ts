import { Guid } from "guid-typescript";

export interface Command extends Request {}

export class Command implements Command {
  Id: Guid;

  constructor(id: Guid) {
    this.Id = id;
  }
}
