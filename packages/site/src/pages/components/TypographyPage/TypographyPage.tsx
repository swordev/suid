import Typography from "@suid/material/Typography";
import ComponentInfo from "~/components/ComponentInfo";
import TypesExample from "./TypesExample";

export default function TypographyPage() {
  return <ComponentInfo name={Typography.name} examples={[TypesExample]} />;
}
