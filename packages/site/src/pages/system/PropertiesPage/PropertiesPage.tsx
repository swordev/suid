import ComponentInfo from "~/components/ComponentInfo";
import BoxSysPropsExample from "./BoxSysPropsExample";

export default function PropertiesPage() {
  return (
    <ComponentInfo
      importInfo={false}
      name="Properties"
      docsApiName="system/properties"
      moreExamples={false}
      examples={[
        {
          title: "Box example",
          bgcolor: "contrasted",
          component: BoxSysPropsExample,
        },
      ]}
    />
  );
}
