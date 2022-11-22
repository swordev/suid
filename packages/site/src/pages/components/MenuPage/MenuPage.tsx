import { Menu } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import AccountMenuExample from "./AccountMenuExample";
import BasicMenuExample from "./BasicMenuExample";
import IconMenuExample from "./IconMenuExample";
import LongMenuExample from "./LongMenuExample";
import SimpleListMenuExample from "./SimpleListMenuExample";

export default function MenuPage() {
  return (
    <ComponentInfo
      name={Menu.name}
      importInfo={["Menu", "MenuItem", "MenuList"]}
      examples={[
        BasicMenuExample,
        IconMenuExample,
        SimpleListMenuExample,
        AccountMenuExample,
        LongMenuExample,
      ]}
    />
  );
}
