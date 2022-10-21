import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { TableContainerClasses } from "./tableContainerClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import * as JSX from "solid-js";

export type TableContainerTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiTableContainer";
  selfProps: {
    /**
     * The content of the component, normally `Table`.
     */
    children?: JSX.JSXElement;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<TableContainerClasses>;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & TableContainerTypeMap["selfProps"];
  defaultComponent: D;
};

export type TableContainerProps<
  D extends ST.ElementType = TableContainerTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<TableContainerTypeMap<P, D>, D>;

export default TableContainerProps;
