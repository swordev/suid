import {
  ExtendSliderUnstyledTypeMap,
  SliderUnstyledTypeMap,
} from "@suid/base/SliderUnstyled";
import { SxProps } from "@suid/system";
import { OverridableStringUnion } from "@suid/types";
import * as ST from "@suid/types";
import { Theme } from "../styles";

export interface SliderPropsColorOverrides {}

export interface SliderPropsSizeOverrides {}

type SliderRootProps = NonNullable<
  SliderTypeMap["props"]["componentsProps"]
>["root"];
type SliderMarkProps = NonNullable<
  SliderTypeMap["props"]["componentsProps"]
>["mark"];
type SliderMarkLabelProps = NonNullable<
  SliderTypeMap["props"]["componentsProps"]
>["markLabel"];
type SliderRailProps = NonNullable<
  SliderTypeMap["props"]["componentsProps"]
>["rail"];
type SliderTrackProps = NonNullable<
  SliderTypeMap["props"]["componentsProps"]
>["track"];
type SliderThumbProps = NonNullable<
  SliderTypeMap["props"]["componentsProps"]
>["thumb"];
type SliderValueLabelProps = NonNullable<
  SliderTypeMap["props"]["componentsProps"]
>["valueLabel"];
type SliderInputProps = NonNullable<
  SliderTypeMap["props"]["componentsProps"]
>["input"];
export type SliderClassKey = keyof NonNullable<
  SliderTypeMap["props"]["classes"]
>;
export type SliderClasses = Record<SliderClassKey, string>;
export type SliderTypeMap<P = {}, D extends ST.ElementType = "span"> = {
  name: "MuiSlider";
  defaultPropNames: "color" | "size";
  selfProps: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'primary'
     */
    color?: OverridableStringUnion<
      "primary" | "secondary",
      SliderPropsColorOverrides
    >;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: SliderUnstyledTypeMap["props"]["classes"] & {
      /** Class name applied to the root element if `color="primary"`. */
      colorPrimary?: string;
      /** Class name applied to the root element if `color="secondary"`. */
      colorSecondary?: string;
      /** Class name applied to the root element if `size="small"`. */
      sizeSmall?: string;
      /** Class name applied to the thumb element if `color="primary"`. */
      thumbColorPrimary?: string;
      /** Class name applied to the thumb element if `color="secondary"`. */
      thumbColorSecondary?: string;
      /** Class name applied to the thumb element if `size="small"`. */
      thumbSizeSmall?: string;
    };

    /**
     * The size of the slider.
     * @default 'medium'
     */
    size?: OverridableStringUnion<"small" | "medium", SliderPropsSizeOverrides>;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
} & ExtendSliderUnstyledTypeMap<{
  props: P & SliderTypeMap["selfProps"];
  defaultComponent: D;
}>;

export type SliderProps<
  D extends ST.ElementType = SliderTypeMap["defaultComponent"],
  P = {}
> = ST.OverrideProps<SliderTypeMap<P, D>, D>;

export default SliderProps;
