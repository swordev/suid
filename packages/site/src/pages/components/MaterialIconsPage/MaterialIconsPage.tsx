import { Link } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "./Example";

export default function MaterialIconsPage() {
  return (
    <ComponentInfo
      importInfo={false}
      name="Material Icons"
      body={
        <>
          Check the full list with +2.000 icons on{" "}
          <Link
            href="https://mui.com/components/material-icons/"
            target="_blank"
          >
            MUI docs
          </Link>
          .
        </>
      }
      examples={[Example]}
      moreExamples={false}
    />
  );
}
