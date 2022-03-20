import Typography from "@suid/material/Typography";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "~/pages/components/TypographyPage/Example";

export default function TypographyPage() {
  return <ComponentInfo name={Typography.name} examples={[Example]} />;
}
