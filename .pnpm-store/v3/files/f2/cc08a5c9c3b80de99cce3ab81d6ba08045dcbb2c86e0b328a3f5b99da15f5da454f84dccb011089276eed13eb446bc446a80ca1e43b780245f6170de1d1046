import { TSESLint, TSESTree as T } from "@typescript-eslint/utils";

const EXPENSIVE_TYPES = ["JSXElement", "JSXFragment", "Identifier"];

const rule: TSESLint.RuleModule<"preferShowAnd" | "preferShowTernary", []> = {
  meta: {
    type: "problem",
    docs: {
      recommended: false,
      description: "Enforce using Solid's `<Show />` component for conditionally showing content.",
      url: "https://github.com/joshwilsonvu/eslint-plugin-solid/blob/main/docs/prefer-show.md",
    },
    fixable: "code",
    schema: [],
    messages: {
      preferShowAnd: "Use Solid's `<Show />` component for conditionally showing content.",
      preferShowTernary:
        "Use Solid's `<Show />` component for conditionally showing content with a fallback.",
    },
  },
  create(context) {
    const sourceCode = context.getSourceCode();

    return {
      "JSXElement > JSXExpressionContainer > LogicalExpression": (node: T.LogicalExpression) => {
        if (node.operator === "&&" && EXPENSIVE_TYPES.includes(node.right.type)) {
          context.report({
            node,
            messageId: "preferShowAnd",
            fix: (fixer) =>
              fixer.replaceText(
                node,
                `<Show when={${sourceCode.getText(node.left)}}>{${sourceCode.getText(
                  node.right
                )}}</Show>`
              ),
          });
        }
      },
      "JSXElement > JSXExpressionContainer > ConditionalExpression": (
        node: T.ConditionalExpression
      ) => {
        if (
          EXPENSIVE_TYPES.includes(node.consequent.type) ||
          EXPENSIVE_TYPES.includes(node.alternate.type)
        ) {
          context.report({
            node,
            messageId: "preferShowTernary",
            fix: (fixer) =>
              fixer.replaceText(
                node,
                `<Show when={${sourceCode.getText(node.test)}} fallback={${sourceCode.getText(
                  node.alternate
                )}}>{${sourceCode.getText(node.consequent)}}</Show>`
              ),
          });
        }
      },
    };
  },
};

export default rule;
