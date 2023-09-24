import { FormLabelProps } from "../FormLabel";
import { Theme } from "../styles";
import { InputLabelClasses } from "./inputLabelClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverrideProps } from "@suid/types";
import { JSXElement } from "solid-js";

export interface InputLabelTypeMap<P = {}, D extends ElementType = "button"> {
  name: "MuiInputLabel";
  defaultPropNames: "disableAnimation";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<InputLabelClasses>;
    color?: FormLabelProps["color"];
    /**
     * If `true`, the transition animation is disabled.
     * @default false
     */
    disableAnimation?: boolean;
    /**
     * If `true`, the component is disabled.
     */
    disabled?: boolean;
    /**
     * If `true`, the label is displayed in an error state.
     */
    error?: boolean;
    /**
     * If `true`, the `input` of this label is focused.
     */
    focused?: boolean;
    /**
     * If `dense`, will adjust vertical spacing. This is normally obtained via context from
     * FormControl.
     */
    margin?: "dense";
    /**
     * if `true`, the label will indicate that the `input` is required.
     */
    required?: boolean;
    /**
     * If `true`, the label is shrunk.
     */
    shrink?: boolean;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The variant to use.
     */
    variant?: "standard" | "outlined" | "filled";
  };
  props: P & FormLabelProps & InputLabelTypeMap["selfProps"];
  defaultComponent: D;
}

export type InputLabelProps<
  D extends ElementType = InputLabelTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<InputLabelTypeMap<P, D>, D>;

export default InputLabelProps;
