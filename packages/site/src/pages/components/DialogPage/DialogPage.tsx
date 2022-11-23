import { Dialog } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import AlertDialogExample from "./AlertDialogExample";
import AlertDialogSlideExample from "./AlertDialogSlideExample";
import FullScreenDialogExample from "./FullScreenDialogExample";
import SimpleDialogDemoExample from "./SimpleDialogDemoExample";

export default function DialogPage() {
  return (
    <ComponentInfo
      name={Dialog.name}
      docsName="lists"
      importInfo={[
        "Dialog",
        "DialogActions",
        "DialogContent",
        "DialogContentText",
        "DialogTitle",
      ]}
      examples={[
        SimpleDialogDemoExample,
        AlertDialogExample,
        AlertDialogSlideExample,
        FullScreenDialogExample,
      ]}
    />
  );
}
