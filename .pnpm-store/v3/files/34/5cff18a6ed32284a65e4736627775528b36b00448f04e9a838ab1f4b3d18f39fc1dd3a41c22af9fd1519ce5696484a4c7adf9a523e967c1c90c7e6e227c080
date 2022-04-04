import type { TSESTree as T, TSESLint } from "@typescript-eslint/utils";
import { isDOMElementName, formatList, getCommentBefore } from "../utils";

// Currently all of the control flow components are from 'solid-js'.
const AUTO_COMPONENTS = ["Show", "For", "Index", "Switch", "Match"];
const SOURCE_MODULE = "solid-js";

/*
 * This rule is adapted from eslint-plugin-react's jsx-no-undef rule under
 * the MIT license. Thank you for your work!
 */
const rule: TSESLint.RuleModule<
  "undefined" | "customDirectiveUndefined" | "autoImport",
  [
    {
      allowGlobals?: boolean;
      autoImport?: boolean;
      typescriptEnabled?: boolean;
    }?
  ]
> = {
  meta: {
    type: "problem",
    docs: {
      recommended: "error",
      description: "Disallow references to undefined variables in JSX. Handles custom directives.",
      url: "https://github.com/joshwilsonvu/eslint-plugin-solid/blob/main/docs/jsx-no-undef.md",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          allowGlobals: {
            type: "boolean",
            description:
              "When true, the rule will consider the global scope when checking for defined components.",
            default: false,
          },
          autoImport: {
            type: "boolean",
            description:
              'Automatically import certain components from `"solid-js"` if they are undefined.',
            default: true,
          },
          typescriptEnabled: {
            type: "boolean",
            description: "Adjusts behavior not to conflict with TypeScript's type checking.",
            default: false,
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      undefined: "'{{identifier}}' is not defined.",
      customDirectiveUndefined: "Custom directive '{{identifier}}' is not defined.",
      autoImport: "{{imports}} should be imported from '{{source}}'.",
    },
  },
  create(context) {
    const allowGlobals = context.options[0]?.allowGlobals ?? false;
    const autoImport = context.options[0]?.autoImport !== false;
    const isTypeScriptEnabled = context.options[0]?.typescriptEnabled ?? false;

    const missingComponentsSet = new Set<string>();

    /**
     * Compare an identifier with the variables declared in the scope
     * @param {ASTNode} node - Identifier or JSXIdentifier node
     * @returns {void}
     */
    function checkIdentifierInJSX(
      node: T.Identifier | T.JSXIdentifier,
      {
        isComponent,
        isCustomDirective,
      }: { isComponent?: boolean; isCustomDirective?: boolean } = {}
    ) {
      let scope = context.getScope();
      const sourceCode = context.getSourceCode();
      const sourceType = sourceCode.ast.sourceType;
      const scopeUpperBound = !allowGlobals && sourceType === "module" ? "module" : "global";
      const variables = [...scope.variables];

      // Ignore 'this' keyword (also maked as JSXIdentifier when used in JSX)
      if (node.name === "this") {
        return;
      }

      while (scope.type !== scopeUpperBound && scope.type !== "global" && scope.upper) {
        scope = scope.upper;
        variables.push(...scope.variables);
      }
      if (scope.childScopes.length) {
        variables.push(...scope.childScopes[0].variables);
        // Temporary fix for babel-eslint
        if (scope.childScopes[0].childScopes.length) {
          variables.push(...scope.childScopes[0].childScopes[0].variables);
        }
      }

      if (variables.find((variable) => variable.name === node.name)) {
        return;
      }

      if (
        isComponent &&
        autoImport &&
        AUTO_COMPONENTS.includes(node.name) &&
        !missingComponentsSet.has(node.name)
      ) {
        // track which names are undefined
        missingComponentsSet.add(node.name);
      } else if (isCustomDirective) {
        context.report({
          node,
          messageId: "customDirectiveUndefined",
          data: {
            identifier: node.name,
          },
        });
      } else if (!isTypeScriptEnabled) {
        context.report({
          node,
          messageId: "undefined",
          data: {
            identifier: node.name,
          },
        });
      }
    }

    return {
      JSXOpeningElement(node) {
        let n: T.Node | undefined;
        switch (node.name.type) {
          case "JSXIdentifier":
            if (!isDOMElementName(node.name.name)) {
              checkIdentifierInJSX(node.name, { isComponent: true });
            }
            break;
          case "JSXMemberExpression":
            n = node.name;
            do {
              n = (n as any).object;
            } while (n && n.type !== "JSXIdentifier");
            if (n) {
              checkIdentifierInJSX(n);
            }
            break;
          default:
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
          checkIdentifierInJSX(node.name, { isCustomDirective: true });
        }
      },
      "Program:exit": (programNode: T.Program) => {
        // add in any auto import components used in the program
        const missingComponents = Array.from(missingComponentsSet.values());
        if (autoImport && missingComponents.length) {
          const identifiersString = missingComponents.join(", "); // "Show, For, Switch"
          const importNode = programNode.body.find(
            (n) =>
              n.type === "ImportDeclaration" &&
              n.importKind !== "type" &&
              n.source.type === "Literal" &&
              n.source.value === SOURCE_MODULE
          ) as T.ImportDeclaration | undefined;
          if (importNode) {
            context.report({
              node: importNode,
              messageId: "autoImport",
              data: {
                imports: formatList(missingComponents),
                source: SOURCE_MODULE,
              },
              fix: (fixer) => {
                const reversedSpecifiers = importNode.specifiers.slice().reverse();
                const lastSpecifier = reversedSpecifiers.find((s) => s.type === "ImportSpecifier");
                if (lastSpecifier) {
                  // import A, { B } from 'source' => import A, { B, C, D } from 'source'
                  // import { B } from 'source' => import { B, C, D } from 'source'
                  return fixer.insertTextAfter(lastSpecifier, `, ${identifiersString}`);
                }
                const otherSpecifier = importNode.specifiers.find(
                  (s) =>
                    s.type === "ImportDefaultSpecifier" || s.type === "ImportNamespaceSpecifier"
                );
                if (otherSpecifier) {
                  // import A from 'source' => import A, { B, C, D } from 'source'
                  return fixer.insertTextAfter(otherSpecifier, `, { ${identifiersString} }`);
                }
                if (importNode.specifiers.length === 0) {
                  // import 'source' => import { B, C, D } from 'source'
                  const importToken = context.getSourceCode().getFirstToken(importNode);
                  return importToken
                    ? fixer.insertTextAfter(importToken, ` { ${identifiersString} } from`)
                    : null;
                }
                return null;
              },
            });
          } else {
            context.report({
              node: programNode,
              messageId: "autoImport",
              data: {
                imports: formatList(missingComponents),
                source: SOURCE_MODULE,
              },
              fix: (fixer) => {
                // insert `import { missing, identifiers } from "source-module"` at top of module
                const firstImport = programNode.body.find((n) => n.type === "ImportDeclaration");
                if (firstImport) {
                  return fixer.insertTextBeforeRange(
                    (getCommentBefore(firstImport, context.getSourceCode()) ?? firstImport).range,
                    `import { ${identifiersString} } from "${SOURCE_MODULE}";\n`
                  );
                }
                return fixer.insertTextBeforeRange(
                  [0, 0],
                  `import { ${identifiersString} } from "${SOURCE_MODULE}";\n`
                );
              },
            });
          }
        }
      },
    };
  },
};

export default rule;
