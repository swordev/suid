import { TableContainerTypeMap } from ".";
import styled from "../styles/styled";
import { getTableContainerUtilityClass } from "./tableContainerClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

const $ = createComponentFactory<TableContainerTypeMap>()({
  name: "MuiTableContainer",
  propDefaults: ({ set }) =>
    set({
      component: "div",
    }),
  selfPropNames: ["children", "classes"],
  utilityClass: getTableContainerUtilityClass,
  slotClasses: () => ({
    root: ["root"],
  }),
});

const TableContainerRoot = styled("div", {
  name: "MuiTableContainer",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({
  width: "100%",
  overflowX: "auto",
});

/**
 *
 * Demos:
 *
 * - [Tables](https://mui.com/components/tables/)
 *
 * API:
 *
 * - [TableContainer API](https://mui.com/api/table-container/)
 */
const TableContainer = $.component(function TableContainer({
  classes,
  allProps,
  props,
  otherProps,
}) {
  return (
    <TableContainerRoot
      {...otherProps}
      className={clsx(classes.root, otherProps.className)}
      ownerState={allProps}
    >
      {props.children}
    </TableContainerRoot>
  );
});

export default TableContainer;
