import { ListItemTextTypeMap } from ".";
import { useListContext } from "../List/ListContext";
import Typography from "../Typography";
import styled from "../styles/styled";
import listItemTextClasses, {
  getListItemTextUtilityClass,
} from "./listItemTextClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";
import { children, createMemo, mergeProps } from "solid-js";

type OwnerState = InPropsOf<ListItemTextTypeMap> & {
  dense: boolean;
};

const $ = createComponentFactory<ListItemTextTypeMap, OwnerState>()({
  name: "MuiListItemText",
  selfPropNames: [
    "children",
    "classes",
    "disableTypography",
    "inset",
    "primary",
    "primaryTypographyProps",
    "secondary",
    "secondaryTypographyProps",
  ],
  propDefaults: ({ set }) =>
    set({
      disableTypography: false,
      inset: false,
    }),
  utilityClass: getListItemTextUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.inset && "inset",
      ownerState.dense && "dense",
      !!ownerState.primary && !!ownerState.secondary && "multiline",
    ],
    primary: ["primary"],
    secondary: ["secondary"],
  }),
});

const ListItemTextRoot = styled("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      { [`& .${listItemTextClasses.primary}`]: styles.primary },
      { [`& .${listItemTextClasses.secondary}`]: styles.secondary },
      styles.root,
      ownerState.inset && styles.inset,
      ownerState.primary && ownerState.secondary && styles.multiline,
      ownerState.dense && styles.dense,
    ];
  },
})(({ ownerState }) => ({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  ...(ownerState.primary &&
    ownerState.secondary && {
      marginTop: 6,
      marginBottom: 6,
    }),
  ...(ownerState.inset && {
    paddingLeft: 56,
  }),
}));

/**
 *
 * Demos:
 *
 * - [Lists](https://mui.com/components/lists/)
 *
 * API:
 *
 * - [ListItemText API](https://mui.com/api/list-item-text/)
 */

const ListItemText = $.component(function ListItemText({
  allProps,
  classes,
  otherProps,
  props,
}) {
  const context = useListContext();

  const ownerState = mergeProps(allProps, {
    get dense() {
      return context.dense;
    },
  });

  const isDefined = (v: unknown) => v !== "undefined" && v !== null;
  const isTypography = (v: unknown) =>
    v instanceof HTMLElement && v.classList.contains(Typography.toString());

  const primary = createMemo(() => {
    const primary = children(() => props.primary ?? props.children)();
    if (
      isDefined(primary) &&
      !isTypography(primary) &&
      !props.disableTypography
    ) {
      return (
        <Typography
          variant={context.dense ? "body2" : "body1"}
          class={classes.primary}
          component="span"
          display="block"
          {...(props.primaryTypographyProps || {})}
        >
          {primary}
        </Typography>
      );
    } else {
      return primary;
    }
  });

  const secondary = createMemo(() => {
    const secondary = children(() => props.secondary)();
    if (
      isDefined(secondary) &&
      !isTypography(secondary) &&
      !props.disableTypography
    ) {
      return (
        <Typography<"p">
          variant="body2"
          class={classes.secondary}
          sx={{ display: "block", color: "text.secondary" }}
          {...(props.secondaryTypographyProps || {})}
          component={(props.secondaryTypographyProps?.component ?? "p") as "p"}
        >
          {secondary}
        </Typography>
      );
    } else {
      return secondary;
    }
  });

  return (
    <ListItemTextRoot
      {...otherProps}
      class={clsx(classes.root, otherProps.class)}
      ownerState={ownerState}
    >
      {primary()}
      {secondary()}
    </ListItemTextRoot>
  );
});

export default ListItemText;
