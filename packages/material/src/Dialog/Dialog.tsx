import { DialogTypeMap } from ".";
import Backdrop from "../Backdrop";
import Fade from "../Fade";
import Modal from "../Modal";
import Paper from "../Paper";
import styled from "../styles/styled";
import useTheme from "../styles/useTheme";
import DialogContext from "./DialogContext";
import { getDialogUtilityClass } from "./dialogClasses";
import dialogClasses from "./dialogClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { Breakpoint } from "@suid/system";
import createRef from "@suid/system/createRef";
import { EventParam, PropsOf } from "@suid/types";
import { createUniqueId } from "@suid/utils";
import capitalize from "@suid/utils/capitalize";
import clsx from "clsx";
import { createMemo, splitProps, mergeProps } from "solid-js";

type OwnerState = PropsOf<DialogTypeMap>;

const $ = createComponentFactory<DialogTypeMap>()({
  name: "MuiDialog",
  selfPropNames: [
    "aria-describedby",
    "aria-labelledby",
    "children",
    "classes",
    "disableEscapeKeyDown",
    "fullScreen",
    "fullWidth",
    "maxWidth",
    "onBackdropClick",
    "onClose",
    "open",
    "PaperComponent",
    "PaperProps",
    "scroll",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
  ],
  utilityClass: getDialogUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root"],
    container: ["container", `scroll${capitalize(ownerState.scroll)}`],
    paper: [
      "paper",
      `paperScroll${capitalize(ownerState.scroll)}`,
      `paperWidth${capitalize(String(ownerState.maxWidth))}`,
      ownerState.fullWidth && "paperFullWidth",
      ownerState.fullScreen && "paperFullScreen",
    ],
  }),
});

const DialogBackdrop = styled(Backdrop, {
  name: "MuiDialog",
  slot: "Backdrop",
  //overrides: (props, styles) => styles.backdrop,
})({
  // Improve scrollable dialog support.
  zIndex: -1,
});
const DialogRoot = styled(Modal, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<OwnerState>({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important" as any,
  },
});

const DialogContainer = styled("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.container, styles[`scroll${capitalize(ownerState.scroll)}`]];
  },
})<OwnerState>(({ ownerState }) => ({
  height: "100%",
  "@media print": {
    height: "auto",
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  ...(ownerState.scroll === "paper" && {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  ...(ownerState.scroll === "body" && {
    overflowY: "auto",
    overflowX: "hidden",
    textAlign: "center",
    "&:after": {
      content: '""',
      display: "inline-block",
      verticalAlign: "middle",
      height: "100%",
      width: "0",
    },
  }),
}));

const DialogPaper = styled(Paper, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.paper,
      styles[`scrollPaper${capitalize(ownerState.scroll)}`],
      styles[`paperWidth${capitalize(String(ownerState.maxWidth))}`],
      ownerState.fullWidth && styles.paperFullWidth,
      ownerState.fullScreen && styles.paperFullScreen,
    ];
  },
})<OwnerState>(({ theme, ownerState }) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto", // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none",
  },
  ...(ownerState.scroll === "paper" && {
    display: "flex",
    flexDirection: "column",
    maxHeight: "calc(100% - 64px)",
  }),
  ...(ownerState.scroll === "body" && {
    display: "inline-block",
    verticalAlign: "middle",
    textAlign: "left", // 'initial' doesn't work on IE11
  }),
  ...(!ownerState.maxWidth && {
    maxWidth: "calc(100% - 64px)",
  }),
  ...(ownerState.maxWidth === "xs" && {
    maxWidth:
      theme.breakpoints.unit === "px"
        ? Math.max(theme.breakpoints.values.xs, 444)
        : `${theme.breakpoints.values.xs}${theme.breakpoints.unit}`,
    [`&.${dialogClasses.paperScrollBody}`]: {
      [theme.breakpoints.down(
        Math.max(theme.breakpoints.values.xs, 444) + 32 * 2
      )]: {
        maxWidth: "calc(100% - 64px)",
      },
    },
  }),
  ...(ownerState.maxWidth !== "xs" && {
    maxWidth: `${theme.breakpoints.values[ownerState.maxWidth as Breakpoint]}${
      theme.breakpoints.unit
    }`,
    [`&.${dialogClasses.paperScrollBody}`]: {
      [theme.breakpoints.down(
        theme.breakpoints.values[ownerState.maxWidth as Breakpoint] + 32 * 2
      )]: {
        maxWidth: "calc(100% - 64px)",
      },
    },
  }),
  ...(ownerState.fullWidth && {
    width: "calc(100% - 64px)",
  }),
  ...(ownerState.fullScreen && {
    margin: 0,
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    maxHeight: "none",
    borderRadius: 0,
    [`&.${dialogClasses.paperScrollBody}`]: {
      margin: 0,
      maxWidth: "100%",
    },
  }),
}));

