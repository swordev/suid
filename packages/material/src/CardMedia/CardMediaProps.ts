import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { CardMediaClasses } from "./cardMediaClasses";
import { SxProps } from "@suid/system";
import { ElementType } from "@suid/types";
import { JSXElement } from "solid-js";

export interface CardMediaTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiCardMedia";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<CardMediaClasses>;
    /**
     * Image to be displayed as a background image.
     * Either `image` or `src` prop must be specified.
     * Note that caller must specify height otherwise the image will not be visible.
     */
    image?: string;
    /**
     * An alias for `image` property.
     * Available only with media components.
     * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
     */
    src?: string;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & CardMediaTypeMap["selfProps"];
  defaultComponent: D;
}

export type CardMediaProps<
  D extends ElementType = "div",
  P = {}
> = OverrideProps<CardMediaTypeMap<P, D>, D>;

export default CardMediaProps;
