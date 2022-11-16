import { PopoverTypeMap } from ".";
import Grow from "../Grow";
import Modal from "../Modal";
import Paper from "../Paper";
import styled from "../styles/styled";
import PopoverProps, { PopoverOrigin } from "./PopoverProps";
import { getPopoverUtilityClass } from "./popoverClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import createRef from "@suid/system/createRef";
import debounce from "@suid/utils/debounce";
import ownerDocument from "@suid/utils/ownerDocument";
import ownerWindow from "@suid/utils/ownerWindow";
import clsx from "clsx";
import { createEffect, on, splitProps, mergeProps } from "solid-js";

const $ = createComponentFactory<PopoverTypeMap>()({
  name: "MuiPopover",
  selfPropNames: [
    "action",
    "anchorEl",
    "anchorOrigin",
    "anchorPosition",
    "anchorReference",
    "children",
    "classes",
    "container",
    "elevation",
    "marginThreshold",
    "onClose",
    "open",
    "PaperProps",
    "transformOrigin",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
  ],
  utilityClass: getPopoverUtilityClass,
  slotClasses: () => ({
    root: ["root"],
    paper: ["paper"],
  }),
});

export function getOffsetTop(
  rect: { height: number },
  vertical: PopoverOrigin["vertical"]
) {
  let offset = 0;

  if (typeof vertical === "number") {
    offset = vertical;
  } else if (vertical === "center") {
    offset = rect.height / 2;
  } else if (vertical === "bottom") {
    offset = rect.height;
  }

  return offset;
}

export function getOffsetLeft(
  rect: { width: number },
  horizontal: PopoverOrigin["horizontal"]
) {
  let offset = 0;

  if (typeof horizontal === "number") {
    offset = horizontal;
  } else if (horizontal === "center") {
    offset = rect.width / 2;
  } else if (horizontal === "right") {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin: PopoverOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical]
    .map((n) => (typeof n === "number" ? `${n}px` : n))
    .join(" ");
}

function resolveAnchorEl(
  anchorEl: PopoverProps["anchorEl"]
): undefined | Element {
  return typeof anchorEl === "function" ? (anchorEl as any)() : anchorEl;
}

const PopoverRoot = styled(Modal, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({});

const PopoverPaper = styled(Paper, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (props, styles) => styles.paper,
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
});

