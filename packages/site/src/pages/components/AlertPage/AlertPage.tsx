import Alert from "@suid/material/Alert";
import ComponentInfo from "~/components/ComponentInfo";
import BasicAlertsExample from "./BasicAlertsExample";

export default function AlertPage() {
  return <ComponentInfo name={Alert.name} examples={[BasicAlertsExample]} />;
}
