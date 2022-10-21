import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { TableHeadClasses } from "./tableHeadClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import * as JSX from "solid-js";

export type TableHeadTypeMap<P = {}, D extends ST.ElementType = "thead"> = {
  name: "MuiTableHead";
  selfProps: {
    /**
     * The content of the component, normally `TableRow`.
     */
    children?: JSX.JSXElement;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<TableHeadClasses>;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & TableHeadTypeMap["selfProps"];
  defaultComponent: D;
};

export type TableHeadProps<
  D extends ST.ElementType = TableHeadTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<TableHeadTypeMap<P, D>, D>;

export default TableHeadProps;
