import { Theme } from "..";
import { RatingClasses } from "./ratingClasses";
import { SxProps } from "@suid/system";
import { OverridableStringUnion } from "@suid/types";
import * as ST from "@suid/types";
import { JSXElement, Component, type JSX } from "solid-js";

export interface IconContainerProps
  extends JSX.HTMLAttributes<HTMLSpanElement> {
  value: number;
}

export interface RatingPropsSizeOverrides {}
export type RatingTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiRating";
  defaultPropNames:
    | "defaultValue"
    | "disabled"
    | "emptyIcon"
    | "emptyLabelText"
    | "getLabelText"
    | "highlightSelectedOnly"
    | "icon"
    | "IconContainerComponent"
    | "max"
    | "precision"
    | "readOnly"
    | "size";
  selfProps: {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<RatingClasses>;

    /**
     * The default value. Use when the component is not controlled.
     * @default null
     */
    defaultValue?: number;

    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;

    /**
     * The icon to display when empty.
     * @default <StarBorder fontSize="inherit" />
     */
    emptyIcon?: JSXElement;

    /**
     * The label read when the rating input is empty.
     * @default 'Empty'
     */
    emptyLabelText?: JSXElement;

    /**
     * Accepts a function which returns a string value that provides a user-friendly name for the current value of the rating.
     * This is important for screen reader users.
     *
     * For localization purposes, you can use the provided [translations](/guides/localization/).
     * @param {number} value The rating label's value to format.
     * @returns {string}
     * @default function defaultLabelText(value) {
     *   return `${value} Star${value !== 1 ? 's' : ''}`;
     * }
     */
    getLabelText?: (value: number) => string;

    /**
     * If `true`, only the selected icon will be highlighted.
     * @default false
     */
    highlightSelectedOnly?: boolean;

    /**
     * The icon to display.
     * @default <Star fontSize="inherit" />
     */
    icon?: JSXElement;

    /**
     * The component containing the icon.
     * @default function IconContainer(props) {
     *   const { value, ...other } = props;
     *   return <span {...other} />;
     * }
     */
    IconContainerComponent?: Component<IconContainerProps>;

    /**
     * Maximum rating.
     * @default 5
     */
    max?: number;

    /**
     * The name attribute of the radio `input` elements.
     * This input `name` should be unique within the page.
     * Being unique within a form is insufficient since the `name` is used to generated IDs.
     */
    name?: string;

    /**
     * Callback fired when the value changes.
     * @param {Event} event The event source of the callback.
     * @param {number|null} value The new value.
     */
    onChange?: (event: Event, value: number | null) => void;

    /**
     * Callback function that is fired when the hover state changes.
     * @param {MouseEvent} event The event source of the callback.
     * @param {number} value The new value.
     */
    onChangeActive?: (event: MouseEvent, value: number) => void;

    /**
     * The minimum increment value change allowed.
     * @default 1
     */
    precision?: number;

    /**
     * Removes all hover effects and pointer events.
     * @default false
     */
    readOnly?: boolean;

    /**
     * The size of the component.
     * @default 'medium'
     */
    size?: OverridableStringUnion<
      "small" | "medium" | "large",
      RatingPropsSizeOverrides
    >;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;

    /**
     * The rating value.
     */
    value?: number | null;
  };
  props: P &
    RatingTypeMap["selfProps"] &
    Omit<ST.PropsOf<"span">, "children" | "onChange">;
  defaultComponent: D;
};

export type RatingProps<
  D extends ST.ElementType = RatingTypeMap["defaultComponent"],
  P = {},
> = ST.OverrideProps<RatingTypeMap<P, D>, D>;

export default RatingProps;
