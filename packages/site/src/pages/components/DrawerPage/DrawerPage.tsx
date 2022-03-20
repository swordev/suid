import Drawer from "@suid/material/Drawer";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "~/pages/components/DrawerPage/Example";

export default function DrawerPage() {
  return (
    <ComponentInfo
      scope="material"
      name={Drawer.name}
      docsName={"drawers"}
      examples={[Example]}
    />
  );
}
