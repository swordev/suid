import { TextField } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicTextFieldsExample from "./BasicTextFieldsExample";
import FormPropsTextFieldsExample from "./FormPropsTextFieldsExample";
import MultilineTextFieldsExample from "./MultilineTextFieldsExample";
import StateTextFieldsExample from "./StateTextFieldsExample";

export default function TextFieldPage() {
  return (
    <ComponentInfo
      name={TextField.name}
      docsName={"text-fields"}
      examples={[
        BasicTextFieldsExample,
        {
          title: "Form props",
          component: FormPropsTextFieldsExample,
        },
        {
          title: "Uncontrolled vs. Controlled",
          component: StateTextFieldsExample,
        },
        {
          title: "Multiline",
          component: MultilineTextFieldsExample,
        },
      ]}
    />
  );
}
