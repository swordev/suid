import { BottomNavigation } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicBottomNavigationExample from "./BasicBottomNavigationExample";
import UnlabeledBottomNavigationExample from "./UnlabeledBottomNavigationExample";

export default function BottomNavigationPage() {
  return (
    <ComponentInfo
      name={BottomNavigation.name}
      moreExamples={false}
      examples={[
        {
          component: BasicBottomNavigationExample,
          title: "Basic Navigation",
        },
        {
          component: UnlabeledBottomNavigationExample,
          title: "Unlabeled",
        },
      ]}
    />
  );
}
