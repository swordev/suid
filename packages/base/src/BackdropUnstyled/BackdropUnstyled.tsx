import { BackdropUnstyledTypeMap } from ".";
import createComponentFactory from "../createComponentFactory";
import isHostComponent from "../utils/isHostComponent";
import { getBackdropUtilityClass } from "./backdropUnstyledClasses";
import Dynamic from "@suid/system/Dynamic";
import clsx from "clsx";

const $ = createComponentFactory<BackdropUnstyledTypeMap>()({
  name: "BackdropUnstyled",
  selfPropNames: [
    "children",
    "classes",
    "components",
    "componentsProps",
    "invisible",
  ],
  propDefaults: ({ set }) =>
    set({
      component: "div",
      components: {},
      componentsProps: {},
      invisible: false,
    }),
  utilityClass: getBackdropUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root", ownerState.invisible && "invisible"],
  }),
});

/**
 *
 * Demos:
 *
 * - [Backdrop](https://mui.com/components/backdrop/)
 *
 * API:
 *
 * - [BackdropUnstyled API](https://mui.com/api/backdrop-unstyled/)
 */
const BackdropUnstyled = $.component(function BackdropUnstyled({
  props,
  otherProps,
  allProps,
  classes,
}) {
  const Root = () => props.components.Root || otherProps.component;
  const rootProps = () =>
    (props.componentsProps.root || {}) as NonNullable<
      typeof props.componentsProps.root
    >;

  return (
    <Dynamic
      aria-hidden
      {...rootProps()}
      {...otherProps}
      {...(!isHostComponent(Root()) && {
        ownerState: allProps,
      })}
      component={Root()}
      class={clsx(classes.root, rootProps().class, otherProps.class)}
    >
      {props.children}
    </Dynamic>
  );
});

export default BackdropUnstyled;
