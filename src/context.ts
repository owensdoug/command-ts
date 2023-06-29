import { Dictionary } from "typescript-collections";
import { FeatureSwitch } from "./feature-switch";
import { PolicyRegistry } from "./policy-registry";

export interface Context {
  bag: Dictionary<string, any>;
  featureSwitch: FeatureSwitch | undefined;
  policies: PolicyRegistry | undefined;
}
