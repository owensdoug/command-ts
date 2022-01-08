import { Dictionary } from "typescript-collections";

export interface Context {
  bag: Dictionary<string, any>;
}

export class Context implements Context {
  private _bag: Dictionary<string, any>;

  constructor() {
    this._bag = new Dictionary<string, any>();
  }

  get Bag(): Dictionary<string, any> {
    return this._bag;
  }
}
