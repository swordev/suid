import { RadioGroupContextValue } from "./RadioGroupContext";
import RadioGroupContext from "./RadioGroupContext";
import { useContext } from "solid-js";

export interface RadioGroupState extends RadioGroupContextValue {}

export default function useRadioGroup(): RadioGroupState | undefined {
  return useContext(RadioGroupContext);
}
