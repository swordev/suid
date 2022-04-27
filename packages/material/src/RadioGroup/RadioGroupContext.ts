import RadioProps from "../Radio/RadioProps";
import { createContext } from "solid-js";

export interface RadioGroupContextValue {
  name: string | undefined;
  onChange: NonNullable<RadioProps["onChange"]>;
  value: any;
}

/**
 * @ignore - internal component.
 */
const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(
  undefined
);

export default RadioGroupContext;
