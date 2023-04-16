import SvgIconContext from "../SvgIcon/SvgIconContext";
import SwitchBase from "../internal/SwitchBase";
import CheckBoxIcon from "../internal/svg-icons/CheckBox";
import CheckBoxOutlineBlankIcon from "../internal/svg-icons/CheckBoxOutlineBlank";
import IndeterminateCheckBoxIcon from "../internal/svg-icons/IndeterminateCheckBox";
import styled, { skipRootProps } from "../styles/styled";
import capitalize from "../utils/capitalize";
import { CheckboxTypeMap } from "./CheckboxProps";
import checkboxClasses, { getCheckboxUtilityClass } from "./checkboxClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { alpha } from "@suid/system";
import { mergeProps, splitProps } from "solid-js";

const $ = createComponentFactory<CheckboxTypeMap>()({
  name: "MuiCheckbox",
  propDefaults: ({ set }) =>
    set({
      color: "primary",
      indeterminate: false,
      size: "medium",
      checkedIcon: () => <CheckBoxIcon />,
      icon: () => <CheckBoxOutlineBlankIcon />,
      indeterminateIcon: () => <IndeterminateCheckBoxIcon />,
    }),
  selfPropNames: [
    "checked",
    "checkedIcon",
    "classes",
    "color",
    "disableRipple",
    "disabled",
    "icon",
    "id",
    "indeterminate",
    "indeterminateIcon",
    "inputProps",
    "inputRef",
    "onChange",
    "required",
    "size",
    "value",
  ],
  utilityClass: getCheckboxUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.indeterminate && "indeterminate",
      `color${capitalize(ownerState.color)}`,
    ],
  }),
});

const CheckboxRoot = styled(SwitchBase, {
  skipProps: skipRootProps.filter((v) => v !== "classes"),
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.indeterminate && styles.indeterminate,
      ownerState.color !== "default" &&
        styles[`color${capitalize(ownerState.color)}`],
    ];
  },
})(({ theme, ownerState }) => ({
  color: theme.palette.text.secondary,
  ...(!ownerState.disableRipple && {
    "&:hover": {
      backgroundColor: alpha(
        ownerState.color === "default"
          ? theme.palette.action.active
          : theme.palette[ownerState.color].main,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
  }),
  ...(ownerState.color !== "default" && {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      color: theme.palette[ownerState.color].main,
    },
    [`&.${checkboxClasses.disabled}`]: {
      color: theme.palette.action.disabled,
    },
  }),
}));

/**
 *
 * Demos:
 *
 * - [Checkboxes](https://mui.com/components/checkboxes/)
 * - [Transfer List](https://mui.com/components/transfer-list/)
 *
 * API:
 *
 * - [Checkbox API](https://mui.com/api/checkbox/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */
const Checkbox = $.component(function Checkbox({ allProps, classes, props }) {
  const icon = () =>
    props.indeterminate ? props.indeterminateIcon : props.icon;
  const indeterminateIcon = () =>
    props.indeterminate ? props.indeterminateIcon : props.checkedIcon;
  const [, baseProps] = splitProps(allProps, [
    "checkedIcon",
    "color",
    "icon",
    "indeterminate",
    "indeterminateIcon",
    "inputProps",
    "size",
  ]);

  const allClasses = mergeProps(() => props.classes || {}, classes);

  return (
    <SvgIconContext.Provider
      value={{
        get fontSize() {
          return props.size;
        },
      }}
    >
      <CheckboxRoot
        type="checkbox"
        {...baseProps}
        classes={allClasses}
        inputProps={{
          ["data-indeterminate" as any]: props.indeterminate,
          ...(props.inputProps || {}),
        }}
        icon={icon()}
        checkedIcon={indeterminateIcon()}
        ownerState={allProps}
      />
    </SvgIconContext.Provider>
  );
});

export default Checkbox;
