import defineComponent from "../defineComponent";
import { DynamicTypeMap } from "./DynamicProps";
import { ElementType } from "@suid/types";
import { Dynamic as DynamicBase } from "solid-js/web";

export const Dynamic = defineComponent<DynamicTypeMap>(function Dynamic(props) {
  if (!props.component) throw new Error(`Component prop is empty`);
  return (
    <DynamicBase
      {...(props as typeof props & {
        component: ElementType;
      })}
    />
  );
});

export default Dynamic;
