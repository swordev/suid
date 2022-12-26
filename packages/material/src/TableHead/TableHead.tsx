import { TableHeadTypeMap } from ".";
import Tablelvl2Context from "../Table/Tablelvl2Context";
import styled from "../styles/styled";
import { getTableHeadUtilityClass } from "./tableHeadClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

const $ = createComponentFactory<TableHeadTypeMap>()({
  name: "MuiTableHead",
  propDefaults: ({ set }) =>
    set({
      component: defaultComponent,
    }),
  selfPropNames: ["children", "classes"],
  utilityClass: getTableHeadUtilityClass,
  slotClasses: () => ({
    root: ["root"],
  }),
});

const TableHeadRoot = styled("thead", {
  name: "MuiTableHead",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({
  display: "table-header-group",
});

const tablelvl2 = {
  variant: "head",
} as const;

const defaultComponent = "thead";

/**
 *
 * Demos:
 *
 * - [Tables](https://mui.com/components/tables/)
 *
 * API:
 *
 * - [TableHead API](https://mui.com/api/table-head/)
 */
const TableHead = $.component(function TableHead({
  classes,
  allProps,
  otherProps,
  props,
}) {
  return (
    <Tablelvl2Context.Provider value={tablelvl2}>
      <TableHeadRoot
        role={
          otherProps.component === defaultComponent ? (null as any) : "rowgroup"
        }
        {...otherProps}
        class={clsx(classes.root, otherProps.class)}
        ownerState={allProps}
      >
        {props.children}
      </TableHeadRoot>
    </Tablelvl2Context.Provider>
  );
});

export default TableHead;
