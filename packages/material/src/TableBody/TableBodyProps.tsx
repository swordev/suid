import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { TableBodyClasses } from "./tableBodyClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import * as JSX from "solid-js";

export type TableBodyTypeMap<P = {}, D extends ST.ElementType = "tbody"> = {
  name: "MuiTableBody";
  selfProps: {
    /**
     * The content of the component, normally `TableRow`.
     */
    children?: JSX.JSXElement;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<TableBodyClasses>;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & TableBodyTypeMap["selfProps"];
  defaultComponent: D;
};

export type TableBodyProps<
  D extends ST.ElementType = TableBodyTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<TableBodyTypeMap<P, D>, D>;

export default TableBodyProps;
