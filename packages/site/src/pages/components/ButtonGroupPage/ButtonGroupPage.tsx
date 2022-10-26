import { ButtonGroup } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicButtonGroupExample from "./BasicButtonGroupExample";
import GroupSizesColorsExample from "./GroupSizesColorsExample";
import VariantButtonGroupExample from "./VariantButtonGroupExample";

export default function ButtonGroupPage() {
  return (
    <ComponentInfo
      name={ButtonGroup.name}
      examples={[
        BasicButtonGroupExample,
        { title: "Button variants", component: VariantButtonGroupExample },
        { title: "Sizes and colors", component: GroupSizesColorsExample },
      ]}
    />
  );
}
