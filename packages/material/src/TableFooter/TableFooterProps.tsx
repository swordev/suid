import { Theme } from "../styles";
import { TableFooterClasses } from "./tableFooterClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export type TableFooterTypeMap<P = {}, D extends ST.ElementType = "tfoot"> = {
  name: "MuiTableFooter";
  selfProps: {
    /**
     * The content of the component, normally `TableRow`.
     */
    children?: JSXElement;

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
> = ST.OverrideProps<TableFooterTypeMap<P, D>, D>;

export default TableFooterProps;
