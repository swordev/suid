import { TSESLint, ASTUtils } from "@typescript-eslint/utils";
import { propName } from "jsx-ast-utils";
import isHtml from "is-html";

const { getStringIfConstant } = ASTUtils;

const rule: TSESLint.RuleModule<
  "dangerous" | "conflict" | "notHtml" | "useInnerText" | "dangerouslySetInnerHTML",
  [{ allowStatic?: boolean }?]
> = {
  meta: {
    type: "problem",
    docs: {
      recommended: "error",
      description:
        "Disallow usage of the innerHTML attribute, which can often lead to security vulnerabilities.",
      url: "https://github.com/joshwilsonvu/eslint-plugin-solid/blob/main/docs/no-innerhtml.md",
    },
    fixable: "code",
    hasSuggestions: true,
    schema: [
      {
        type: "object",
        properties: {
          allowStatic: {
            description:
              "if the innerHTML value is guaranteed to be a static HTML string (i.e. no user input), allow it",
            type: "boolean",
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      dangerous:
        "The innerHTML attribute is dangerous; passing unsanitized input can lead to security vulnerabilities.",
      conflict:
        "The innerHTML attribute should not be used on an element with child elements; they will be overwritten.",
      notHtml: "The string passed to innerHTML does not appear to be valid HTML.",
      useInnerText: "For text content, using innerText is clearer and safer.",
      dangerouslySetInnerHTML:
        "The dangerouslySetInnerHTML prop is not supported; use innerHTML instead.",
    },
  },
  create(context) {
    const allowStatic = Boolean(context.options[0]?.allowStatic);
    return {
      JSXAttribute(node) {
        if (propName(node) === "dangerouslySetInnerHTML") {
          if (
            node.value?.type === "JSXExpressionContainer" &&
            node.value.expression.type === "ObjectExpression" &&
            node.value.expression.properties.length === 1
          ) {
            const htmlProp = node.value.expression.properties[0];
            if (
              htmlProp.type === "Property" &&
              htmlProp.key.type === "Identifier" &&
              htmlProp.key.name === "__html"
            ) {
              context.report({
                node,
                messageId: "dangerouslySetInnerHTML",
                fix: (fixer) => {
                  const propRange = node.range;
                  const valueRange = htmlProp.value.range;
                  return [
                    fixer.replaceTextRange([propRange[0], valueRange[0]], "innerHTML={"),
                    fixer.replaceTextRange([valueRange[1], propRange[1]], "}"),
                  ];
                },
              });
            } else {
              context.report({
                node,
                messageId: "dangerouslySetInnerHTML",
              });
            }
          } else {
            context.report({
              node,
              messageId: "dangerouslySetInnerHTML",
            });
          }
          return;
        } else if (propName(node) !== "innerHTML") {
          return;
        }

        if (allowStatic) {
          const innerHtmlNode =
            node.value?.type === "JSXExpressionContainer" ? node.value.expression : node.value;
          const innerHtml = innerHtmlNode && getStringIfConstant(innerHtmlNode);
          if (typeof innerHtml === "string") {
            if (isHtml(innerHtml)) {
              // go up to enclosing JSXElement and check if it has children
              if (
                node.parent?.parent?.type === "JSXElement" &&
                node.parent.parent.children?.length
              ) {
                context.report({
                  node: node.parent.parent, // report error on JSXElement instead of JSXAttribute
                  messageId: "conflict",
                });
              }
            } else {
              context.report({
                node,
                messageId: "notHtml",
                suggest: [
                  {
                    fix: (fixer) => fixer.replaceText(node.name, "innerText"),
                    messageId: "useInnerText",
                  },
                ],
              });
            }
          } else {
            context.report({
              node,
              messageId: "dangerous",
            });
          }
        } else {
          context.report({
            node,
            messageId: "dangerous",
          });
        }
      },
    };
  },
};

export default rule;
