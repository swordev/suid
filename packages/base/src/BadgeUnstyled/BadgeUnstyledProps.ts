import { BadgeUnstyledClasses } from "./badgeUnstyledClasses";
import { ElementType, OverrideProps } from "@suid/types";
import { JSX } from "solid-js";

export interface BadgeOrigin {
  vertical: "top" | "bottom";
  horizontal: "left" | "right";
}

export interface BadgeUnstyledComponentsPropsOverrides {}

export interface BadgeUnstyledTypeMap<P = {}, D extends ElementType = "span"> {
  name: "MuiBadgeUnstyled";
  defaultPropNames:
    | "anchorOrigin"
    | "components"
    | "componentsProps"
    | "invisible"
    | "max"
    | "showZero"
    | "variant";
  selfProps: {
    /**
     * The anchor of the badge.
     * @default {
     *   vertical: 'top',
     *   horizontal: 'right',
     * }
     */
    anchorOrigin?: BadgeOrigin;
    /**
     * The components used for each slot inside the Badge.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components?: {
      Root?: ElementType;
      Badge?: ElementType;
    };
    /**
     * The props used for each slot inside the Badge.
     * @default {}
     */
    componentsProps?: {
      root?: JSX.HTMLAttributes<HTMLSpanElement> &
        BadgeUnstyledComponentsPropsOverrides;
      badge?: JSX.HTMLAttributes<HTMLSpanElement> &
        BadgeUnstyledComponentsPropsOverrides;
    };
    /**
     * The content rendered within the badge.
     */
    badgeContent?: JSX.Element;
    /**
     * The badge will be added relative to this node.
     */
    children?: JSX.Element;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<BadgeUnstyledClasses>;
    /**
     * If `true`, the badge is invisible.
     * @default false
     */
    invisible?: boolean;
    /**
     * Max count to show.
     * @default 99
     */
    max?: number;
    /**
     * Controls whether the badge is hidden when `badgeContent` is zero.
     * @default false
     */
    showZero?: boolean;
    /**
     * The variant to use.
     * @default 'standard'
     */
    variant?: string;
  };
  props: P & BadgeUnstyledTypeMap["selfProps"];
  defaultComponent: D;
}

type BadgeUnstyledProps<
  D extends ElementType = BadgeUnstyledTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<BadgeUnstyledTypeMap<P, D>, D>;

export default BadgeUnstyledProps;
