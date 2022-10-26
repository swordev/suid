import { Grow } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import SimpleGrowExample from "./SimpleGrowExample";

export default function GrowPage() {
  return (
    <ComponentInfo
      name={Grow.name}
      docsName="transitions"
      examples={[SimpleGrowExample]}
    />
  );
}
