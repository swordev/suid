import { RadioTypeMap } from ".";
import FormControlLabelContext from "../FormControlLabel/FormControlLabelContext";
import useRadioGroup from "../RadioGroup/useRadioGroup";
import SvgIconContext from "../SvgIcon/SvgIconContext";
import SwitchBase from "../internal/SwitchBase";
import { skipRootProps } from "../styles/styled";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import RadioButtonIcon from "./RadioButtonIcon";
import { getRadioUtilityClass } from "./radioClasses";
import radioClasses from "./radioClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { alpha } from "@suid/system";
import { useContext } from "solid-js";

const $ = createComponentFactory<RadioTypeMap>()({
  name: "MuiRadio",
  propDefaults: ({ set }) =>
    set({
      checkedIcon: defaultCheckedIcon,
      color: "primary",
      icon: defaultIcon,
      size: "medium",
    }),
  selfPropNames: [
    "checkedIcon",
    "classes",
    "color",
    "disabled",
    "icon",
    "size",
  ],
  utilityClass: getRadioUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root", `color${capitalize(ownerState.color)}`],
  }),
});

const RadioRoot = styled(SwitchBase, {
  skipProps: skipRootProps.filter((v) => v !== "classes"),
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [styles.root, styles[`color${capitalize(props.ownerState.color)}`]];
  },
})(({ theme, ownerState }) => ({
  color: theme.palette.text.secondary,
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
  ...(ownerState.color !== "default" && {
    [`&.${radioClasses.checked}`]: {
      color: theme.palette[ownerState.color].main,
    },
  }),
  [`&.${radioClasses.disabled}`]: {
    color: theme.palette.action.disabled,
  },
}));

function areEqualValues(a: unknown, b: unknown) {
  if (typeof b === "object" && b !== null) {
    return a === b;
  }

  // The value could be a number, the DOM will stringify it anyway.
  return String(a) === String(b);
}

const defaultCheckedIcon = () => <RadioButtonIcon checked />;
const defaultIcon = () => <RadioButtonIcon />;

const Radio = $.component(function Radio({
  classes,
  allProps,
  otherProps,
  props,
}) {
  const radioGroup = useRadioGroup();
  const formControlLabelContext = useContext(FormControlLabelContext);

  const name = () =>
    otherProps.name ?? formControlLabelContext?.name ?? radioGroup?.name;
  const value = () => otherProps.value ?? formControlLabelContext?.value;
  const checked = () =>
    otherProps.checked ??
    formControlLabelContext?.checked ??
    areEqualValues(radioGroup?.value, value());
  const haveDefaultIcons = () =>
    props.checkedIcon === defaultCheckedIcon && props.icon === defaultIcon;

  return (
    <SvgIconContext.Provider
      value={{
        get fontSize() {
          return props.size;
        },
      }}
    >
      <RadioRoot
        type="radio"
        {...otherProps}
        ownerState={allProps}
        classes={classes}
        name={name()}
        value={value()}
        checked={checked()}
        onChange={(event, checked) => {
          otherProps.onChange?.(event, checked);
          formControlLabelContext?.onChange?.(event, checked);
          radioGroup?.onChange?.(event, checked);
        }}
        {...(haveDefaultIcons()
          ? {
              get children() {
                // Avoid recreating the component for CSS animations
                return <RadioButtonIcon checked={checked()} />;
              },
              get icon() {
                return <></>;
              },
              get checkedIcon() {
                return <></>;
              },
            }
          : {
              get icon() {
                return props.icon;
              },
              get checkedIcon() {
                return props.checkedIcon;
              },
            })}
      />
    </SvgIconContext.Provider>
  );
});

export default Radio;
