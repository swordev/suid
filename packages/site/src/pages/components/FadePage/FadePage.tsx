import Fade from "@suid/material/Fade";
import ComponentInfo from "~/components/ComponentInfo";
import SimpleFadeExample from "./SimpleFadeExample";

export default function FadePage() {
  return (
    <ComponentInfo
      name={Fade.name}
      docsName="transitions"
      examples={[
        {
          bgcolor: "contrasted",
          component: SimpleFadeExample,
        },
      ]}
    />
  );
}
