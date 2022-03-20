import createRef from "./createRef";

function createElementRef<T extends HTMLElement = HTMLElement>(props?: {
  ref?: unknown;
}) {
  return createRef<T>(props);
}

export default createElementRef;
