import { OverrideProps, OverridableComponent } from "../OverridableComponent";
import { Theme } from "../styles";
import { TouchRippleActions, TouchRippleProps } from "./TouchRippleProps";
import { ButtonBaseClasses } from "./buttonBaseClasses";
import { RefProp } from "@suid/system/createRef";
import SxProps from "@suid/system/sxProps";
import { ElementType, OverridableTypeMap } from "@suid/types";
import { JSX, JSXElement } from "solid-js";

export interface ButtonBaseTypeMap<P = {}, D extends ElementType = "button"> {
  name: "MuiButtonBase";
  defaultPropNames:
    | "centerRipple"
    | "disabled"
    | "disableRipple"
    | "disableTouchRipple"
    | "focusRipple"
    | "LinkComponent"
    | "tabIndex";
  selfProps: {
    /**
     * A ref for imperative actions.
     * It currently only supports `focusVisible()` action.
     */
    action?: RefProp<ButtonBaseActions>;
    /**
     * If `true`, the ripples are centered.
     * They won't start at the cursor interaction position.
     * @default false
     */
    centerRipple?: boolean;
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ButtonBaseClasses>;
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, the ripple effect is disabled.
     *
     * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
     * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
     * @default false
     */
    disableRipple?: boolean;
    /**
     * If `true`, the touch ripple effect is disabled.
     * @default false
     */
    disableTouchRipple?: boolean;
    /**
     * If `true`, the base button will have a keyboard focus ripple.
     * @default false
     */
    focusRipple?: boolean;
    /**
     * This prop can help identify which element has keyboard focus.
     * The class name will be applied when the element gains the focus through keyboard interaction.
     * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
     * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
     * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
     * if needed.
     */
    focusVisibleClassName?: string;
    /**
     * The component used to render a link when the `href` prop is provided.
     * @default 'a'
     */
    LinkComponent?: ElementType;
    /**
     * Callback fired when the component is focused with a keyboard.
     * We trigger a `onFocus` callback too.
     */
    onFocusVisible?: JSX.EventHandler<any, any>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * @default 0
     */
    tabIndex?: number | string;
    /**
     * Props applied to the `TouchRipple` element.
     */
    TouchRippleProps?: Partial<TouchRippleProps>;
    /**
     * A ref that points to the `TouchRipple` element.
     */
    touchRippleRef?: RefProp<TouchRippleActions>;
  };
  props: P & ButtonBaseTypeMap["selfProps"];
  defaultComponent: D;
}

/**
 * utility to create component types that inherit props from ButtonBase.
 * This component has an additional overload if the `href` prop is set which
 * can make extension quite tricky
 */
export interface ExtendButtonBaseTypeMap<M extends OverridableTypeMap> {
  props: M["props"] & Omit<ButtonBaseTypeMap["props"], "classes">;
  defaultComponent: M["defaultComponent"];
}

export type ExtendButtonBase<M extends OverridableTypeMap> = ((
  props: { href: string } & OverrideProps<ExtendButtonBaseTypeMap<M>, "a">
) => JSX.Element) &
  OverridableComponent<ExtendButtonBaseTypeMap<M>>;

export type ButtonBaseProps<
  D extends ElementType = ButtonBaseTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<ButtonBaseTypeMap<P, D>, D>;

export interface ButtonBaseActions {
  focusVisible(): void;
}

export default ButtonBaseProps;
