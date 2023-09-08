import { ListItemTextTypeMap } from ".";
import { useListContext } from "../List/ListContext";
import Typography from "../Typography";
import { useTheme } from "../styles";
import styled from "../styles/styled";
import listItemTextClasses, {
  getListItemTextUtilityClass,
} from "./listItemTextClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { InPropsOf } from "@suid/types";
import { isSuidElement } from "@suid/utils";
import clsx from "clsx";
import { Show, children, createMemo, mergeProps, splitProps } from "solid-js";

type OwnerState = Pick<InPropsOf<ListItemTextTypeMap>, "classes" | "inset"> & {
  dense: boolean;
  primary: boolean;
  secondary: boolean;
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
})<OwnerState>(({ ownerState }) => ({
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

const ListItemText = $.defineComponent(function ListItemText(inProps) {
  const theme = useTheme();
  const context = useListContext();
  const props = mergeProps(theme.components?.[$.name]?.defaultProps, inProps);
  const primary = createMemo(() => props.primary);
  const secondary = createMemo(() => props.secondary);
  const ownerState: OwnerState = {
    get classes() {
      return props.classes;
    },
    get inset() {
      return props.inset || false;
    },
    get primary() {
      return !!primary();
    },
    get secondary() {
      return !!secondary();
    },
    get dense() {
      return context.dense;
    },
  };
  const classes = $.useClasses(ownerState);
  const [, otherProps] = splitProps(props, [
    "children",
    "classes",
    "disableTypography",
    "inset",
    "primary",
    "primaryTypographyProps",
    "secondary",
    "secondaryTypographyProps",
  ]);

  const isDefined = (v: unknown) => v !== undefined && v !== null;
  const Primary = () => {
    const $primary = children(() => primary() ?? props.children);
    // [non-reactive root]
    const primaryTypographyProps = props.primaryTypographyProps;

    return (
      <Show
        when={
          isDefined($primary()) &&
          !isSuidElement($primary(), Typography) &&
          !props.disableTypography
        }
        fallback={$primary()}
      >
        <Typography
          variant={context.dense ? "body2" : "body1"}
          class={classes.primary}
          component="span"
          display="block"
          {...primaryTypographyProps}
        >
          {$primary()}
        </Typography>
      </Show>
    );
  };

  const Secondary = () => {
    // [non-reactive root]
    const secondaryTypographyProps = props.secondaryTypographyProps;
    return (
      <Show
        when={
          isDefined(secondary()) &&
          !isSuidElement(secondary(), Typography) &&
          !props.disableTypography
        }
        fallback={secondary()}
      >
        <Typography<"p">
          variant="body2"
          class={classes.secondary}
          sx={{ display: "block", color: "text.secondary" }}
          {...secondaryTypographyProps}
          component={(secondaryTypographyProps?.component ?? "p") as "p"}
        >
          {secondary()}
        </Typography>
      </Show>
    );
  };

  return (
    <ListItemTextRoot
      {...otherProps}
      class={clsx(classes.root, otherProps.class)}
      ownerState={ownerState}
    >
      <Primary />
      <Secondary />
    </ListItemTextRoot>
  );
});

export default ListItemText;
