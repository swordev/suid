import { Theme } from "../styles";
import { LinearProgressClasses } from "./linearProgressClasses";
import { SxProps } from "@suid/system";
import {
  ElementType,
  OverridableStringUnion,
  OverrideProps,
} from "@suid/types";

export interface LinearProgressPropsColorOverrides {}

export interface LinearProgressTypeMap<P = {}, D extends ElementType = "span"> {
  name: "MuiLinearProgress";
  defaultPropNames: "color" | "variant";
  selfProps: {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<LinearProgressClasses>;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'primary'
     */
    color?: OverridableStringUnion<
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning"
      | "inherit",
      LinearProgressPropsColorOverrides
    >;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value?: number;
    /**
     * The value for the buffer variant.
     * Value between 0 and 100.
     */
    valueBuffer?: number;
    /**
     * The variant to use.
     * Use indeterminate or query when there is no progress value.
     * @default 'indeterminate'
     */
    variant?: "determinate" | "indeterminate" | "buffer" | "query";
  };
  props: P & LinearProgressTypeMap["selfProps"];
  defaultComponent: D;
}

export type LinearProgressProps<
  D extends ElementType = LinearProgressTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<LinearProgressTypeMap<P, D>, D>;

export default LinearProgressProps;
