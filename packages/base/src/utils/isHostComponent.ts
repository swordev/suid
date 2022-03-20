import { ElementType } from "@suid/types";
import { JSX } from "solid-js";

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(
  element: ElementType
): element is keyof JSX.IntrinsicElements {
  return typeof element === "string";
}

export default isHostComponent;
