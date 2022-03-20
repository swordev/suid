import { RefProp } from "@suid/system/createRef";
import { ElementType } from "@suid/types";
import { JSX } from "solid-js";

export interface UseButtonHandlers {
  onFocusVisible?: JSX.EventHandler<any, FocusEvent>;
  onBlur?: JSX.EventHandler<any, FocusEvent>;
  onFocus?: JSX.EventHandler<any, FocusEvent>;
  onMouseDown?: JSX.EventHandler<any, MouseEvent>;
  onMouseUp?: JSX.EventHandler<any, MouseEvent>;
  onMouseLeave?: JSX.EventHandler<any, MouseEvent>;
  onKeyDown?: JSX.EventHandler<any, KeyboardEvent>;
  onKeyUp?: JSX.EventHandler<any, KeyboardEvent>;
  onClick?: JSX.EventHandler<any, KeyboardEvent>;
}

export default interface UseButtonProps extends UseButtonHandlers {
  /**
   * The component used for the Root slot.
   * Either a string to use a HTML element or a component.
   * This is equivalent to `components.Root`. If both are provided, the `component` is used.
   * @default 'button'
   */
  component?: ElementType;
  /**
   * The components used for each slot inside the Button.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components?: {
    Root?: ElementType;
  };
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  href?: string;
  ref?: RefProp;
  tabIndex?: JSX.IntrinsicElements["button"]["tabIndex"];
  to?: string;
  /**
   * Type attribute applied when the `component` is `button`.
   * @default 'button'
   */
  type?: JSX.IntrinsicElements["button"]["type"];
}
