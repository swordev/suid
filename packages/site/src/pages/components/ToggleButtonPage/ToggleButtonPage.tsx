import ToggleButton from "@suid/material/ToggleButton";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "./Example";

export default function ToggleButtonPage() {
  return <ComponentInfo name={ToggleButton.name} examples={[Example]} />;
}
