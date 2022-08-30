import styled from "../styles/styled";
import ListContext from "./ListContext";
import { ListTypeMap } from "./ListProps";
import { getListUtilityClass } from "./listClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

const $ = createComponentFactory<ListTypeMap>()({
  name: "MuiList",
  selfPropNames: [
    "children",
    "classes",
    "dense",
    "disablePadding",
    "subheader",
  ],
  propDefaults: ({ set }) =>
    set({
      component: "ul",
      dense: false,
      disablePadding: false,
    }),
  utilityClass: getListUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      !ownerState.disablePadding && "padding",
      ownerState.dense && "dense",
      !!ownerState.subheader && "subheader",
    ],
  }),
});

const ListRoot = styled("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      !ownerState.disablePadding && styles.padding,
      ownerState.dense && styles.dense,
      ownerState.subheader && styles.subheader,
    ];
  },
})(({ ownerState }) => ({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  ...(!ownerState.disablePadding && {
    paddingTop: 8,
    paddingBottom: 8,
  }),
  ...(ownerState.subheader && {
    paddingTop: 0,
  }),
}));

/**
 *
 * Demos:
 *
 * - [Lists](https://mui.com/components/lists/)
 * - [Transfer List](https://mui.com/components/transfer-list/)
 *
 * API:
 *
 * - [List API](https://mui.com/api/list/)
 */
const List = $.component(function List({
  allProps,
  classes,
  otherProps,
  props,
}) {
  return (
    <ListContext.Provider
      value={{
        get dense() {
          return props.dense;
        },
      }}
    >
      <ListRoot
        {...otherProps}
        class={clsx(classes.root, otherProps.class)}
        ownerState={allProps}
      >
        {props.subheader}
        {props.children}
      </ListRoot>
    </ListContext.Provider>
  );
});

export default List;
