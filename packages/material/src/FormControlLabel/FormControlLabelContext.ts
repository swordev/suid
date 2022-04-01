import { RefProp } from "@suid/system/createRef";
import { EventParam } from "@suid/types";
import { createContext } from "solid-js";

export interface FormControlLabelState {
  checked?: boolean;
  name?: string;
  onChange?: (
    event: EventParam<HTMLInputElement, MouseEvent>,
    checked: boolean
  ) => void;
  value?: any;
  inputRef?: RefProp;
  disabled?: boolean;
  setDisabled: (state: boolean) => void;
}

/**
 * @ignore - internal component.
 */
const FormControlLabelContext = createContext<FormControlLabelState>();

export default FormControlLabelContext;
