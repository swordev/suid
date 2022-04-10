import PortalProps from "./PortalProps";
import BasePortal from "@suid/base/Portal";

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * Demos:
 *
 * - [Portal](https://mui.com/components/portal/)
 *
 * API:
 *
 * - [Portal API](https://mui.com/api/portal/)
 */
export function Portal(props: PortalProps) {
  return <BasePortal {...props} />;
}

export default Portal;
