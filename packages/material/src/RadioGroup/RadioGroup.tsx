import { RadioGroupTypeMap } from ".";
import FormGroup from "../FormGroup";
import useControlled from "../utils/useControlled";
import RadioGroupContext from "./RadioGroupContext";
import createComponentFactory from "@suid/base/createComponentFactory";
import createRef from "@suid/system/createRef";
import createUniqueId from "@suid/utils/createUniqueId";

const $ = createComponentFactory<RadioGroupTypeMap>()({
  name: "MuiRadioGroup",
  propDefaults: ({ set }) => set({}),
  selfPropNames: ["defaultValue", "name", "onChange", "value"],
});

const RadioGroup = $.component(function RadioGroup({ props, otherProps }) {
  const element = createRef<HTMLElement>();

  const [value, setValueState] = useControlled({
    controlled: () => props.value,
    default: () => props.defaultValue,
    name: "RadioGroup",
  });

  const name = createUniqueId(() => props.name);

  return (
    <RadioGroupContext.Provider
      value={{
        get name() {
          return name();
        },
        onChange(event) {
          setValueState(event.target.value);
          if (props.onChange) {
            props.onChange(event, event.target.value);
          }
        },
        get value() {
          return value();
        },
      }}
    >
      <FormGroup role="radiogroup" ref={element} {...otherProps}>
        {otherProps.children}
      </FormGroup>
    </RadioGroupContext.Provider>
  );
});

export default RadioGroup;
