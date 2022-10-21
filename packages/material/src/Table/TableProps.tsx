import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { TableClasses } from "./tableClasses";
import { SxProps } from "@suid/system";
import { OverridableStringUnion } from "@suid/types";
import * as ST from "@suid/types";
import * as JSX from "solid-js";

export interface TablePropsSizeOverrides {}

export type TableTypeMap<P = {}, D extends ST.ElementType = "table"> = {
  name: "MuiTable";
  defaultPropNames: "padding" | "size" | "stickyHeader";
  selfProps: {
    /**
     * The content of the table, normally `TableHead` and `TableBody`.
     */
    children?: JSX.JSXElement;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<TableClasses>;

    /**
     * Allows TableCells to inherit padding of the Table.
     * @default 'normal'
     */
    padding?: "normal" | "checkbox" | "none";

    /**
     * Allows TableCells to inherit size of the Table.
     * @default 'medium'
     */
    size?: OverridableStringUnion<"small" | "medium", TablePropsSizeOverrides>;

    /**
     * Set the header sticky.
     *
     * ⚠️ It doesn't work with IE11.
     * @default false
     */
    stickyHeader?: boolean;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & TableTypeMap["selfProps"];
  defaultComponent: D;
};

export type TableProps<
  D extends ST.ElementType = TableTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<TableTypeMap<P, D>, D>;

export default TableProps;
