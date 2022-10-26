import { Slide } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import SimpleSlideExample from "./SimpleSlideExample";

export default function SlidePage() {
  return (
    <ComponentInfo
      name={Slide.name}
      docsName="transitions"
      examples={[SimpleSlideExample]}
    />
  );
}
