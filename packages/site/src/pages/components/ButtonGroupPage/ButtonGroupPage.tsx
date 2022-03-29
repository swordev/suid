import ButtonGroup from "@suid/material/ButtonGroup";
import ComponentInfo from "~/components/ComponentInfo";
import BasicButtonGroupExample from "./BasicButtonGroupExample";

export default function ButtonGroupPage() {
  return (
    <ComponentInfo
      name={ButtonGroup.name}
      examples={[BasicButtonGroupExample]}
    />
  );
}
