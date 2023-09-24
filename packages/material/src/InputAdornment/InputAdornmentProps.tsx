import { Theme } from "..";
import { InputAdornmentClasses } from "./inputAdornmentClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export type InputAdornmentTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiInputAdornment";
  defaultPropNames: "disablePointerEvents" | "disableTypography";
  selfProps: {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<InputAdornmentClasses>;

    /**
     * The content of the component, normally an `IconButton` or string.
     */
    children?: JSXElement;

    /**
     * Disable pointer events on the root.
     * This allows for the content of the adornment to focus the `input` on click.
     * @default false
     */
    disablePointerEvents?: boolean;

    /**
     * If children is a string then disable wrapping in a Typography component.
     * @default false
     */
    disableTypography?: boolean;

    /**
     * The position this adornment should appear relative to the `Input`.
     */
    position: "start" | "end";

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;

    /**
     * The variant to use.
     * Note: If you are using the `TextField` component or the `FormControl` component
     * you do not have to set this manually.
     */
    variant?: "standard" | "outlined" | "filled";
  };
  props: P & InputAdornmentTypeMap["selfProps"];
  defaultComponent: D;
};

export type InputAdornmentProps<
  D extends ST.ElementType = InputAdornmentTypeMap["defaultComponent"],
  P = {},
> = ST.OverrideProps<InputAdornmentTypeMap<P, D>, D>;

export default InputAdornmentProps;
