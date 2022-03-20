import Button from "@suid/material/Button";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "./Example";

export default function ButtonPage() {
  return (
    <ComponentInfo
      name={Button.name}
      docsName={"buttons"}
      examples={[Example]}
    />
  );
}
