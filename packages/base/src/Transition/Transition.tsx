import { TransitionProps, TransitionStatus } from "./TransitionProps";
import {
  createEffect,
  createMemo,
  createSignal,
  mergeProps,
  on,
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

  let enteredTimeout: (() => void) | undefined;
  let exitedTimeout: (() => void) | undefined;
  let inTimeout: ReturnType<typeof setTimeout> | undefined;
  let firstStatusChange = true;

  function onTransitionEnd(ms: number, cb: () => void) {
    const next = () => setTimeout(cb, ms);
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let stopped = false;
    const stop = () => {
      stopped = true;
      timeout && clearTimeout(timeout);
    };
    if (props.addEndListener) {
      props.addEndListener(() => {
        if (!stopped) timeout = next();
      });
    } else {
      timeout = next();
    }
    return stop;
  }

  const result = createMemo(
    on(
      () => [status()],
      () => {
        const v = status();
        const result = v !== "unmounted" ? props.children(v) : undefined;
        if (firstStatusChange) {
          firstStatusChange = false;
          return result;
        }
        if (v === "entering") {
          props.onEntering?.();
          if (exitedTimeout) {
            exitedTimeout();
            exitedTimeout = undefined;
          }
          enteredTimeout = onTransitionEnd(timeouts().enter, () =>
            setStatus("entered")
          );
        } else if (v === "entered") {
          props.onEntered?.();
        } else if (v === "exiting") {
          props.onExiting?.();
          if (enteredTimeout) {
            enteredTimeout();
            enteredTimeout = undefined;
          }
          exitedTimeout = onTransitionEnd(timeouts().exit, () =>
            setStatus("exited")
          );
        } else if (v === "exited") {
          props.onExited?.();
        }
        return result;
      }
    )
  );

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
    enteredTimeout?.();
    exitedTimeout?.();
    inTimeout && clearTimeout(inTimeout);
  });

  return result();
}

export default Transition;
