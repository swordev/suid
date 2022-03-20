import { BackdropProps } from "../Backdrop";
import { Theme } from "../styles";
import { ModalUnstyledTypeMap } from "@suid/base/ModalUnstyled";
import SxProps from "@suid/system/sxProps";
import { ElementType, OverrideProps } from "@suid/types";
import { JSXElement } from "solid-js";

export type ModalTypeMap<D extends ElementType = "div", P = {}> = {
  name: "MuiModal";
  defaultPropNames: "components" | "componentsProps";
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
    BackdropComponent?: (props: BackdropProps) => JSXElement;
    /**
     * Props applied to the [`Backdrop`](/api/backdrop/) element.
     */
    BackdropProps?: Partial<BackdropProps>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & ModalTypeMap["selfProps"] & ModalUnstyledTypeMap["props"];
  defaultComponent: D;
};

export type ModalRootProps = NonNullable<
  ModalTypeMap["props"]["componentsProps"]
>["root"];

export type ModalClassKey = keyof NonNullable<ModalTypeMap["props"]["classes"]>;

export type ModalClasses = Record<ModalClassKey, string>;

export type ModalProps<
  D extends ElementType = ModalTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<ModalTypeMap<D, P>, D>;

export default ModalProps;
