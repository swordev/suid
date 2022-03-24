import { ToggleButtonGroupProps } from ".";
import { createContext } from "solid-js";

interface ToggleButtonGroupContext
  extends Readonly<
    Pick<
      ToggleButtonGroupProps,
      | "className"
      | "onChange"
      | "size"
      | "fullWidth"
      | "color"
      | "disabled"
      | "value"
    >
  > {}

/**
 * @ignore - internal component.
 */
const ToggleButtonGroupContext = createContext<ToggleButtonGroupContext>({});

export default ToggleButtonGroupContext;
