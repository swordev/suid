import renameNode from "./renameNode";
import { Identifier } from "ts-morph";

export default function renameParentExpr(
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
  )
) {
  renameNode(
    node,
    text,
    importDeclaration,
    true,
  )
}
