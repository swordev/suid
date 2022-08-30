import { ToggleButtonGroupTypeMap } from ".";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import ToggleButtonGroupContext from "./ToggleButtonGroupContext";
import toggleButtonGroupClasses, {
  getToggleButtonGroupUtilityClass,
} from "./toggleButtonGroupClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

const $ = createComponentFactory<ToggleButtonGroupTypeMap>()({
  name: "MuiToggleButtonGroup",
  selfPropNames: [
    "children",
    "classes",
    "color",
    "disabled",
    "exclusive",
    "fullWidth",
    "onChange",
    "orientation",
    "size",
    "value",
  ],
  propDefaults: ({ set }) =>
    set({
      color: "standard",
      disabled: false,
      exclusive: false,
      fullWidth: false,
      orientation: "horizontal",
      size: "medium",
    }),
  utilityClass: getToggleButtonGroupUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.orientation === "vertical" && "vertical",
      ownerState.fullWidth && "fullWidth",
    ],
    grouped: [
      "grouped",
      `grouped${capitalize(ownerState.orientation)}`,
      ownerState.disabled && "disabled",
    ],
  }),
});

const ToggleButtonGroupRoot = styled("div", {
  name: "MuiToggleButtonGroup",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      { [`& .${toggleButtonGroupClasses.grouped}`]: styles.grouped },
      {
        [`& .${toggleButtonGroupClasses.grouped}`]:
          styles[`grouped${capitalize(ownerState.orientation)}`],
      },
      styles.root,
      ownerState.orientation === "vertical" && styles.vertical,
      ownerState.fullWidth && styles.fullWidth,
    ];
  },
})(({ ownerState, theme }) => ({
  display: "inline-flex",
  borderRadius: theme.shape.borderRadius,
  ...(ownerState.orientation === "vertical" && {
    flexDirection: "column",
  }),
  ...(ownerState.fullWidth && {
    width: "100%",
  }),
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    ...(ownerState.orientation === "horizontal"
      ? {
          "&:not(:first-of-type)": {
            marginLeft: -1,
            borderLeft: "1px solid transparent",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
          "&:not(:last-of-type)": {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
          [`&.${toggleButtonGroupClasses.selected} + .${toggleButtonGroupClasses.grouped}.${toggleButtonGroupClasses.selected}`]:
            {
              borderLeft: 0,
              marginLeft: 0,
            },
        }
      : {
          "&:not(:first-of-type)": {
            marginTop: -1,
            borderTop: "1px solid transparent",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
          "&:not(:last-of-type)": {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
          [`&.${toggleButtonGroupClasses.selected} + .${toggleButtonGroupClasses.grouped}.${toggleButtonGroupClasses.selected}`]:
            {
              borderTop: 0,
              marginTop: 0,
            },
        }),
  },
}));

/**
 *
 * Demos:
 *
 * - [Toggle Button](https://mui.com/components/toggle-button/)
 *
 * API:
 *
 * - [ToggleButtonGroup API](https://mui.com/api/toggle-button-group/)
 */
const ToggleButtonGroup = $.component(function ToggleButtonGroup({
  allProps,
  classes,
  otherProps,
  props,
}) {
  return (
    <ToggleButtonGroupContext.Provider
      value={{
        get class() {
          return classes.grouped;
        },
        get value() {
          return props.value;
        },
        get size() {
          return props.size;
        },
        get fullWidth() {
          return props.fullWidth;
        },
        get color() {
          return props.color;
        },
        get disabled() {
          return props.disabled;
        },
        onChange: (event, buttonValue) => {
          if (!props.onChange) {
            return;
          } else if (props.exclusive) {
            props.onChange(
              event,
              props.value === buttonValue ? null : buttonValue
            );
            return;
          }

          const values = props.value as any[];
          const index = values && values.indexOf(buttonValue);
          let newValue: any[];

          if (values && index >= 0) {
            newValue = values.slice();
            newValue.splice(index, 1);
          } else {
            newValue = values ? values.concat(buttonValue) : [buttonValue];
          }

          props.onChange(event, newValue);
        },
      }}
    >
      <ToggleButtonGroupRoot
        role="group"
        class={clsx(classes.root, otherProps.class)}
        ownerState={allProps}
        {...otherProps}
      >
        {props.children}
      </ToggleButtonGroupRoot>
    </ToggleButtonGroupContext.Provider>
  );
});

export default ToggleButtonGroup;
