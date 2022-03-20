import { Theme } from "..";
import Modal from "../Modal";
import Paper from "../Paper";
import Slide from "../Slide";
import styled, { skipRootProps } from "../styles/styled";
import useTheme from "../styles/useTheme";
import capitalize from "../utils/capitalize";
import { DrawerProps, DrawerTypeMap } from "./DrawerProps";
import { getDrawerUtilityClass } from "./drawerClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import createElementRef from "@suid/system/createElementRef";
import clsx from "clsx";
import {
  children,
  createMemo,
  createSignal,
  Match,
  onMount,
  Switch,
} from "solid-js";

const $ = createComponentFactory<DrawerTypeMap>()({
  name: "MuiDrawer",
  selfPropNames: [
    "ModalProps",
    "PaperProps",
    "anchor",
    "children",
    "classes",
    "elevation",
    "onClose",
    "open",
    "transitionDuration",
    "variant",
  ],
  utilityClass: getDrawerUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root"],
    docked: [
      (ownerState.variant === "permanent" ||
        ownerState.variant === "persistent") &&
        "docked",
    ],
    modal: ["modal"],
    paper: [
      "paper",
      `paperAnchor${capitalize(ownerState.anchor)}`,
      ownerState.variant !== "temporary" &&
        `paperAnchorDocked${capitalize(ownerState.anchor)}`,
    ],
  }),
  propDefaults: ({ set }) => {
    const theme = useTheme();
    return set({
      component: "div",
      anchor: "left",
      elevation: 16,
      hideBackdrop: false,
      ModalProps: {},
      open: false,
      PaperProps: {},
      transitionDuration: {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
      },
      variant: "temporary",
    });
  },
});

const DrawerRoot = styled(Modal, {
  name: "MuiDrawer",
  slot: "Root",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer,
}));

const DrawerDockedRoot = styled("div", {
  skipProps: skipRootProps,
  name: "MuiDrawer",
  slot: "Docked",
  //skipVariantsResolver: false,
})({
  flex: "0 0 auto",
});

const DrawerPaper = styled(Paper, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.paper,
      styles[`paperAnchor${capitalize(ownerState.anchor)}`],
      ownerState.variant !== "temporary" &&
        styles[`paperAnchorDocked${capitalize(ownerState.anchor)}`],
    ];
  },
})(({ theme, ownerState }) => ({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: theme.zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0,
  ...(ownerState.anchor === "left" && {
    left: 0,
  }),
  ...(ownerState.anchor === "top" && {
    top: 0,
    left: 0,
    right: 0,
    height: "auto",
    maxHeight: "100%",
  }),
  ...(ownerState.anchor === "right" && {
    right: 0,
  }),
  ...(ownerState.anchor === "bottom" && {
    top: "auto",
    left: 0,
    bottom: 0,
    right: 0,
    height: "auto",
    maxHeight: "100%",
  }),
  ...(ownerState.anchor === "left" &&
    ownerState.variant !== "temporary" && {
      borderRight: `1px solid ${theme.palette.divider}`,
    }),
  ...(ownerState.anchor === "top" &&
    ownerState.variant !== "temporary" && {
      borderBottom: `1px solid ${theme.palette.divider}`,
    }),
  ...(ownerState.anchor === "right" &&
    ownerState.variant !== "temporary" && {
      borderLeft: `1px solid ${theme.palette.divider}`,
    }),
  ...(ownerState.anchor === "bottom" &&
    ownerState.variant !== "temporary" && {
      borderTop: `1px solid ${theme.palette.divider}`,
    }),
}));

type Anchor = NonNullable<DrawerProps["anchor"]>;

const oppositeDirection: {
  [key in Anchor]: string;
} = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up",
};

export function isHorizontal(anchor: Anchor) {
  return ["left", "right"].indexOf(anchor as any) !== -1;
}

export function getAnchor(theme: Theme, anchor: Anchor) {
  return theme.direction === "rtl" && isHorizontal(anchor)
    ? oppositeDirection[anchor]
    : anchor;
}

/**
 * The props of the [Modal](https://mui.com/api/modal/) component are available
 * when `variant="temporary"` is set.
 *
 * Demos:
 *
 * - [Drawers](https://mui.com/components/drawers/)
 *
 * API:
 *
 * - [Drawer API](https://mui.com/api/drawer/)
 */
const Drawer = $.component(function Drawer({
  allProps,
  props,
  otherProps,
  classes,
}) {
  // Let's assume that the Drawer will always be rendered on user space.
  // We use this state is order to skip the appear transition during the
  // initial mount of the component.

  const [mounted, setMounted] = createSignal(false);
  const element = createElementRef(otherProps);
  const theme = useTheme();
  const resolved = children(() => props.children);
  onMount(() => setMounted(true));

  const drawer = createMemo(() => (
    <DrawerPaper
      elevation={props.variant === "temporary" ? props.elevation : 0}
      square
      {...props.PaperProps}
      className={clsx(classes.paper, props.PaperProps.className)}
      ownerState={allProps as any}
    >
      {resolved}
    </DrawerPaper>
  ));

  const slidingDrawer = createMemo(() => {
    const anchorInvariant = getAnchor(theme, props.anchor) as Anchor;

    return (
      <Slide
        in={props.open}
        direction={oppositeDirection[anchorInvariant] as any}
        timeout={props.transitionDuration}
        appear={mounted()}
        {...(props.SlideProps ?? {})}
      >
        {drawer}
      </Slide>
    );
  });

  return (
    <Switch>
      <Match when={props.variant === "permanent"}>
        <DrawerDockedRoot
          {...otherProps}
          className={clsx(classes.root, classes.docked, otherProps.className)}
          ownerState={allProps}
          ref={element}
        >
          {drawer}
        </DrawerDockedRoot>
      </Match>
      <Match when={props.variant === "persistent"}>
        <DrawerDockedRoot
          {...otherProps}
          className={clsx(classes.root, classes.docked, otherProps.className)}
          ownerState={allProps}
          ref={element}
        >
          {slidingDrawer}
        </DrawerDockedRoot>
      </Match>
      {
        <Match when={props.variant === "temporary"}>
          <DrawerRoot
            BackdropProps={{
              ...(otherProps.BackdropProps ?? {}),
              ...(props.ModalProps.BackdropProps ?? {}),
              transitionDuration: props.transitionDuration,
            }}
            className={clsx(classes.root, classes.modal, otherProps.className)}
            open={props.open}
            ownerState={allProps as any}
            onClose={props.onClose}
            hideBackdrop={otherProps.hideBackdrop}
            ref={element}
            {...(otherProps ?? {})}
            {...(props.ModalProps ?? {})}
          >
            {slidingDrawer}
          </DrawerRoot>
        </Match>
      }
    </Switch>
  );
});

export default Drawer;
