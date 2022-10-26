import { Button } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicButtonsExample from "./BasicButtonsExample";
import ButtonSizesExample from "./ButtonSizesExample";
import ColorButtonsExample from "./ColorButtonsExample";
import UploadButtonExample from "./UploadButtonExample";

export default function ButtonPage() {
  return (
    <ComponentInfo
      name={Button.name}
      docsName={"buttons"}
      examples={[
        BasicButtonsExample,
        ColorButtonsExample,
        ButtonSizesExample,
        UploadButtonExample,
      ]}
    />
  );
}
