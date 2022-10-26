import { Badge } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BadgeVisibilityExample from "./BadgeVisibilityExample";
import SimpleBadgeExample from "./SimpleBadgeExample";

export default function BadgePage() {
  return (
    <ComponentInfo
      name={Badge.name}
      docsName="badges"
      examples={[SimpleBadgeExample, BadgeVisibilityExample]}
    />
  );
}
