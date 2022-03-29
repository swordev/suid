import Button from "@suid/material/Button";
import ComponentInfo from "~/components/ComponentInfo";
import BasicButtonsExample from "./BasicButtonsExample";

export default function ButtonPage() {
  return (
    <ComponentInfo
      name={Button.name}
      docsName={"buttons"}
      examples={[BasicButtonsExample]}
    />
  );
}
