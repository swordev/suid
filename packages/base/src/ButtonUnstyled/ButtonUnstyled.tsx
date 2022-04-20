import createComponentFactory from "../createComponentFactory";
import appendOwnerState from "../utils/appendOwnerState";
import {
  ButtonUnstyledOwnProps,
  ButtonUnstyledTypeMap,
} from "./ButtonUnstyledProps";
import { getButtonUnstyledUtilityClass } from "./buttonUnstyledClasses";
import useButton from "./useButton";
import clsx from "clsx";
import { mergeProps } from "solid-js";
import { Dynamic } from "solid-js/web";

const $ = createComponentFactory<
  ButtonUnstyledTypeMap,
  ButtonUnstyledTypeMap["props"] & {
    disabled?: boolean;
    focusVisible: boolean;
    active: boolean;
  }
>()({
  name: "ButtonUnstyled",
  selfPropNames: [],
  utilityClass: getButtonUnstyledUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      !!ownerState.disabled && "disabled",
      !!ownerState.focusVisible && "focusVisible",
      !!ownerState.active && "active",
    ],
  }),
});

export interface ButtonUnstyledOwnerState extends ButtonUnstyledOwnProps {
  focusVisible: boolean;
  active: boolean;
}

/**
 * The foundation for building custom-styled buttons.
 *
 * Demos:
 *
 * - [Buttons](https://mui.com/components/buttons/)
 *
 * API:
 *
 * - [ButtonUnstyled API](https://mui.com/api/button-unstyled/)
 */
const ButtonUnstyled = $.component(function ButtonUnstyled({
  otherProps,
  classes,
  props,
}) {
  const button = useButton(props);
  const ownerState = mergeProps(props, {
    get active() {
      return button.active;
    },
    get focusVisible() {
      return button.focusVisible;
    },
  });

  const ButtonRoot = () =>
    otherProps.component ?? otherProps.components?.Root ?? "button";

  const buttonRootProps = appendOwnerState(
    ButtonRoot,
    () => mergeProps(otherProps, otherProps.componentsProps?.root || {}),
    ownerState
  );

  return (
    <Dynamic
      component={ButtonRoot()}
      {...button.getRootProps()}
      {...buttonRootProps}
      className={clsx(
        classes.root,
        otherProps.className,
        buttonRootProps.className
      )}
    >
      {otherProps.children}
    </Dynamic>
  );
});

export default ButtonUnstyled;
