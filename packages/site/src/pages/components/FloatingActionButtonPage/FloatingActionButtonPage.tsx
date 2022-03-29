import Fab from "@suid/material/Fab";
import ComponentInfo from "~/components/ComponentInfo";
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
      ]}
      docsName="floating-action-button"
    />
  );
}
