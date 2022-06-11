import { FabTypeMap } from ".";
import ButtonBase from "../ButtonBase";
import styled from "../styles/styled";
import { getFabUtilityClass } from "./fabClasses";
import fabClasses from "./fabClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import capitalize from "@suid/utils/capitalize";
import clsx from "clsx";
import { splitProps, mergeProps } from "solid-js";

const $ = createComponentFactory<FabTypeMap>()({
  name: "MuiFab",
  selfPropNames: [
    "children",
    "classes",
    "color",
    "disabled",
    "disableFocusRipple",
    "disableRipple",
    "href",
    "size",
    "variant",
  ],
  utilityClass: getFabUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.variant,
      `size${capitalize(ownerState.size)}`,
      ownerState.color === "inherit" ? "colorInherit" : ownerState.color,
    ],
  }),
});

const FabRoot = styled(ButtonBase, {
  name: "MuiFab",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      styles[ownerState.variant],
      styles[`size${capitalize(ownerState.size)}`],
      ownerState.color === "inherit" && styles.colorInherit,
      styles[capitalize(ownerState.size)],
      styles[ownerState.color],
    ];
  },
})(
  ({ theme, ownerState }) => ({
    ...theme.typography.button,
    minHeight: 36,
    transition: theme.transitions.create(
      ["background-color", "box-shadow", "border-color"],
      {
        duration: theme.transitions.duration.short,
      }
    ),
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    boxShadow: theme.shadows[6],
    "&:active": {
      boxShadow: theme.shadows[12],
    },
    color: theme.palette.getContrastText(theme.palette.grey[300]),
    backgroundColor: theme.palette.grey[300],
    "&:hover": {
      backgroundColor: theme.palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.palette.grey[300],
      },
      textDecoration: "none",
    },
    [`&.${fabClasses.focusVisible}`]: {
      boxShadow: theme.shadows[6],
    },
    [`&.${fabClasses.disabled}`]: {
      color: theme.palette.action.disabled,
      boxShadow: theme.shadows[0],
      backgroundColor: theme.palette.action.disabledBackground,
    },
    ...(ownerState.size === "small" && {
      width: 40,
      height: 40,
    }),
    ...(ownerState.size === "medium" && {
      width: 48,
      height: 48,
    }),
    ...(ownerState.variant === "extended" && {
      borderRadius: 48 / 2,
      padding: "0 16px",
      width: "auto",
      minHeight: "auto",
      minWidth: 48,
      height: 48,
    }),
    ...(ownerState.variant === "extended" &&
      ownerState.size === "small" && {
        width: "auto",
        padding: "0 8px",
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34,
      }),
    ...(ownerState.variant === "extended" &&
      ownerState.size === "medium" && {
        width: "auto",
        padding: "0 16px",
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40,
      }),
    ...(ownerState.color === "inherit" && {
      color: "inherit",
    }),
  }),
  ({ theme, ownerState }) => ({
    ...(ownerState.color !== "inherit" &&
      ownerState.color !== "default" &&
      theme.palette[ownerState.color] != null && {
        color: theme.palette[ownerState.color].contrastText,
        backgroundColor: theme.palette[ownerState.color].main,
        "&:hover": {
          backgroundColor: theme.palette[ownerState.color].dark,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: theme.palette[ownerState.color].main,
          },
        },
      }),
  })
);

/**
 *
 * Demos:
 *
 * - [Floating Action Button](https://mui.com/components/floating-action-button/)
 *
 * API:
 *
 * - [Fab API](https://mui.com/api/fab/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */
const Fab = $.defineComponent(function Fab(inProps) {
  const props = $.useThemeProps({ props: inProps });
  const [, other] = splitProps(props, [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "disableFocusRipple",
    "focusVisibleClassName",
    "size",
    "variant",
  ]);

  const baseProps = mergeProps(
    {
      color: "default",
      component: "button",
      disabled: false,
      disableFocusRipple: false,
      size: "large",
      variant: "circular",
    },
    props
  );

  const ownerState = mergeProps(props, {
    get color() {
      return baseProps.color;
    },
    get component() {
      return baseProps.component;
    },
    get disabled() {
      return baseProps.disabled;
    },
    get disableFocusRipple() {
      return baseProps.disableFocusRipple;
    },
    get size() {
      return baseProps.size;
    },
    get variant() {
      return baseProps.variant;
    },
  });

  const classes = $.useClasses(ownerState);

  return (
    <FabRoot
      class={clsx(classes.root, props.className)}
      component={baseProps.component}
      disabled={baseProps.disabled}
      focusRipple={!baseProps.disableFocusRipple}
      focusVisibleClassName={clsx(props.focusVisibleClassName)}
      ownerState={ownerState}
      {...other}
    >
      {props.children}
    </FabRoot>
  );
});

export default Fab;
