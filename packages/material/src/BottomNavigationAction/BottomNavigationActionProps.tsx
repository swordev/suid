import { Theme } from "..";
import { ExtendButtonBaseTypeMap } from "../ButtonBase";
import { BottomNavigationActionClasses } from "./bottomNavigationActionClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export type BottomNavigationActionTypeMap<
  P = {},
  D extends ST.ElementType = "div",
> = {
  name: "MuiBottomNavigationAction";
  selfProps: {
    /**
     * This prop isn't supported.
     * Use the `component` prop if you need to change the children structure.
     */
    children?: JSXElement;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<BottomNavigationActionClasses>;

    /**
     * The icon to display.
     */
    icon?: JSXElement;

    /**
     * The label element.
     */
    label?: JSXElement;

    /**
     * If `true`, the `BottomNavigationAction` will show its label.
     * By default, only the selected `BottomNavigationAction`
     * inside `BottomNavigation` will show its label.
     *
     * The prop defaults to the value (`false`) inherited from the parent BottomNavigation component.
     */
    showLabel?: boolean;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;

    /**
     * You can provide your own value. Otherwise, we fallback to the child position index.
     */
    value?: any;
  };
} & ExtendButtonBaseTypeMap<{
  props: P & BottomNavigationActionTypeMap["selfProps"];
  defaultComponent: D;
}>;

export type BottomNavigationActionProps<
  D extends ST.ElementType = BottomNavigationActionTypeMap["defaultComponent"],
  P = {},
> = ST.OverrideProps<BottomNavigationActionTypeMap<P, D>, D>;

export default BottomNavigationActionProps;
