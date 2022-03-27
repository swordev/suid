import Alert from "@suid/material/Alert";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "./Example";

export default function AlertPage() {
  return <ComponentInfo name={Alert.name} examples={[Example]} />;
}
