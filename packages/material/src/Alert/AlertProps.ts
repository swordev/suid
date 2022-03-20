import { Theme } from "..";
import { PaperTypeMap } from "../Paper";
import { AlertClasses } from "./alertClasses";
import { SxProps } from "@suid/system";
import {
  ElementType,
  OverridableStringUnion,
  OverrideProps,
} from "@suid/types";
import { JSXElement } from "solid-js";

export type AlertColor = "success" | "info" | "warning" | "error";

export interface AlertPropsVariantOverrides {}

export interface AlertPropsColorOverrides {}

export interface AlertTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiAlert";
  defaultPropNames: "closeText" | "severity" | "role" | "variant";
  selfProps: {
    /**
     * The action to display. It renders after the message, at the end of the alert.
     */
    action?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<AlertClasses>;
    /**
     * Override the default label for the *close popup* icon button.
     *
     * For localization purposes, you can use the provided [translations](/guides/localization/).
     * @default 'Close'
     */
    closeText?: string;
    /**
     * The main color for the alert. Unless provided, the value is taken from the `severity` prop.
     */
    color?: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
    /**
     * The severity of the alert. This defines the color and icon used.
     * @default 'success'
     */
    severity?: AlertColor;
    /**
     * Override the icon displayed before the children.
     * Unless provided, the icon is mapped to the value of the `severity` prop.
     * Set to `false` to remove the `icon`.
     */
    icon?: JSXElement;
    /**
     * The ARIA role attribute of the element.
     * @default 'alert'
     */
    role?: string;
    /**
     * The component maps the `severity` prop to a range of different icons,
     * for instance success to `<SuccessOutlined>`.
     * If you wish to change this mapping, you can provide your own.
     * Alternatively, you can use the `icon` prop to override the icon displayed.
     */
    iconMapping?: Partial<Record<AlertColor, () => JSXElement>>;
    /**
     * Callback fired when the component requests to be closed.
     * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
     * @param {Event} event The event source of the callback.
     */
    onClose?: (event: Event) => void;
    /**
     * The variant to use.
     * @default 'standard'
     */
    variant?: OverridableStringUnion<
      "standard" | "filled" | "outlined",
      AlertPropsVariantOverrides
    >;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P &
    Omit<PaperTypeMap["selfProps"], "variant"> &
    AlertTypeMap["selfProps"];
  defaultComponent: D;
}
export type AlertProps<
  D extends ElementType = AlertTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<AlertTypeMap<P, D>, D>;

export default AlertProps;
