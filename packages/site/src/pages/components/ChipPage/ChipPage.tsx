import Chip from "@suid/material/Chip";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "./Example";
import Example2 from "./Example2";

export default function ChipPage() {
  return (
    <ComponentInfo
      name={Chip.name}
      docsName={"chips"}
      examples={[Example, Example2]}
    />
  );
}
