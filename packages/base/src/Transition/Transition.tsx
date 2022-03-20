import { TransitionProps, TransitionStatus } from "./TransitionProps";
import {
  createEffect,
  createMemo,
  createSignal,
  mergeProps,
  onCleanup,
  untrack,
} from "solid-js";

export const transitionSelfPropNames: (keyof TransitionProps)[] = [
  "in",
  "mountOnEnter",
  "unmountOnExit",
  "timeout",
  "addEndListener",
  "onEnter",
  "onEntering",
  "onEntered",
  "onExit",
  "onExiting",
  "onExited",
  "children",
  "ref",
];

export function resolveTransitionTimeout(timeout: TransitionProps["timeout"]) {
  if (typeof timeout === "number") {
    return {
      exit: timeout,
      enter: timeout,
      appear: timeout,
    };
  } else {
    return {
      exit: timeout?.exit || 0,
      enter: timeout?.enter || 0,
      appear: timeout?.appear ?? timeout?.enter ?? 0,
    };
  }
}

export function Transition(inProps: TransitionProps) {
  const props = mergeProps(
    {
      in: false,
      mountOnEnter: false,
      unmountOnExit: false,
      appear: false,
      enter: true,
      exit: true,
    } as Partial<TransitionProps>,
    inProps
  );

  const timeouts = createMemo(() => resolveTransitionTimeout(props.timeout));

  let initialStatus: TransitionStatus | "unmounted";

  if (props.in) {
    if (props.appear) {
      initialStatus = "exited";
    } else {
      initialStatus = "entered";
    }
  } else {
    if (props.unmountOnExit || props.mountOnEnter) {
      initialStatus = "unmounted";
    } else {
      initialStatus = "exited";
    }
  }

  const [status, setStatus] = createSignal<TransitionStatus | "unmounted">(
    initialStatus
  );

  let enteredTimeout: ReturnType<typeof setTimeout> | undefined;
  let exitedTimeout: ReturnType<typeof setTimeout> | undefined;
  let inTimeout: ReturnType<typeof setTimeout> | undefined;
  let firstStatusChange = true;

  const result = createMemo(() => {
    const v = status();
    const result = v !== "unmounted" ? props.children(v) : undefined;
    if (firstStatusChange) {
      firstStatusChange = false;
      return result;
    }
    if (v === "entering") {
      untrack(() => props.onEntering?.());
      exitedTimeout && clearTimeout(exitedTimeout);
      enteredTimeout = setTimeout(
        () => setStatus("entered"),
        untrack(() => timeouts().enter)
      );
    } else if (v === "entered") {
      untrack(() => props.onEntered?.());
    } else if (v === "exiting") {
      untrack(() => props.onExiting?.());
      enteredTimeout && clearTimeout(enteredTimeout);
      exitedTimeout = setTimeout(
        () => setStatus("exited"),
        untrack(() => timeouts().exit)
      );
    } else if (v === "exited") {
      untrack(() => props.onExited?.());
    }
    return result;
  });

  createEffect((firstTime) => {
    if (props.in) {
      untrack(() => props.onEnter?.());
      setStatus("entering");
    } else {
      if (!firstTime) {
        untrack(() => props.onExit?.());
        setStatus("exiting");
      }
    }
    return false;
  }, true);

  onCleanup(() => {
    enteredTimeout && clearTimeout(enteredTimeout);
    exitedTimeout && clearTimeout(exitedTimeout);
    inTimeout && clearTimeout(inTimeout);
  });

  return result();
}

export default Transition;
