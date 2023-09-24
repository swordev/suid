import { Theme } from "..";
import { DialogActionsClasses } from "./dialogActionsClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export type DialogActionsTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiDialogActions";
  defaultPropNames: "disableSpacing";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<DialogActionsClasses>;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;

    /**
     * If `true`, the actions do not have additional margin.
     * @default false
     */
    disableSpacing?: boolean;
  };
  props: P & DialogActionsTypeMap["selfProps"] & ST.PropsOf<"div">;
  defaultComponent: D;
};

export type DialogActionsProps<
  D extends ST.ElementType = DialogActionsTypeMap["defaultComponent"],
  P = {},
> = ST.OverrideProps<DialogActionsTypeMap<P, D>, D>;

export default DialogActionsProps;
