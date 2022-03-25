import Fab from "@suid/material/Fab";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "./Example";

export default function FloatingActionButtonPage() {
  return (
    <ComponentInfo
      name={Fab.name}
      examples={[Example]}
      docsName="floating-action-button"
    />
  );
}
