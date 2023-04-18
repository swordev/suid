import { Stack } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicStackExample from "./BasicStackExample";
import DividerStackExample from "./DividerStackExample";

export default function StackPage() {
  return (
    <ComponentInfo
      name={Stack.name}
      examples={[
        {
          bgcolor: "contrasted",
          component: BasicStackExample,
        },
        {
          bgcolor: "contrasted",
          title: "Dividers",
          component: DividerStackExample,
        },
      ]}
    />
  );
}
