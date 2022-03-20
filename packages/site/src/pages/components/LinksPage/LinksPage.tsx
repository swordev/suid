import Link from "@suid/material/Link";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "~/pages/components/LinksPage/Example";

export default function LinksPage() {
  return (
    <ComponentInfo name={Link.name} docsName="links" examples={[Example]} />
  );
}
