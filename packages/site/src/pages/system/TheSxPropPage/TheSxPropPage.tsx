import ComponentInfo from "~/components/ComponentInfo";
import Example from "./Example";

export default function TheSxPropPage() {
  return (
    <ComponentInfo
      importInfo={false}
      name="The sx prop"
      docsApiName="system/the-sx-prop"
      moreExamples={false}
      examples={[
        {
          bgcolor: "rgb(26, 32, 39)",
          component: Example,
        },
      ]}
    />
  );
}
