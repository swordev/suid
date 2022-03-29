import { OverrideProps } from "../OverridableComponent";
import { SwitchBaseClasses } from "./switchBaseClasses";
import { ElementType, EventParam, Ref } from "@suid/types";
import { JSX, JSXElement } from "solid-js";

export interface SwitchBasePropsVariantOverrides {}

export interface SwitchBaseTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiSwitchBase";
  defaultPropNames: "disableFocusRipple" | "edge";
  selfProps: {
    autoFocus?: boolean;
    /**
     * If `true`, the component is checked.
     */
    checked?: boolean;
    checkedIcon: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<SwitchBaseClasses>;
    /**
     * The default checked state. Use when the component is not controlled.
     */
    defaultChecked?: boolean;
    disabled?: boolean;
    /**
     * If `true`, the ripple effect is disabled.
     */
    disableRipple?: boolean;
    /**
     * If `true`, the  keyboard focus ripple is disabled.
     * @default false
     */
    disableFocusRipple?: boolean;
    /**
     * If given, uses a negative margin to counteract the padding on one
     * side (this is often helpful for aligning the left or right
     * side of the icon with content above or below, without ruining the border
     * size and shape).
     * @default false
     */
    edge?: "start" | "end" | false;
    icon: JSXElement;
    /**
     * The id of the `input` element.
     */
    id?: string;
    /**
     * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
     */
    inputProps?: JSX.IntrinsicElements["input"];
    /**
     * Pass a ref to the `input` element.
     */
    inputRef?: Ref<HTMLInputElement>;
    /**
     * Name attribute of the `input` element.
     */
    name?: string;
    /**
     * Callback fired when the state is changed.
     *
     * @param {EventParam<HTMLInputElement, MouseEvent>} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value` (string).
     * You can pull out the new checked state by accessing `event.target.checked` (boolean).
     */
    onChange?: (
      event: EventParam<HTMLInputElement, MouseEvent>,
      checked: boolean
    ) => void;
    readOnly?: boolean;
    /**
     * If `true`, the `input` element is required.
     */
    required?: boolean;
    tabIndex?: number;
    type?: JSX.IntrinsicElements["input"]["type"];
    /**
     * The value of the component. The DOM API casts this to a string.
     */
    value?: unknown;
  };
  props: P & SwitchBaseTypeMap["selfProps"];
  defaultComponent: D;
}

export type SwitchBaseProps<
  D extends ElementType = SwitchBaseTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<SwitchBaseTypeMap<P, D>, D>;

export default SwitchBaseProps;
