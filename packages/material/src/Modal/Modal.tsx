import { ModalTypeMap } from ".";
import Backdrop from "../Backdrop";
import styled from "../styles/styled";
import ModalUnstyled, { modalUnstyledClasses } from "@suid/base/ModalUnstyled";
import createComponentFactory from "@suid/base/createComponentFactory";
import isHostComponent from "@suid/base/utils/isHostComponent";
import createElementRef from "@suid/system/createElementRef";

const $ = createComponentFactory<ModalTypeMap>()({
  name: "MuiModal",
  selfPropNames: ["BackdropComponent", "BackdropProps"],
  propDefaults: ({ set }) =>
    set({
      component: "div",
      open: false,
      closeAfterTransition: false,
      components: {},
      componentsProps: {},
      disableAutoFocus: false,
      disableEnforceFocus: false,
      disableEscapeKeyDown: false,
      disablePortal: false,
      disableRestoreFocus: false,
      disableScrollLock: false,
      hideBackdrop: false,
      keepMounted: false,
    }),
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
})(({ theme }) => ({
  position: "fixed",
  zIndex: theme.zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
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
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */
const Modal = $.component(function Modal({ otherProps }) {
  const element = createElementRef(otherProps);
  return (
    <ModalUnstyled
      BackdropComponent={ModalBackdrop}
      {...otherProps}
      components={{
        Root: ModalRoot,
        ...otherProps.components,
      }}
      componentsProps={{
        root: {
          ...(otherProps.componentsProps.root ?? {}),
          ...((!otherProps.components.Root ||
            !isHostComponent(otherProps.components.Root)) &&
            {
              // ownerState: { ...componentsProps.root?.ownerState },
            }),
        },
      }}
      classes={otherProps.classes}
      ref={element}
    >
      {otherProps.children}
    </ModalUnstyled>
  );
});

export default Modal;
