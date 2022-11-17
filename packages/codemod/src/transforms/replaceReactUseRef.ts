// based on replaceReactUseState.ts

import getParentExpr from "../utils/getParentExpr.js";
//import renameGetterVarToCall from "./renameGetterVarToCall";
import { Identifier, ts } from "ts-morph";

import hasAncestorType from "../utils/hasAncestorType.js";
import { Node } from "ts-morph";

// based on renameIdentifiers
function removePropFromObjectReferences(
  node: Identifier,
  //propNameOrPath: string | string[], // TODO propPath
  propName: string,
  excludeSelf = false
) {
  // someObject.someProp -> someObject
  const objectName = node.getText();
  for (const ref of node.findReferencesAsNodes()) {
    if (excludeSelf && node === ref) continue;
    if (hasAncestorType(ref)) continue; // TODO what?
    const parent = ref.getParent();
    if (!Node.isPropertyAccessExpression(parent)) continue
    const foundProp = parent.getNameNode()
    if (foundProp.getText() != propName) continue;
    parent.replaceWithText(objectName);
  }
}

export default function replaceReactUseRef(node: Identifier) {

  if (node.wasForgotten()) return

  const expr = getParentExpr(node);

  const call = expr.getFirstAncestorByKind(ts.SyntaxKind.CallExpression);
  if (!call) return

  const variableDec = call.getFirstAncestorByKind(
    ts.SyntaxKind.VariableDeclaration
  );
  if (!variableDec) {
    console.log("no variableDec")
    return
  }

  const variableStatement = variableDec.getFirstAncestorByKind(
    ts.SyntaxKind.VariableStatement
  );
  if (!variableStatement) {
    console.log("no variableStatement")
    return
  }

  const refIdentifier = variableDec.getFirstDescendantByKind(
    ts.SyntaxKind.Identifier
  );
  if (!refIdentifier) return

  // someRef.current -> someRef
  removePropFromObjectReferences(refIdentifier, "current");

  // react: const divRef = React.useRef<HTMLDivElement>(null)
  // solid: let divRef: HTMLDivElement? = null

  // TODO this is only needed if decl is "const x = useRef()"
  // -> keep "let" and "var" decls

  // no. too simple
  // ManipulationError: Manipulation error: Error replacing tree: The children of the old and new trees were expected to have the same count
  //variableStatement.replaceWithText(newText)

  const statementParent = variableStatement.getParent()

  if (!(
    Node.isBlock(statementParent) ||
    Node.isSourceFile(statementParent)
  )) {
    throw new Error(`FIXME insert let-variable into statementParent node ${statementParent.getKindName()}`)
  }

  // replace all declarations
  statementParent.insertStatements(
    variableStatement.getChildIndex(),
    (
      variableStatement.getDeclarationList().getDeclarations()
      .map(decl => {
        const declInit = decl.getInitializer()
        /*
        // no. too simple. following useRef calls are not replaced
        // replace only this call to useRef
        if (declInit == call) {
          return newText
        }
        */

        // replace all calls to useRef in this decl-list

        /* debug
        console.dir({
          node: declInit,
          text: declInit?.getText(),
          type: declInit?.getType().getText(),
          kind: declInit?.getKindName(),
        })
        if (process.env.DEBUG) throw new Error("todo")
        */
        if (
          Node.isCallExpression(declInit) &&
          (
            // TODO better?
            declInit.getExpression().getText() == "React.useRef" ||
            declInit.getExpression().getText() == "useRef"
          )
        ) {
          //const call = expr.getFirstAncestorByKind(ts.SyntaxKind.CallExpression);
          //if (!call) return
          const call = declInit

          const initValue = (call.getArguments() || [])[0]

          const variableDec = call.getFirstAncestorByKind(
            ts.SyntaxKind.VariableDeclaration
          );
          if (!variableDec) {
            console.log("no variableDec")
            return
          }

          const variableStatement = variableDec.getFirstAncestorByKind(
            ts.SyntaxKind.VariableStatement
          );
          if (!variableStatement) {
            console.log("no variableStatement")
            return
          }

          const refIdentifier = variableDec.getFirstDescendantByKind(
            ts.SyntaxKind.Identifier
          );
          if (!refIdentifier) return

          // someRef.current -> someRef
          removePropFromObjectReferences(refIdentifier, "current");

          // react: const divRef = React.useRef<HTMLDivElement>(null)
          // solid: let divRef: HTMLDivElement? = null

          // example: HTMLDivElement
          const refType = (call.getTypeArguments() || [])[0]

          // TODO "let" or "var"?
          // const -> let
          // let -> let
          // var -> var
          let newText = `var ${refIdentifier.getText()}`
          if (refType && initValue) {
            if (refType.getText() == initValue.getType().getText()) {
              newText += `: ${refType.getText()}`
            }
            else {
              // note: this can produce unneeded types like
              // let ref3: number = 3;
              // but this is not harmful
              newText += `: ${refType.getText()}`
              //newText += ` | ${initValue.getType().getText()}` // wrong for literal values (number, string)
              if (
                initValue.getText() == "null" ||
                initValue.getText() == "undefined"
              ) {
                const valueType = initValue.getText()
                // dont add duplicate type
                if (refType.getText().indexOf(valueType) == -1) { // quick + dirty
                  newText += ` | ${valueType}`
                }
              }
              else {
                const typeOfKind = {
                  [ts.SyntaxKind.NumericLiteral]: "number",
                  [ts.SyntaxKind.StringLiteral]: "string",
                  [ts.SyntaxKind.NoSubstitutionTemplateLiteral]: "string",
                  [ts.SyntaxKind.BooleanKeyword]: "boolean",
                  [ts.SyntaxKind.FalseKeyword]: "boolean",
                  [ts.SyntaxKind.TrueKeyword]: "boolean",
                  [ts.SyntaxKind.RegularExpressionLiteral]: "RegExp",
                }
                const k = initValue.getKind()
                if (k in typeOfKind) {
                  // @ts-ignore
                  const valueType = typeOfKind[k]
                  // dont add duplicate type
                  // example:
                  // bad: number | null | number
                  // good: number | null
                  if (refType.getText().indexOf(valueType) == -1) { // quick + dirty
                    newText += ` | ${valueType}`
                  }
                }
                else {
                  // last resort: any type
                  // TODO make this optional
                  // dont add duplicate type
                  const valueType = "any"
                  if (refType.getText().indexOf(valueType) == -1) { // quick + dirty
                    newText += ` | ${valueType}`
                  }
                }
              }
            }
            newText += ` = ${initValue.getText()}`
          }
          else if (refType) {
            // no init value
            newText += `: ${refType.getText()} | undefined = undefined`
          }
          else if (initValue) {
            // no type
            newText += ` = ${initValue.getText()}`
          }
          newText += `;`

          return newText
        }
        else {
          // TODO keep the original decl type: const | let | var
          return `var ${decl.getText()};`
        }
      }).join('\n')
    )
  )
  variableStatement.remove()

}
