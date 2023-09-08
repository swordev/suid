import { Chip } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicChipsExample from "./BasicChipsExample";
import CustomDeleteIconChipsExample from "./CustomDeleteIconChipsExample";
import DeletableChipsExample from "./DeletableChipsExample";
import IconChipsExample from "./IconChipsExample";

export default function ChipPage() {
  return (
    <ComponentInfo
      name={Chip.name}
      docsName={"chips"}
      examples={[
        BasicChipsExample,
        DeletableChipsExample,
        IconChipsExample,
        {
          title: "Custom delete icon",
          component: CustomDeleteIconChipsExample,
        },
      ]}
    />
  );
}
