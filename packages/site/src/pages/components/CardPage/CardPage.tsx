import Card from "@suid/material/Card";
import ComponentInfo from "~/components/ComponentInfo";
import Example1 from "./Example1";
import Example2 from "./Example2";

export default function CardPage() {
  return (
    <ComponentInfo
      name={Card.name}
      docsName={"cards"}
      examples={[
        { component: Example1, bgcolor: "contrasted" },
        { component: Example2, bgcolor: "contrasted" },
      ]}
    />
  );
}
