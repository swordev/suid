import { Icon } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import IconsExample from "./IconsExample";
import SvgIconSizeExample from "./SvgIconSizeExample";
import SvgIconsColorExample from "./SvgIconsColorExample";

export default function IconsPage() {
  return (
    <ComponentInfo
      name={Icon.name}
      examples={[
        {
          component: SvgIconsColorExample,
          title: "Color",
        },
        {
          title: "Size",
          component: SvgIconSizeExample,
        },
        {
          title: "Font Material Icons",
          component: IconsExample,
        },
      ]}
      docsName="icons"
    />
  );
}
