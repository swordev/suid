import Switch from "@suid/material/Switch";
import ComponentInfo from "~/components/ComponentInfo";
import BasicSwitchesExample from "./BasicSwitchesExample";
import ControlledSwitchExample from "./ControlledSwitchExample";

export default function SwitchPage() {
  return (
    <ComponentInfo
      name={Switch.name}
      docsName="switches"
      examples={[BasicSwitchesExample, ControlledSwitchExample]}
    />
  );
}
