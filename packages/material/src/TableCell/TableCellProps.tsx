import { Theme } from "../styles";
import { TableCellClasses } from "./tableCellClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import * as JSX from "solid-js";

export type TableCellBaseProps = ST.PropsOf<"th"> & ST.PropsOf<"td">;

export type SortDirection = "asc" | "desc" | false;
export type TableCellTypeMap<P = {}, D extends ST.ElementType = "th" | "td"> = {
  name: "MuiTableCell";
  defaultPropNames: "align";
  selfProps: {
    /**
     * Set the text-align on the table cell content.
     *
     * Monetary or generally number fields **should be right aligned** as that allows
     * you to add them up quickly in your head without having to worry about decimals.
     * @default 'inherit'
     */
    align?: "inherit" | "left" | "center" | "right" | "justify";

    /**
     * The content of the component.
     */
    children?: JSX.JSXElement;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<TableCellClasses>;

    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component?: ST.ElementType;

    /**
     * Sets the padding applied to the cell.
     * The prop defaults to the value (`'default'`) inherited from the parent Table component.
     */
    padding?: "normal" | "checkbox" | "none";

    /**
     * Set scope attribute.
     */
    scope?: TableCellBaseProps["scope"];

    /**
     * Specify the size of the cell.
     * The prop defaults to the value (`'medium'`) inherited from the parent Table component.
     */
    size?: "small" | "medium";

    /**
     * Set aria-sort direction.
     */
    sortDirection?: SortDirection;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;

    /**
     * Specify the cell type.
     * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
     */
    variant?: "head" | "body" | "footer";
  };
  props: P & TableCellTypeMap["selfProps"];
  defaultComponent: D;
};

export type TableCellProps<
  D extends ST.ElementType = TableCellTypeMap["defaultComponent"],
  P = {},
> = ST.OverrideProps<TableCellTypeMap<P, D>, D>;

export default TableCellProps;
