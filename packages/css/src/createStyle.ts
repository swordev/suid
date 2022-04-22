import sysCache from "./cache";
import render from "./render";
import randomString from "@suid/utils/randomString";
import resolveFunction from "@suid/utils/resolveFunction";

function createStyle(options: {
  name: string;
  props:
    | Record<string, any>
    | string
    | (Record<string, any> | string)[]
    | (() => Record<string, any> | string | (Record<string, any> | string)[]);
  extraProperties?: Record<string, (value: any) => any>;
  cache?: typeof sysCache;
}) {
  const className = `${options.name}-$id`;
  const propsValue = resolveFunction(options.props);
  const propsValues = Array.isArray(propsValue) ? propsValue : [propsValue];
  const cache = options.cache || sysCache;

  const rules = propsValues
    .map((v) =>
      typeof v === "string"
        ? `.${className} {\n${v}\n}`
        : render(v, [`.${className}`], {
            extraProperties: options.extraProperties,
          }).join("\n")
    )
    .join("\n");

  let cacheResult = cache.get(rules);
  let cached = true;

  if (!cacheResult) {
    cached = false;
    cacheResult = [options.name, randomString().slice(0, 6)];
    cache.set(rules, cacheResult);
  }

  const endClassName = cacheResult.join("-");
  const [, cacheId] = cacheResult;
  return {
    className: endClassName,
    rules: rules.replaceAll(`$id`, `${cacheId}`),
    cacheId,
    cached,
  };
}

export default createStyle;
