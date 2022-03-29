import Box from "@suid/material/Box";
import ComponentInfo from "~/components/ComponentInfo";
import BoxSxExample from "./BoxSxExample";

export default function BoxPage() {
  return (
    <ComponentInfo
      name={Box.name}
      docsApiName={"components/box"}
      moreExamples={false}
      examples={[
        {
          component: BoxSxExample,
          title: false,
        },
      ]}
    />
  );
}
