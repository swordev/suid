import { Popover } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicPopoverExample from "./BasicPopoverExample";
import MouseOverPopoverExample from "./MouseOverPopoverExample";

export default function PopoverPage() {
  return (
    <ComponentInfo
      name={Popover.name}
      examples={[BasicPopoverExample, MouseOverPopoverExample]}
    />
  );
}
