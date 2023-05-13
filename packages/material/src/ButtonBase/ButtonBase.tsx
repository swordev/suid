import { useTheme } from "../styles";
import styled from "../styles/styled";
import { ButtonBaseTypeMap } from "./ButtonBaseProps";
import TouchRipple from "./TouchRipple";
import { TouchRippleActions } from "./TouchRippleProps";
import buttonBaseClasses, {
  getButtonBaseUtilityClass,
} from "./buttonBaseClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import createRef from "@suid/system/createRef";
import { InPropsOf, EventParam, PropsOf } from "@suid/types";
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
  splitProps,
} from "solid-js";

type OwnerState = Pick<InPropsOf<ButtonBaseTypeMap>, "disabled"> & {
  focusVisible: boolean;
};

const $ = createComponentFactory<ButtonBaseTypeMap, OwnerState>()({
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
  autoCallUseClasses: false,
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
})<OwnerState>({
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
const ButtonBase = $.defineComponent(function ButtonBase(inProps) {
  const theme = useTheme();
  const props = mergeProps(
    {
      component: "button",
      LinkComponent: "a",
      tabIndex: 0,
    },
    theme.components?.[$.name]?.defaultProps,
    inProps
  ) as PropsOf<ButtonBaseTypeMap>;
  const button = createRef<HTMLButtonElement>(inProps);
  const ripple = createRef<TouchRippleActions>(() => props.touchRippleRef);
  const focus = useIsFocusVisible();
  let keydown = false;
  const [focusVisible, setFocusVisible] = createSignal(false);
  const [mountedState, setMountedState] = createSignal(false);
  const [, otherProps] = splitProps(props, [
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
  ]);
  const ownerState = {
    get disabled() {
      return props.disabled || false;
    },
    get focusVisible() {
      return focusVisible();
    },
  };
  const classes = $.useClasses(ownerState);

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
    skipRippleAction: boolean | undefined = props.disableTouchRipple
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

  const handleMouseDown = useRippleHandler("start", props.onMouseDown);
  const handleContextMenu = useRippleHandler("stop", props.onContextMenu);
  const handleDragLeave = useRippleHandler("stop", props.onDragLeave);
  const handleMouseUp = useRippleHandler("stop", props.onMouseUp);
  const handleMouseLeave = useRippleHandler("stop", (event) => {
    if (focusVisible()) {
      event.preventDefault();
    }
    if (typeof props.onMouseLeave === "function") {
      props.onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler("start", props.onTouchStart);
  const handleTouchEnd = useRippleHandler("stop", props.onTouchEnd);
  const handleTouchMove = useRippleHandler("stop", props.onTouchMove);

  const handleBlur = useRippleHandler(
    "stop",
    (event) => {
      focus.onBlur(event);
      if (focus.isFocusVisibleRef.current === false) {
        setFocusVisible(false);
      }
      if (typeof props.onFocusOut === "function") {
        props.onFocusOut(event);
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

    if (typeof props.onFocusIn === "function") {
      props.onFocusIn(event);
    }
  };

  const isNonNativeButton = () => {
    return (
      props.component &&
      props.component !== "button" &&
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

    if (typeof props.onKeyDown === "function") {
      props.onKeyDown(event);
    }

    // Keyboard accessibility for non interactive elements
    if (
      event.target === event.currentTarget &&
      isNonNativeButton() &&
      event.key === "Enter" &&
      !props.disabled
    ) {
      event.preventDefault();
      if (typeof props.onClick === "function") {
        props.onClick(event as any);
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
    if (typeof props.onKeyUp === "function") {
      props.onKeyUp(event);
    }

    // Keyboard accessibility for non interactive elements
    if (
      typeof props.onClick === "function" &&
      event.target === event.currentTarget &&
      isNonNativeButton() &&
      event.key === " " &&
      !event.defaultPrevented
    ) {
      props.onClick(event as any);
    }
  };

  const ComponentProp = createMemo(() => {
    let result = props.component;
    if (result === "button" && ((props as any).href || (props as any).to)) {
      result = props.LinkComponent;
    }
    return result;
  });

  const isButtonComponent = () => ComponentProp() === "button";

  const enableTouchRipple = () =>
    mountedState() && !props.disableRipple && !props.disabled;
  // [non-reactive root]
  const touchRipple = props.TouchRippleProps;

  return (
    <ButtonBaseRoot
      type={
        isButtonComponent()
          ? props.type === undefined
            ? "button"
            : props.type
          : undefined
      }
      disabled={isButtonComponent() ? props.disabled : undefined}
      role={
        !isButtonComponent() && (props as any).href && !(props as any).to
          ? "button"
          : undefined
      }
      aria-disabled={!isButtonComponent() && props.disabled ? true : undefined}
      {...otherProps}
      class={clsx(classes.root, props.class)}
      ownerState={ownerState}
      onFocusOut={handleBlur}
      onClick={props.onClick}
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
      as={ComponentProp()}
    >
      {props.children}
      <Show when={enableTouchRipple()}>
        <TouchRipple
          ref={(ref) => {
            ripple(ref);
            if (process.env.NODE_ENV !== "production") {
              if (!ref) {
                console.error(
                  [
                    "MUI: The `component` prop provided to ButtonBase is invalid.",
                    "Please make sure the children prop is rendered in this custom component.",
                  ].join("\n")
                );
              }
            }
          }}
          center={props.centerRipple}
          {...touchRipple}
        />
      </Show>
    </ButtonBaseRoot>
  );
});

export default ButtonBase;
