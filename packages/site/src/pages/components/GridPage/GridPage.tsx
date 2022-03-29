import Grid from "@suid/material/Grid";
import ComponentInfo from "~/components/ComponentInfo";
import FullWidthGridExample from "./FullWidthGridExample";

export default function GridPage() {
  return (
    <ComponentInfo
      name={Grid.name}
      examples={[
        {
          bgcolor: "contrasted",
          component: FullWidthGridExample,
        },
      ]}
    />
  );
}
