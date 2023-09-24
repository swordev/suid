import { Theme } from "..";
import { BottomNavigationClasses } from "./bottomNavigationClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export type BottomNavigationTypeMap<
  P = {},
  D extends ST.ElementType = "div",
> = {
  name: "MuiBottomNavigation";
  defaultPropNames: "showLabels";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<BottomNavigationClasses>;

    /**
     * Callback fired when the value changes.
     *
     * @param {SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
     * @param {any} value We default to the index of the child.
     */
    onChange?: ST.ChangeEventHandler<HTMLDivElement, any>;

    /**
     * If `true`, all `BottomNavigationAction`s will show their labels.
     * By default, only the selected `BottomNavigationAction` will show its label.
     * @default false
     */
    showLabels?: boolean;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;

    /**
     * The value of the currently selected `BottomNavigationAction`.
     */
    value?: any;
  };
  props: P & BottomNavigationTypeMap["selfProps"];
  defaultComponent: D;
};

export type BottomNavigationProps<
  D extends ST.ElementType = BottomNavigationTypeMap["defaultComponent"],
  P = {},
> = ST.OverrideProps<BottomNavigationTypeMap<P, D>, D>;

export default BottomNavigationProps;
