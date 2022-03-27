import Paper from "@suid/material/Paper";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "~/pages/components/PaperPage/Example";

export default function PaperPage() {
  return (
    <ComponentInfo
      name={Paper.name}
      examples={[
        {
          bgcolor: "contrasted",
          component: Example,
        },
      ]}
    />
  );
}
