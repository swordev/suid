import getParentExpr from "../navigations/getParentExpr";
import addReplacePattern from "../utils/addReplacePattern";
import { Identifier, ts } from "ts-morph";

const magicKey = `__REMOVE__${Date.now()}`;

export default function replaceReactUseCallback(node: Identifier) {
  const expr = getParentExpr(node);
  const call = expr.getParentIfKind(ts.SyntaxKind.CallExpression);
  if (call) {
    const args = call.getArguments();
    for (let i = 1; i < args.length; ++i) call.removeArgument(1);
    addReplacePattern(node.getSourceFile(), magicKey, "");
    expr.replaceWithText(magicKey);
  }
}
