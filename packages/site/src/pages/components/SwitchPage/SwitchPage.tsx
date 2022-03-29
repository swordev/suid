import Switch from "@suid/material/Switch";
import ComponentInfo from "~/components/ComponentInfo";
import ControlledExample from "~/pages/components/SwitchPage/ControlledExample";
import Example from "./Example";

export default function SwitchPage() {
  return (
    <ComponentInfo
      name={Switch.name}
      docsName="switches"
      examples={[Example, ControlledExample]}
    />
  );
}
