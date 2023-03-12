import ComponentInfo from "~/components/ComponentInfo";
import BreakpointsAsArrayExample from "./BreakpointsAsArrayExample";
import BreakpointsAsObjectExample from "./BreakpointsAsObjectExample";
import Example from "./Example";
import ValueAsFunctionExample from "./ValueAsFunctionExample";

export default function TheSxPropPage() {
  return (
    <ComponentInfo
      importInfo={false}
      name="The sx prop"
      docsApiName="system/the-sx-prop"
      moreExamples={false}
      examples={[
        {
          bgcolor: "rgb(26, 32, 39)",
          component: Example,
        },
        {
          title: "Breakpoints as an object",
          component: BreakpointsAsObjectExample,
        },
        {
          title: "Breakpoints as an array",
          component: BreakpointsAsArrayExample,
        },
        {
          title: "Value as function",
          component: ValueAsFunctionExample,
        },
      ]}
    />
  );
}
