import Divider from "@suid/material/Divider";
import ComponentInfo from "~/components/ComponentInfo";
import ListDividersExample from "./ListDividersExample";
import MiddleDividersExample from "./MiddleDividersExample";

export default function DividerPage() {
  return (
    <ComponentInfo
      name={Divider.name}
      docsName="dividers"
      examples={[
        ListDividersExample,
        {
          title: "Middle divider",
          component: MiddleDividersExample,
          bgcolor: "contrasted",
        },
      ]}
    />
  );
}
