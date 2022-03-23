import useMediaQuery from "@suid/material/useMediaQuery";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "~/pages/components/useMediaQueryPage/Example";

export default function useMediaQueryPage() {
  return (
    <ComponentInfo
      name={useMediaQuery.name}
      docsApiName="components/use-media-query"
      examples={[Example]}
      moreExamples={false}
    />
  );
}
