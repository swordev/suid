import { JSXElement } from "solid-js";

export interface PortalProps {
  /**
   * The children to render into the `container`.
   */
  children?: JSXElement;
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container?: Element;
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal?: boolean;
}

export default PortalProps;
