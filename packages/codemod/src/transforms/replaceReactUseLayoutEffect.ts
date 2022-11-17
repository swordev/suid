import replaceReactUseEffect from "./replaceReactUseEffect.js";
import { Identifier } from "ts-morph";

export type ReplaceReactUseLayoutEffectOptions = {
  removeDependencies?: boolean;
};

export default function replaceReactUseLayoutEffect(
  node: Identifier,
  options: ReplaceReactUseLayoutEffectOptions = {}
) {
  return replaceReactUseEffect(node, {
    ...options,
    functionName: "createRenderEffect",
  });
}
