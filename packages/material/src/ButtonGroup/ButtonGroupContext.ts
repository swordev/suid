import { ButtonGroupProps } from ".";
import { createContext } from "solid-js";

interface IButtonGroupContext {
  class?: string;
  color?: ButtonGroupProps["color"];
  disabled?: boolean;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  fullWidth?: boolean;
  size?: ButtonGroupProps["size"];
  variant?: ButtonGroupProps["variant"];
}

/**
 * @ignore - internal component.
 */
const ButtonGroupContext = createContext<IButtonGroupContext>({});

export default ButtonGroupContext;