const Popover = $.defineComponent(function Popover(inProps) {
  const props = $.useThemeProps({ props: inProps });
  const [, other] = splitProps(props, [
    "action",
    "anchorEl",
    "anchorOrigin",
    "anchorPosition",
    "anchorReference",
    "children",
    "class",
    "container",
    "elevation",
    "marginThreshold",
    "open",
    "PaperProps",
    "transformOrigin",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
  ]);

  const baseProps = mergeProps(
    {
      anchorOrigin: {
        vertical: "top",
        horizontal: "left",
      },
      anchorReference: "anchorEl",
      elevation: 8,
      marginThreshold: 16,
      PaperProps: {},
      transformOrigin: {
        vertical: "top",
        horizontal: "left",
      },
      TransitionComponent: Grow,
      transitionDuration: "auto",
    },
    props
  );

  const [, TransitionProps] = splitProps(
    mergeProps(() => props.TransitionProps || {}),
    ["onEntering"]
  );
  const paperRef = createRef(() => baseProps.PaperProps.ref);
  const ownerState = mergeProps(props, {
    get anchorOrigin() {
      return baseProps.anchorOrigin;
    },
    get anchorReference() {
      return baseProps.anchorReference;
    },
    get elevation() {
      return baseProps.elevation;
    },
    get marginThreshold() {
      return baseProps.marginThreshold;
    },
    get PaperProps() {
      return baseProps.PaperProps;
    },
    get transformOrigin() {
      return baseProps.transformOrigin;
    },
    get TransitionComponent() {
      return baseProps.TransitionComponent;
    },
    get transitionDuration() {
      return baseProps.transitionDuration;
    },
    TransitionProps: TransitionProps,
  });

  const classes = $.useClasses(ownerState);

  // Returns the top/left offset of the position
  // to attach to on the anchor element (or body if none is provided)
  const getAnchorOffset = () => {
    if (baseProps.anchorReference === "anchorPosition") {
      if (process.env.NODE_ENV !== "production") {
        if (!props.anchorPosition) {
          console.error(
            "MUI: You need to provide a `anchorPosition` prop when using " +
              '<Popover anchorReference="anchorPosition" />.'
          );
        }
      }
      return props.anchorPosition;
    }

    const resolvedAnchorEl = resolveAnchorEl(props.anchorEl);

    // If an anchor element wasn't provided, just use the parent body element of this Popover
    const anchorElement =
      resolvedAnchorEl && resolvedAnchorEl.nodeType === 1
        ? resolvedAnchorEl
        : ownerDocument(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();

    if (process.env.NODE_ENV !== "production") {
      const box = anchorElement.getBoundingClientRect();

      if (
        process.env.NODE_ENV !== "test" &&
        box.top === 0 &&
        box.left === 0 &&
        box.right === 0 &&
        box.bottom === 0
      ) {
        console.warn(
          [
            "MUI: The `anchorEl` prop provided to the component is invalid.",
            "The anchor element should be part of the document layout.",
            "Make sure the element is present in the document or that it's not display none.",
          ].join("\n")
        );
      }
    }

    return {
      top:
        anchorRect.top +
        getOffsetTop(anchorRect, baseProps.anchorOrigin.vertical),
      left:
        anchorRect.left +
        getOffsetLeft(anchorRect, baseProps.anchorOrigin.horizontal),
    };
  };

  // Returns the base transform origin using the element
  const getTransformOrigin = (elemRect: { width: number; height: number }) => {
    return {
      vertical: getOffsetTop(elemRect, baseProps.transformOrigin.vertical),
      horizontal: getOffsetLeft(elemRect, baseProps.transformOrigin.horizontal),
    };
  };

  const getPositioningStyle = (element: HTMLElement) => {
    const elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight,
    };

    // Get the transform origin point on the element itself
    const elemTransformOrigin = getTransformOrigin(elemRect);

    if (baseProps.anchorReference === "none") {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin),
      };
    }

    // Get the offset of the anchoring element
    const anchorOffset = getAnchorOffset();

    // Calculate element positioning
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    let top = anchorOffset!.top - elemTransformOrigin.vertical;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    let left = anchorOffset!.left - elemTransformOrigin.horizontal;
    const bottom = top + elemRect.height;
    const right = left + elemRect.width;

    // Use the parent window of the anchorEl if provided
    const containerWindow = ownerWindow(resolveAnchorEl(props.anchorEl));

    // Window thresholds taking required margin into account
    const heightThreshold =
      containerWindow.innerHeight - baseProps.marginThreshold;
    const widthThreshold =
      containerWindow.innerWidth - baseProps.marginThreshold;

    // Check if the vertical axis needs shifting
    if (top < baseProps.marginThreshold) {
      const diff = top - baseProps.marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom > heightThreshold) {
      const diff = bottom - heightThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    }

    if (process.env.NODE_ENV !== "production") {
      if (
        elemRect.height > heightThreshold &&
        elemRect.height &&
        heightThreshold
      ) {
        console.error(
          [
            "MUI: The popover component is too tall.",
            `Some part of it can not be seen on the screen (${
              elemRect.height - heightThreshold
            }px).`,
            "Please consider adding a `max-height` to improve the user-experience.",
          ].join("\n")
        );
      }
    }

    // Check if the horizontal axis needs shifting
    if (left < baseProps.marginThreshold) {
      const diff = left - baseProps.marginThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right > widthThreshold) {
      const diff = right - widthThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    }

    return {
      top: `${Math.round(top)}px`,
      left: `${Math.round(left)}px`,
      transformOrigin: getTransformOriginValue(elemTransformOrigin),
    };
  };

  const setPositioningStyles = () => {
    const element = paperRef.current;

    if (!element) {
      return;
    }

    const positioning = getPositioningStyle(element);

    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
  };

  const handleEntering = () => {
    if (props.TransitionProps?.onEntering) {
      props.TransitionProps?.onEntering();
    }

    setPositioningStyles();
  };

  createEffect(() => {
    if (props.open) {
      setPositioningStyles();
    }
  });

  if (typeof props.action === "function") {
    props.action({
      updatePosition: () => {
        if (props.open) setPositioningStyles();
      },
    });
  }

  createEffect(
    on(
      () => [props.anchorEl, props.open, setPositioningStyles],
      () => {
        if (!props.open) {
          return undefined;
        }

        const handleResize = debounce(() => {
          setPositioningStyles();
        });

        const containerWindow = ownerWindow(resolveAnchorEl(props.anchorEl));
        containerWindow.addEventListener("resize", handleResize);
        return () => {
          handleResize.clear();
          containerWindow.removeEventListener("resize", handleResize);
        };
      }
    )
  );

  const transitionDuration = () => {
    let transitionDuration: undefined | typeof baseProps.transitionDuration =
      baseProps.transitionDuration;

    if (
      baseProps.transitionDuration === "auto" &&
      !(baseProps.TransitionComponent as any).muiSupportAuto
    ) {
      transitionDuration = undefined;
    }
    return transitionDuration as
      | undefined
      | Exclude<typeof baseProps.transitionDuration, "auto">;
  };

  // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container
  const container = () =>
    props.container ||
    (props.anchorEl
      ? ownerDocument(resolveAnchorEl(props.anchorEl)).body
      : undefined);

  return (
    <PopoverRoot
      BackdropProps={{ invisible: true }}
      class={clsx(classes.root, props.class)}
      container={container()}
      open={props.open}
      ownerState={ownerState}
      {...other}
    >
      <baseProps.TransitionComponent
        appear
        in={props.open}
        onEntering={handleEntering}
        timeout={transitionDuration()}
        {...TransitionProps}
      >
        <PopoverPaper
          elevation={baseProps.elevation}
          {...baseProps.PaperProps}
          ref={paperRef}
          class={clsx(classes.paper, baseProps.PaperProps.class)}
        >
          {props.children}
        </PopoverPaper>
      </baseProps.TransitionComponent>
    </PopoverRoot>
  );
});

export default Popover;
