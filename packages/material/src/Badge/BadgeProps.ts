import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { BadgeUnstyledTypeMap } from "@suid/base/BadgeUnstyled";
import { SxProps } from "@suid/system";
import { ElementType, OverridableStringUnion } from "@suid/types";

export interface BadgePropsVariantOverrides {}

export interface BadgePropsColorOverrides {}

export type BadgeTypeMap<D extends ElementType = "span", P = {}> = {
  name: "MuiBadge";
  defaultPropNames:
    | "color"
    | "overlap"
    | "variant"
    | BadgeUnstyledTypeMap["defaultPropNames"];
  selfProps: {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: BadgeUnstyledTypeMap["props"]["classes"] & {
      /** Styles applied to the badge `span` element if `color="primary"`. */
      colorPrimary?: string;
      /** Styles applied to the badge `span` element if `color="secondary"`. */
      colorSecondary?: string;
      /** Styles applied to the badge `span` element if `color="error"`. */
      colorError?: string;
      /** Styles applied to the badge `span` element if `color="info"`. */
      colorInfo?: string;
      /** Styles applied to the badge `span` element if `color="success"`. */
      colorSuccess?: string;
      /** Styles applied to the badge `span` element if `color="warning"`. */
      colorWarning?: string;
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'right' }} overlap="rectangular"`. */
      anchorOriginTopRightRectangular?: string;
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'right' }} overlap="rectangular"`. */
      anchorOriginBottomRightRectangular?: string;
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'left' }} overlap="rectangular"`. */
      anchorOriginTopLeftRectangular?: string;
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'left' }} overlap="rectangular"`. */
      anchorOriginBottomLeftRectangular?: string;
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'right' }} overlap="circular"`. */
      anchorOriginTopRightCircular?: string;
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'right' }} overlap="circular"`. */
      anchorOriginBottomRightCircular?: string;
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'left' }} overlap="circular"`. */
      anchorOriginTopLeftCircular?: string;
      /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'left' }} overlap="circular"`. */
      anchorOriginBottomLeftCircular?: string;
      /** Class name applied to the badge `span` element if `overlap="rectangular"`. */
      overlapRectangular?: string;
      /** Class name applied to the badge `span` element if `overlap="circular"`. */
      overlapCircular?: string;
    };
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'default'
     */
    color?: OverridableStringUnion<
      | "primary"
      | "secondary"
      | "default"
      | "error"
      | "info"
      | "success"
      | "warning",
      BadgePropsColorOverrides
    >;
    /**
     * Wrapped shape the badge should overlap.
     * @default 'rectangular'
     */
    overlap?: "rectangular" | "circular";
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The variant to use.
     * @default 'standard'
     */
    variant?: OverridableStringUnion<
      "standard" | "dot",
      BadgePropsVariantOverrides
    >;
  };
  props: P & BadgeTypeMap["selfProps"] & BadgeUnstyledTypeMap["selfProps"];
  defaultComponent: D;
};

export type BadgeClassKey = keyof NonNullable<BadgeTypeMap["props"]["classes"]>;

export type BadgeProps<
  D extends ElementType = BadgeTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<BadgeTypeMap<D, P>, D>;

export default BadgeProps;
