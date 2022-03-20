import stylePropsFactory from "./stylePropsFactory";
import { SxPropsObject } from "./sxProps";
import resolve from "@suid/css/resolve";

function resolveStyleProps(
  v: SxPropsObject,
  propsFactory: Record<string, (value: any) => any> = stylePropsFactory
): SxPropsObject {
  return resolve(v, (name, value) => {
    if (name in propsFactory) return propsFactory[name](value);
  });
}

export default resolveStyleProps;
