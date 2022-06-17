import { Identifier, Node, ts } from "ts-morph";

export function findUseForkRefIdentifiers(node: Node) {
  return node
    .getDescendantsOfKind(ts.SyntaxKind.Identifier)
    .filter((v) => v.getText() === "useForkRef");
}

export default function replaceMuiUseForkRef(node: Identifier) {
  // const handleRef = useForkRef(ref, inputRef);
  const expr = node.getFirstAncestorByKindOrThrow(ts.SyntaxKind.CallExpression);

  const varStm = expr.getFirstAncestorByKind(ts.SyntaxKind.VariableStatement);
  const [a, b] = expr.getArguments();
  const aName = a.getText();

  if (Node.isIdentifier(b)) {
    for (const bRef of b.findReferencesAsNodes()) {
      // const inputRef = React.useRef(null);
      const varStm = bRef
        .getParentIfKind(ts.SyntaxKind.VariableDeclaration)
        ?.getFirstAncestorByKind(ts.SyntaxKind.VariableStatement);

      if (varStm) {
        varStm.remove();
      } else if (Node.isIdentifier(bRef)) {
        bRef.replaceWithText(aName);
      }
    }
  }

  if (varStm) {
    // refProp -> ref
    varStm
      .getFirstDescendantByKindOrThrow(ts.SyntaxKind.VariableDeclaration)
      .rename(aName);
    varStm.remove();
  }
}
