import Popper from "@suid/material/Popper";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "~/pages/components/PopperPage/Example";
import Example2 from "~/pages/components/PopperPage/Example2";

export default function PopperPage() {
  return <ComponentInfo name={Popper.name} examples={[Example, Example2]} />;
}
