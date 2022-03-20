import { Theme } from "..";
import { ButtonBaseTypeMap } from "../ButtonBase";
import { OverrideProps } from "../OverridableComponent";
import { CardActionAreaClasses } from "./cardActionAreaClasses";
import { SxProps } from "@suid/system";
import { ElementType } from "@suid/types";

export type CardActionAreaTypeMap<P = {}, D extends ElementType = "button"> = {
  name: "MuiCardActionArea";
  selfProps: {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<CardActionAreaClasses>;
    focusVisibleClassName?: string;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P &
    Omit<ButtonBaseTypeMap["props"], "classes"> &
    CardActionAreaTypeMap["selfProps"];
  defaultComponent: D;
};

export type CardActionAreaProps<
  D extends ElementType = ButtonBaseTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<CardActionAreaTypeMap<P, D>, D>;

export default CardActionAreaProps;
