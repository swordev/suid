import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { FormLabelClasses } from "./formLabelClasses";
import { SxProps } from "@suid/system";
import { OverridableStringUnion, ElementType, PropsOf } from "@suid/types";
import { JSXElement } from "solid-js";

export interface FormLabelPropsColorOverrides {}

export interface FormLabelTypeMap<P = {}, D extends ElementType = "label"> {
  name: "MuiFormLabel";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<FormLabelClasses>;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: OverridableStringUnion<
      "primary" | "secondary" | "error" | "info" | "success" | "warning",
      FormLabelPropsColorOverrides
    >;
    /**
     * If `true`, the label should be displayed in a disabled state.
     */
    disabled?: boolean;
    /**
     * If `true`, the label is displayed in an error state.
     */
    error?: boolean;
    /**
     * If `true`, the label should use filled classes key.
     */
    filled?: boolean;
    /**
     * If `true`, the input of this label is focused (used by `FormGroup` components).
     */
    focused?: boolean;
    /**
     * If `true`, the label will indicate that the `input` is required.
     */
    required?: boolean;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & FormLabelTypeMap["selfProps"];
  defaultComponent: D;
}

export type FormLabelBaseProps = PropsOf<"label">;

export type FormLabelProps<
  D extends ElementType = FormLabelTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<FormLabelTypeMap<P, D>, D>;

export default FormLabelProps;
