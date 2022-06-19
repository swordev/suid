import { Theme } from "..";
import { OverrideProps } from "../OverridableComponent";
import { TableFooterClasses } from "./tableFooterClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import * as JSX from "solid-js";

export type TableFooterTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiTableFooter";
  selfProps: {
    /**
     * The content of the component, normally `Table`.
     */
    children?: JSX.JSXElement;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<TableFooterClasses>;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & TableFooterTypeMap["selfProps"];
  defaultComponent: D;
};

export type TableFooterProps<
  D extends ST.ElementType = TableFooterTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<TableFooterTypeMap<P, D>, D>;

export default TableFooterProps;
