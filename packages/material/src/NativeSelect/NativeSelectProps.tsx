import { InputProps } from "../Input";
import { Theme } from "../styles";
import { NativeSelectInputProps } from "./NativeSelectInput";
import { NativeSelectClasses } from "./nativeSelectClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export type NativeSelectTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiNativeSelect";
  defaultPropNames: "classes" | "IconComponent" | "input";
  selfProps: {
    /**
     * The option elements to populate the select with.
     * Can be some `<option>` elements.
     */
    children?: JSXElement;

    /**
     * Override or extend the styles applied to the component.
     * @default {}
     */
    classes?: Partial<NativeSelectClasses>;

    /**
     * The icon that displays the arrow.
     * @default ArrowDropDownIcon
     */
    IconComponent?: ST.ElementType;

    /**
     * An `Input` element; does not have to be a material-ui specific `Input`.
     * @default <Input />
     */
    input?: ST.ElementType;

    /**
     * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attributes) applied to the `select` element.
     */
    inputProps?: Partial<NativeSelectInputProps>;

    /**
     * Callback fired when a menu item is selected.
     *
     * @param {ST.ChangeEvent<HTMLSelectElement>} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value` (string).
     */
    onChange?: (event: ST.ChangeEvent<HTMLSelectElement>) => any;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;

    /**
     * The `input` value. The DOM API casts this to a string.
     */
    value?: unknown;

    /**
     * The variant to use.
     */
    variant?: "standard" | "outlined" | "filled";
  };
  props: P &
    NativeSelectTypeMap["selfProps"] &
    Omit<InputProps, "inputProps" | "value" | "onChange">;
  defaultComponent: D;
};

export type NativeSelectProps<
  D extends ST.ElementType = NativeSelectTypeMap["defaultComponent"],
  P = {}
> = ST.OverrideProps<NativeSelectTypeMap<P, D>, D>;

export default NativeSelectProps;
