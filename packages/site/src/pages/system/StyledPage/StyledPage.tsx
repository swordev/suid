import ComponentInfo from "~/components/ComponentInfo";
import BasicUsageExample from "./BasicUsageExample";
import ThemeUsageExample from "./ThemeUsageExample";

export default function StyledPage() {
  return (
    <ComponentInfo
      importInfo={false}
      moreExamples={false}
      name="styled"
      docsApiName="system/styled"
      examples={[
        BasicUsageExample,
        {
          component: ThemeUsageExample,
          title: "Using the theme",
        },
      ]}
    />
  );
}
