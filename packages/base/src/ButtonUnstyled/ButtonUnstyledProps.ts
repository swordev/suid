import UseButtonProps from "./UseButtonProps";
import { ElementType, OverrideProps } from "@suid/types";
import { JSX, JSXElement } from "solid-js";

export interface ButtonUnstyledActions {
  focusVisible(): void;
}

export interface ButtonUnstyledComponentsPropsOverrides {}

export interface ButtonUnstyledOwnProps extends Omit<UseButtonProps, "ref"> {
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  // action?: React.Ref<ButtonUnstyledActions>;
  children?: JSXElement;
  class?: string;
  componentsProps?: {
    root?: JSX.IntrinsicElements["button"] &
      ButtonUnstyledComponentsPropsOverrides;
  };
}

type ButtonUnstyledProps<
  D extends ElementType = ButtonUnstyledTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<ButtonUnstyledTypeMap<P, D>, D> & {
  /**
   * The component used for the Root slot.
   * Either a string to use a HTML element or a component.
   * This is equivalent to `components.Root`. If both are provided, the `component` is used.
   */
  component?: D;
};

export interface ButtonUnstyledTypeMap<
  P = {},
  D extends ElementType = "button"
> {
  props: P & ButtonUnstyledOwnProps;
  defaultComponent: D;
}

export default ButtonUnstyledProps;
