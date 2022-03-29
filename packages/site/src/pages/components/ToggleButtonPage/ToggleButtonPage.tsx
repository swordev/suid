import ToggleButton from "@suid/material/ToggleButton";
import ComponentInfo from "~/components/ComponentInfo";
import ExclusiveSelectionExample from "./ExclusiveSelectionExample";

export default function ToggleButtonPage() {
  return (
    <ComponentInfo
      name={ToggleButton.name}
      examples={[ExclusiveSelectionExample]}
    />
  );
}
