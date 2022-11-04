import addReplacePattern from "../utils/addReplacePattern";
import getParentExpr from "../utils/getParentExpr";
import { Identifier, Node, ts } from "ts-morph";

const emptyMagicKey = `__EMPTY__${Date.now()}`;

export default function replaceReactForwardRef(node: Identifier) {
  const expr = getParentExpr(node);
  const call = expr.getParentIfKind(ts.SyntaxKind.CallExpression);
  if (call) {
    const [func] = call.getArguments();
    if (Node.isFunctionExpression(func) || Node.isArrowFunction(func)) {
      const params = func.getParameters();
      let propsName: string | undefined;
      let refName: string | undefined;
      let paramIndex = 0;
      for (const param of params) {
        if (!paramIndex) {
          propsName = param.getText();
        } else if (paramIndex === 1) {
          refName = param.getText();
        }
        if (paramIndex > 0) {
          param.remove();
        }
        paramIndex++;
      }
      if (refName) {
        func.insertStatements(0, `const ${refName} = createRef(${propsName});`);
        node.getSourceFile().addImportDeclaration({
          moduleSpecifier: "@suid/system/createRef",
          defaultImport: "createRef",
        });
      }
    }

    addReplacePattern(node.getSourceFile(), emptyMagicKey, "");
    expr.replaceWithText(emptyMagicKey);

    call.getTypeArguments().map(arg => call.removeTypeArgument(arg))
  }
}
