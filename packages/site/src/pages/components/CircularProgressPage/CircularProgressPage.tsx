import { CircularProgress } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import CircularColorExample from "./CircularColorExample";
import CircularIntegrationExample from "./CircularIntegrationExample";
import CircularProgressWithLabelExample from "./CircularProgressWithLabelExample";

export default function CircularProgressPage() {
  return (
    <ComponentInfo
      name={CircularProgress.name}
      docsName={"progress"}
      examples={[
        CircularColorExample,
        {
          title: "Interactive integration",
          component: CircularIntegrationExample,
        },
        {
          title: "Circular with label",
          component: CircularProgressWithLabelExample,
        },
      ]}
    />
  );
}
