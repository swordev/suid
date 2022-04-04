import type { TSESLint } from "@typescript-eslint/utils";
import { getProp, hasProp } from "jsx-ast-utils";

const reactSpecificProps = [
  { from: "className", to: "class" },
  { from: "htmlFor", to: "for" },
];

const rule: TSESLint.RuleModule<"prefer", []> = {
  meta: {
    type: "problem",
    docs: {
      recommended: "warn",
      description:
        "Disallow usage of React-specific `className`/`htmlFor` props (though they are supported for compatibility).",
      url: "https://github.com/joshwilsonvu/eslint-plugin-solid/blob/main/docs/no-react-specific-props.md",
    },
    fixable: "code",
    schema: [],
    messages: {
      prefer: "Prefer the `{{ to }}` prop over `{{ from }}`.",
    },
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        for (const { from, to } of reactSpecificProps) {
          const classNameAttribute = getProp(node.attributes, from);
          if (classNameAttribute) {
            // only auto-fix if there is no class prop defined
            const fix = !hasProp(node.attributes, to, { ignoreCase: false })
              ? (fixer: TSESLint.RuleFixer) => fixer.replaceText(classNameAttribute.name, to)
              : undefined;

            context.report({
              node: classNameAttribute,
              messageId: "prefer",
              data: { from, to },
              fix,
            });
          }
        }
      },
    };
  },
};

export default rule;
