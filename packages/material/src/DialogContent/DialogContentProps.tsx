import { Theme } from "..";
import { DialogContentClasses } from "./dialogContentClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export type DialogContentTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiDialogContent";
  defaultPropNames: "dividers";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<DialogContentClasses>;

    /**
     * Display the top and bottom dividers.
     * @default false
     */
    dividers?: boolean;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & DialogContentTypeMap["selfProps"] & ST.PropsOf<"div">;
  defaultComponent: D;
};

export type DialogContentProps<
  D extends ST.ElementType = DialogContentTypeMap["defaultComponent"],
  P = {},
> = ST.OverrideProps<DialogContentTypeMap<P, D>, D>;

export default DialogContentProps;
