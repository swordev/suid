import Portal from "@suid/base/Portal";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "~/pages/components/PortalPage/Example";

export default function PortalPage() {
  return <ComponentInfo name={Portal.name} examples={[Example]} />;
}
