import Breadcrumbs from "@suid/material/Breadcrumbs";
import ComponentInfo from "~/components/ComponentInfo";
import CollapsedExample from "./CollapsedExample";
import Example from "./Example";

export default function BreadcrumbsPage() {
  return (
    <ComponentInfo
      name={Breadcrumbs.name}
      examples={[Example, CollapsedExample]}
    />
  );
}