/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 *
 * Demos:
 *
 * - [Dialogs](https://mui.com/components/dialogs/)
 *
 * API:
 *
 * - [Dialog API](https://mui.com/api/dialog/)
 * - inherits [Modal API](https://mui.com/api/modal/)
 */
const Dialog = $.defineComponent(function Dialog(inProps) {
  const ref = createRef(inProps);
  const props = $.useThemeProps({ props: inProps });
  const theme = useTheme();
  const defaultTransitionDuration = {
    get enter() {
      return theme.transitions.duration.enteringScreen;
    },
    get exit() {
      return theme.transitions.duration.leavingScreen;
    },
  };

  const [, other] = splitProps(props, [
    "aria-describedby",
    "aria-labelledby",
    "BackdropComponent",
    "BackdropProps",
    "children",
    "class",
    "disableEscapeKeyDown",
    "fullScreen",
    "fullWidth",
    "maxWidth",
    "onBackdropClick",
    "onClose",
    "open",
    "PaperComponent",
    "PaperProps",
    "scroll",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
  ]);

  const baseProps = mergeProps(
    {
      disableEscapeKeyDown: false,
      fullScreen: false,
      fullWidth: false,
      maxWidth: "sm",
      PaperComponent: Paper,
      PaperProps: {},
      scroll: "paper",
      TransitionComponent: Fade,
      transitionDuration: defaultTransitionDuration,
    },
    props
  );

  const ownerState = baseProps;

  const classes = $.useClasses(ownerState);

  let backdropClick: boolean | null = null;

  const handleMouseDown = (event: EventParam<HTMLElement, MouseEvent>) => {
    // We don't want to close the dialog when clicking the dialog content.
    // Make sure the event starts and ends on the same DOM element.
    backdropClick = event.target === event.currentTarget;
  };
  const handleBackdropClick = (event: EventParam<HTMLElement, MouseEvent>) => {
    // Ignore the events not coming from the "backdrop".
    if (!backdropClick) {
      return;
    }

    backdropClick = null;

    if (props.onBackdropClick) {
      props.onBackdropClick(event);
    }

    if (props.onClose) {
      props.onClose(event, "backdropClick");
    }
  };

  const ariaLabelledby = createUniqueId(() => props["aria-labelledby"]);
  const dialogContextValue = createMemo(() => {
    return { titleId: ariaLabelledby() };
  });

  return (
    <DialogRoot
      class={clsx(classes.root, props.class)}
      BackdropProps={mergeProps(
        {
          get transitionDuration() {
            return baseProps.transitionDuration;
          },
          get as() {
            return props.BackdropComponent;
          },
        },
        () => props.BackdropProps
      )}
      closeAfterTransition
      BackdropComponent={DialogBackdrop}
      disableEscapeKeyDown={baseProps.disableEscapeKeyDown}
      onClose={props.onClose}
      open={props.open}
      ref={ref}
      onClick={handleBackdropClick}
      ownerState={ownerState}
      {...other}
    >
      <baseProps.TransitionComponent
        appear
        in={props.open}
        timeout={baseProps.transitionDuration}
        // [pending]
        //role="presentation"
        {...props.TransitionProps}
      >
        {/* roles are applied via cloneElement from TransitionComponent */}
        {/* roles needs to be applied on the immediate child of Modal or it'll inject one */}
        <DialogContainer
          class={clsx(classes.container)}
          onMouseDown={handleMouseDown}
          ownerState={ownerState}
        >
          <DialogPaper
            component={baseProps.PaperComponent}
            elevation={24}
            role="dialog"
            aria-describedby={props["aria-describedby"]}
            aria-labelledby={ariaLabelledby()}
            {...baseProps.PaperProps}
            class={clsx(classes.paper, baseProps.PaperProps.class)}
            ownerState={ownerState}
          >
            <DialogContext.Provider value={dialogContextValue()}>
              {props.children}
            </DialogContext.Provider>
          </DialogPaper>
        </DialogContainer>
      </baseProps.TransitionComponent>
    </DialogRoot>
  );
});

export default Dialog;
