import { TypographyProps } from "../Typography";
import { Theme } from "../styles";
import { FormControlLabelClasses } from "./formControlLabelClasses";
import { SxProps } from "@suid/system";
import { RefProp } from "@suid/system/createRef";
import { ChangeEvent, ElementType, OverrideProps } from "@suid/types";
import { JSXElement } from "solid-js";

export interface FormControlLabelTypeMap<
  P = {},
  D extends ElementType = "label"
> {
  name: "MuiFormControlLabel";
  defaultPropNames: "componentsProps" | "labelPlacement";
  selfProps: {
    /**
     * If `true`, the component appears selected.
     */
    checked?: boolean;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<FormControlLabelClasses>;
    /**
     * The props used for each slot inside.
     * @default {}
     */
    componentsProps?: {
      /**
       * Props applied to the Typography wrapper of the passed label.
       * This is unused if disableTpography is true.
       * @default {}
       */
      typography?: TypographyProps;
    };
    /**
     * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
     */
    control: JSXElement;
    /**
     * If `true`, the control is disabled.
     */
    disabled?: boolean;
    /**
     * If `true`, the label is rendered as it is passed without an additional typography node.
     */
    disableTypography?: boolean;
    /**
     * Pass a ref to the `input` element.
     */
    inputRef?: RefProp;
    /**
     * A text or an element to be used in an enclosing label element.
     */
    label: string | number | JSXElement;
    /**
     * The position of the label.
     * @default 'end'
     */
    labelPlacement?: "end" | "start" | "top" | "bottom";
    name?: string;
    /**
     * Callback fired when the state is changed.
     *
     * @param {ChangeEvent<HTMLElement>} event The event source of the callback.
     * You can pull out the new checked state by accessing `event.target.checked` (boolean).
     */
    onChange?: (event: ChangeEvent<HTMLElement>, checked: boolean) => void;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The value of the component.
     */
    value?: unknown;
  };
  props: P & FormControlLabelTypeMap["selfProps"];
  defaultComponent: D;
}

export type FormControlLabelProps<
  D extends ElementType = FormControlLabelTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<FormControlLabelTypeMap<P, D>, D>;

export default FormControlLabelProps;
