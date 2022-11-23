import { TypographyTypeMap } from "../Typography";
import { Theme } from "../styles";
import { DialogContentTextClasses } from "./dialogContentTextClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";

export type DialogContentTextTypeMap<
  P = {},
  D extends ST.ElementType = TypographyTypeMap["defaultComponent"]
> = {
  name: "MuiDialogContentText";
  selfProps: {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<DialogContentTextClasses>;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & DialogContentTextTypeMap["selfProps"];
  defaultComponent: D;
};

export type DialogContentTextProps<
  D extends ST.ElementType = DialogContentTextTypeMap["defaultComponent"],
  P = {}
> = ST.OverrideProps<DialogContentTextTypeMap<P, D>, D>;

export default DialogContentTextProps;
