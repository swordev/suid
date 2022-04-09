import { InputBaseProps } from "../InputBase";
import { ElementType, OverrideProps } from "@suid/types";
import { JSXElement } from "solid-js";

export interface NotchedOutlineTypeMap<
  P = {},
  D extends ElementType = "fieldset"
> {
  name: "MuiNotchedOutline";
  selfProps: {
    disabled?: boolean;
    error?: boolean;
    focused?: boolean;
    label?: JSXElement;
    notched: boolean;
  };
  props: P & InputBaseProps & NotchedOutlineTypeMap["selfProps"];
  defaultComponent: D;
}

export type NotchedOutlineClassKey = keyof NonNullable<
  NotchedOutlineProps["classes"]
>;

export type NotchedOutlineProps<
  D extends ElementType = NotchedOutlineTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<NotchedOutlineTypeMap<P, D>, D>;

export default NotchedOutlineProps;
