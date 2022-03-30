import { Theme } from "./createTheme";
import stylePropsFactory from "./stylePropsFactory";
import { SxPropsObject } from "./sxProps";
import resolve from "@suid/css/resolve";

function resolveStyleProps(
  v: SxPropsObject,
  theme: Theme,
  propsFactory: Record<
    string,
    (value: any, theme: Theme) => any
  > = stylePropsFactory
): SxPropsObject {
  return resolve(v, (name, value) => {
    if (name in propsFactory) return propsFactory[name](value, theme);
  });
}

export default resolveStyleProps;
