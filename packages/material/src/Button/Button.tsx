import { ButtonTypeMap } from ".";
import ButtonBase from "../ButtonBase";
import styled, { skipRootProps } from "../styles/styled";
import capitalize from "../utils/capitalize";
import ButtonGroupContext from "./../ButtonGroup/ButtonGroupContext";
import buttonClasses, { getButtonUtilityClass } from "./buttonClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { alpha } from "@suid/system";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";
import { Show, useContext } from "solid-js";

type OwnerState = InPropsOf<ButtonTypeMap>;

const $ = createComponentFactory<ButtonTypeMap>()({
  name: "MuiButton",
  selfPropNames: [
    "children",
    "classes",
    "color",
    "disableElevation",
    "disableFocusRipple",
    "disabled",
    "endIcon",
    "fullWidth",
    "href",
    "size",
    "startIcon",
    "variant",
  ],
  propDefaults: ({ set }) => {
    const contextProps = useContext(ButtonGroupContext);
    return set({
      color: contextProps.color ?? "primary",
      component: "button",
      disabled: contextProps.disabled ?? false,
      disableElevation: contextProps.disableElevation ?? false,
      disableFocusRipple: contextProps.disableFocusRipple ?? false,
      fullWidth: contextProps.fullWidth ?? false,
      size: contextProps.size ?? "medium",
      variant: contextProps.variant ?? "text",
    });
  },
  utilityClass: getButtonUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.variant,
      `${ownerState.variant}${capitalize(ownerState.color)}`,
      `size${capitalize(ownerState.size)}`,
      `${ownerState.variant}Size${capitalize(ownerState.size)}`,
      ownerState.color === "inherit" && "colorInherit",
      ownerState.disableElevation && "disableElevation",
      ownerState.fullWidth && "fullWidth",
    ],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${capitalize(ownerState.size)}`],
    endIcon: ["endIcon", `iconSize${capitalize(ownerState.size)}`],
  }),
});

const commonIconStyles = (ownerState: OwnerState) => ({
  ...(ownerState.size === "small" && {
    "& > *:nth-of-type(1)": {
      fontSize: 18,
    },
  }),
  ...(ownerState.size === "medium" && {
    "& > *:nth-of-type(1)": {
      fontSize: 20,
    },
  }),
  ...(ownerState.size === "large" && {
    "& > *:nth-of-type(1)": {
      fontSize: 22,
    },
  }),
});

const ButtonRoot = styled(ButtonBase, {
  skipProps: skipRootProps.filter((v) => v !== "classes"),
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      styles[ownerState.variant],
      styles[`${ownerState.variant}${capitalize(ownerState.color)}`],
      styles[`size${capitalize(ownerState.size)}`],
      styles[`${ownerState.variant}Size${capitalize(ownerState.size)}`],
      ownerState.color === "inherit" && styles.colorInherit,
      ownerState.disableElevation && styles.disableElevation,
      ownerState.fullWidth && styles.fullWidth,
    ];
  },
})<OwnerState>(
  ({ theme, ownerState }) => ({
    ...theme.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(
      ["background-color", "box-shadow", "border-color", "color"],
      {
        duration: theme.transitions.duration.short,
      }
    ),
    "&:hover": {
      textDecoration: "none",
      backgroundColor: alpha(
        theme.palette.text.primary,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
      ...(ownerState.variant === "text" &&
        ownerState.color !== "inherit" && {
          backgroundColor: alpha(
            theme.palette[ownerState.color].main,
            theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent",
          },
        }),
      ...(ownerState.variant === "outlined" &&
        ownerState.color !== "inherit" && {
          border: `1px solid ${theme.palette[ownerState.color].main}`,
          backgroundColor: alpha(
            theme.palette[ownerState.color].main,
            theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent",
          },
        }),
      ...(ownerState.variant === "contained" && {
        backgroundColor: theme.palette.grey.A100,
        boxShadow: theme.shadows[4],
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          boxShadow: theme.shadows[2],
          backgroundColor: theme.palette.grey[300],
        },
      }),
      ...(ownerState.variant === "contained" &&
        ownerState.color !== "inherit" && {
          backgroundColor: theme.palette[ownerState.color].dark,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: theme.palette[ownerState.color].main,
          },
        }),
    },
    "&:active": {
      ...(ownerState.variant === "contained" && {
        boxShadow: theme.shadows[8],
      }),
    },
    [`&.${buttonClasses.focusVisible}`]: {
      ...(ownerState.variant === "contained" && {
        boxShadow: theme.shadows[6],
      }),
    },
    [`&.${buttonClasses.disabled}`]: {
      color: theme.palette.action.disabled,
      ...(ownerState.variant === "outlined" && {
        border: `1px solid ${theme.palette.action.disabledBackground}`,
      }),
      ...(ownerState.variant === "outlined" &&
        ownerState.color === "secondary" && {
          border: `1px solid ${theme.palette.action.disabled}`,
        }),
      ...(ownerState.variant === "contained" && {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground,
      }),
    },
    ...(ownerState.variant === "text" && {
      padding: "6px 8px",
    }),
    ...(ownerState.variant === "text" &&
      ownerState.color !== "inherit" && {
        color: theme.palette[ownerState.color].main,
      }),
    ...(ownerState.variant === "outlined" && {
      padding: "5px 15px",
      border: `1px solid ${
        theme.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)"
      }`,
    }),
    ...(ownerState.variant === "outlined" &&
      ownerState.color !== "inherit" && {
        color: theme.palette[ownerState.color].main,
        border: `1px solid ${alpha(theme.palette[ownerState.color].main, 0.5)}`,
      }),
    ...(ownerState.variant === "contained" && {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
    }),
    ...(ownerState.variant === "contained" &&
      ownerState.color !== "inherit" && {
        color: theme.palette[ownerState.color].contrastText,
        backgroundColor: theme.palette[ownerState.color].main,
      }),
    ...(ownerState.color === "inherit" && {
      color: "inherit",
      borderColor: "currentColor",
    }),
    ...(ownerState.size === "small" &&
      ownerState.variant === "text" && {
        padding: "4px 5px",
        fontSize: theme.typography.pxToRem(13),
      }),
    ...(ownerState.size === "large" &&
      ownerState.variant === "text" && {
        padding: "8px 11px",
        fontSize: theme.typography.pxToRem(15),
      }),
    ...(ownerState.size === "small" &&
      ownerState.variant === "outlined" && {
        padding: "3px 9px",
        fontSize: theme.typography.pxToRem(13),
      }),
    ...(ownerState.size === "large" &&
      ownerState.variant === "outlined" && {
        padding: "7px 21px",
        fontSize: theme.typography.pxToRem(15),
      }),
    ...(ownerState.size === "small" &&
      ownerState.variant === "contained" && {
        padding: "4px 10px",
        fontSize: theme.typography.pxToRem(13),
      }),
    ...(ownerState.size === "large" &&
      ownerState.variant === "contained" && {
        padding: "8px 22px",
        fontSize: theme.typography.pxToRem(15),
      }),
    ...(ownerState.fullWidth && {
      width: "100%",
    }),
  }),
  ({ ownerState }) => ({
    ...(ownerState.disableElevation && {
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none",
      },
      [`&.${buttonClasses.focusVisible}`]: {
        boxShadow: "none",
      },
      "&:active": {
        boxShadow: "none",
      },
      [`&.${buttonClasses.disabled}`]: {
        boxShadow: "none",
      },
    }),
  })
);

const ButtonStartIcon = styled("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.startIcon, styles[`iconSize${capitalize(ownerState.size)}`]];
  },
})<OwnerState>(({ ownerState }) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  ...(ownerState.size === "small" && {
    marginLeft: -2,
  }),
  ...commonIconStyles(ownerState),
}));

const ButtonEndIcon = styled("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.endIcon, styles[`iconSize${capitalize(ownerState.size)}`]];
  },
})<OwnerState>(({ ownerState }) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  ...(ownerState.size === "small" && {
    marginRight: -2,
  }),
  ...commonIconStyles(ownerState),
}));

/**
 *
 * Demos:
 *
 * - [Button Group](https://mui.com/components/button-group/)
 * - [Buttons](https://mui.com/components/buttons/)
 *
 * API:
 *
 * - [Button API](https://mui.com/api/button/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */
const Button = $.component(function Button({
  allProps,
  otherProps,
  props,
  classes,
}) {
  const contextProps = useContext(ButtonGroupContext);
  return (
    <ButtonRoot
      ownerState={allProps}
      className={clsx(
        classes.root,
        otherProps.className,
        contextProps.className
      )}
      disabled={props.disabled}
      focusRipple={!props.disableFocusRipple}
      focusVisibleClassName={clsx(
        props.classes?.focusVisible,
        otherProps.focusVisibleClassName
      )}
      type={otherProps.type}
      href={props.href}
      {...otherProps}
      classes={props.classes}
    >
      <Show when={!!props.startIcon}>
        <ButtonStartIcon className={classes.startIcon} ownerState={allProps}>
          {props.startIcon}
        </ButtonStartIcon>
      </Show>
      {props.children}
      <Show when={!!props.endIcon}>
        <ButtonEndIcon className={classes.endIcon} ownerState={allProps}>
          {props.endIcon}
        </ButtonEndIcon>
      </Show>
    </ButtonRoot>
  );
});

export default Button;
