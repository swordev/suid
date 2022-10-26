import { Paper } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicPaperExample from "./BasicPaperExample";

export default function PaperPage() {
  return (
    <ComponentInfo
      name={Paper.name}
      examples={[
        {
          bgcolor: "contrasted",
          component: BasicPaperExample,
        },
      ]}
    />
  );
}
