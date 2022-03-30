import ComponentInfo from "~/components/ComponentInfo";
import DefaultPropsExample from "./DefaultPropsExample";

export default function StyledPage() {
  return (
    <ComponentInfo
      name="Components"
      importInfo={false}
      moreExamples={false}
      docsApiName="customization/components"
      examples={[DefaultPropsExample]}
    />
  );
}
