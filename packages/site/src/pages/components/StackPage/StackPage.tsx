import Stack from "@suid/material/Stack";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "./Example";

export default function StackPage() {
  return (
    <ComponentInfo
      name={Stack.name}
      examples={[
        {
          bgcolor: "contrasted",
          component: Example,
        },
      ]}
    />
  );
}
