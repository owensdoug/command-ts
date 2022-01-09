import { Context } from "./context";

export interface ContextFactory {
  create(): Context;
}

export class ContextFactory implements ContextFactory {
  create(): Context {
    return new Context();
  }
}
