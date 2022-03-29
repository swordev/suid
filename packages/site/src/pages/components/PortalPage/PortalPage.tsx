import Portal from "@suid/base/Portal";
import ComponentInfo from "~/components/ComponentInfo";
import SimplePortal from "./SimplePortalExample";

export default function PortalPage() {
  return <ComponentInfo name={Portal.name} examples={[SimplePortal]} />;
}
