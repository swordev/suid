import Chip from "@suid/material/Chip";
import ComponentInfo from "~/components/ComponentInfo";
import BasicChipsExample from "./BasicChipsExample";
import DeletableChipsExample from "./DeletableChipsExample";
import IconChipsExample from "./IconChipsExample";

export default function ChipPage() {
  return (
    <ComponentInfo
      name={Chip.name}
      docsName={"chips"}
      examples={[BasicChipsExample, DeletableChipsExample, IconChipsExample]}
    />
  );
}
