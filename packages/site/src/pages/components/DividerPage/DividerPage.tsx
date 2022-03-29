import Divider from "@suid/material/Divider";
import ComponentInfo from "~/components/ComponentInfo";
import ListDividersExample from "./ListDividersExample";

export default function DividerPage() {
  return (
    <ComponentInfo
      name={Divider.name}
      docsName="dividers"
      examples={[ListDividersExample]}
    />
  );
}
