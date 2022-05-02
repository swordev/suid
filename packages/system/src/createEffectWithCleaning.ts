import { createEffect, onCleanup } from "solid-js";

function createEffectWithCleaning(effect: () => () => void) {
  let lastCleanup: (() => void) | undefined;
  onCleanup(() => lastCleanup?.());
  createEffect<(() => void) | undefined>((prevCleanup) => {
    if (prevCleanup) {
      lastCleanup = undefined;
      prevCleanup?.();
    }
    return (lastCleanup = effect());
  });
}

export default createEffectWithCleaning;
