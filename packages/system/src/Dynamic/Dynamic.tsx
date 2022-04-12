import defineComponent from "../defineComponent";
import { DynamicTypeMap } from "./DynamicProps";
import { Dynamic as DynamicBase } from "solid-js/web";

export const Dynamic = defineComponent<DynamicTypeMap>(function Dynamic(props) {
  if (!props.component) throw new Error(`Component prop is empty`);
  return <DynamicBase {...props} />;
});

export default Dynamic;
