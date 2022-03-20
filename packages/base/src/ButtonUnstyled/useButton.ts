import UseButtonProps, { UseButtonHandlers } from "./UseButtonProps";
import { EventParam } from "@suid/types";
import useIsFocusVisible from "@suid/utils/useIsFocusVisible";
import { createEffect, createSignal, mergeProps, splitProps } from "solid-js";
import { createMutable } from "solid-js/store";

export default function useButton(props: UseButtonProps) {
  const buttonRef: {
    current?: HTMLButtonElement | HTMLAnchorElement | HTMLElement;
  } = {};

  const [active, setActive] = createSignal(false);
  const isFocusVisible = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = createSignal(false);
  const [hostElementName, setHostElementName] = createSignal("");
  const buttonProps = createMutable({}) as Record<string, unknown>;

  createEffect(() => {
    if (hostElementName() === "BUTTON") {
      buttonProps.type = props.type ?? "button";
      buttonProps.disabled = props.disabled;
    } else if (hostElementName() !== "") {
      if (!props.href && !props.to) {
        buttonProps.role = "button";
      }
      if (props.disabled) {
        buttonProps["aria-disabled"] = props.disabled;
      }
    }
  });

  createEffect(() => {
    if (props.disabled && focusVisible()) {
      setFocusVisible(false);
    }
  });

  createEffect(() => {
    isFocusVisible.isFocusVisibleRef.current = focusVisible();
  });

  const createHandleMouseLeave =
    (otherHandlers: UseButtonHandlers) =>
    (event: EventParam<any, MouseEvent>) => {
      if (focusVisible()) {
        event.preventDefault();
      }

      otherHandlers.onMouseLeave?.(event);
    };

  const createHandleBlur =
    (otherHandlers: UseButtonHandlers) =>
    (event: EventParam<any, FocusEvent>) => {
      isFocusVisible.onBlur(event);

      if (isFocusVisible.isFocusVisibleRef.current === false) {
        setFocusVisible(false);
      }

      otherHandlers.onBlur?.(event);
    };

  const createHandleFocus =
    (otherHandlers: UseButtonHandlers) =>
    (event: EventParam<HTMLButtonElement, FocusEvent>) => {
      // Fix for https://github.com/facebook/react/issues/7769
      if (!buttonRef.current) {
        buttonRef.current = event.currentTarget;
      }

      isFocusVisible.onFocus(event);
      if (isFocusVisible.isFocusVisibleRef.current === true) {
        setFocusVisible(true);
        otherHandlers.onFocusVisible?.(event);
      }

      otherHandlers.onFocus?.(event);
    };

  const elementType = () =>
    props.component ?? props.components?.Root ?? "button";

  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return (
      elementType() !== "button" &&
      !(button?.tagName === "A" && (button as HTMLAnchorElement)?.href)
    );
  };

  const createHandleMouseDown =
    (otherHandlers: UseButtonHandlers) =>
    (event: EventParam<HTMLButtonElement, MouseEvent>) => {
      if (event.target === event.currentTarget && !props.disabled) {
        setActive(true);
      }

      otherHandlers.onMouseDown?.(event);
    };

  const createHandleMouseUp =
    (otherHandlers: UseButtonHandlers) =>
    (event: EventParam<HTMLButtonElement, MouseEvent>) => {
      if (event.target === event.currentTarget) {
        setActive(false);
      }

      otherHandlers.onMouseUp?.(event);
    };

  const createHandleKeyDown =
    (otherHandlers: UseButtonHandlers) =>
    (event: EventParam<any, KeyboardEvent>) => {
      otherHandlers.onKeyDown?.(event);

      if (event.defaultPrevented) {
        return;
      }

      if (
        event.target === event.currentTarget &&
        isNonNativeButton() &&
        event.key === " "
      ) {
        event.preventDefault();
      }

      if (
        event.target === event.currentTarget &&
        event.key === " " &&
        !props.disabled
      ) {
        setActive(true);
      }

      // Keyboard accessibility for non interactive elements
      if (
        event.target === event.currentTarget &&
        isNonNativeButton() &&
        event.key === "Enter" &&
        !props.disabled
      ) {
        otherHandlers.onClick?.(event);
        event.preventDefault();
      }
    };

  const createHandleKeyUp =
    (otherHandlers: UseButtonHandlers) =>
    (event: EventParam<any, KeyboardEvent>) => {
      // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
      // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0

      if (event.target === event.currentTarget) {
        setActive(false);
      }

      otherHandlers.onKeyUp?.(event);

      // Keyboard accessibility for non interactive elements
      if (
        event.target === event.currentTarget &&
        isNonNativeButton() &&
        event.key === " " &&
        !event.defaultPrevented
      ) {
        otherHandlers.onClick?.(event);
      }
    };

  const updateRef = (instance: HTMLElement | null) => {
    setHostElementName(instance?.tagName ?? "");
  };

  const getRootProps = (otherHandlers: UseButtonHandlers = {}) => {
    const [propsHandlers] = splitProps(props, [
      "onBlur",
      "onClick",
      "onFocus",
      "onKeyDown",
      "onKeyUp",
      "onMouseDown",
      "onMouseLeave",
      "onMouseUp",
      "onFocusVisible",
    ] as (keyof UseButtonHandlers)[]);

    const allHandlers = mergeProps(
      () => propsHandlers,
      () => otherHandlers
    );

    const ownEventHandlers = {
      onBlur: createHandleBlur(allHandlers),
      onFocus: createHandleFocus(allHandlers),
      onKeyDown: createHandleKeyDown(allHandlers),
      onKeyUp: createHandleKeyUp(allHandlers),
      onMouseDown: createHandleMouseDown(allHandlers),
      onMouseLeave: createHandleMouseLeave(allHandlers),
      onMouseUp: createHandleMouseUp(allHandlers),
    };

    return mergeProps(
      () => ({
        tabIndex: props.disabled ? -1 : props.tabIndex,
        type: props.type,
      }),
      () => buttonProps,
      () => ownEventHandlers,
      () => ({ ref: updateRef })
    );
  };

  return {
    getRootProps,
    get focusVisible() {
      return focusVisible();
    },
    setFocusVisible,
    get disabled() {
      return props.disabled;
    },
    get active() {
      return active;
    },
  };
}
