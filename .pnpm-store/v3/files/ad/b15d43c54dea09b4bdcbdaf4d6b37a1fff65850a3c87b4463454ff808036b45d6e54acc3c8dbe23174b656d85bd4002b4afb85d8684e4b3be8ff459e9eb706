import type { TSESTree as T, TSESLint } from "@typescript-eslint/utils";

const domElementRegex = /^[a-z]/;
export const isDOMElementName = (name: string): boolean => domElementRegex.test(name);

const propsRegex = /[pP]rops/;
export const isPropsByName = (name: string): boolean => propsRegex.test(name);

export const formatList = (strings: Array<string>): string => {
  if (strings.length === 0) {
    return "";
  } else if (strings.length === 1) {
    return `'${strings[0]}'`;
  } else if (strings.length === 2) {
    return `'${strings[0]}' and '${strings[1]}'`;
  } else {
    const last = strings.length - 1;
    return `${strings
      .slice(0, last)
      .map((s) => `'${s}'`)
      .join(", ")}, and '${strings[last]}'`;
  }
};

export const find = (node: T.Node, predicate: (node: T.Node) => boolean): T.Node | null => {
  let n: T.Node | undefined = node;
  while (n) {
    const result = predicate(n);
    if (result) {
      return n;
    }
    n = n.parent;
  }
  return null;
};
export function findParent<Guard extends T.Node>(
  node: T.Node,
  predicate: (node: T.Node) => node is Guard
): Guard | null;
export function findParent(node: T.Node, predicate: (node: T.Node) => boolean): T.Node | null;
export function findParent(node: T.Node, predicate: (node: T.Node) => boolean): T.Node | null {
  return node.parent ? find(node.parent, predicate) : null;
}

export type FunctionNode = T.FunctionExpression | T.ArrowFunctionExpression | T.FunctionDeclaration;
const FUNCTION_TYPES = ["FunctionExpression", "ArrowFunctionExpression", "FunctionDeclaration"];
export const isFunctionNode = (node: T.Node | null | undefined): node is FunctionNode =>
  !!node && FUNCTION_TYPES.includes(node.type);

export type ProgramOrFunctionNode = FunctionNode | T.Program;
const PROGRAM_OR_FUNCTION_TYPES = ["Program"].concat(FUNCTION_TYPES);
export const isProgramOrFunctionNode = (
  node: T.Node | null | undefined
): node is ProgramOrFunctionNode => !!node && PROGRAM_OR_FUNCTION_TYPES.includes(node.type);

export function findInScope(
  node: T.Node,
  scope: ProgramOrFunctionNode,
  predicate: (node: T.Node) => boolean
) {
  const found = find(node, (node) => node === scope || predicate(node));
  return found === scope ? null : found;
}

// The next two functions were adapted from "eslint-plugin-import" under the MIT license.

// Checks whether `node` has a comment (that ends) on the previous line or on
// the same line as `node` (starts).
export const getCommentBefore = (
  node: T.Node,
  sourceCode: TSESLint.SourceCode
): T.Comment | undefined =>
  sourceCode
    .getCommentsBefore(node)
    .find((comment) => comment.loc!.end.line >= node.loc!.start.line - 1);

// Checks whether `node` has a comment (that starts) on the same line as `node`
// (ends).
export const getCommentAfter = (
  node: T.Node,
  sourceCode: TSESLint.SourceCode
): T.Comment | undefined =>
  sourceCode
    .getCommentsAfter(node)
    .find((comment) => comment.loc!.start.line === node.loc!.end.line);

export const trackImports = (fromModule = /^solid-js(?:\/?|\b)/) => {
  const importMap = new Map<string, string>();
  const handleImportDeclaration = (node: T.ImportDeclaration) => {
    if (fromModule.test(node.source.value)) {
      for (const specifier of node.specifiers) {
        if (specifier.type === "ImportSpecifier") {
          importMap.set(specifier.imported.name, specifier.local.name);
        }
      }
    }
  };
  const matchImport = (imports: string | Array<string>, str: string) => {
    const importArr = Array.isArray(imports) ? imports : [imports];
    return importArr
      .map((i) => importMap.get(i))
      .filter(Boolean)
      .includes(str);
  };
  return { matchImport, handleImportDeclaration };
};
