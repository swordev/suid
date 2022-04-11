import TextField from "@suid/material/TextField";
import ComponentInfo from "~/components/ComponentInfo";
import BasicTextFieldsExample from "./BasicTextFieldsExample";
import FormPropsTextFieldsExample from "./FormPropsTextFieldsExample";
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
      ]}
    />
  );
}
