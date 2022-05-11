import { BackdropProps } from "../Backdrop";
import { Theme } from "../styles";
import { ExtendModalUnstyledTypeMap } from "@suid/base/ModalUnstyled";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import { Component } from "solid-js";

export type ModalClassKey = keyof NonNullable<ModalTypeMap["props"]["classes"]>;
export type ModalClasses = Record<ModalClassKey, string>;
export type ModalTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiModal";
  defaultPropNames: "BackdropComponent";
  selfProps: {
    /**
     * A backdrop component. This prop enables custom backdrop rendering.
     * @default styled(Backdrop, {
     *   name: 'MuiModal',
     *   slot: 'Backdrop',
     *   overridesResolver: (props, styles) => {
     *     return styles.backdrop;
     *   },
     * })({
     *   zIndex: -1,
     * })
     */
    BackdropComponent?: Component<BackdropProps>;

    /**
     * Props applied to the [`Backdrop`](/api/backdrop/) element.
     */
    BackdropProps?: Partial<BackdropProps>;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
} & ExtendModalUnstyledTypeMap<{
  props: P & ModalTypeMap["selfProps"];
  defaultComponent: D;
}>;

export type ModalProps<
  D extends ST.ElementType = ModalTypeMap["defaultComponent"],
  P = {}
> = ST.OverrideProps<ModalTypeMap<P, D>, D>;

export default ModalProps;
