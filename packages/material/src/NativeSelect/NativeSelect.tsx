import { getNativeSelectUtilityClasses, NativeSelectTypeMap } from ".";
import formControlState from "../FormControl/formControlState";
import useFormControl from "../FormControl/useFormControl";
import Input, { InputProps } from "../Input";
import ArrowDropDownIcon from "../internal/svg-icons/ArrowDropDown";
import NativeSelectInput from "./NativeSelectInput";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";
import { JSXElement, mergeProps, splitProps } from "solid-js";

const $ = createComponentFactory<NativeSelectTypeMap>()({
  name: "MuiNativeSelect",
  selfPropNames: [
    "children",
    "classes",
    "IconComponent",
    "input",
    "inputProps",
    "onChange",
    "value",
    "variant",
  ],
  utilityClass: getNativeSelectUtilityClasses,
  slotClasses: () => ({
    root: ["root"],
  }),
});

const defaultInput = () => <Input />;
/**
 * An alternative to `<Select native />` with a much smaller bundle size footprint.
 *
 * Demos:
 *
 * - [Selects](https://mui.com/components/selects/)
 *
 * API:
 *
 * - [NativeSelect API](https://mui.com/api/native-select/)
 * - inherits [Input API](https://mui.com/api/input/)
 */
const NativeSelect = $.defineComponent(function NativeSelect(inProps) {
  const props = $.useThemeProps({ props: inProps });
  const [, other] = splitProps(props, [
    "class",
    "children",
    "classes",
    "IconComponent",
    "input",
    "inputProps",
    "variant",
  ]);

  const baseProps = mergeProps(
    {
      classes: {},
      IconComponent: ArrowDropDownIcon,
      input: defaultInput,
    },
    props
  );

  if (baseProps.input !== defaultInput)
    // This feat requires component introspection (not supported by SolidJS)
    throw new Error(`NativeSelect 'input' custom property is not supported.`);

  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props: props,
    muiFormControl: muiFormControl,
    states: ["variant"],
  });

  const ownerState = mergeProps(props, {
    get classes() {
      return baseProps.classes;
    },
  });
  const classes = $.useClasses(ownerState);
  const [, otherClasses] = splitProps(baseProps.classes, ["root"]);

  const inputProps = mergeProps(
    {
      get children() {
        return props.children;
      },
      classes: otherClasses,
      get IconComponent() {
        return baseProps.IconComponent;
      },
      get variant() {
        return fcs.variant;
      },
      type: undefined,
    },
    () => props.inputProps || {}
    //() => (baseProps.input ? baseProps.input.props.inputProps : {})
  );

  return (
    <Input
      inputComponent={NativeSelectInput as JSXElement}
      inputProps={inputProps as InputProps["inputProps"]}
      {...(other as InputProps)}
      class={clsx(
        classes.root,
        //baseProps.input.props.className,
        props.class
      )}
    />
  );
});

export default NativeSelect;
