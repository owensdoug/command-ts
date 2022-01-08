import { Context } from "./context";

export interface Factory {
  create(): Context;
}

export class Factory implements Factory {
  create(): Context {
    return new Context();
  }
}
