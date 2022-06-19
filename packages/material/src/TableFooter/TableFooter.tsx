import { TableFooterTypeMap } from ".";
import Tablelvl2Context, {
  Tablelvl2ContextProps,
} from "../Table/Tablelvl2Context";
import styled from "../styles/styled";
import { getTableFooterUtilityClass } from "./tableFooterClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

const $ = createComponentFactory<TableFooterTypeMap>()({
  name: "MuiTableFooter",
  propDefaults: ({ set }) =>
    set({
      component: "div",
    }),
  selfPropNames: ["children", "classes"],
  utilityClass: getTableFooterUtilityClass,
  slotClasses: () => ({
    root: ["root"],
  }),
});

const TableFooterRoot = styled("tfoot", {
  name: "MuiTableFooter",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({
  display: "table-footer-group",
});

const tablelvl2: Tablelvl2ContextProps = {
  variant: "footer",
};

const defaultComponent = "tfoot";

/**
 *
 * Demos:
 *
 * - [Tables](https://mui.com/components/tables/)
 *
 * API:
 *
 * - [TableFooter API](https://mui.com/material-ui/api/table-footer/)
 */
const TableFooter = $.component(function TableFooter({
  classes,
  allProps,
  props,
  otherProps,
}) {
  return (
    <Tablelvl2Context.Provider value={tablelvl2}>
      <TableFooterRoot
        {...otherProps}
        className={clsx(classes.root, otherProps.className)}
        ownerState={allProps}
        role={allProps.component === defaultComponent ? null : "rowgroup"}
      >
        {props.children}
      </TableFooterRoot>
    </Tablelvl2Context.Provider>
  );
});

export default TableFooter;
