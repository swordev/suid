import { Stack } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicStackExample from "./BasicStackExample";

export default function StackPage() {
  return (
    <ComponentInfo
      name={Stack.name}
      examples={[
        {
          bgcolor: "contrasted",
          component: BasicStackExample,
        },
      ]}
    />
  );
}
