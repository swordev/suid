import { createRenderEffect, onCleanup } from "solid-js";

function createRenderEffectWithCleaning(effect: () => () => void) {
  let lastCleanup: (() => void) | undefined;
  onCleanup(() => lastCleanup?.());
  createRenderEffect<(() => void) | undefined>((prevCleanup) => {
    if (prevCleanup) {
      lastCleanup = undefined;
      prevCleanup?.();
    }
    return (lastCleanup = effect());
  });
}

export default createRenderEffectWithCleaning;
