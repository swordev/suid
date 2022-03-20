import Box from "@suid/material/Box";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "~/pages/components/BoxPage/Example";

export default function BoxPage() {
  return (
    <ComponentInfo
      name={Box.name}
      docsApiName={"components/box"}
      moreExamples={false}
      examples={[Example]}
    />
  );
}
