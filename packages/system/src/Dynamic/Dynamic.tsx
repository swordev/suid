import createClassListEffect from "../createClassListEffect";
import createElementRef from "../createElementRef";
import defineComponent from "../defineComponent";
import { DynamicTypeMap } from "./DynamicProps";
import { Dynamic as DynamicBase } from "solid-js/web";

export const Dynamic = defineComponent<DynamicTypeMap>(function Dynamic(props) {
  if (!props.component) throw new Error(`Component prop is empty`);
  const element = createElementRef(props);

  createClassListEffect(element, () => props.classList);
  return <DynamicBase {...props} ref={element} />;
});

export default Dynamic;
