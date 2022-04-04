import type { TSESLint, TSESTree as T } from "@typescript-eslint/utils";

const knownNamespaces = ["on", "oncapture", "use", "prop", "attr"];
const styleNamespaces = ["style", "class"];

const rule: TSESLint.RuleModule<
  "unknown" | "style",
  [{ allowedNamespaces: [string, ...Array<string>] }]
> = {
  meta: {
    type: "problem",
    docs: {
      recommended: "error",
      description:
        "Enforce using only Solid-specific namespaced attribute names (i.e. `'on:'` in `<div on:click={...} />`).",
      url: "https://github.com/joshwilsonvu/eslint-plugin-solid/blob/main/docs/no-unknown-namespaces.md",
    },
    schema: [
      {
        type: "object",
        properties: {
          allowedNamespaces: {
            description: "an array of additional namespace names to allow",
            type: "array",
            items: {
              type: "string",
              minItems: 1,
              uniqueItems: true,
            },
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      unknown: `'{{namespace}}:' is not one of Solid's special prefixes for JSX attributes (${knownNamespaces
        .map((n) => `'${n}:'`)
        .join(", ")}).`,
      style:
        "Using the '{{namespace}}:' special prefix is potentially confusing, prefer the '{{namespace}}' prop instead.",
    },
  },
  create(context) {
    const explicitlyAllowedNamespaces = context.options?.[0]?.allowedNamespaces;
    return {
      "JSXAttribute > JSXNamespacedName": (node: T.JSXNamespacedName) => {
        const namespace = node.namespace?.name;
        if (
          !(knownNamespaces.includes(namespace) || explicitlyAllowedNamespaces?.includes(namespace))
        ) {
          if (styleNamespaces.includes(namespace)) {
            context.report({
              node,
              messageId: "style",
              data: { namespace },
            });
          } else {
            context.report({
              node,
              messageId: "unknown",
              data: { namespace },
            });
          }
        }
      },
    };
  },
};

export default rule;
