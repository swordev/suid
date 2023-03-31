import { Typography } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import CustomVariantExample from "./CustomVariantExample";
import TypesExample from "./TypesExample";

export default function TypographyPage() {
  return (
    <ComponentInfo
      name={Typography.name}
      examples={[TypesExample, CustomVariantExample]}
    />
  );
}
