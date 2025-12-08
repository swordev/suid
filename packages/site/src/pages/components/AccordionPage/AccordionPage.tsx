import { Accordion } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicAccordionExample from "./BasicAccordionExample";
import ControlledAccordionExample from "./ControlledAccordionExample";

export default function AccordionPage() {
  return (
    <ComponentInfo
      name={Accordion.name}
      examples={[
        {
          component: BasicAccordionExample,
          title: "Basic Accordion",
        },
        {
          component: ControlledAccordionExample,
          title: "Controlled Accordion",
        },
      ]}
    />
  );
}
