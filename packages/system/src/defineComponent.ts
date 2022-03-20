import {
  DefaultComponentProps,
  ElementType,
  OverridableComponent,
  OverridableTypeMap,
} from "@suid/types";
import { JSXElement } from "solid-js";

function defineComponent<M extends OverridableTypeMap>(
  cb: (
    props: DefaultComponentProps<M> & { component?: ElementType }
  ) => JSXElement
): OverridableComponent<M> {
  return cb as any;
}

export default defineComponent;
