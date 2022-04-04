import { CallExpression, SourceFile, ts } from "ts-morph";

export default function findReactCalls(source: SourceFile) {
  const reactImport = source.getImportDeclaration("react");
  const result: { methodName: string; node: CallExpression }[] = [];
  if (reactImport) {
    const ns = reactImport.getNamespaceImport();
    if (ns)
      for (const ref of ns.findReferencesAsNodes()) {
        const call = ref.getFirstAncestorByKind(ts.SyntaxKind.CallExpression);
        if (call) {
          const callProp = call.getFirstDescendantByKind(
            ts.SyntaxKind.PropertyAccessExpression
          );
          const method = callProp?.getLastChildByKind(ts.SyntaxKind.Identifier);
          if (method) {
            result.push({
              methodName: method.getText(),
              node: call,
            });
          }
        }
      }
  }
  return result;
}
