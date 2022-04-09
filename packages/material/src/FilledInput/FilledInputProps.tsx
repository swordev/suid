import { InputBaseProps } from "../InputBase";
import { FilledInputClasses } from "./filledInputClasses";
import SxProps from "@suid/system/sxProps";
import { ElementType } from "@suid/types";

export interface FilledInputTypeMap<P = {}, D extends ElementType = "input"> {
  name: "MuiFilledInput";
  defaultPropNames: "hiddenLabel";
  selfProps: {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<FilledInputClasses>;
    /**
     * If `true`, the label is hidden.
     * This is used to increase density for a `FilledInput`.
     * Be sure to add `aria-label` to the `input` element.
     * @default false
     */
    hiddenLabel?: boolean;
    /**
     * If `true`, the input will not have an underline.
     */
    disableUnderline?: boolean;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps;
  };
  props: P & InputBaseProps & FilledInputTypeMap["selfProps"];
  defaultComponent: D;
}

export type FilledInputProps = FilledInputTypeMap["props"];

export default FilledInputProps;
