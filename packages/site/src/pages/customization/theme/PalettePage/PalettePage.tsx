import ComponentInfo from "~/components/ComponentInfo";
import Example from "./Example";

export default function StyledPage() {
  return (
    <ComponentInfo
      name="Palette"
      importInfo={false}
      moreExamples={false}
      docsApiName="customization/palette"
      examples={[Example]}
    />
  );
}
