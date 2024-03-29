import { Theme } from "../styles";
import { AvatarClasses } from "./avatarClasses";
import { SxProps } from "@suid/system";
import { OverridableStringUnion } from "@suid/types";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export interface AvatarPropsVariantOverrides {}
export type AvatarTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiAvatar";
  defaultPropNames: "variant";
  selfProps: {
    /**
     * Used in combination with `src` or `srcSet` to
     * provide an alt attribute for the rendered `img` element.
     */
    alt?: string;

    /**
     * Used to render icon or text elements inside the Avatar if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: JSXElement;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<AvatarClasses>;

    /**
     * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) applied to the `img` element if the component is used to display an image.
     * It can be used to listen for the loading error event.
     */
    imgProps?: ST.PropsOf<"img"> & {
      sx?: SxProps<Theme>;
    };

    /**
     * The `sizes` attribute for the `img` element.
     */
    sizes?: string;

    /**
     * The `src` attribute for the `img` element.
     */
    src?: string;

    /**
     * The `srcSet` attribute for the `img` element.
     * Use this attribute for responsive image display.
     */
    srcSet?: string;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;

    /**
     * The shape of the avatar.
     * @default 'circular'
     */
    variant?: OverridableStringUnion<
      "circular" | "rounded" | "square",
      AvatarPropsVariantOverrides
    >;
  };
  props: P & AvatarTypeMap["selfProps"];
  defaultComponent: D;
};

export type AvatarProps<
  D extends ST.ElementType = AvatarTypeMap["defaultComponent"],
  P = {},
> = ST.OverrideProps<AvatarTypeMap<P, D>, D>;

export default AvatarProps;
