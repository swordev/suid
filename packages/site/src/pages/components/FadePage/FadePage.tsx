import Fade from "@suid/material/Fade";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "./Example";

export default function FadePage() {
  return (
    <ComponentInfo
      name={Fade.name}
      docsName="transitions"
      examples={[
        {
          bgcolor: "contrasted",
          component: Example,
        },
      ]}
    />
  );
}
