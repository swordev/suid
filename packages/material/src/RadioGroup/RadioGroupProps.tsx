import { FormGroupProps } from "../FormGroup";
import * as ST from "@suid/types";

export type RadioGroupClassKey = keyof NonNullable<RadioGroupProps["classes"]>;
export type RadioGroupTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiRadioGroup";
  selfProps: {
    /**
     * The default value. Use when the component is not controlled.
     */
    defaultValue?: any;

    /**
     * The name used to reference the value of the control.
     * If you don't provide this prop, it falls back to a randomly generated name.
     */
    name?: string;

    /**
     * Callback fired when a radio button is selected.
     *
     * @param {ST.ChangeEvent<HTMLInputElement>} event The event source of the callback.
     * @param {string} value The value of the selected radio button.
     * You can pull out the new value by accessing `event.target.value` (string).
     */
    onChange?: (event: ST.ChangeEvent<HTMLInputElement>, value: string) => void;

    /**
     * Value of the selected radio button. The DOM API casts this to a string.
     */
    value?: any;
  };
  props: P & RadioGroupTypeMap["selfProps"] & Omit<FormGroupProps, "onChange">;
  defaultComponent: D;
};

export type RadioGroupProps<
  D extends ST.ElementType = RadioGroupTypeMap["defaultComponent"],
  P = {},
> = ST.OverrideProps<RadioGroupTypeMap<P, D>, D>;

export default RadioGroupProps;
