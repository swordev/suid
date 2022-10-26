import { Fab } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import FloatingActionButtonSizeExample from "./FloatingActionButtonSizeExample";
import FloatingActionButtonsExample from "./FloatingActionButtonsExample";

export default function FloatingActionButtonPage() {
  return (
    <ComponentInfo
      name={Fab.name}
      examples={[
        {
          component: FloatingActionButtonsExample,
          title: "Basic FAB",
        },
        {
          title: "Size",
          component: FloatingActionButtonSizeExample,
        },
      ]}
      docsName="floating-action-button"
    />
  );
}
