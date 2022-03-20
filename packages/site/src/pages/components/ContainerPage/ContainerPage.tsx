import Container from "@suid/material/Container";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "~/pages/components/ContainerPage/Example";

export default function ContainerPage() {
  return <ComponentInfo name={Container.name} examples={[Example]} />;
}
