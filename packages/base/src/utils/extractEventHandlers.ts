import { JSX } from "solid-js";

export default function extractEventHandlers(
  object: Record<string, any> | undefined,
  excludeKeys: string[] = []
): Record<string, JSX.EventHandler<any, Event>> {
  if (object === undefined) {
    return {};
  }

  const result: Record<string, JSX.EventHandler<any, Event>> = {};

  Object.keys(object)
    .filter(
      (prop) =>
        prop.match(/^on[A-Z]/) &&
        typeof object[prop] === "function" &&
        !excludeKeys.includes(prop)
    )
    .forEach((prop) => {
      result[prop] = object[prop];
    });

  return result;
}
