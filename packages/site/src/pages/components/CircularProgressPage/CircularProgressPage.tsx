import CircularProgress from "@suid/material/CircularProgress";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "./Example";

export default function ButtonPage() {
  return (
    <ComponentInfo
      name={CircularProgress.name}
      docsName={"progress"}
      examples={[Example]}
    />
  );
}
