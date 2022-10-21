import { Theme } from "../styles";
import { CircularProgressClasses } from "./circularProgressClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverridableStringUnion } from "@suid/types";

export interface CircularProgressPropsColorOverrides {}

export interface CircularProgressTypeMap<
  P = {},
  D extends ElementType = "span"
> {
  name: "MuiCircularProgress";
  defaultPropNames:
    | "color"
    | "disableShrink"
    | "size"
    | "thickness"
    | "value"
    | "variant";
  selfProps: {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<CircularProgressClasses>;
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
      CircularProgressPropsColorOverrides
    >;
    /**
     * If `true`, the shrink animation is disabled.
     * This only works if variant is `indeterminate`.
     * @default false
     */
    disableShrink?: boolean;
    /**
     * The size of the component.
     * If using a number, the pixel unit is assumed.
     * If using a string, you need to provide the CSS unit, e.g '3rem'.
     * @default 40
     */
    size?: number | string;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The thickness of the circle.
     * @default 3.6
     */
    thickness?: number;
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value?: number;
    /**
     * The variant to use.
     * Use indeterminate when there is no progress value.
     * @default 'indeterminate'
     */
    variant?: "determinate" | "indeterminate";
  };
  props: P & CircularProgressTypeMap["selfProps"];
  defaultComponent: D;
}
