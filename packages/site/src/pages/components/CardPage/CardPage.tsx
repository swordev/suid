import Card from "@suid/material/Card";
import ComponentInfo from "~/components/ComponentInfo";
import BasicCardExample from "./BasicCardExample";
import MediaControlCardExample from "./MediaControlCardExample";

export default function CardPage() {
  return (
    <ComponentInfo
      name={Card.name}
      docsName={"cards"}
      examples={[
        { component: BasicCardExample, bgcolor: "contrasted" },
        { component: MediaControlCardExample, bgcolor: "contrasted" },
      ]}
    />
  );
}
