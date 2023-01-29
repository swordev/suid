import { Theme } from "..";
import { MenuProps } from "../Menu";
import { SxProps } from "@suid/system";
import { RefProp } from "@suid/system/createRef";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

/**
 * The change can be caused by different kind of events.
 * The type of event depends on what caused the change.
 * For example, when the browser auto-fills the `Select` you'll receive a `React.ChangeEvent`.
 */
export type SelectChangeEvent<T = string> =
  | Event & { target: { value: T; name: string } };
export type SelectInputTypeMap<
  P = {},
  D extends ST.ElementType = "div",
  T = any
> = {
  name: "MuiSelectInput";
  selfProps: {
    // [review]
    labelId?: string;
    // [review]
    type?: any;
    defaultValue?: any;
    displayEmpty?: boolean;
    autoFocus?: boolean;

    autoWidth: boolean;

    defaultOpen?: boolean;

    disabled?: boolean;

    IconComponent?: ST.ElementType;

    inputRef?: RefProp<
      | HTMLSelectElement
      | {
          node: HTMLInputElement;
          value: SelectInputProps<D, P, T>["value"];
          focus: () => void;
        }
    >;

    MenuProps?: Partial<MenuProps>;

    multiple: boolean;

    name?: string;

    native: boolean;

    onBlur?: ST.FocusEventHandler<any>;

    onChange?: (event: SelectChangeEvent<T>, child: JSXElement) => void;

    onClose?: (event: Event) => void;

    onFocus?: ST.FocusEventHandler<any>;

    onOpen?: (event: Event) => void;

    open?: boolean;

    readOnly?: boolean;

    renderValue?: (value: SelectInputProps<D, P, T>["value"]) => JSXElement;

    SelectDisplayProps?: ST.PropsOf<"div">;

    sx?: SxProps<Theme>;

    tabIndex?: number;

    value?: T;

    variant?: "standard" | "outlined" | "filled";
  };
  props: P & SelectInputTypeMap["selfProps"];
  defaultComponent: D;
};

export type SelectInputProps<
  D extends ST.ElementType = SelectInputTypeMap["defaultComponent"],
  P = {},
  T = any
> = ST.OverrideProps<SelectInputTypeMap<P, D, T>, D>;

export default SelectInputProps;
