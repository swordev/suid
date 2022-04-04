import { TSESTree as T, TSESLint, ASTUtils } from "@typescript-eslint/utils";
import type { FunctionNode } from "../utils";

const { getStringIfConstant } = ASTUtils;

const getName = (node: T.Node): string | null => {
  switch (node.type) {
    case "Literal":
      return typeof node.value === "string" ? node.value : null;
    case "Identifier":
      return node.name;
    case "AssignmentPattern":
      return getName(node.left);
    default:
      return getStringIfConstant(node);
  }
};

interface PropertyInfo {
  real: T.Literal | T.Identifier | T.Expression;
  var: string;
  computed: boolean;
  init: T.Expression | undefined;
}

// Given ({ 'hello-world': helloWorld = 5 }), returns { real: Literal('hello-world'), var: 'helloWorld', computed: false, init: Literal(5) }
const getPropertyInfo = (prop: T.Property): PropertyInfo | null => {
  const valueName = getName(prop.value);
  if (valueName !== null) {
    return {
      real: prop.key,
      var: valueName,
      computed: prop.computed,
      init: prop.value.type === "AssignmentPattern" ? prop.value.right : undefined,
    };
  } else {
    return null;
  }
};

const rule: TSESLint.RuleModule<"noDestructure", []> = {
  meta: {
    type: "problem",
    docs: {
      recommended: "error",
      description:
        "Disallow destructuring props. In Solid, props must be used with property accesses (`props.foo`) to preserve reactivity. This rule only tracks destructuring in the parameter list.",
      url: "https://github.com/joshwilsonvu/eslint-plugin-solid/blob/main/docs/no-destructure.md",
    },
    fixable: "code",
    schema: [],
    messages: {
      noDestructure:
        "Destructuring component props breaks Solid's reactivity; use property access instead.",
      // noWriteToProps: "Component props are readonly, writing to props is not supported.",
    },
  },
  create(context) {
    const functionStack: Array<{
      /** switched to true by :exit if JSX is detected in the current function */
      hasJSX: boolean;
    }> = [];
    const currentFunction = () => functionStack[functionStack.length - 1];
    const onFunctionEnter = () => {
      functionStack.push({ hasJSX: false });
    };
    const onFunctionExit = (node: FunctionNode) => {
      if (node.params.length === 1) {
        const props = node.params[0];
        if (
          props.type === "ObjectPattern" &&
          currentFunction().hasJSX &&
          node.parent?.type !== "JSXExpressionContainer" // "render props" aren't components
        ) {
          // Props are destructured in the function params, not the body. We actually don't
          // need to handle the case where props are destructured in the body, because that
          // will be a violation of "solid/reactivity".
          context.report({
            node: props,
            messageId: "noDestructure",
            fix: (fixer) =>
              fixDestructure({
                func: node,
                props,
                fixer,
              }),
          });
        }
      }

      // Pop on exit
      functionStack.pop();
    };

    const fixDestructure = ({
      func,
      props,
      fixer,
      propsName = "props",
    }: {
      func: FunctionNode;
      props: T.ObjectPattern;
      fixer: TSESLint.RuleFixer;
      propsName?: string;
    }): Array<TSESLint.RuleFix> => {
      const properties = props.properties;

      const propertyInfo: Array<PropertyInfo> = [];
      let rest: T.RestElement | null = null;

      for (const property of properties) {
        if (property.type === "RestElement") {
          rest = property;
        } else {
          const info = getPropertyInfo(property);
          if (info === null) {
            continue;
          }
          propertyInfo.push(info);
        }
      }

      const fixes: Array<TSESLint.RuleFix> = [];

      const hasDefaults = propertyInfo.some((info) => info.init);

      // Replace destructured props with a `props` identifier (`_props` in case of rest params/defaults)
      const origProps = !(hasDefaults || rest) ? propsName : "_" + propsName;
      fixes.push(fixer.replaceText(props, origProps));

      const sourceCode = context.getSourceCode();

      const defaultsObjectString = () =>
        propertyInfo
          .filter((info) => info.init)
          .map(
            (info) =>
              `${info.computed ? "[" : ""}${sourceCode.getText(info.real)}${
                info.computed ? "]" : ""
              }: ${sourceCode.getText(info.init)}`
          )
          .join(", ");
      const splitPropsArray = () =>
        `[${propertyInfo
          .map((info) =>
            info.real.type === "Identifier"
              ? JSON.stringify(info.real.name)
              : sourceCode.getText(info.real)
          )
          .join(", ")}]`;

      let lineToInsert = "";
      if (hasDefaults && rest) {
        // Insert a line that assigns _props
        lineToInsert = `  const [${propsName}, ${
          (rest.argument as T.Identifier)?.name ?? "rest"
        }] = splitProps(mergeProps({ ${defaultsObjectString()} }, ${origProps}), ${splitPropsArray()});`;
      } else if (hasDefaults) {
        // Insert a line that assigns _props merged with defaults to props
        lineToInsert = `  const ${propsName} = mergeProps({ ${defaultsObjectString()} }, ${origProps});\n`;
      } else if (rest) {
        // Insert a line that keeps named props and extracts the rest into a new reactive rest object
        lineToInsert = `  const [${propsName}, ${
          (rest.argument as T.Identifier)?.name ?? "rest"
        }] = splitProps(${origProps}, ${splitPropsArray()});\n`;
      }

      if (lineToInsert) {
        const body = func.body;
        if (body.type === "BlockStatement") {
          if (body.body.length > 0) {
            // Inject lines handling defaults/rest params before the first statement in the block.
            fixes.push(fixer.insertTextBefore(body.body[0], lineToInsert));
          }
          // with an empty block statement body, no need to inject code
        } else {
          // The function is an arrow function that implicitly returns an expression, possibly with wrapping parentheses.
          // These must be removed to convert the function body to a block statement for code injection.
          const maybeOpenParen = sourceCode.getTokenBefore(body);
          if (maybeOpenParen?.value === "(") {
            fixes.push(fixer.remove(maybeOpenParen));
          }
          const maybeCloseParen = sourceCode.getTokenAfter(body);
          if (maybeCloseParen?.value === ")") {
            fixes.push(fixer.remove(maybeCloseParen));
          }

          // Inject lines handling defaults/rest params
          fixes.push(fixer.insertTextBefore(body, `{\n${lineToInsert}  return (`));
          fixes.push(fixer.insertTextAfter(body, `);\n}`));
        }
      }

      const scope = sourceCode.scopeManager?.acquire(func);
      if (scope) {
        propertyInfo
          .map((info) => [info, scope.set.get(info.var)] as const) // iterate through destructured variables, associated with real node
          .filter(([, variable]) => Boolean(variable))
          .forEach(([info, variable]) => {
            // replace all usages of the variable with props accesses
            variable!.references.forEach((reference) => {
              if (reference.isReadOnly()) {
                const access =
                  info.real.type === "Identifier" && !info.computed
                    ? `.${info.real.name}`
                    : `[${sourceCode.getText(info.real)}]`;
                fixes.push(fixer.replaceText(reference.identifier, `${propsName}${access}`));
              }
            });
          });
      }

      return fixes;
    };

    return {
      FunctionDeclaration: onFunctionEnter,
      FunctionExpression: onFunctionEnter,
      ArrowFunctionExpression: onFunctionEnter,
      "FunctionDeclaration:exit": onFunctionExit,
      "FunctionExpression:exit": onFunctionExit,
      "ArrowFunctionExpression:exit": onFunctionExit,
      JSXElement() {
        if (functionStack.length) {
          currentFunction().hasJSX = true;
        }
      },
      JSXFragment() {
        if (functionStack.length) {
          currentFunction().hasJSX = true;
        }
      },
    };
  },
};

export default rule;
