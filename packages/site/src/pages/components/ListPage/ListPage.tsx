import List from "@suid/material/List";
import ComponentInfo from "~/components/ComponentInfo";
import BasicListExample from "~/pages/components/ListPage/BasicListExample";

export default function ListPage() {
  return (
    <ComponentInfo
      name={List.name}
      docsName="lists"
      examples={[BasicListExample]}
    />
  );
}
