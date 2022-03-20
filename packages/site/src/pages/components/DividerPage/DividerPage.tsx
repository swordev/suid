import Divider from "@suid/material/Divider";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "~/pages/components/DividerPage/Example";

export default function DividerPage() {
  return (
    <ComponentInfo
      name={Divider.name}
      docsName="dividers"
      examples={[Example]}
    />
  );
}
