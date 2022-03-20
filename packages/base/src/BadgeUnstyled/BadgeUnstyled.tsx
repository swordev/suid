import { BadgeUnstyledTypeMap } from ".";
import createComponentFactory from "../createComponentFactory";
import appendOwnerState from "../utils/appendOwnerState";
import { getBadgeUtilityClass } from "./badgeUnstyledClasses";
import useBadge from "./useBadge";
import { ComponentInProps } from "@suid/types";
import capitalize from "@suid/utils/capitalize";
import clsx from "clsx";
import { createMemo, mergeProps } from "solid-js";
import { Dynamic } from "solid-js/web";

type OnwerState = ComponentInProps<BadgeUnstyledTypeMap> &
  ReturnType<typeof useBadge>;

const $ = createComponentFactory<BadgeUnstyledTypeMap, OnwerState>()({
  name: "MuiBadgeUnstyled",
  autoCallUseClasses: false,
  selfPropNames: [
    "anchorOrigin",
    "badgeContent",
    "children",
    "classes",
    "components",
    "components",
    "componentsProps",
    "invisible",
    "max",
    "showZero",
    "variant",
  ],
  propDefaults: ({ set }) =>
    set({
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      components: {},
      componentsProps: {},
      max: 99,
      showZero: false,
      variant: "standard",
      invisible: false,
    }),
  utilityClass: getBadgeUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root"],
    badge: [
      "badge",
      ownerState.variant,
      `anchorOrigin${capitalize(ownerState.anchorOrigin.vertical)}${capitalize(
        ownerState.anchorOrigin.horizontal
      )}`,
      ownerState.invisible && "invisible",
    ],
  }),
});

/**
 *
 * Demos:
 *
 * - [Badges](https://mui.com/components/badges/)
 *
 * API:
 *
 * - [BadgeUnstyled API](https://mui.com/api/badge-unstyled/)
 */
const BadgeUnstyled = $.component(function BadgeUnstyled({
  allProps,
  otherProps,
  props,
}) {
  const badge = useBadge(allProps);
  const ownerState = mergeProps(allProps, badge);
  const Root = createMemo(
    () => otherProps.component || props.components.Root || "span"
  );
  const rootProps = appendOwnerState(
    Root,
    () => mergeProps(otherProps, props.componentsProps.root || {}),
    ownerState
  );
  const Badge = createMemo(() => props.components.Badge || "span");
  const badgeProps = appendOwnerState(
    Badge,
    () => props.componentsProps.badge || {},
    ownerState
  );

  const classes = $.useClasses(ownerState);

  return (
    <Dynamic
      {...rootProps}
      {...otherProps}
      component={Root()}
      className={clsx(classes.root, rootProps.className, otherProps.className)}
    >
      {props.children}
      <Dynamic
        {...badgeProps}
        component={Badge()}
        className={clsx(classes.badge, badgeProps.className)}
      >
        {badge.displayValue}
      </Dynamic>
    </Dynamic>
  );
});

export default BadgeUnstyled;
