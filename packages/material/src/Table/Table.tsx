import { TableTypeMap } from ".";
import styled from "../styles/styled";
import TableContext from "./TableContext";
import { getTableUtilityClass } from "./tableClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

const $ = createComponentFactory<TableTypeMap>()({
  name: "MuiTable",
  propDefaults: ({ set }) =>
    set({
      component: defaultComponent,
      padding: "normal",
      size: "medium",
      stickyHeader: false,
    }),
  selfPropNames: ["children", "classes", "padding", "size", "stickyHeader"],
  utilityClass: getTableUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root", ownerState.stickyHeader && "stickyHeader"],
  }),
});

const TableRoot = styled("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [styles.root, props.ownerState.stickyHeader && styles.stickyHeader];
  },
})(({ theme, ownerState }) => ({
  display: "table",
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: 0,
  "& caption": {
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: "left",
    captionSide: "bottom",
  },
  ...(ownerState.stickyHeader && {
    borderCollapse: "separate",
  }),
}));

const defaultComponent = "table";

/**
 *
 * Demos:
 *
 * - [Tables](https://mui.com/components/tables/)
 *
 * API:
 *
 * - [Table API](https://mui.com/api/table/)
 */
const Table = $.component(function Table({
  allProps,
  classes,
  otherProps,
  props,
}) {
  return (
    <TableContext.Provider
      value={{
        get padding() {
          return props.padding;
        },
        get size() {
          return props.size;
        },
        get stickyHeader() {
          return props.stickyHeader;
        },
      }}
    >
      <TableRoot
        role={allProps.component === defaultComponent ? null : "table"}
        {...otherProps}
        className={clsx(classes.root, otherProps.className)}
        ownerState={allProps}
      >
        {props.children}
      </TableRoot>
    </TableContext.Provider>
  );
});
export default Table;
