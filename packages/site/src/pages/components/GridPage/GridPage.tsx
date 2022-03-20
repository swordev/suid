import Grid from "@suid/material/Grid";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "~/pages/components/GridPage/Example";

export default function GridPage() {
  return <ComponentInfo name={Grid.name} examples={[Example]} />;
}
