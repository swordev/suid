import Backdrop from "@suid/material/Backdrop";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "./Example";

export default function BackdropPage() {
  return <ComponentInfo name={Backdrop.name} examples={[Example]} />;
}
