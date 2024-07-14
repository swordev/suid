import { PopperUnstyledProps, PopperUnstyledTypeMap, TransitionProps } from ".";
import Portal from "../Portal";
import { TransitionContext } from "../Transition/TransitionContext";
import createComponentFactory from "../createComponentFactory";
import { createPopper } from "@popperjs/core";
import { Instance, Options } from "@popperjs/core";
import createElementRef from "@suid/system/createElementRef";
import createRef from "@suid/system/createRef";
import { InPropsOf } from "@suid/types";
import ownerDocument from "@suid/utils/ownerDocument";
import {
  createEffect,
  createMemo,
  createSignal,
  onMount,
  Show,
  splitProps,
} from "solid-js";

const $ = createComponentFactory<PopperUnstyledTypeMap>()({
  name: "MuiPopperUnstyled",
  selfPropNames: [
    "anchorEl",
    "children",
    "container",
    "direction",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "ref",
    "transition",
  ],
  propDefaults: ({ set }) =>
    set({
      direction: "ltr",
      disablePortal: false,
      keepMounted: false,
      placement: "bottom",
      transition: false,
      popperOptions: {},
    }),
});

type PopperUnstyledInProps = InPropsOf<PopperUnstyledTypeMap>;

function flipPlacement(
  placement: PopperUnstyledInProps["placement"],
  direction: PopperUnstyledInProps["direction"]
) {
  if (direction === "ltr") {
    return placement;
  }

  switch (placement) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return placement;
  }
}

function resolveAnchorEl(anchorEl: PopperUnstyledProps["anchorEl"]) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}

const PopperTooltip = function PopperTooltip(
  inProps: Omit<PopperUnstyledInProps, "keepMounted" | "transition"> & {
    TransitionProps?: TransitionProps;
  }
) {
  const [props, otherProps] = splitProps(inProps, [
    "anchorEl",
    "children",
    "direction",
    "disablePortal",
    "modifiers",
    "open",
    //"ownerState",
    "TransitionProps",
    "placement",
    "popperOptions",
    "popperRef",
  ]);

  const rtlPlacement = flipPlacement(props.placement, props.direction);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */
  const [placement, setPlacement] = createSignal(rtlPlacement);
  let destructors: (() => void)[] = [];

  const tooltip = createElementRef();
  const popperInstance = createRef<Instance | null>();

  createEffect<(() => void) | undefined>((prevDestructor) => {
    if (prevDestructor) {
      destructors = destructors.filter((v) => v !== prevDestructor);
      prevDestructor();
    }

    if (!props.anchorEl || !props.open) {
      return undefined;
    }

    const resolvedAnchorEl = resolveAnchorEl(props.anchorEl);

    if (process.env.NODE_ENV !== "production") {
      if (
        resolvedAnchorEl &&
        (resolvedAnchorEl as HTMLElement).nodeType === 1
      ) {
        const box = resolvedAnchorEl.getBoundingClientRect();

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
    }

    let popperModifiers: Options["modifiers"] = [
      {
        name: "preventOverflow",
        options: {
          altBoundary: props.disablePortal,
        },
      },
      {
        name: "flip",
        options: {
          altBoundary: props.disablePortal,
        },
      },
      {
        name: "onUpdate",
        enabled: true,
        phase: "afterWrite",
        fn: ({ state }) => {
          setPlacement(state.placement);
        },
      },
    ];

    if (props.modifiers != null) {
      popperModifiers = popperModifiers.concat(props.modifiers);
    }
    if (props.popperOptions && props.popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(props.popperOptions.modifiers);
    }

    const popper = createPopper(resolveAnchorEl(props.anchorEl)!, tooltip.ref, {
      placement: rtlPlacement,
      ...props.popperOptions,
      modifiers: popperModifiers,
    });

    popperInstance(popper);

    const destructor = () => {
      popper.destroy();
      popperInstance(null);
    };
    destructors.push(destructor);
    return destructor;
  });

  onMount(() => {
    if (popperInstance.ref) {
      popperInstance.ref.forceUpdate();
    }
  });

  const childProps = createMemo(() => ({
    placement: placement(),
    TransitionProps: props.TransitionProps,
  }));

  return (
    <div ref={tooltip} role="tooltip" {...otherProps}>
      {typeof props.children === "function"
        ? props.children(childProps())
        : props.children}
    </div>
  );
};

/**
 * Poppers rely on the 3rd party library [Popper.js](https://popper.js.org/docs/v2/) for positioning.
 *
 * Demos:
 *
 * - [Popper](https://mui.com/components/popper/)
 *
 * API:
 *
 * - [PopperUnstyled API](https://mui.com/api/popper-unstyled/)
 */
const PopperUnstyled = $.component(function PopperUnstyled({
  otherProps,
  props,
}) {
  const [exited, setExited] = createSignal(true);

  const returnNull = createMemo(
    () => !props.keepMounted && !props.open && (!props.transition || exited())
  );

  // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container
  const container = createMemo(
    () =>
      props.container ||
      (props.anchorEl
        ? ownerDocument(resolveAnchorEl(props.anchorEl) as HTMLElement).body
        : undefined)
  );

  return (
    <TransitionContext.Provider
      value={{
        get in() {
          return props.transition && props.open;
        },
        onEnter: () => {
          if (props.transition) setExited(false);
        },
        onExited: () => {
          if (props.transition) setExited(true);
        },
      }}
    >
      <Show when={!returnNull()}>
        <Portal disablePortal={props.disablePortal} container={container()}>
          <PopperTooltip
            anchorEl={props.anchorEl}
            direction={props.direction}
            disablePortal={props.disablePortal}
            modifiers={props.modifiers}
            open={props.transition ? !exited() : props.open}
            placement={props.placement}
            popperOptions={props.popperOptions}
            popperRef={props.popperRef}
            {...otherProps}
            style={{
              // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
              //position: "fixed", // [review] Don't required in SolidJS
              // Fix Popper.js display issue
              top: 0,
              left: 0,
              display:
                !props.open &&
                props.keepMounted &&
                (!props.transition || exited())
                  ? "none"
                  : (null as any),
              ...(otherProps.style && typeof otherProps.style !== "string"
                ? otherProps.style
                : {}),
            }}
          >
            {props.children}
          </PopperTooltip>
        </Portal>
      </Show>
    </TransitionContext.Provider>
  );
});

export default PopperUnstyled;
