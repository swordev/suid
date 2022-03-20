import Icon from "@suid/material/Icon";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "./Example";

export default function IconsPage() {
  return <ComponentInfo name={Icon.name} examples={[Example]} />;
}
