import { Theme } from "..";
import { FormGroupClasses } from "./formGroupClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverrideProps } from "@suid/types";
import { JSXElement } from "solid-js";

export interface FormGroupTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiFormGroup";
  defaultPropNames: "row";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<FormGroupClasses>;
    /**
     * Display group of elements in a compact row.
     * @default false
     */
    row?: boolean;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & FormGroupTypeMap["selfProps"];
  defaultComponent: D;
}

export type FormGroupProps<
  D extends ElementType = FormGroupTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<FormGroupTypeMap<P, D>, D>;

export default FormGroupProps;
