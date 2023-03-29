import SvgIcon, { SvgIconProps } from "../SvgIcon";
import { JSXElement } from "solid-js";

export default function createSvgIcon(
  path: () => JSXElement,
  displayName: string
) {
  const Component = (props: SvgIconProps): JSXElement => (
    <SvgIcon data-testid={`${displayName}Icon`} {...props}>
      {path()}
    </SvgIcon>
  );

  return Component;
}
