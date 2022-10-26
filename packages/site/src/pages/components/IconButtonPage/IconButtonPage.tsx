import { IconButton } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "./Example";

export default function IconButtonPage() {
  return (
    <ComponentInfo
      name={IconButton.name}
      docsName="icons"
      examples={[Example]}
    />
  );
}
