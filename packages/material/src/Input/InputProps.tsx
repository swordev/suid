import { Theme } from "..";
import { InputBaseProps } from "../InputBase";
import { InputClasses } from "./inputClasses";
import SxProps from "@suid/system/sxProps";
import { ElementType } from "@suid/types";

export interface InputTypeMap<P = {}, D extends ElementType = "input"> {
  name: "MuiInput";
  selfProps: {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<InputClasses>;
    /**
     * If `true`, the `input` will not have an underline.
     */
    disableUnderline?: boolean;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & InputBaseProps & InputTypeMap["selfProps"];
  defaultComponent: D;
}

export type InputProps = InputTypeMap["props"];

export default InputProps;
