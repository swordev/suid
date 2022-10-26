import { List } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicListExample from "~/pages/components/ListPage/BasicListExample";

export default function ListPage() {
  return (
    <ComponentInfo
      name={List.name}
      docsName="lists"
      importInfo={[
        "List",
        "ListItem",
        "ListItemAvatar",
        "ListItemButton",
        "ListItemIcon",
        "ListItemSecondaryAction",
        "ListItemText",
        "ListSubheader",
      ]}
      examples={[BasicListExample]}
    />
  );
}
