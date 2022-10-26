import { Checkbox } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicCheckboxesExample from "./BasicCheckboxesExample";
import ControlledCheckboxExample from "./ControlledCheckboxExample";
import IconCheckboxesExample from "./IconCheckboxesExample";

export default function CheckboxPage() {
  return (
    <ComponentInfo
      name={Checkbox.name}
      docsName="checkboxes"
      examples={[
        BasicCheckboxesExample,
        { title: "Icon", component: IconCheckboxesExample },
        { title: "Controlled", component: ControlledCheckboxExample },
      ]}
    />
  );
}
