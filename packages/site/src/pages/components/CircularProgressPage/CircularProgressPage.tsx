import CircularProgress from "@suid/material/CircularProgress";
import ComponentInfo from "~/components/ComponentInfo";
import CircularColorExample from "./CircularColorExample";

export default function CircularProgressPage() {
  return (
    <ComponentInfo
      name={CircularProgress.name}
      docsName={"progress"}
      examples={[CircularColorExample]}
    />
  );
}
