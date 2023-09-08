import { SelectTypeMap } from ".";
import FilledInput from "../FilledInput";
import formControlState from "../FormControl/formControlState";
import useFormControl from "../FormControl/useFormControl";
import Input from "../Input";
import NativeSelectInput from "../NativeSelect/NativeSelectInput";
import OutlinedInput from "../OutlinedInput";
import ArrowDropDownIcon from "../internal/svg-icons/ArrowDropDown";
import { skipRootProps } from "../styles/styled";
import styled from "../styles/styled";
import SelectInput from "./SelectInput";
import createComponentFactory from "@suid/base/createComponentFactory";
import Dynamic from "@suid/system/Dynamic";
import { StyledOptions } from "@suid/system/createStyled";
import { inspectChildren, isComponentObject } from "@suid/system/inspect";
import { DefaultComponentProps } from "@suid/types";
import { deepmerge } from "@suid/utils";
import { splitProps, mergeProps, JSX } from "solid-js";

const $ = createComponentFactory<SelectTypeMap>()({
  name: "MuiSelect",
  selfPropNames: [
    "autoWidth",
    "children",
    "classes",
    "defaultOpen",
    "defaultValue",
    "displayEmpty",
    "IconComponent",
    "id",
    "input",
    "inputProps",
    "label",
    "labelId",
    "MenuProps",
    "multiple",
    "native",
    "onChange",
    "onClose",
    "onOpen",
    "open",
    "renderValue",
    "SelectDisplayProps",
    "value",
    "variant",
  ],
});

const styledRootConfig: StyledOptions<"MuiSelect"> = {
  name: "MuiSelect",
  overridesResolver: (props, styles) => styles.root,
  skipProps: [...skipRootProps, "variant"],
  slot: "Root",
};

const StyledInput = styled(Input, styledRootConfig)({});

const StyledOutlinedInput = styled(OutlinedInput, styledRootConfig)({});

const StyledFilledInput = styled(FilledInput, styledRootConfig)({});

/**
 *
 * Demos:
 *
 * - [Selects](https://mui.com/components/selects/)
 *
 * API:
 *
 * - [Select API](https://mui.com/api/select/)
 * - inherits [OutlinedInput API](https://mui.com/api/outlined-input/)
 */
const Select = $.defineComponent(function Select(inProps) {
  const props = $.useThemeProps({ props: inProps });
  const [, other] = splitProps(props, [
    "autoWidth",
    "children",
    "classes",
    "class",
    "defaultOpen",
    "displayEmpty",
    "IconComponent",
    "id",
    "input",
    "inputProps",
    "label",
    "labelId",
    "MenuProps",
    "multiple",
    "native",
    "onClose",
    "onOpen",
    "open",
    "renderValue",
    "SelectDisplayProps",
    "variant",
  ]);

  const baseProps = mergeProps(
    {
      autoWidth: false,
      classes: {},
      defaultOpen: false,
      displayEmpty: false,
      IconComponent: ArrowDropDownIcon,
      multiple: false,
      native: false,
      variant: "outlined",
    },
    props
  );

  const inputComponent = () =>
    baseProps.native ? NativeSelectInput : SelectInput;

  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props: props,
    muiFormControl: muiFormControl,
    states: ["variant"],
  });

  const variant = () => fcs.variant || baseProps.variant;
  const inputElements = inspectChildren(() => props.input);
  const inputElement = () => {
    const [item] = inputElements();
    if (item) {
      if (isComponentObject(item)) return item;
      throw new Error(`Invalid component`);
    }
  };

  const InputComponent = () =>
    inputElement()?.Component ||
    {
      standard: StyledInput,
      outlined: StyledOutlinedInput,
      filled: StyledFilledInput,
    }[variant()];

  const ownerState = mergeProps(props, {
    get variant() {
      return variant();
    },
    get classes() {
      return baseProps.classes;
    },
  });
  const classes = $.useClasses(ownerState);

  const inputProps = mergeProps(
    {
      get children() {
        return props.children;
      },
      get IconComponent() {
        return baseProps.IconComponent;
      },
      get variant() {
        return variant();
      },
      type: undefined,
      get multiple() {
        return baseProps.multiple;
      },
    },
    () =>
      baseProps.native
        ? { id: props.id }
        : {
            autoWidth: baseProps.autoWidth,
            defaultOpen: baseProps.defaultOpen,
            displayEmpty: baseProps.displayEmpty,
            labelId: props.labelId,
            MenuProps: props.MenuProps,
            onClose: props.onClose,
            onOpen: props.onOpen,
            open: props.open,
            renderValue: props.renderValue,
            SelectDisplayProps: {
              id: props.id,
              ...props.SelectDisplayProps,
            },
          },
    () => props.inputProps,
    {
      get classes() {
        return props.inputProps
          ? deepmerge(classes, (props.inputProps as any).classes)
          : classes;
      },
    },
    () => inputElement()?.props?.inputProps
  );

  return (
    <Dynamic
      $component={InputComponent()}
      {...inputElement()?.props}
      inputComponent={inputComponent()}
      inputProps={inputProps}
      notched={
        props.multiple && props.native && variant() === "outlined"
          ? true
          : undefined
      }
      label={
        !inputElement() && variant() === "outlined" ? props.label : undefined
      }
      class={props.class}
      variant={variant()}
      {...other}
    />
  );
}) as {
  <V = any>(
    props: DefaultComponentProps<SelectTypeMap<{}, "div", V>>
  ): JSX.Element;
  __suid: string;
};

export default Select;
