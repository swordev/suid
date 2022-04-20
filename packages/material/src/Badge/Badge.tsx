import { BadgeTypeMap } from ".";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import { badgeClasses } from "./badgeClasses";
import BadgeUnstyled, { getBadgeUtilityClass } from "@suid/base/BadgeUnstyled";
import { useBadgeInvisibleMemo } from "@suid/base/BadgeUnstyled/useBadge";
import createComponentFactory from "@suid/base/createComponentFactory";
import isHostComponent from "@suid/base/utils/isHostComponent";
import { ElementType } from "@suid/types";
import usePreviousProps from "@suid/utils/usePreviousProps";
import { mergeProps, splitProps } from "solid-js";

const $ = createComponentFactory<BadgeTypeMap>()({
  name: "MuiBadge",
  selfPropNames: ["classes", "color", "overlap", "variant"],
  propDefaults: ({ set }) =>
    set({
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      component: "span",
      components: {},
      componentsProps: {},
      overlap: "rectangular",
      color: "default",
      invisible: false,
      showZero: false,
      variant: "standard",
      max: 99,
    }),
  autoCallUseClasses: false,
  utilityClass: getBadgeUtilityClass,
  // [review]
  slotClasses: (ownerState) => {
    return {
      badge: [
        `anchorOrigin${capitalize(
          ownerState.anchorOrigin.vertical
        )}${capitalize(ownerState.anchorOrigin.horizontal)}${capitalize(
          ownerState.overlap
        )}`,
        `overlap${capitalize(ownerState.overlap)}`,
        ownerState.color !== "default" &&
          `color${capitalize(ownerState.color)}`,
      ],
    };
  },
});

const RADIUS_STANDARD = 10;
const RADIUS_DOT = 4;

const shouldSpreadAdditionalProps = (Slot: ElementType | undefined) => {
  return !Slot || !isHostComponent(Slot);
};

const BadgeRoot = styled("span", {
  name: "MuiBadge",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0,
});

const BadgeBadge = styled("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.badge,
      styles[ownerState.variant],
      styles[
        `anchorOrigin${capitalize(
          ownerState.anchorOrigin.vertical
        )}${capitalize(ownerState.anchorOrigin.horizontal)}${capitalize(
          ownerState.overlap
        )}`
      ],
      ownerState.color !== "default" &&
        styles[`color${capitalize(ownerState.color)}`],
      ownerState.invisible && styles.invisible,
    ];
  },
})(({ theme, ownerState }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(12),
  minWidth: RADIUS_STANDARD * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: RADIUS_STANDARD * 2,
  borderRadius: RADIUS_STANDARD,
  zIndex: 1, // Render the badge on top of potential ripples.
  transition: theme.transitions.create("transform", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  ...(ownerState.color !== "default" && {
    backgroundColor: theme.palette[ownerState.color].main,
    color: theme.palette[ownerState.color].contrastText,
  }),
  aaaaaaaaaaaaaa: "a",
  ...(ownerState.variant === "dot" && {
    xxxxxxxxxxxxxx: "b",
    borderRadius: RADIUS_DOT,
    height: RADIUS_DOT * 2,
    minWidth: RADIUS_DOT * 2,
    padding: 0,
  }),
  ...(ownerState.anchorOrigin.vertical === "top" &&
    ownerState.anchorOrigin.horizontal === "right" &&
    ownerState.overlap === "rectangular" && {
      top: 0,
      right: 0,
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)",
      },
    }),
  ...(ownerState.anchorOrigin.vertical === "bottom" &&
    ownerState.anchorOrigin.horizontal === "right" &&
    ownerState.overlap === "rectangular" && {
      bottom: 0,
      right: 0,
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)",
      },
    }),
  ...(ownerState.anchorOrigin.vertical === "top" &&
    ownerState.anchorOrigin.horizontal === "left" &&
    ownerState.overlap === "rectangular" && {
      top: 0,
      left: 0,
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)",
      },
    }),
  ...(ownerState.anchorOrigin.vertical === "bottom" &&
    ownerState.anchorOrigin.horizontal === "left" &&
    ownerState.overlap === "rectangular" && {
      bottom: 0,
      left: 0,
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)",
      },
    }),
  ...(ownerState.anchorOrigin.vertical === "top" &&
    ownerState.anchorOrigin.horizontal === "right" &&
    ownerState.overlap === "circular" && {
      top: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)",
      },
    }),
  ...(ownerState.anchorOrigin.vertical === "bottom" &&
    ownerState.anchorOrigin.horizontal === "right" &&
    ownerState.overlap === "circular" && {
      bottom: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)",
      },
    }),
  ...(ownerState.anchorOrigin.vertical === "top" &&
    ownerState.anchorOrigin.horizontal === "left" &&
    ownerState.overlap === "circular" && {
      top: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)",
      },
    }),
  ...(ownerState.anchorOrigin.vertical === "bottom" &&
    ownerState.anchorOrigin.horizontal === "left" &&
    ownerState.overlap === "circular" && {
      bottom: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)",
      },
    }),
  ...(ownerState.invisible && {
    transition: theme.transitions.create("transform", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
}));

/**
 *
 * Demos:
 *
 * - [Avatars](https://mui.com/components/avatars/)
 * - [Badges](https://mui.com/components/badges/)
 *
 * API:
 *
 * - [Badge API](https://mui.com/api/badge/)
 * - inherits [BadgeUnstyled API](https://mui.com/api/badge-unstyled/)
 */
const Badge = $.component(function Badge({ allProps, otherProps, props }) {
  const [, otherPropsWithotuComponent] = splitProps(otherProps, ["component"]);
  const prevProps = usePreviousProps(allProps, [
    "anchorOrigin",
    "color",
    "overlap",
  ]);

  const invisible = useBadgeInvisibleMemo(allProps);
  const badge = mergeProps(() => (invisible() ? prevProps : allProps));

  const ownerState = mergeProps(allProps, {
    get invisible() {
      return invisible();
    },
  });

  const classes = $.useClasses(ownerState);

  const components = mergeProps(
    {
      Root: BadgeRoot,
      Badge: BadgeBadge,
    },
    () => otherProps.components
  );

  const rootOwnerState = mergeProps(
    () => (otherProps.componentsProps.root as any)?.["ownerState"] || {},
    {
      color: badge.color,
      overlap: badge.overlap,
    }
  );

  const badgeOwnerState = mergeProps(
    () => (otherProps.componentsProps.badge as any)?.["ownerState"] || {},
    {
      color: badge.color,
      overlap: badge.overlap,
    }
  );

  const componentProps = {
    root: mergeProps(
      () => otherProps.componentsProps.root || {},
      () =>
        shouldSpreadAdditionalProps(otherProps.components.Root) && {
          as: otherProps.component,
          ownerState: rootOwnerState,
        }
    ),
    badge: mergeProps(
      () => otherProps.componentsProps.badge || {},
      () =>
        shouldSpreadAdditionalProps(otherProps.components.Badge) && {
          ownerState: badgeOwnerState,
        }
    ),
  };

  return (
    <BadgeUnstyled
      variant={props.variant}
      {...otherPropsWithotuComponent}
      components={components}
      componentsProps={componentProps}
      classes={classes}
    />
  );
});

export default Badge;
