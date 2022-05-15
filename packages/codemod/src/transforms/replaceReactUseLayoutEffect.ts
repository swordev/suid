import replaceReactUseEffect from "./replaceReactUseEffect";
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
