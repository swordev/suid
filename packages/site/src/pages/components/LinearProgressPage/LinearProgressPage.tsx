import LinearProgress from "@suid/material/LinearProgress";
import ComponentInfo from "~/components/ComponentInfo";
import DeterminateExample from "./DeterminateExample";
import IndeterminateExample from "./IndeterminateExample";

export default function LinearProgressPage() {
  return (
    <ComponentInfo
      name={LinearProgress.name}
      docsName={"progress"}
      examples={[IndeterminateExample, DeterminateExample]}
    />
  );
}
