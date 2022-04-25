import { TableCellTypeMap } from ".";
import TableContext from "../Table/TableContext";
import Tablelvl2Context from "../Table/Tablelvl2Context";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import tableCellClasses, { getTableCellUtilityClass } from "./tableCellClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { darken, alpha, lighten } from "@suid/system";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";
import { mergeProps, useContext } from "solid-js";

type OwnerState = InPropsOf<TableCellTypeMap> & {
  stickyHeader?: boolean;
} & Required<Pick<InPropsOf<TableCellTypeMap>, "size" | "padding">>;

const $ = createComponentFactory<TableCellTypeMap, OwnerState>()({
  name: "MuiTableCell",
  propDefaults: ({ set }) =>
    set({
      align: "inherit",
    }),
  selfPropNames: [
    "align",
    "children",
    "classes",
    "component",
    "padding",
    "scope",
    "size",
    "sortDirection",
    "variant",
  ],
  autoCallUseClasses: false,
  utilityClass: getTableCellUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.variant,
      ownerState.stickyHeader && "stickyHeader",
      ownerState.align !== "inherit" && `align${capitalize(ownerState.align)}`,
      ownerState.padding !== "normal" &&
        `padding${capitalize(ownerState.padding)}`,
      `size${capitalize(ownerState.size)}`,
    ],
  }),
});

const TableCellRoot = styled("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [
      styles.root,
      styles[props.ownerState.variant],
      styles[`size${capitalize(props.ownerState.size)}`],
      props.ownerState.padding !== "normal" &&
        styles[`padding${capitalize(props.ownerState.padding)}`],
      props.ownerState.align !== "inherit" &&
        styles[`align${capitalize(props.ownerState.align)}`],
      props.ownerState.stickyHeader && styles.stickyHeader,
    ];
  },
})<OwnerState>(({ theme, ownerState }) => ({
  ...theme.typography.body2,
  display: "table-cell",
  verticalAlign: "inherit",
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: `1px solid
    ${
      theme.palette.mode === "light"
        ? lighten(alpha(theme.palette.divider, 1), 0.88)
        : darken(alpha(theme.palette.divider, 1), 0.68)
    }`,
  textAlign: "left",
  padding: 16,
  ...(ownerState.variant === "head" && {
    color: theme.palette.text.primary,
    lineHeight: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightMedium,
  }),
  ...(ownerState.variant === "body" && {
    color: theme.palette.text.primary,
  }),
  ...(ownerState.variant === "footer" && {
    color: theme.palette.text.secondary,
    lineHeight: theme.typography.pxToRem(21),
    fontSize: theme.typography.pxToRem(12),
  }),
  ...(ownerState.size === "small" && {
    padding: "6px 16px",
    [`&.${tableCellClasses.paddingCheckbox}`]: {
      width: 24, // prevent the checkbox column from growing
      padding: "0 12px 0 16px",
      "& > *": {
        padding: 0,
      },
    },
  }),
  ...(ownerState.padding === "checkbox" && {
    width: 48, // prevent the checkbox column from growing
    padding: "0 0 0 4px",
  }),
  ...(ownerState.padding === "none" && {
    padding: 0,
  }),
  ...(ownerState.align === "left" && {
    textAlign: "left",
  }),
  ...(ownerState.align === "center" && {
    textAlign: "center",
  }),
  ...(ownerState.align === "right" && {
    textAlign: "right",
    flexDirection: "row-reverse",
  }),
  ...(ownerState.align === "justify" && {
    textAlign: "justify",
  }),
  ...(ownerState.stickyHeader && {
    position: "sticky",
    top: 0,
    zIndex: 2,
    backgroundColor: theme.palette.background.default,
  }),
}));

/**
 * The component renders a `<th>` element when the parent context is a header
 * or otherwise a `<td>` element.
 */
const TableCell = $.component(function TableCell({
  otherProps,
  allProps,
  props,
}) {
  const table = useContext(TableContext);
  const tablelvl2 = useContext(Tablelvl2Context);

  const isHeadCell = () => tablelvl2 && tablelvl2.variant === "head";
  const component = () => (allProps.component || isHeadCell() ? "th" : "td");
  const scope = () => (!props.scope && isHeadCell() ? "col" : props.scope);
  const variant = () => props.variant || (tablelvl2 && tablelvl2.variant);
  const ariaSort = () =>
    props.sortDirection
      ? props.sortDirection === "asc"
        ? "ascending"
        : "descending"
      : undefined;

  const ownerState = mergeProps(allProps, {
    get component() {
      return component();
    },
    get padding() {
      return (
        props.padding || (table && table.padding ? table.padding : "normal")
      );
    },
    get size() {
      return props.size || (table && table.size ? table.size : "medium");
    },
    get sortDirection() {
      return props.sortDirection;
    },
    get stickyHeader() {
      return variant() === "head" && table && table.stickyHeader;
    },
    get variant() {
      return variant();
    },
  });
  const classes = $.useClasses(ownerState);

  return (
    <TableCellRoot
      component={props.component}
      scope={scope()}
      aria-sort={ariaSort()}
      {...otherProps}
      className={clsx(classes.root, otherProps.className)}
      ownerState={ownerState}
    >
      {props.children}
    </TableCellRoot>
  );
});

export default TableCell;
