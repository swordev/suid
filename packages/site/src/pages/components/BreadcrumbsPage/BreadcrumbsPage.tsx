import { Breadcrumbs } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicBreadcrumbsExample from "./BasicBreadcrumbsExample";
import CollapsedBreadcrumbsExample from "./CollapsedBreadcrumbsExample";

export default function BreadcrumbsPage() {
  return (
    <ComponentInfo
      name={Breadcrumbs.name}
      examples={[BasicBreadcrumbsExample, CollapsedBreadcrumbsExample]}
    />
  );
}
