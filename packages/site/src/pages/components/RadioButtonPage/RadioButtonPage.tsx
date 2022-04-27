import Radio from "@suid/material/Radio";
import ComponentInfo from "~/components/ComponentInfo";
import ColorRadioButtonsExample from "./ColorRadioButtonsExample";
import ControlledRadioButtonGroupExample from "./ControlledRadioButtonGroupExample";
import RadioButtonsGroupExample from "./RadioButtonsGroupExample";
import SizeRadioButtontsExample from "./SizeRadioButtontsExample";

export default function ButtonPage() {
  return (
    <ComponentInfo
      name={Radio.name}
      docsName={"radio-button"}
      examples={[
        {
          title: "Radio group",
          component: RadioButtonsGroupExample,
        },
        {
          title: "Controlled",
          component: ControlledRadioButtonGroupExample,
        },
        {
          title: "Size",
          component: SizeRadioButtontsExample,
        },
        {
          title: "Color",
          component: ColorRadioButtonsExample,
        },
      ]}
    />
  );
}
