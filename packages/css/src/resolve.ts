import {
  isGlobalSelector,
  isKeyframes,
  isMediaQuery,
  isSelector,
} from "./assert";

function resolve(
  css: Record<string, any>,
  onProp: (name: string, value: any) => Record<string, any> | void | undefined,
  cssTarget: Record<string, any> = {}
) {
  for (const name in css) {
    const value = css[name];
    if (isGlobalSelector(name)) {
      cssTarget[name] = resolve(value, onProp);
    } else if (isMediaQuery(name)) {
      cssTarget[name] = resolve(value, onProp);
    } else if (isKeyframes(name)) {
      cssTarget[name] = {};
      for (const v in value) {
        cssTarget[name][v] = resolve(value[v], onProp);
      }
    } else if (isSelector(name)) {
      cssTarget[name] = resolve(value, onProp);
    } else {
      const result = onProp(name, value);
      if (result) {
        for (const key in result) {
          cssTarget[key] = isMediaQuery(key)
            ? { ...cssTarget[key], ...result[key] }
            : result[key];
        }
      } else {
        cssTarget[name] = value;
      }
    }
  }

  return cssTarget;
}

export default resolve;
