import render from "./render";
import { toArray } from "./utils/array";
import { resolveFunction } from "./utils/function";

export type StyleObject = {
  id: string;
  name: string;
  className: string;
  rules: string;
};

export class StyleCache {
  ids = new Map<string /* id */, number>();
  rules = new Map<string /* rule */, StyleObject>();
  propertyNames = new Map<string /* property */, string>();
  create(name: string, rules: string, componentId: string) {
    let styleObject = this.rules.get(rules);
    if (styleObject) return styleObject;
    let componentIndex = this.ids.get(componentId);
    // Same component (createUniqueId) but different rules
    if (typeof componentIndex === "number") {
      // Use a new id for the new rule
      this.ids.set(componentId, ++componentIndex);
      componentId += `_${componentIndex}`;
    }
    styleObject = create(name, rules, componentId);
    this.save(styleObject, rules);
    return styleObject;
  }
  save(style: StyleObject, rules: string) {
    this.ids.set(style.id, 0);
    this.rules.set(rules, style);
  }
  delete(style: StyleObject) {
    this.ids.delete(style.id);
    this.rules.delete(style.rules);
  }
}

export type StyleProps =
  | Record<string, any>
  | string
  | (Record<string, any> | string)[]
  | (() => Record<string, any> | string | (Record<string, any> | string)[]);

export type StyleObjectOptions = {
  name: string;
  props: StyleProps;
  extraProperties?: Record<string, (value: any) => any>;
  componentId: string;
  cache?: StyleCache;
};

function create(name: string, rules: string, id: string) {
  return {
    id,
    name,
    className: `${name}-${id}`,
    rules: rules.replaceAll(`$id`, `${id}`),
  };
}

function createStyleObject(options: StyleObjectOptions) {
  const className = `${options.name}-$id`;
  const propsValues = toArray(resolveFunction(options.props));
  const propertyNameCache = options.cache?.propertyNames;
  const rules = propsValues
    .map((v) =>
      typeof v === "string"
        ? `.${className} {\n${v}\n}`
        : render(v, [`.${className}`], {
            extraProperties: options.extraProperties,
            propertyNameCache,
          }).join("\n")
    )
    .join("\n");

  return (
    options.cache?.create(options.name, rules, options.componentId) ||
    create(options.name, rules, options.componentId)
  );
}

export default createStyleObject;
