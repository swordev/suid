import { FadeProps } from "../Fade";
import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { TransitionProps } from "../transitions/transition";
import { BackdropUnstyledTypeMap } from "@suid/base/BackdropUnstyled";
import SxProps from "@suid/system/sxProps";
import { ElementType } from "@suid/types";

export type BackdropTypeMap<D extends ElementType = "span", P = {}> = {
  name: "MuiBackdrop";
  defaultPropNames: "components" | "componentProps" | "invisible";
  selfProps: {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: BackdropUnstyledTypeMap["props"]["classes"];
    /**
     * If `true`, the component is shown.
     */
    open: boolean;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    transitionDuration?: TransitionProps["timeout"];
  };
  props: P &
    Partial<Omit<FadeProps, "children">> &
    BackdropTypeMap["selfProps"] &
    BackdropUnstyledTypeMap["props"];
  defaultComponent: D;
};

export type BackdropClassKey = keyof NonNullable<
  BackdropTypeMap["props"]["classes"]
>;

export type BackdropClasses = Record<BackdropClassKey, string>;

export type BackdropProps<
  D extends ElementType = BackdropTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<BackdropTypeMap<D, P>, D>;

export default BackdropProps;
