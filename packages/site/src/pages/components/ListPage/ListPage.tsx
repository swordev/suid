import List from "@suid/material/List";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "~/pages/components/ListPage/Example";

export default function ListPage() {
  return (
    <ComponentInfo name={List.name} docsName="lists" examples={[Example]} />
  );
}
