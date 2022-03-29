import styled from "../styles/styled";
import { ButtonBaseTypeMap } from "./ButtonBaseProps";
import TouchRipple from "./TouchRipple";
import { TouchRippleActions } from "./TouchRippleProps";
import buttonBaseClasses, {
  getButtonBaseUtilityClass,
} from "./buttonBaseClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import createRef from "@suid/system/createRef";
import { ComponentInProps, EventParam } from "@suid/types";
import useIsFocusVisible from "@suid/utils/useIsFocusVisible";
import clsx from "clsx";
import {
  createEffect,
  createMemo,
  createSignal,
  JSX,
  mergeProps,
  onMount,
  Show,
} from "solid-js";

const $ = createComponentFactory<
  ButtonBaseTypeMap,
  ComponentInProps<ButtonBaseTypeMap> & {
    focusVisible: boolean;
  }
>()({
  name: "MuiButtonBase",
  selfPropNames: [
    "LinkComponent",
    "TouchRippleProps",
    "action",
    "centerRipple",
    "children",
    "classes",
    "disableRipple",
    "disableRipple",
    "disableTouchRipple",
    "disabled",
    "focusRipple",
    "focusVisibleClassName",
    "onFocusVisible",
    "tabIndex",
    "touchRippleRef",
  ],
  propDefaults: ({ set }) =>
    set({
      component: "button",
      disabled: false,
      disableRipple: false,
      disableTouchRipple: false,
      focusRipple: false,
      LinkComponent: "a",
      centerRipple: false,
      tabIndex: 0,
    }),
  utilityClass: getButtonBaseUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.disabled && "disabled",
      ownerState.focusVisible && "focusVisible",
    ],
  }),
});

export const ButtonBaseRoot = styled("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  ["WebkitTapHighlightColor" as any]: "transparent",
  backgroundColor: "transparent", // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0, // Remove the margin in Safari
  borderRadius: 0,
  padding: 0, // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  ["MozAppearance" as any]: "none", // Reset
  ["WebkitAppearance" as any]: "none", // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none", // Remove Firefox dotted outline.
  },
  [`&.${buttonBaseClasses.disabled}`]: {
    pointerEvents: "none", // Disable link interactions
    cursor: "default",
  },
  "@media print": {
    colorAdjust: "exact",
  },
});

