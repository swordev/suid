import { PortalProps } from "./PortalProps";
import { createMemo, Show } from "solid-js";
import { Portal as SolidPortal } from "solid-js/web";

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
  const container = createMemo(() => props.container ?? document.body);
  return (
    <Show when={!props.disablePortal} fallback={props.children}>
      <SolidPortal mount={container()}>{props.children}</SolidPortal>
    </Show>
  );
}

export default Portal;
