import { onCleanup, onMount } from "solid-js";

function onMountWithCleaning(effect: () => () => void) {
  let lastCleanup: (() => void) | undefined;
  onCleanup(() => lastCleanup?.());
  onMount(() => {
    lastCleanup = effect();
  });
}

export default onMountWithCleaning;
