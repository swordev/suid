import { TableBodyTypeMap } from ".";
import Tablelvl2Context from "../Table/Tablelvl2Context";
import styled from "../styles/styled";
import { getTableBodyUtilityClass } from "./tableBodyClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

const $ = createComponentFactory<TableBodyTypeMap>()({
  name: "MuiTableBody",
  propDefaults: ({ set }) =>
    set({
      component: defaultComponent,
    }),
  selfPropNames: ["children", "classes"],
  utilityClass: getTableBodyUtilityClass,
  slotClasses: () => ({
    root: ["root"],
  }),
});

const TableBodyRoot = styled("tbody", {
  name: "MuiTableBody",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({
  display: "table-row-group",
});

const defaultComponent = "tbody";

/**
 *
 * Demos:
 *
 * - [Tables](https://mui.com/components/tables/)
 *
 * API:
 *
 * - [TableBody API](https://mui.com/api/table-body/)
 */
const TableBody = $.component(function TableBody({
  allProps,
  classes,
  props,
  otherProps,
}) {
  return (
    <Tablelvl2Context.Provider
      value={{
        variant: "body",
      }}
    >
      <TableBodyRoot
        role={otherProps.component === defaultComponent ? null : "rowgroup"}
        {...otherProps}
        class={clsx(classes.root, otherProps.class)}
        ownerState={allProps}
      >
        {props.children}
      </TableBodyRoot>
    </Tablelvl2Context.Provider>
  );
});

export default TableBody;
