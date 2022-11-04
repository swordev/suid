import addReplacePattern from "../utils/addReplacePattern";
import { Identifier, Node, ts } from "ts-morph";

const emptyMagicKey = `__EMPTY__${Date.now()}`;

export default function replaceReactForwardRef(node: Identifier) {
  const call = node.getFirstAncestorByKindOrThrow(ts.SyntaxKind.CallExpression);
  if (call) {
    const expr = call.getExpression();
    const [func] = call.getArguments();
    const typeArgs = call.getTypeArguments();
    let removeExpr = true;
    if (Node.isFunctionExpression(func) || Node.isArrowFunction(func)) {
      const params = func.getParameters();
      let propsName: string | undefined;
      let refName: string | undefined;
      let paramIndex = 0;
      for (const param of params) {
        if (paramIndex === 0) {
          propsName = param.getText();
          if (typeArgs[1]) {
            param.setType(`${typeArgs[1].getText()} & { ref: ${typeArgs[0].getText()} }`)
          }
        } else if (paramIndex === 1) {
          refName = param.getText();
        }
        if (paramIndex > 0) {
          // solid components have only one parameter: props
          param.remove();
        }
        paramIndex++;
      }
      if (refName) {
        // TODO(milahu): simple? replace "ref" with "props.ref" in fn body
        func.insertStatements(0, `const ${refName} = createRef(${propsName});`);
        node.getSourceFile().addImportDeclaration({
          moduleSpecifier: "@suid/system/createRef",
          defaultImport: "createRef",
        });
      }
    }
    else {
      // arg is not a function
      if (func && typeArgs[1]) {
        // keep the types
        const propsType = `${typeArgs[1].getText()} & { ref: ${typeArgs[0].getText()} }`;
        expr.replaceWithText(`((fn) => fn as ((props: ${propsType}) => JSX.Element))`);
        node.getSourceFile().addImportDeclaration({
          moduleSpecifier: "solid-js",
          namedImports: ["JSX"],
          isTypeOnly: true,
        });
        removeExpr = false;
      }
    }

    if (removeExpr) {
      addReplacePattern(node.getSourceFile(), emptyMagicKey, "");
      expr.replaceWithText(emptyMagicKey);
    }

    call.getTypeArguments().map(arg => call.removeTypeArgument(arg))
  }
}
