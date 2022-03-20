import { Theme } from "..";
import { PaperProps } from "../Paper";
import { OverrideProps } from "./../OverridableComponent";
import { CardClasses } from "./cardClasses";
import SxProps from "@suid/system/sxProps";
import { DistributiveOmit, ElementType } from "@suid/types";

export interface CardPropsColorOverrides {}

export interface CardTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiCard";
  defaultPropNames: "raised";
  selfProps: {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<CardClasses>;
    /**
     * If `true`, the card will use raised styling.
     * @default false
     */
    raised?: boolean;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & DistributiveOmit<PaperProps, "classes"> & CardTypeMap["selfProps"];
  defaultComponent: D;
}

export type CardProps<
  D extends ElementType = CardTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<CardTypeMap<P, D>, D>;

export default CardProps;
