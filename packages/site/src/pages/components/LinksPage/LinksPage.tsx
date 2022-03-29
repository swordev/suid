import Link from "@suid/material/Link";
import ComponentInfo from "~/components/ComponentInfo";
import BasicLinksExample from "./BasicLinksExample";

export default function LinksPage() {
  return (
    <ComponentInfo
      name={Link.name}
      docsName="links"
      examples={[BasicLinksExample]}
    />
  );
}
