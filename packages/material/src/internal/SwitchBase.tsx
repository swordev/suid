import ButtonBase from "../ButtonBase";
import useFormControl from "../FormControl/useFormControl";
import useFormControlLabel from "../FormControlLabel/useFormControlLabel";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import useControlled from "../utils/useControlled";
import { SwitchBaseTypeMap } from "./SwitchBaseProps";
import { getSwitchBaseUtilityClass } from "./switchBaseClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import createRef from "@suid/system/createRef";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";
import { createEffect, mergeProps } from "solid-js";

type OwnerState = InPropsOf<SwitchBaseTypeMap> & {
  size?: string;
};

const $ = createComponentFactory<SwitchBaseTypeMap>()({
  name: "MuiSwitchBase",
  selfPropNames: [
    "autoFocus",
    "checked",
    "checkedIcon",
    "classes",
    "defaultChecked",
    "disableFocusRipple",
    "disableRipple",
    "disabled",
    "edge",
    "icon",
    "id",
    "inputProps",
    "inputRef",
    "name",
    "onChange",
    "readOnly",
    "required",
    "tabIndex",
    "type",
    "value",
  ],
  autoCallUseClasses: false,
  propDefaults: ({ set }) =>
    set({
      disableFocusRipple: false,
      edge: false,
    }),
  utilityClass: getSwitchBaseUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      !!ownerState.checked && "checked",
      !!ownerState.disabled && "disabled",
      ownerState.edge && `edge${capitalize(ownerState.edge)}`,
    ],
    input: ["input"],
  }),
});

const SwitchBaseRoot = styled(ButtonBase)<OwnerState>(({ ownerState }) => ({
  padding: 9,
  borderRadius: "50%",
  ...(ownerState.edge === "start" && {
    marginLeft: ownerState.size === "small" ? -3 : -12,
  }),
  ...(ownerState.edge === "end" && {
    marginRight: ownerState.size === "small" ? -3 : -12,
  }),
}));

const SwitchBaseInput = styled("input")({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1,
});

/**
 * @ignore - internal component.
 */
const SwitchBase = $.component(function SwitchBase({
  allProps,
  otherProps,
  props,
}) {
  const formControlLabel = useFormControlLabel();
  const [checked, setCheckedState] = useControlled({
    controlled: () => props.checked ?? formControlLabel?.checked,
    default: () => Boolean(props.defaultChecked),
    name: "SwitchBase",
    state: "checked",
  });

  const muiFormControl = useFormControl();

  const disabled = () => {
    if (typeof formControlLabel?.disabled !== "undefined") {
      return formControlLabel.disabled;
    } else if (muiFormControl && typeof props.disabled === "undefined") {
      return muiFormControl.disabled;
    } else {
      return props.disabled;
    }
  };

  createEffect(() => {
    if (formControlLabel) {
      formControlLabel.setDisabled(!!disabled());
    }
  });

  const hasLabelFor = () => props.type === "checkbox" || props.type === "radio";

  const ownerState = mergeProps(allProps, {
    get checked() {
      return checked();
    },
    get disabled() {
      return disabled();
    },
  });

  const classes = $.useClasses(ownerState);
  const element = createRef(() => props.inputRef);

  const inputValue = () => {
    if (props.type === "checkbox") {
      return props.value ?? formControlLabel?.value;
    }
  };

  createEffect(() => {
    if (typeof props.defaultChecked === "boolean")
      element.ref.defaultChecked = props.defaultChecked;
  });

  createEffect(() => {
    const value = checked();
    if (typeof value === "boolean") element.ref.checked = value;
  });

  return (
    <SwitchBaseRoot<"div">
      {...otherProps}
      component={"span" as "div"}
      className={clsx(classes.root, otherProps.className)}
      centerRipple
      focusRipple={!props.disableFocusRipple}
      disabled={disabled()}
      tabIndex={null as any}
      role={undefined}
      onFocus={(event) => {
        if (typeof otherProps.onFocus === "function") {
          otherProps.onFocus(event);
        }
        muiFormControl?.onFocus?.();
      }}
      onBlur={(event) => {
        if (typeof otherProps.onBlur === "function") {
          otherProps.onBlur(event);
        }
        muiFormControl?.onBlur?.();
      }}
      ownerState={ownerState}
    >
      <SwitchBaseInput<"input">
        component="input"
        autofocus={props.autoFocus}
        className={classes.input}
        disabled={disabled()}
        id={hasLabelFor() ? props.id : undefined}
        name={props.name ?? formControlLabel?.name}
        onClick={(event) => {
          // Workaround for https://github.com/facebook/react/issues/9023
          if (event.defaultPrevented) {
            return;
          }

          const newChecked = event.currentTarget.checked;
          // Revert state immediately
          event.currentTarget.checked = !newChecked;

          setCheckedState(newChecked);

          if (typeof props.onChange === "function") {
            // TODO v6: remove the second argument.
            props.onChange(event as any, newChecked);
          } else {
            formControlLabel?.onChange?.(event as any, newChecked);
          }

          if (typeof otherProps.onClick === "function")
            otherProps.onClick(event);
        }}
        readOnly={props.readOnly}
        ref={(e) => {
          element(e);
          if (!props.inputRef) formControlLabel?.inputRef?.(e);
        }}
        required={props.required}
        ownerState={ownerState}
        tabIndex={props.tabIndex}
        type={props.type}
        {...{ value: inputValue() }}
        {...(props.inputProps || {})}
      />
      {checked() ? props.checkedIcon : props.icon}
    </SwitchBaseRoot>
  );
});

export default SwitchBase;
