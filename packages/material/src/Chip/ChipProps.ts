import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { ChipClasses } from "./chipClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverridableStringUnion } from "@suid/types";
import { JSXElement } from "solid-js";

export interface ChipPropsVariantOverrides {}

export interface ChipPropsSizeOverrides {}

export interface ChipPropsColorOverrides {}

export interface ChipTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiChip";
  defaultPropNames: "color" | "disabled" | "size" | "variant";
  selfProps: {
    /**
     * The Avatar element to display.
     */
    avatar?: JSXElement;
    /**
     * This prop isn't supported.
     * Use the `component` prop if you need to change the children structure.
     */
    children?: null;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ChipClasses>;
    /**
     * If `true`, the chip will appear clickable, and will raise when pressed,
     * even if the onClick prop is not defined.
     * If `false`, the chip will not appear clickable, even if onClick prop is defined.
     * This can be used, for example,
     * along with the component prop to indicate an anchor Chip is clickable.
     * Note: this controls the UI and does not affect the onClick event.
     */
    clickable?: boolean;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'default'
     */
    color?: OverridableStringUnion<
      | "default"
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning",
      ChipPropsColorOverrides
    >;
    /**
     * Override the default delete icon element. Shown only if `onDelete` is set.
     */
    deleteIcon?: JSXElement;
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Icon element.
     */
    icon?: JSXElement;
    /**
     * The content of the component.
     */
    label?: JSXElement;
    /**
     * Callback fired when the delete icon is clicked.
     * If set, the delete icon will be shown.
     */
    onDelete?: () => void;
    /**
     * The size of the component.
     * @default 'medium'
     */
    size?: OverridableStringUnion<"small" | "medium", ChipPropsSizeOverrides>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The variant to use.
     * @default 'filled'
     */
    variant?: OverridableStringUnion<
      "filled" | "outlined",
      ChipPropsVariantOverrides
    >;
  };
  props: P & ChipTypeMap["selfProps"];
  defaultComponent: D;
}

export type ChipProps<
  D extends ElementType = ChipTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<ChipTypeMap<P, D>, D>;

export default ChipProps;
