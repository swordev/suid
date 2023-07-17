import { Alert } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import ActionAlerts from "./ActionAlertsExample";
import BasicAlertsExample from "./BasicAlertsExample";
import DescriptionAlerts from "./DescriptionAlertsExample";

export default function AlertPage() {
  return (
    <ComponentInfo
      name={Alert.name}
      importInfo={["Alert", "AlertTitle"]}
      examples={[
        BasicAlertsExample,
        { title: "Description", component: DescriptionAlerts },
        {
          title: "Actions",
          component: ActionAlerts,
        },
      ]}
    />
  );
}
