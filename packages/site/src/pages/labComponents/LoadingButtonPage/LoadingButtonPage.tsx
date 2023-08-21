import { LoadingButton } from "@suid/lab";
import ComponentInfo from "~/components/ComponentInfo";
import BasicLoadingButtonsExample from "./BasicButtonsExample";
import ButtonSizesExample from "./ButtonSizesExample";
import ColorLoadingButtonsExample from "./ColorLoadingButtonsExample";

export default function LoadingButtonPage() {
  return (
    <ComponentInfo
      name={LoadingButton.name}
      scope={"lab"}
      docsName={"loading-buttons"}
      examples={[
        BasicLoadingButtonsExample,
        ColorLoadingButtonsExample,
        ButtonSizesExample,
      ]}
    />
  );
}
