import {
  isGlobalSelector,
  isKeyframes,
  isMediaQuery,
  isSelector,
  isVar,
  isPrivateVar,
} from "./assert";
import { snakeCase } from "./utils/string";

type RenderOptions = {
  sublevel?: boolean;
  extraProperties?: {
    [name: string]: (value: any) => any;
  };
  onPropertyValue?: (name: string, value: unknown) => any;
};
function renderSelector(
  propKey: string,
  propValue: any,
  selectors: string[] = [],
  options: RenderOptions = {}
) {
  const subselectors = propKey.split(",").map((v) => {
    v = v.trim();
    return v.includes("&") ? v : `& ${v}`;
  });
  return render(
    propValue,
    (selectors.length ? selectors : [""]).flatMap((selector) =>
      subselectors.map((v) => v.replace(/&/g, selector).trim())
    ),
    {
      ...options,
    }
  );
}

function render(
  css: Record<string, any>,
  selectors: string[] = [],
  options: RenderOptions = {}
): string[] {
  const props: string[] = [];
  const rules: string[] = [];
  for (let propKey in css) {
    const propValue = css[propKey];
    if (isPrivateVar(propKey)) {
      continue;
    } else if (isGlobalSelector(propKey)) {
      for (const selector in propValue) {
        rules.push(
          ...renderSelector(selector, propValue[selector], [], options)
        );
      }
    } else if (isMediaQuery(propKey)) {
      rules.push(
        ...render(propValue, selectors, {
          ...options,
          sublevel: true,
        }).map((v) => `${propKey} {\n${v}\n}`)
      );
    } else if (isVar(propKey)) {
      if (propValue !== undefined && propValue !== null)
        props.push(`${propKey}: ${propValue};`);
    } else if (isKeyframes(propKey)) {
      const keyframes: string[] = [];
      for (const k in propValue as Record<string, any>) {
        keyframes.push(
          ...render(propValue[k] as any, [/^\d+$/.test(k) ? `${k}%` : k], {
            ...options,
            sublevel: true,
          })
        );
      }
      rules.push(`${propKey} {\n${keyframes.join("\n")}\n}`);
    } else if (isSelector(propKey)) {
      rules.push(...renderSelector(propKey, propValue, selectors, options));
    } else if (options.extraProperties && propKey in options.extraProperties) {
      const extraProps = options.extraProperties[propKey](propValue);
      for (const extraPropKey in extraProps) {
        const inValue = extraProps[extraPropKey as keyof typeof extraProps];
        const value = options.onPropertyValue
          ? options.onPropertyValue(extraPropKey, inValue)
          : inValue;
        if (value !== undefined && value !== null)
          props.push(`${snakeCase(extraPropKey)}: ${value};`);
      }
    } else {
      propKey = snakeCase(propKey);
      const value = options.onPropertyValue
        ? options.onPropertyValue(propKey, propValue)
        : propValue;
      if (value !== undefined && value !== null)
        props.push(`${propKey}: ${value};`);
    }
  }

  const renderProps = (level: number) => {
    const pad = "\t".repeat(level);
    return `${pad}${props.join(`\n${pad}`)}`;
  };

  if (selectors.length) {
    const pad = options.sublevel ? `\t` : ``;
    const selectorStr = pad + selectors.join(`,\n${pad}`);
    return [
      ...(props.length
        ? [
            `${selectorStr} {\n${renderProps(
              options.sublevel ? 2 : 1
            )}\n${pad}}`,
          ]
        : []),
      ...rules,
    ];
  } else {
    return [...(props.length ? [renderProps(0)] : []), ...rules];
  }
}

export default render;
