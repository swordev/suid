// @inheritedComponent ButtonBase
import { ToggleButtonTypeMap } from ".";
import ButtonBase from "../ButtonBase";
import ToggleButtonGroupContext from "../ToggleButtonGroup/ToggleButtonGroupContext";
import isValueSelected from "../ToggleButtonGroup/isValueSelected";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import toggleButtonClasses, {
  getToggleButtonUtilityClass,
} from "./toggleButtonClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { alpha } from "@suid/system/colorManipulator";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";
import { mergeProps, useContext } from "solid-js";

const $ = createComponentFactory<ToggleButtonTypeMap>()({
  name: "MuiToggleButton",
  selfPropNames: [
    "children",
    "classes",
    "color",
    "disableFocusRipple",
    "disabled",
    "fullWidth",
    "onChange",
    "onClick",
    "selected",
    "size",
    "value",
  ],
  propDefaults: ({ set }) =>
    set({
      color: "standard",
      disabled: false,
      disableFocusRipple: false,
      fullWidth: false,
      size: "medium",
    }),
  autoCallUseClasses: false,
  utilityClass: getToggleButtonUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      !!ownerState.selected && "selected",
      ownerState.disabled && "disabled",
      ownerState.fullWidth && "fullWidth",
      `size${capitalize(ownerState.size)}`,
      ownerState.color,
    ],
  }),
});

const ToggleButtonRoot = styled(ButtonBase, {
  name: "MuiToggleButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.root, styles[`size${capitalize(ownerState.size)}`]];
  },
})<InPropsOf<ToggleButtonTypeMap>>(({ theme, ownerState }) => {
  const selectedColor =
    ownerState.color === "standard"
      ? theme.palette.text.primary
      : theme.palette[ownerState.color].main;
  return {
    ...theme.typography.button,
    borderRadius: theme.shape.borderRadius,
    padding: 11,
    border: `1px solid ${theme.palette.divider}`,
    color: theme.palette.action.active,
    ...(ownerState.fullWidth && {
      width: "100%",
    }),
    [`&.${toggleButtonClasses.disabled}`]: {
      color: theme.palette.action.disabled,
      border: `1px solid ${theme.palette.action.disabledBackground}`,
    },
    "&:hover": {
      textDecoration: "none",
      // Reset on mouse devices
      backgroundColor: alpha(
        theme.palette.text.primary,
        theme.palette.action.hoverOpacity
      ),
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    [`&.${toggleButtonClasses.selected}`]: {
      color: selectedColor,
      backgroundColor: alpha(
        selectedColor,
        theme.palette.action.selectedOpacity
      ),
      "&:hover": {
        backgroundColor: alpha(
          selectedColor,
          theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: alpha(
            selectedColor,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
    ...(ownerState.size === "small" && {
      padding: 7,
      fontSize: theme.typography.pxToRem(13),
    }),
    ...(ownerState.size === "large" && {
      padding: 15,
      fontSize: theme.typography.pxToRem(15),
    }),
  };
});

/**
 *
 * Demos:
 *
 * - [Toggle Button](https://mui.com/components/toggle-button/)
 *
 * API:
 *
 * - [ToggleButton API](https://mui.com/api/toggle-button/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */

const ToggleButton = $.component(function ToggleButton({
  allProps: _allProps,
  otherProps,
  props,
}) {
  const context = useContext(ToggleButtonGroupContext);

  const allProps = mergeProps(
    () => ({
      color: context.color,
      disabled: context.disabled,
      size: context.size,
      selected: isValueSelected(props.value, context.value),
    }),
    _allProps,
    () => ({
      fullWidth: context.fullWidth,
      onChange: context.onChange,
    })
  );

  const classes = $.useClasses(allProps);

  return (
    <ToggleButtonRoot<"button">
      className={clsx(context.className, classes.root, otherProps.className)}
      disabled={allProps.disabled}
      focusRipple={!props.disableFocusRipple}
      onClick={(event) => {
        if (typeof props.onClick === "function") {
          props.onClick(event, props.value);
          if (event.defaultPrevented) {
            return;
          }
        }

        if (typeof allProps.onChange === "function") {
          allProps.onChange(event, props.value);
        }
      }}
      onChange={allProps.onChange as any}
      value={props.value as any}
      ownerState={allProps}
      aria-pressed={allProps.selected}
      {...otherProps}
      component={otherProps.component as "button"}
    >
      {props.children}
    </ToggleButtonRoot>
  );
});

export default ToggleButton;
