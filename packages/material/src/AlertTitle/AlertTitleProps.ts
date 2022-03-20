import { Theme } from "..";
import { AlertTitleClasses } from "./alertTitleClasses";
import { SxProps } from "@suid/system";
import { ElementType } from "@suid/types";
import { JSXElement } from "solid-js";

export interface AlertTitleTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiAlertTitle";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<AlertTitleClasses>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & AlertTitleTypeMap["selfProps"];
  defaultComponent: D;
}

export default AlertTitleTypeMap;
