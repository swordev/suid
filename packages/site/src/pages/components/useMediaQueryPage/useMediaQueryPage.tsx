import { useMediaQuery } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import SimpleMediaQueryExample from "./SimpleMediaQueryExample";

export default function useMediaQueryPage() {
  return (
    <ComponentInfo
      name={useMediaQuery.name}
      docsApiName="components/use-media-query"
      examples={[SimpleMediaQueryExample]}
      moreExamples={false}
    />
  );
}
