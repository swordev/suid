import render from "./render";
import randomString from "@suid/utils/randomString";
import resolveFunction from "@suid/utils/resolveFunction";
import toArray from "@suid/utils/toArray";

export type StyleObject = {
  id: string;
  name: string;
  className: string;
  rules: string;
};

export type StyleObjectCache = Map<string, StyleObject>;

export type StyleProps =
  | Record<string, any>
  | string
  | (Record<string, any> | string)[]
  | (() => Record<string, any> | string | (Record<string, any> | string)[]);

export type StyleObjectOptions = {
  name: string;
  props: StyleProps;
  extraProperties?: Record<string, (value: any) => any>;
  cache?: StyleObjectCache;
};

function create(name: string, rules: string) {
  const id = randomString().slice(0, 6);
  return {
    id,
    name: name,
    className: `${name}-${id}`,
    rules: rules.replaceAll(`$id`, `${id}`),
  };
}

function createStyleObject(options: StyleObjectOptions) {
  const className = `${options.name}-$id`;
  const propsValues = toArray(resolveFunction(options.props));
  const rules = propsValues
    .map((v) =>
      typeof v === "string"
        ? `.${className} {\n${v}\n}`
        : render(v, [`.${className}`], {
            extraProperties: options.extraProperties,
          }).join("\n")
    )
    .join("\n");

  const styleObject = options.cache?.get(rules) || create(options.name, rules);

  if (options.cache) options.cache.set(rules, styleObject);

  return styleObject;
}

export default createStyleObject;
