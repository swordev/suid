import getParentExpr from "../utils/getParentExpr.js";
import { Identifier } from "ts-morph";

export default function renameNode(
  node: Identifier,
  text: string,
  importDeclaration?: {
    moduleSpecifier: string;
  } & (
    | {
        namespaceImport: string;
      }
    | {
        namespaceNamedImport: string;
      }
    | {
        namedImport: string;
      }
    |
      {
        defaultImport: string;
      }
  ),
  parentExpr?: boolean,
) {
  const expr = (
    parentExpr ? getParentExpr(node) :
    node
  );

  if (importDeclaration) {
    if ("namespaceImport" in importDeclaration) {
      expr.replaceWithText(`${importDeclaration.namespaceImport}.${text}`);
    } else if ("namespaceNamedImport" in importDeclaration) {
      expr.replaceWithText(`${importDeclaration.namespaceNamedImport}.${text}`);
    } else if ("namedImport" in importDeclaration) {
      expr.replaceWithText(`${text}`);
    } else if ("defaultImport" in importDeclaration) {
      expr.replaceWithText(`${text}`);
    }

    node.getSourceFile().addImportDeclaration({
      moduleSpecifier: importDeclaration.moduleSpecifier,
      ...("namespaceImport" in importDeclaration && {
        namespaceImport: importDeclaration.namespaceImport,
      }),
      ...("namespaceNamedImport" in importDeclaration && {
        namespaceImport: importDeclaration.namespaceNamedImport,
      }),
      ...("namedImport" in importDeclaration && {
        namedImports: [importDeclaration.namedImport],
      }),
      ...("defaultImport" in importDeclaration && {
        defaultImport: importDeclaration.defaultImport,
      }),
    });
  } else {
    expr.replaceWithText(text);
  }
}
