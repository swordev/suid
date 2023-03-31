import { ModalTypeMap } from ".";
import Backdrop from "../Backdrop";
import styled from "../styles/styled";
import { modalUnstyledClasses } from "@suid/base/ModalUnstyled";
import ModalUnstyled from "@suid/base/ModalUnstyled";
import createComponentFactory from "@suid/base/createComponentFactory";
import isHostComponent from "@suid/base/utils/isHostComponent";
import { InPropsOf } from "@suid/types";
import { createSignal, splitProps, mergeProps } from "solid-js";

const $ = createComponentFactory<ModalTypeMap>()({
  name: "MuiModal",
  selfPropNames: ["BackdropComponent", "BackdropProps"],
});

export const modalClasses = modalUnstyledClasses;

const ModalRoot = styled("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      !ownerState.open && ownerState.exited && styles.hidden,
    ];
  },
})<
  InPropsOf<ModalTypeMap> & {
    exited: boolean;
  }
>(({ theme, ownerState }) => ({
  position: "fixed",
  zIndex: theme.zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  ...(!ownerState.open &&
    ownerState.exited && {
      visibility: "hidden",
    }),
}));

const ModalBackdrop = styled(Backdrop, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (props, styles) => {
    return styles.backdrop;
  },
})({
  zIndex: -1,
});

/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * *   [Dialog](https://mui.com/api/dialog/)
 * *   [Drawer](https://mui.com/api/drawer/)
 * *   [Menu](https://mui.com/api/menu/)
 * *   [Popover](https://mui.com/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](https://mui.com/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 *
 * Demos:
 *
 * - [Modal](https://mui.com/components/modal/)
 *
 * API:
 *
 * - [Modal API](https://mui.com/api/modal/)
 */
const Modal = $.defineComponent(function Modal(inProps) {
  const props = $.useThemeProps({ props: inProps });
  const [, other] = splitProps(props, [
    "BackdropComponent",
    "closeAfterTransition",
    "children",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
  ]);

  const baseProps = mergeProps(
    {
      BackdropComponent: ModalBackdrop,
      closeAfterTransition: false,
      components: {} as (typeof props)["components"] & {},
      componentsProps: {} as (typeof props)["componentsProps"] & {},
      disableAutoFocus: false,
      disableEnforceFocus: false,
      disableEscapeKeyDown: false,
      disablePortal: false,
      disableRestoreFocus: false,
      disableScrollLock: false,
      hideBackdrop: false,
      keepMounted: false,
    },
    props
  );

  const [exited] = createSignal(true);

  const commonProps = {
    get closeAfterTransition() {
      return baseProps.closeAfterTransition;
    },
    get disableAutoFocus() {
      return baseProps.disableAutoFocus;
    },
    get disableEnforceFocus() {
      return baseProps.disableEnforceFocus;
    },
    get disableEscapeKeyDown() {
      return baseProps.disableEscapeKeyDown;
    },
    get disablePortal() {
      return baseProps.disablePortal;
    },
    get disableRestoreFocus() {
      return baseProps.disableRestoreFocus;
    },
    get disableScrollLock() {
      return baseProps.disableScrollLock;
    },
    get hideBackdrop() {
      return baseProps.hideBackdrop;
    },
    get keepMounted() {
      return baseProps.keepMounted;
    },
  };

  const ownerState = mergeProps(props, commonProps, {
    get exited() {
      return exited();
    },
  });

  return (
    <ModalUnstyled
      components={mergeProps({ Root: ModalRoot }, () => baseProps.components)}
      componentsProps={{
        get root() {
          return mergeProps(
            () => baseProps.componentsProps.root || {},
            () =>
              ((!baseProps.components.Root ||
                !isHostComponent(baseProps.components.Root)) && {
                get ownerState() {
                  return (
                    (baseProps.componentsProps.root as any)?.ownerState || {}
                  );
                },
              }) ||
              {}
          );
        },
      }}
      BackdropComponent={baseProps.BackdropComponent}
      {...other}
      classes={ownerState.classes}
      {...commonProps}
    >
      {props.children}
    </ModalUnstyled>
  );
});

export default Modal;