/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 *
 * Demos:
 *
 * - [Buttons](https://mui.com/components/buttons/)
 *
 * API:
 *
 * - [ButtonBase API](https://mui.com/api/button-base/)
 */
const ButtonBase = $.component(function ButtonBase({
  allProps,
  props,
  otherProps,
  classes,
}) {
  const button = createRef<HTMLButtonElement>(otherProps);
  const ripple = createRef<TouchRippleActions>(() => props.touchRippleRef);
  const focus = useIsFocusVisible();
  let keydown = false;
  const [focusVisible, setFocusVisible] = createSignal(false);
  const [mountedState, setMountedState] = createSignal(false);
  const ownerState = mergeProps(allProps, {
    focusVisible,
  });

  onMount(() => {
    setMountedState(true);
  });

  createEffect(() => {
    if (props.disabled && focusVisible()) {
      setFocusVisible(false);
    }
  });

  createEffect(() => {
    if (focusVisible() && props.focusRipple && !props.disableRipple) {
      ripple.ref.pulsate();
    }
  });

  function useRippleHandler(
    rippleAction: "start" | "stop",
    eventCallback: JSX.EventHandlerUnion<HTMLButtonElement, any> | undefined,
    skipRippleAction: boolean = props.disableTouchRipple
  ) {
    return (event: Event) => {
      if (typeof eventCallback === "function") {
        eventCallback(event);
      }

      const ignore = skipRippleAction;
      if (!ignore && ripple.ref) {
        ripple.ref[rippleAction](event);
      }

      return true;
    };
  }

  const handleMouseDown = useRippleHandler("start", otherProps.onMouseDown);
  const handleContextMenu = useRippleHandler("stop", otherProps.onContextMenu);
  const handleDragLeave = useRippleHandler("stop", otherProps.onDragLeave);
  const handleMouseUp = useRippleHandler("stop", otherProps.onMouseUp);
  const handleMouseLeave = useRippleHandler("stop", (event) => {
    if (focusVisible()) {
      event.preventDefault();
    }
    if (typeof otherProps.onMouseLeave === "function") {
      otherProps.onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler("start", otherProps.onTouchStart);
  const handleTouchEnd = useRippleHandler("stop", otherProps.onTouchEnd);
  const handleTouchMove = useRippleHandler("stop", otherProps.onTouchMove);

  const handleBlur = useRippleHandler(
    "stop",
    (event) => {
      focus.onBlur(event);
      if (focus.isFocusVisibleRef.current === false) {
        setFocusVisible(false);
      }
      if (typeof otherProps.onFocusOut === "function") {
        otherProps.onFocusOut(event);
      }
    },
    false
  );

  const handleFocus = (event: EventParam<HTMLButtonElement, FocusEvent>) => {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!button.ref) {
      button.ref = event.currentTarget;
    }

    focus.onFocus(event);
    if (focus.isFocusVisibleRef.current === true) {
      setFocusVisible(true);

      if (props.onFocusVisible) {
        props.onFocusVisible(event);
      }
    }

    if (typeof otherProps.onFocusIn === "function") {
      otherProps.onFocusIn(event);
    }
  };

  const isNonNativeButton = () => {
    return (
      otherProps.component &&
      otherProps.component !== "button" &&
      !(button.ref.tagName === "A" && button.ref.hasAttribute("href"))
    );
  };

  /**
   * IE11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
   */

  const handleKeyDown = (
    event: EventParam<HTMLButtonElement, KeyboardEvent>
  ) => {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (
      props.focusRipple &&
      !keydown &&
      focusVisible() &&
      ripple.ref &&
      event.key === " "
    ) {
      keydown = true;
      ripple.ref.stop(event, () => {
        ripple.ref.start(event);
      });
    }

    if (
      event.target === event.currentTarget &&
      isNonNativeButton() &&
      event.key === " "
    ) {
      event.preventDefault();
    }

    if (typeof otherProps.onKeyDown === "function") {
      otherProps.onKeyDown(event);
    }

    // Keyboard accessibility for non interactive elements
    if (
      event.target === event.currentTarget &&
      isNonNativeButton() &&
      event.key === "Enter" &&
      !props.disabled
    ) {
      event.preventDefault();
      if (typeof otherProps.onClick === "function") {
        otherProps.onClick(event as any);
      }
    }
  };

  const handleKeyUp = (event: EventParam<HTMLButtonElement, KeyboardEvent>) => {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (
      props.focusRipple &&
      event.key === " " &&
      ripple.ref &&
      focusVisible() &&
      !event.defaultPrevented
    ) {
      keydown = false;
      ripple.ref.stop(event, () => {
        ripple.ref.pulsate(event);
      });
    }
    if (typeof otherProps.onKeyUp === "function") {
      otherProps.onKeyUp(event);
    }

    // Keyboard accessibility for non interactive elements
    if (
      typeof otherProps.onClick === "function" &&
      event.target === event.currentTarget &&
      isNonNativeButton() &&
      event.key === " " &&
      !event.defaultPrevented
    ) {
      otherProps.onClick(event as any);
    }
  };

  const ComponentProp = createMemo(() => {
    let result = otherProps.component;
    if (
      result === "button" &&
      ((otherProps as any).href || (otherProps as any).to)
    ) {
      result = props.LinkComponent;
    }
    return result;
  });

  const buttonProps = createMemo(() => {
    const buttonProps: JSX.IntrinsicElements["button"] = {};
    if (ComponentProp() === "button") {
      buttonProps.type =
        otherProps.type === undefined ? "button" : otherProps.type;
      buttonProps.disabled = props.disabled;
    } else {
      if (!(otherProps as any).href && !(otherProps as any).to) {
        buttonProps.role = "button";
      }
      if (props.disabled) {
        buttonProps["aria-disabled"] = props.disabled;
      }
    }
    return buttonProps;
  });

  const enableTouchRipple = () =>
    mountedState() && !props.disableRipple && !props.disabled;

  if (process.env.NODE_ENV !== "production") {
    createEffect(() => {
      if (enableTouchRipple() && !ripple.ref) {
        console.error(
          [
            "MUI: The `component` prop provided to ButtonBase is invalid.",
            "Please make sure the children prop is rendered in this custom component.",
          ].join("\n")
        );
      }
    });
  }

  return (
    <ButtonBaseRoot
      {...buttonProps}
      {...otherProps}
      className={clsx(classes.root, otherProps.className)}
      ownerState={ownerState}
      onFocusOut={handleBlur}
      onClick={otherProps.onClick}
      onContextMenu={handleContextMenu}
      onFocusIn={handleFocus}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onDragLeave={handleDragLeave}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      ref={button}
      tabIndex={props.disabled ? -1 : props.tabIndex}
      type={otherProps.type}
      component={ComponentProp() as "button"}
    >
      {props.children}
      <Show when={enableTouchRipple()}>
        <TouchRipple
          ref={ripple}
          center={props.centerRipple}
          {...(props.TouchRippleProps || {})}
        />
      </Show>
    </ButtonBaseRoot>
  );
});

export default ButtonBase;
