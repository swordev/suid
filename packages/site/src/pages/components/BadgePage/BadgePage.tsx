import Badge from "@suid/material/Badge";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "~/pages/components/BadgePage/Example";
import Example2 from "~/pages/components/BadgePage/Example2";

export default function BadgePage() {
  return (
    <ComponentInfo
      name={Badge.name}
      docsName="badges"
      examples={[Example, Example2]}
    />
  );
}
