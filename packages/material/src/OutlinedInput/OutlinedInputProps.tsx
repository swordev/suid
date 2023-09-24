import { InputBaseProps } from "../InputBase";
import { OutlinedInputClasses } from "./outlinedInputClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverrideProps } from "@suid/types";
import { JSXElement } from "solid-js";

export interface OutlinedInputTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiOutlinedInput";
  selfProps: {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<OutlinedInputClasses>;
    /**
     * The label of the `input`. It is only used for layout. The actual labelling
     * is handled by `InputLabel`.
     */
    label?: JSXElement;
    /**
     * If `true`, the outline is notched to accommodate the label.
     */
    notched?: boolean;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps;
  };
  props: P & InputBaseProps & OutlinedInputTypeMap["selfProps"];
  defaultComponent: D;
}

export type OutlinedInputProps<
  D extends ElementType = OutlinedInputTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<OutlinedInputTypeMap<P, D>, D>;

export default OutlinedInputProps;
