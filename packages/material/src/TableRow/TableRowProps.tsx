import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { TableRowClasses } from "./tableRowClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import * as JSX from "solid-js";

export type TableRowTypeMap<P = {}, D extends ST.ElementType = "tr"> = {
  name: "MuiTableRow";
  defaultPropNames: "hover" | "selected";
  selfProps: {
    /**
     * Should be valid <tr> children such as `TableCell`.
     */
    children?: JSX.JSXElement;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<TableRowClasses>;

    /**
     * If `true`, the table row will shade on hover.
     * @default false
     */
    hover?: boolean;

    /**
     * If `true`, the table row will have the selected shading.
     * @default false
     */
    selected?: boolean;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & TableRowTypeMap["selfProps"];
  defaultComponent: D;
};

export type TableRowProps<
  D extends ST.ElementType = TableRowTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<TableRowTypeMap<P, D>, D>;

export default TableRowProps;
