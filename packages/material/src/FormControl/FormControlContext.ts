import { FormControlProps } from ".";
import { createContext } from "solid-js";

type ContextFromPropsKey =
  | "disabled"
  | "error"
  | "fullWidth"
  | "hiddenLabel"
  | "margin"
  | "required"
  | "variant"
  | "color"
  | "size";

export interface FormControlState
  extends Pick<FormControlProps, ContextFromPropsKey> {
  adornedStart: boolean;
  setAdornedStart: (value: boolean) => void;
  registerEffect?: () => void;
  filled: boolean;
  focused: boolean;
  onBlur: () => void;
  onEmpty: () => void;
  onFilled: () => void;
  onFocus: () => void;
}

/**
 * @ignore - internal component.
 */
const FormControlContext = createContext<FormControlState>();

export default FormControlContext;
