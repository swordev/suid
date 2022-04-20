import isHostComponent from "./isHostComponent";
import { ElementType } from "@suid/types";
import { Accessor, mergeProps } from "solid-js";

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node, `ownerState` are not applied.
 * @param existingProps Props of the element.
 * @param ownerState
 */
export default function appendOwnerState(
  elementType: Accessor<ElementType>,
  existingProps: Accessor<Record<string, any>>,
  ownerState: object
) {
  const mergedOwnerState = mergeProps(
    () => existingProps().ownerState || {},
    ownerState
  );
  return mergeProps(existingProps, {
    get ownerState() {
      if (!isHostComponent(elementType())) return mergedOwnerState;
    },
  });
}
