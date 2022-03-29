import Icon from "@suid/material/Icon";
import ComponentInfo from "~/components/ComponentInfo";
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
      ]}
      docsName="icons"
    />
  );
}
