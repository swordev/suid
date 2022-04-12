import ToggleButton from "@suid/material/ToggleButton";
import ComponentInfo from "~/components/ComponentInfo";
import ColorToggleButtonExample from "./ColorToggleButtonExample";
import ExclusiveSelectionExample from "./ExclusiveSelectionExample";

export default function ToggleButtonPage() {
  return (
    <ComponentInfo
      name={ToggleButton.name}
      examples={[
        ExclusiveSelectionExample,
        {
          title: "Color",
          component: ColorToggleButtonExample,
        },
      ]}
    />
  );
}
