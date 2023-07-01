import { createEffect } from "solid-js";

// TODO: `useLayoutEffect`
const useEnhancedEffect =
  typeof window !== "undefined" ? createEffect : createEffect;

export default useEnhancedEffect;
