import { RefProp } from "@suid/system/createRef";
import { ChangeEvent } from "@suid/types";
import { createContext } from "solid-js";

export interface FormControlLabelState {
  checked?: boolean;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
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
