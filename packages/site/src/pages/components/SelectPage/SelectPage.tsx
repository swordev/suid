import { Select } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicSelectExample from "./BasicSelectExample";
import DynamicSelectExample from "./DynamicSelectExample";
import MultipleSelectCheckmarksExample from "./MultipleSelectCheckmarksExample";
import MultipleSelectChipExample from "./MultipleSelectChipExample";
import SelectAutoWidthExample from "./SelectAutoWidthExample";
import SelectOtherPropsExample from "./SelectOtherPropsExample";
import SelectVariantsExample from "./SelectVariantsExample";

export default function SelectPage() {
  return (
    <ComponentInfo
      name={Select.name}
      examples={[
        BasicSelectExample,
        SelectVariantsExample,
        SelectAutoWidthExample,
        SelectOtherPropsExample,
        MultipleSelectCheckmarksExample,
        MultipleSelectChipExample,
        DynamicSelectExample,
      ]}
    />
  );
}
