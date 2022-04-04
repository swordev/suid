import type { TSESTree as T, TSESLint } from "@typescript-eslint/utils";

/*
 * This rule is lifted almost verbatim from eslint-plugin-react's
 * jsx-uses-vars rule under the MIT license. Thank you for your work!
 * Solid's custom directives are also handled.
 */

const rule: TSESLint.RuleModule<never, []> = {
  meta: {
    type: "problem",
    docs: {
      recommended: "error",
      // eslint-disable-next-line eslint-plugin/require-meta-docs-description
      description: "Prevent variables used in JSX from being marked as unused.",
      url: "https://github.com/joshwilsonvu/eslint-plugin-solid/blob/main/docs/jsx-uses-vars.md",
    },
    schema: [],
    messages: {},
  },

  create(context) {
    return {
      JSXOpeningElement(node) {
        let parent: T.JSXTagNameExpression;
        switch (node.name.type) {
          case "JSXNamespacedName": // <Foo:Bar>
            return;
          case "JSXIdentifier": // <Foo>
            context.markVariableAsUsed(node.name.name);
            break;
          case "JSXMemberExpression": // <Foo...Bar>
            parent = node.name.object;
            while (parent?.type === "JSXMemberExpression") {
              parent = parent.object;
            }
            if (parent.type === "JSXIdentifier") {
              context.markVariableAsUsed(parent.name);
            }
            break;
        }
      },
      "JSXAttribute > JSXNamespacedName": (node: T.JSXNamespacedName) => {
        // <Element use:X /> applies the `X` custom directive to the element, where `X` must be an identifier in scope.
        if (
          node.namespace?.type === "JSXIdentifier" &&
          node.namespace.name === "use" &&
          node.name?.type === "JSXIdentifier"
        ) {
          context.markVariableAsUsed(node.name.name);
        }
      },
    };
  },
};

export default rule;
