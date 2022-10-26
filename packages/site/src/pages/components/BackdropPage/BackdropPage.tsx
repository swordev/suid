import { Backdrop } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import SimpleBackdropExample from "./SimpleBackdropExample";

export default function BackdropPage() {
  return (
    <ComponentInfo
      name={Backdrop.name}
      examples={[
        {
          component: SimpleBackdropExample,
          title: false,
        },
      ]}
    />
  );
}
