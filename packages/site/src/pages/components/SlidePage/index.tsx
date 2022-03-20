import Slide from "@suid/material/Slide";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "~/pages/components/SlidePage/Example";

export default function () {
  return <ComponentInfo component={Slide} examples={[Example]} />;
}
