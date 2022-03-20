import AppBar from "@suid/material/AppBar";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "./Example";

export default function AppBarPage() {
  return <ComponentInfo name={AppBar.name} examples={[Example]} />;
}
