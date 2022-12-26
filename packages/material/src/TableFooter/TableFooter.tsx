import { TableFooterTypeMap } from ".";
import Tablelvl2Context from "../Table/Tablelvl2Context";
import styled from "../styles/styled";
import { getTableFooterUtilityClass } from "./tableFooterClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";
import { splitProps, mergeProps } from "solid-js";

const $ = createComponentFactory<TableFooterTypeMap>()({
  name: "MuiTableFooter",
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

const tablelvl2 = {
  variant: "footer",
} as const;

const defaultComponent = "tfoot";

/**
 *
 * Demos:
 *
 * - [Tables](https://mui.com/components/tables/)
 *
 * API:
 *
 * - [TableFooter API](https://mui.com/api/table-footer/)
 */
const TableFooter = $.defineComponent(function TableFooter(inProps) {
  const props = $.useThemeProps({ props: inProps });
  const [, other] = splitProps(props, ["class", "component"]);

  const baseProps = mergeProps({ component: defaultComponent }, props);

  const ownerState = mergeProps(props, {
    get component() {
      return baseProps.component;
    },
  });

  const classes = $.useClasses(ownerState);

  return (
    <Tablelvl2Context.Provider value={tablelvl2}>
      <TableFooterRoot
        as={baseProps.component}
        class={clsx(classes.root, props.class)}
        role={
          baseProps.component === defaultComponent ? (null as any) : "rowgroup"
        }
        ownerState={ownerState}
        {...other}
      />
    </Tablelvl2Context.Provider>
  );
});

export default TableFooter;
