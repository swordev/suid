import ComponentInfo from "~/components/ComponentInfo";
import CustomColorExample from "./CustomColorExample";
import Example from "./Example";

export default function PalettePage() {
  return (
    <ComponentInfo
      name="Palette"
      importInfo={false}
      moreExamples={false}
      docsApiName="customization/palette"
      examples={[Example, CustomColorExample]}
    />
  );
}
