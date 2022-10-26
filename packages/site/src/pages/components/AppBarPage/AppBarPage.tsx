import { AppBar } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicAppBarExample from "./BasicAppBarExample";

export default function AppBarPage() {
  return (
    <ComponentInfo
      name={AppBar.name}
      examples={[
        {
          bgcolor: "contrasted",
          component: BasicAppBarExample,
        },
      ]}
    />
  );
}
