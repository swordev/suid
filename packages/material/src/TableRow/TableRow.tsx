import { TableRowTypeMap } from ".";
import Tablelvl2Context from "../Table/Tablelvl2Context";
import styled from "../styles/styled";
import tableRowClasses, { getTableRowUtilityClass } from "./tableRowClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { alpha } from "@suid/system";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";
import { mergeProps, useContext } from "solid-js";

type OnwerState = InPropsOf<TableRowTypeMap> & {
  head: boolean;
  footer: boolean;
};

const $ = createComponentFactory<TableRowTypeMap, OnwerState>()({
  name: "MuiTableRow",
  propDefaults: ({ set }) =>
    set({
      component: defaultComponent,
      hover: false,
      selected: false,
    }),
  selfPropNames: ["children", "classes", "hover", "selected"],
  utilityClass: getTableRowUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.selected && "selected",
      ownerState.hover && "hover",
      ownerState.head && "head",
      ownerState.footer && "footer",
    ],
  }),
});

const TableRowRoot = styled("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [
      styles.root,
      props.ownerState.head && styles.head,
      props.ownerState.footer && styles.footer,
    ];
  },
})(({ theme }) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${tableRowClasses.hover}:hover`]: {
    backgroundColor: theme.palette.action.hover,
  },
  [`&.${tableRowClasses.selected}`]: {
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
    "&:hover": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity
      ),
    },
  },
}));

const defaultComponent = "tr";
/**
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc).
 */
/**
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc).
 *
 * Demos:
 *
 * - [Tables](https://mui.com/components/tables/)
 *
 * API:
 *
 * - [TableRow API](https://mui.com/api/table-row/)
 */
const TableRow = $.component(function TableRow({
  classes,
  allProps,
  otherProps,
  props,
}) {
  const tablelvl2 = useContext(Tablelvl2Context);

  const ownerState = mergeProps(allProps, {
    get head() {
      return tablelvl2 && tablelvl2.variant === "head";
    },
    get footer() {
      return tablelvl2 && tablelvl2.variant === "footer";
    },
  });

  return (
    <TableRowRoot
      role={otherProps.component === defaultComponent ? null : "row"}
      {...otherProps}
      class={clsx(classes.root, otherProps.class)}
      ownerState={ownerState}
    >
      {props.children}
    </TableRowRoot>
  );
});

export default TableRow;
