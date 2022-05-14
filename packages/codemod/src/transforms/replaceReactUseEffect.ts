import getParentExpr from "../navigations/getParentExpr";
import {
  Identifier,
  ts,
  Node,
  ArrowFunction,
  FunctionExpression,
  ArrayLiteralExpression,
  FunctionDeclaration,
} from "ts-morph";

export type ReplaceReactUseEffectOptions = {
  removeDependencies?: boolean;
};

function getInlineReturn(node: Node) {
  if (Node.isArrowFunction(node)) {
    const children = node.forEachChildAsArray();
    if (children.length === 2) return children[1];
  }
}

type AnyFunction = FunctionExpression | FunctionDeclaration | ArrowFunction;

function isAnyFunction(node: Node): node is AnyFunction {
  return (
    Node.isFunctionDeclaration(node) ||
    Node.isFunctionExpression(node) ||
    Node.isArrowFunction(node)
  );
}

export default function replaceReactUseEffect(
  node: Identifier,
  options: ReplaceReactUseEffectOptions = {}
) {
  const expr = getParentExpr(node);
  const call = expr.getParentIfKind(ts.SyntaxKind.CallExpression);
  let functionName = "createEffect";
  let withCleaning = false;
  let useOn = false;
  let onlyReturnFunction: AnyFunction | undefined;
  let callback: AnyFunction | undefined;
  let dependencies: ArrayLiteralExpression | undefined;

  if (call) {
    const [pseudoCallback, pseudoDependencies] = call.getArguments();
    if (isAnyFunction(pseudoCallback)) {
      callback = pseudoCallback;
      const returnType = callback.getReturnType().getText();
      withCleaning =
        returnType.startsWith("() =>") || returnType.startsWith("function");

      const inlineReturnValue = getInlineReturn(callback);

      // () => function() {}
      if (inlineReturnValue) {
        if (isAnyFunction(inlineReturnValue))
          onlyReturnFunction = inlineReturnValue;
      } else {
        const body = callback
          .getFirstChildByKindOrThrow(ts.SyntaxKind.Block)
          .getChildSyntaxListOrThrow();
        const bodyReturn = body.getFirstChildByKind(
          ts.SyntaxKind.ReturnStatement
        );
        // () => { return function() {} }
        if (bodyReturn && body.getChildren().length === 1) {
          const [bodyReturnValue] = bodyReturn.forEachChildAsArray();
          if (isAnyFunction(bodyReturnValue))
            onlyReturnFunction = bodyReturnValue;
        }
      }
    }

    if (Node.isArrayLiteralExpression(pseudoDependencies)) {
      dependencies = pseudoDependencies;
      const elements = dependencies.getElements();
      if (!elements.length) {
        functionName = "onMount";
      } else if (!options.removeDependencies) {
        useOn = true;
      }
    }
  }

  if (withCleaning) {
    if (functionName === "onMount" && onlyReturnFunction) {
      functionName = "onCleanup";
      callback?.replaceWithText(onlyReturnFunction.getText());
    } else {
      functionName += "WithCleaning";
    }
    expr.replaceWithText(functionName);
    node.getSourceFile().addImportDeclaration({
      defaultImport: functionName,
      moduleSpecifier: `@suid/system/${functionName}`,
    });
  } else {
    expr.replaceWithText(functionName);
    node.getSourceFile().addImportDeclaration({
      namedImports: [functionName, ...(useOn ? ["on"] : [])],
      moduleSpecifier: "solid-js",
    });
  }

  if (callback && dependencies && useOn) {
    callback.replaceWithText(
      `on(\n() => ${dependencies.getText()},\n${callback.getText()}\n)`
    );
  }
  if (dependencies) call?.removeArgument(dependencies);
}
