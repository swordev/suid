import { Popper } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import SimplePopperExample from "./SimplePopperExample";
import TransitionsPopperExample from "./TransitionsPopperExample";

export default function PopperPage() {
  return (
    <ComponentInfo
      name={Popper.name}
      examples={[SimplePopperExample, TransitionsPopperExample]}
    />
  );
}
