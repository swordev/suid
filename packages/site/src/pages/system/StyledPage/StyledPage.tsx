import ComponentInfo from "~/components/ComponentInfo";
import Example1 from "./Example1";
import Example2 from "./Example2";

export default function StyledPage() {
  return (
    <ComponentInfo
      importInfo={false}
      moreExamples={false}
      name="styled"
      docsApiName="system/styled"
      examples={[Example1, Example2]}
    />
  );
}
