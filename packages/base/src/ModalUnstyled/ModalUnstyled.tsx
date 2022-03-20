import { ModalUnstyledTypeMap } from ".";
import Portal from "../Portal";
import createComponentFactory from "../createComponentFactory";
import isHostComponent from "../utils/isHostComponent";
import ModalManager, { ariaHidden } from "./ModalManager";
import { Modal } from "./ModalManager";
import { getModalUtilityClass } from "./modalUnstyledClasses";
import createElementRef from "@suid/system/createElementRef";
import { ComponentInProps } from "@suid/types";
import clsx from "clsx";
import { createEffect, createSignal, JSX, onCleanup, Show } from "solid-js";
import { Dynamic } from "solid-js/web";

const $ = createComponentFactory<
  ModalUnstyledTypeMap,
  ComponentInProps<ModalUnstyledTypeMap> & {
    exited: boolean;
  }
>()({
  name: "ModalUnstyled",
  propDefaults: ({ set }) =>
    set({
      closeAfterTransition: false,
      component: "div",
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
      open: false,
    }),
  selfPropNames: [
    "BackdropComponent",
    "BackdropProps",
    "children",
    "classes",
    "closeAfterTransition",
    "components",
    "componentsProps",
    "container",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onBackdropClick",
    "onClose",
    "open",
  ],
  utilityClass: getModalUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root", !ownerState.open && ownerState.exited && "hidden"],
  }),
});

/*function getContainer<T>(container: T | (() => T)): T {
  return typeof container === "function"
    ? (container as Function)()
    : container;
}*/

// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const defaultManager = new ModalManager();

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
 * - [ModalUnstyled API](https://mui.com/api/modal-unstyled/)
 */
const ModalUnstyled = $.component(function ModalUnstyled({
  allProps,
  otherProps,
  classes,
  props,
}) {
  const element = createElementRef(otherProps);
  const manager = defaultManager;
  const [exited /*, setExited*/] = createSignal(true);

  //const getDoc = () => ownerDocument(element.ref);
  const getModal = () => {
    return {
      modalRef: element.ref,
      mount: element.ref,
    } as Modal;
  };

  const handleMounted = () => {
    //manager.mount(getModal(), { disableScrollLock: props.disableScrollLock });

    // Fix a bug on Chrome where the scroll isn't initially 0.
    element.ref.scrollTop = 0;
  };

  const handleOpen = () => {
    // [review]
    //const resolvedContainer = getContainer(props.container) || getDoc().body;
    //manager.add(getModal(), resolvedContainer as HTMLElement);

    // The element was already mounted.
    if (element.ref) {
      handleMounted();
    }
  };

  const isTopModal = () => manager.isTopModal(getModal());
  const handleClose = () => manager.remove(getModal());

  onCleanup(handleClose);

  createEffect((firstTime) => {
    if (firstTime) {
      if (props.open && isTopModal()) {
        handleMounted();
      } else {
        if (element.ref) ariaHidden(element.ref, true);
      }
    } else {
      if (props.open) {
        handleOpen();
      } else if (!props.closeAfterTransition) {
        handleClose();
      }
    }
    return false;
  }, true);

  //const ownerState = mergeProps(allProps, () => ({ exited: exited() }));

  const handleBackdropClick: JSX.EventHandler<HTMLElement, MouseEvent> = (
    event
  ) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    props.onBackdropClick?.(event);

    props.onClose?.(event, "backdropClick");
  };

  const handleKeyDown: JSX.EventHandler<HTMLDivElement, KeyboardEvent> = (
    event
  ) => {
    if (typeof otherProps.onKeyDown === "function")
      otherProps.onKeyDown?.(event);

    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== "Escape" || !isTopModal()) {
      return;
    }

    if (!props.disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();

      props.onClose?.(event, "escapeKeyDown");
    }
  };

  const Root = () => props.components.Root || otherProps.component;
  const rootProps = () => props.componentsProps.root || {};
  const noMount = () => !props.keepMounted && !props.open && exited();

  return (
    <Show when={!noMount()}>
      <Portal container={props.container} disablePortal={props.disablePortal}>
        {/*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */}
        <Dynamic
          {...otherProps}
          component={Root()}
          role="presentation"
          {...rootProps()}
          {...(!isHostComponent(Root()) && {
            //component: baseProps.component,
            ownerState: allProps,
          })}
          onKeyDown={handleKeyDown}
          className={clsx(
            classes.root,
            rootProps().className,
            otherProps.className
          )}
          ref={element}
        >
          <Show when={!props.hideBackdrop && !!props.BackdropComponent}>
            <Dynamic
              component={props.BackdropComponent}
              open={props.open}
              onClick={handleBackdropClick}
              {...(props.BackdropProps ?? {})}
            />
          </Show>
          {props.children}
        </Dynamic>
      </Portal>
    </Show>
  );
});

export default ModalUnstyled;
