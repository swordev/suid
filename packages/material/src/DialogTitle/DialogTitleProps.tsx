import { Theme } from "..";
import { DialogTitleClasses } from "./dialogTitleClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export type DialogTitleTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiDialogTitle";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<DialogTitleClasses>;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & DialogTitleTypeMap["selfProps"] & ST.PropsOf<"h1">;
  defaultComponent: D;
};

export type DialogTitleProps<
  D extends ST.ElementType = DialogTitleTypeMap["defaultComponent"],
  P = {},
> = ST.OverrideProps<DialogTitleTypeMap<P, D>, D>;

export default DialogTitleProps;
