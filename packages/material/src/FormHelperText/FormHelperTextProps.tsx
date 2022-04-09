import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { FormHelperTextClasses } from "./formHelperTextClasses";
import { SxProps } from "@suid/system";
import { ElementType } from "@suid/types";
import { JSXElement } from "solid-js";

export interface FormHelperTextTypeMap<P = {}, D extends ElementType = "p"> {
  name: "MuiFormHelperText";
  selfProps: {
    /**
     * The content of the component.
     *
     * If `' '` is provided, the component reserves one line height for displaying a future message.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<FormHelperTextClasses>;
    /**
     * If `true`, the helper text should be displayed in a disabled state.
     */
    disabled?: boolean;
    /**
     * If `true`, helper text should be displayed in an error state.
     */
    error?: boolean;
    /**
     * If `true`, the helper text should use filled classes key.
     */
    filled?: boolean;
    /**
     * If `true`, the helper text should use focused classes key.
     */
    focused?: boolean;
    /**
     * If `dense`, will adjust vertical spacing. This is normally obtained via context from
     * FormControl.
     */
    margin?: "dense";
    /**
     * If `true`, the helper text should use required classes key.
     */
    required?: boolean;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The variant to use.
     */
    variant?: "standard" | "outlined" | "filled";
  };
  props: P & FormHelperTextTypeMap["selfProps"];
  defaultComponent: D;
}

export type FormHelperTextProps<
  D extends ElementType = FormHelperTextTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<FormHelperTextTypeMap<P, D>, D>;

export default FormHelperTextProps;
