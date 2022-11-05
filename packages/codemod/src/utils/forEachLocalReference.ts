import {
  ForEachDescendantTraversalControl,
  Identifier,
  Node,
  ts,
} from "ts-morph"

export function isScope(node: Node): boolean {
  return (
    node.isKind(ts.SyntaxKind.Block) ||
    node.isKind(ts.SyntaxKind.FunctionDeclaration) ||
    node.isKind(ts.SyntaxKind.FunctionExpression) ||
    node.isKind(ts.SyntaxKind.ArrowFunction) ||
    // TODO more?
    false
  )
}

export function isDeclaration(node: Identifier): boolean {
  const parent = node.getParent()
  if (!parent) return false
  return (
    (
      parent.isKind(ts.SyntaxKind.VariableDeclaration) ||
      parent.isKind(ts.SyntaxKind.Parameter) ||
      parent.isKind(ts.SyntaxKind.BindingElement) ||
      // TODO more?
      false
    ) &&
    parent.getNameNode() == node
  )
}

/**
 * Get the innermost scope which contains a given node
 * @see https://github.com/mysticatea/eslint-utils/blob/master/src/get-innermost-scope.js
 */
export function getInnermostScope(node: Node, initialScope?: Node): Node | undefined {
  if (!initialScope) initialScope = node.getSourceFile()
  const location = node.getPos()
  let scope = initialScope
  initialScope.forEachDescendant(node => {
    if (
      isScope(node) &&
      node.getPos() <= location &&
      location < node.getEnd()
    ) {
      scope = node
    }
  })
  return scope
}

/**
 * Invoke the cbNode callback for each reference in the local scope
 * @see forEachDescendant
 * @see https://github.com/dsherret/ts-morph/issues/1351
 */
export default function forEachLocalReference(node: Identifier,
  cbNode: ((
    node: Node,
    traversal: ForEachDescendantTraversalControl
  ) => void)
) {
  const scope = getInnermostScope(node)
  if (!scope) return
  const name = node.getText()
  scope.forEachDescendant((node, traversal) => {
    if (
      node.isKind(ts.SyntaxKind.Identifier) &&
      node.getText() == name
    ) {
      if (isDeclaration(node)) {
        // name was redeclared
        traversal.skip()
      }
      else {
        cbNode(node, traversal)
      }
    }
  })
}
