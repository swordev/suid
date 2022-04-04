/**
 * File overview here, scroll to bottom.
 * @link https://github.com/joshwilsonvu/eslint-plugin-solid/blob/main/docs/reactivity.md
 */

import { TSESTree as T, TSESLint, ASTUtils } from "@typescript-eslint/utils";
import {
  findParent,
  findInScope,
  isPropsByName,
  FunctionNode,
  isFunctionNode,
  ProgramOrFunctionNode,
  isProgramOrFunctionNode,
  trackImports,
} from "../utils";

const { findVariable, getFunctionHeadLocation } = ASTUtils;

type Scope = TSESLint.Scope.Scope;
type Variable = TSESLint.Scope.Variable;
type Reference = TSESLint.Scope.Reference;

interface ReactiveVariable {
  /**
   * The reactive variable references we're concerned with (i.e. not init).
   * References are removed after they are analyzed.
   */
  references: Array<Reference>;
  /**
   * The function node in which the reactive variable was declared, or for a
   * derived signal (function), the deepest function node that declares a
   * referenced signal.
   */
  declarationScope: ProgramOrFunctionNode;
  /**
   * The reactive variable. Not used directly, only needed for identification
   * in pushUniqueDerivedSignal.
   */
  variable: Variable;
}

interface TrackedScope {
  /**
   * The root node, usually a function or JSX expression container, to allow
   * reactive variables under.
   */
  node: T.Node;
  /**
   * The reactive variable should be one of these types:
   * - "function": synchronous function or signal variable
   * - "called-function": synchronous or asynchronous function like a timer or
   *   event handler that isn't really a tracked scope but allows reactivity
   * - "expression": some value containing reactivity somewhere
   */
  expect: "function" | "called-function" | "expression";
}

class ScopeStackItem {
  /** the node for the current scope, or program if global scope */
  node: ProgramOrFunctionNode;
  /**
   * nodes whose descendants in the current scope are allowed to be reactive.
   * JSXExpressionContainers can be any expression containing reactivity, while
   * function nodes/identifiers are typically arguments to solid-js primitives
   * and should match a tracked scope exactly.
   */
  trackedScopes: Array<TrackedScope> = [];
  /** nameless functions with reactivity, should exactly match a tracked scope */
  unnamedDerivedSignals = new Set<FunctionNode>();
  /** switched to true by time of :exit if JSX is detected in the current scope */
  hasJSX = false;

  constructor(node: ProgramOrFunctionNode) {
    this.node = node;
  }
}

class ScopeStack extends Array<ScopeStackItem> {
  currentScope = () => this[this.length - 1];

  /** Add references to a signal, memo, derived signal, etc. */
  pushSignal(
    variable: Variable,
    declarationScope: ProgramOrFunctionNode = this.currentScope().node
  ) {
    this.signals.push({
      references: variable.references.filter((reference) => !reference.init),
      variable,
      declarationScope,
    });
  }

  /**
   * Add references to a signal, merging with existing references if the
   * variable is the same. Derived signals are special; they don't use the
   * declaration scope of the function, but rather the minimum declaration scope
   * of any signals they contain.
   */
  pushUniqueSignal(variable: Variable, declarationScope: ProgramOrFunctionNode) {
    const foundSignal = this.signals.find((s) => s.variable === variable);
    if (!foundSignal) {
      this.pushSignal(variable, declarationScope);
    } else {
      foundSignal.declarationScope = this.findDeepestDeclarationScope(
        foundSignal.declarationScope,
        declarationScope
      );
    }
  }

  /** Add references to a props or store. */
  pushProps(
    variable: Variable,
    declarationScope: ProgramOrFunctionNode = this.currentScope().node
  ) {
    this.props.push({
      references: variable.references.filter((reference) => !reference.init),
      variable,
      declarationScope,
    });
  }

  /** Function callbacks that run synchronously and don't create a new scope. */
  syncCallbacks = new Set<FunctionNode>();

  /**
   * Iterate through and remove the signal references in the current scope.
   * That way, the next Scope up can safely check for references in its scope.
   */
  *consumeSignalReferencesInScope() {
    yield* this.consumeReferencesInScope(this.signals);
    this.signals = this.signals.filter((variable) => variable.references.length !== 0);
  }

  /** Iterate through and remove the props references in the current scope. */
  *consumePropsReferencesInScope() {
    yield* this.consumeReferencesInScope(this.props);
    this.props = this.props.filter((variable) => variable.references.length !== 0);
  }

  private *consumeReferencesInScope(
    variables: Array<ReactiveVariable>
  ): Iterable<{ reference: Reference; declarationScope: ProgramOrFunctionNode }> {
    for (const variable of variables) {
      const { references } = variable;
      const inScope: Array<Reference> = [],
        notInScope: Array<Reference> = [];
      references.forEach((reference) => {
        if (this.isReferenceInCurrentScope(reference)) {
          inScope.push(reference);
        } else {
          notInScope.push(reference);
        }
      });
      yield* inScope.map((reference) => ({
        reference,
        declarationScope: variable.declarationScope,
      }));
      variable.references = notInScope;
    }
  }

  /** Returns the function node deepest in the tree. Assumes a === b, a is inside b, or b is inside a. */
  private findDeepestDeclarationScope = (
    a: ProgramOrFunctionNode,
    b: ProgramOrFunctionNode
  ): ProgramOrFunctionNode => {
    if (a === b) return a;
    for (let i = this.length - 1; i >= 0; i -= 1) {
      const { node } = this[i];
      if (a === node || b === node) {
        return node;
      }
    }
    throw new Error("This should never happen");
  };

  /**
   * Returns true if the reference is in the current scope, handling sync
   * callbacks. Must be called on the :exit pass only.
   */
  private isReferenceInCurrentScope(reference: Reference) {
    let parentFunction = findParent(reference.identifier, isProgramOrFunctionNode);
    while (isFunctionNode(parentFunction) && this.syncCallbacks.has(parentFunction)) {
      parentFunction = findParent(parentFunction, isProgramOrFunctionNode);
    }
    return parentFunction === this.currentScope().node;
  }

  /** variable references to be treated as signals, memos, derived signals, etc. */
  private signals: Array<ReactiveVariable> = [];
  /** variables references to be treated as props (or stores) */
  private props: Array<ReactiveVariable> = [];
}

const getNthDestructuredVar = (id: T.Node, n: number, scope: Scope): Variable | null => {
  if (id?.type === "ArrayPattern") {
    const el = id.elements[n];
    if (el?.type === "Identifier") {
      return findVariable(scope, el.name);
    }
  }
  return null;
};

const getReturnedVar = (id: T.Node, scope: Scope): Variable | null => {
  if (id.type === "Identifier") {
    return findVariable(scope, id.name);
  }
  return null;
};

type MessageIds =
  | "noWrite"
  | "untrackedReactive"
  | "badSignal"
  | "badUnnamedDerivedSignal"
  | "shouldDestructure"
  | "shouldAssign"
  | "noAsyncTrackedScope";

const rule: TSESLint.RuleModule<MessageIds, []> = {
  meta: {
    type: "problem",
    docs: {
      recommended: "warn",
      description:
        "Enforce that reactive expressions (props, signals, memos, etc.) are only used in tracked scopes; otherwise, they won't update the view as expected.",
      url: "https://github.com/joshwilsonvu/eslint-plugin-solid/blob/main/docs/reactivity.md",
    },
    schema: [],
    messages: {
      noWrite: "The reactive variable '{{name}}' should not be reassigned or altered.",
      untrackedReactive: "The reactive variable '{{name}}' should be used within a tracked scope.",
      badSignal:
        "The reactive variable '{{name}}' should be called as a function when used in JSX.",
      badUnnamedDerivedSignal:
        "This function should be passed to a tracked scope because it contains reactivity.",
      shouldDestructure:
        "Array destructuring should be used to capture the {{nth}}result of this function call.",
      shouldAssign: "A variable should be used to capture the result of this function call.",
      noAsyncTrackedScope:
        "This tracked scope should not be async. Solid's reactivity only tracks synchronously.",
    },
  },
  create(context) {
    const warnShouldDestructure = (node: T.Node, nth?: string) =>
      context.report({
        node,
        messageId: "shouldDestructure",
        data: nth ? { nth: nth + " " } : undefined,
      });
    const warnShouldAssign = (node: T.Node) => context.report({ node, messageId: "shouldAssign" });

    const sourceCode = context.getSourceCode();

    /** Represents the lexical function stack and relevant information for each function */
    const scopeStack = new ScopeStack();
    const { currentScope } = scopeStack;

    /** Tracks imports from 'solid-js', handling aliases. */
    const { matchImport, handleImportDeclaration } = trackImports();

    /** Populates the function stack. */
    const onFunctionEnter = (node: ProgramOrFunctionNode) => {
      if (isFunctionNode(node) && scopeStack.syncCallbacks.has(node)) {
        // Ignore sync callbacks like Array#forEach and certain Solid primitives
        return;
      }
      scopeStack.push(new ScopeStackItem(node));
    };

    /** Returns whether a node falls under a tracked scope in the current function scope */
    const matchTrackedScope = (trackedScope: TrackedScope, node: T.Node): boolean => {
      switch (trackedScope.expect) {
        case "function":
        case "called-function":
          return node === trackedScope.node;
        case "expression":
          return Boolean(
            findInScope(node, currentScope().node, (node) => node === trackedScope.node)
          );
      }
    };

    /** Inspects a specific reference of a reactive variable for correct handling. */
    const handleTrackedScopes = (
      identifier: T.Identifier,
      declarationScope: ProgramOrFunctionNode
    ) => {
      const currentScopeNode = currentScope().node;
      // Check if the call falls outside any tracked scopes in the current scope
      if (
        !currentScope().trackedScopes.some((trackedScope) =>
          matchTrackedScope(trackedScope, identifier)
        )
      ) {
        if (declarationScope === currentScopeNode) {
          // If the reactivity is not contained in a tracked scope, and any of
          // the reactive variables were declared in the current scope, then we
          // report them. When the reference is to an object in a
          // MemberExpression (props/store) or a function call (signal), report
          // that, otherwise the identifier.
          let parentMemberExpression: T.MemberExpression | null = null;
          if (identifier.parent?.type === "MemberExpression") {
            parentMemberExpression = identifier.parent;
            while (parentMemberExpression!.parent?.type === "MemberExpression") {
              parentMemberExpression = parentMemberExpression!.parent;
            }
          }
          const parentCallExpression =
            identifier.parent?.type === "CallExpression" ? identifier.parent : null;
          context.report({
            node: parentMemberExpression ?? parentCallExpression ?? identifier,
            messageId: "untrackedReactive",
            data: { name: identifier.name },
          });
        } else {
          // If all of the reactive variables were declared above the current
          // function scope, then the entire function becomes reactive with the
          // deepest declaration scope of the reactive variables it contains.
          // Let the next onFunctionExit up handle it.
          const parentScope = scopeStack[scopeStack.length - 2];
          if (!parentScope || !isFunctionNode(currentScopeNode)) {
            throw new Error("this shouldn't happen!");
          }

          // If the current function doesn't have an associated variable, that's
          // fine, it's being used inline (i.e. anonymous arrow function). For
          // this to be okay, the arrow function has to be the same node as one
          // of the tracked scopes, as we can't easily find references.
          const pushUnnamedDerivedSignal = () =>
            (parentScope.unnamedDerivedSignals ??= new Set()).add(currentScopeNode);

          if (currentScopeNode.type === "FunctionDeclaration") {
            // get variable representing function, function node only defines one variable
            const functionVariable: Variable | undefined =
              sourceCode.scopeManager?.getDeclaredVariables(currentScopeNode)?.[0];
            if (functionVariable) {
              scopeStack.pushUniqueSignal(
                functionVariable,
                declarationScope // use declaration scope of a signal contained in this function
              );
            } else {
              pushUnnamedDerivedSignal();
            }
          } else if (currentScopeNode.parent?.type === "VariableDeclarator") {
            const declarator = currentScopeNode.parent;
            // for nameless or arrow function expressions, use the declared variable it's assigned to
            const functionVariable = sourceCode.scopeManager?.getDeclaredVariables(declarator)?.[0];
            if (functionVariable) {
              // use declaration scope of a signal contained in this scope, not the function itself
              scopeStack.pushUniqueSignal(functionVariable, declarationScope);
            } else {
              pushUnnamedDerivedSignal();
            }
          } else {
            pushUnnamedDerivedSignal();
          }
        }
      }
    };

    /** Performs all analysis and reporting. */
    const onFunctionExit = (currentScopeNode: ProgramOrFunctionNode) => {
      if (isFunctionNode(currentScopeNode) && scopeStack.syncCallbacks.has(currentScopeNode)) {
        // Ignore sync callbacks like Array#forEach and certain Solid primitives
        scopeStack.syncCallbacks.delete(currentScopeNode);
        return;
      }

      // If this function is a component, add its props as a reactive variable
      if (isFunctionNode(currentScopeNode) && currentScopeNode.params.length === 1) {
        const paramsNode = currentScopeNode.params[0];
        if (
          paramsNode?.type === "Identifier" &&
          (currentScope().hasJSX || isPropsByName(paramsNode.name)) &&
          currentScopeNode.parent?.type !== "JSXExpressionContainer" // "render props" aren't components
        ) {
          // This function is a component, consider its parameter a props
          const propsParam = findVariable(context.getScope(), paramsNode);
          if (propsParam) {
            scopeStack.pushProps(propsParam);
          }
        }
      }

      // Iterate through all usages of (derived) signals in the current scope
      for (const { reference, declarationScope } of scopeStack.consumeSignalReferencesInScope()) {
        const identifier = reference.identifier;
        if (reference.isWrite()) {
          // don't allow reassigning signals
          context.report({
            node: identifier,
            messageId: "noWrite",
            data: {
              name: identifier.name,
            },
          });
        } else if (
          identifier.type === "Identifier" &&
          // This allows both calling a signal and calling a function with a signal.
          (identifier.parent?.type === "CallExpression" ||
            // Also allow the case where we pass an array of signals, such as in a custom hook
            (identifier.parent?.type === "ArrayExpression" &&
              identifier.parent.parent?.type === "CallExpression"))
        ) {
          // This signal is getting called properly, analyze it.
          handleTrackedScopes(identifier, declarationScope);
        } else if (
          identifier.type === "Identifier" &&
          identifier.parent?.type === "JSXExpressionContainer" &&
          identifier.parent.parent?.type === "JSXElement"
        ) {
          // The signal is not being called and is being used as a props.children, where calling the signal was the likely intent.
          context.report({
            node: identifier,
            messageId: "badSignal",
            data: {
              name: identifier.name,
            },
          });
        }
        // The signal is being read outside of a CallExpression. Since
        // there's a lot of possibilities here and they're generally fine,
        // do nothing.
      }

      // Do a similar thing with all usages of props in the current function
      for (const { reference, declarationScope } of scopeStack.consumePropsReferencesInScope()) {
        const identifier = reference.identifier;
        if (reference.isWrite()) {
          // don't allow reassigning props or stores
          context.report({
            node: identifier,
            messageId: "noWrite",
            data: {
              name: identifier.name,
            },
          });
        } else if (
          identifier.parent?.type === "MemberExpression" &&
          identifier.parent.object === identifier
        ) {
          if (identifier.parent.parent?.type === "AssignmentExpression") {
            // don't allow writing to props or stores directly
            context.report({
              node: identifier,
              messageId: "noWrite",
              data: {
                name: identifier.name,
              },
            });
          } else {
            // The props are the object in a property read access, which
            // should be under a tracked scope.
            handleTrackedScopes(identifier, declarationScope);
          }
        } else if (
          identifier.parent?.type === "AssignmentExpression" ||
          identifier.parent?.type === "VariableDeclarator"
        ) {
          // There's no reason to allow `... = props`, it's usually destructuring, which breaks reactivity.
          context.report({
            node: identifier,
            messageId: "untrackedReactive",
            data: { name: identifier.name },
          });
        }
        // The props are being read, but not in a MemberExpression. Since
        // there's a lot of possibilities here and they're generally fine,
        // do nothing.
      }

      // If there are any unnamed derived signals, they must match a tracked
      // scope exactly. Usually anonymous arrow function args to createEffect,
      // createMemo, etc.
      const { unnamedDerivedSignals } = currentScope();
      if (unnamedDerivedSignals) {
        for (const node of unnamedDerivedSignals) {
          if (!currentScope().trackedScopes.find((trackedScope) => trackedScope.node === node)) {
            context.report({
              loc: getFunctionHeadLocation(node, sourceCode),
              messageId: "badUnnamedDerivedSignal",
            });
          }
        }
      }

      // Pop on exit
      scopeStack.pop();
    };

    /*
     * Sync array functions (forEach, map, reduce, reduceRight, flatMap),
     * store update fn params (ex. setState("todos", (t) => [...t.slice(0, i()),
     * ...t.slice(i() + 1)])), untrack, batch, onCleanup, and onError fn params, and
     * maybe a few others don't actually create a new scope. That is, any
     * signal/prop accesses in these functions act as if they happen in the
     * enclosing function. Note that this means whether or not the enclosing
     * function is a tracking scope applies to the fn param as well.
     *
     * Every time a sync callback is detected, we put that function node into a
     * syncCallbacks Set<FunctionNode>. The detections must happen on the entry pass
     * and when the function node has not yet been traversed. In onFunctionEnter, if
     * the function node is in syncCallbacks, we don't push it onto the
     * scopeStack. In onFunctionExit, if the function node is in syncCallbacks,
     * we don't pop scopeStack.
     */
    const checkForSyncCallbacks = (node: T.CallExpression) => {
      if (
        node.arguments.length === 1 &&
        isFunctionNode(node.arguments[0]) &&
        !node.arguments[0].async
      ) {
        if (
          node.callee.type === "Identifier" &&
          matchImport(["untrack", "batch", "onCleanup", "onError", "produce"], node.callee.name)
        ) {
          // These Solid APIs take callbacks that run in the current scope
          scopeStack.syncCallbacks.add(node.arguments[0]);
        } else if (
          node.callee.type === "MemberExpression" &&
          !node.callee.computed &&
          node.callee.object.type !== "ObjectExpression" &&
          /^(?:forEach|map|flatMap|reduce|reduceRight|find|findIndex|filter|every|some)$/.test(
            node.callee.property.name
          )
        ) {
          // These common array methods (or likely array methods) take synchronous callbacks
          scopeStack.syncCallbacks.add(node.arguments[0]);
        }
      }
      if (
        node.callee.type === "Identifier" &&
        matchImport(["createSignal", "createStore"], node.callee.name) &&
        node.parent?.type === "VariableDeclarator"
      ) {
        // Allow using reactive variables in state setter if the current scope is tracked.
        // ex.  const [state, setState] = createStore({ ... });
        //      setState(() => ({ preferredName: state.firstName, lastName: "Milner" }));
        const setter = getNthDestructuredVar(node.parent.id, 1, context.getScope());
        if (setter) {
          for (const reference of setter.references) {
            const { identifier } = reference;
            if (
              !reference.init &&
              reference.isRead() &&
              identifier.parent?.type === "CallExpression"
            ) {
              for (const arg of identifier.parent.arguments) {
                if (isFunctionNode(arg) && !arg.async) {
                  scopeStack.syncCallbacks.add(arg);
                }
              }
            }
          }
        }
      }
    };

    /** Checks VariableDeclarators, AssignmentExpressions, and CallExpressions for reactivity. */
    const checkForReactiveAssignment = (
      id: T.BindingName | T.AssignmentExpression["left"] | null,
      init: T.Expression
    ) => {
      // Mark return values of certain functions as reactive
      if (init.type === "CallExpression" && init.callee.type === "Identifier") {
        const { callee } = init;
        if (matchImport(["createSignal", "useTransition"], callee.name)) {
          const signal = id && getNthDestructuredVar(id, 0, context.getScope());
          if (signal) {
            scopeStack.pushSignal(signal, currentScope().node);
          } else {
            warnShouldDestructure(id ?? init, "first");
          }
        } else if (matchImport(["createMemo", "createSelector"], callee.name)) {
          const memo = id && getReturnedVar(id, context.getScope());
          // memos act like signals
          if (memo) {
            scopeStack.pushSignal(memo, currentScope().node);
          } else {
            warnShouldAssign(id ?? init);
          }
        } else if (matchImport("createStore", callee.name)) {
          const store = id && getNthDestructuredVar(id, 0, context.getScope());
          // stores act like props
          if (store) {
            scopeStack.pushProps(store, currentScope().node);
          } else {
            warnShouldDestructure(id ?? init, "first");
          }
        } else if (matchImport("mergeProps", callee.name)) {
          const merged = id && getReturnedVar(id, context.getScope());
          if (merged) {
            scopeStack.pushProps(merged, currentScope().node);
          } else {
            warnShouldAssign(id ?? init);
          }
        } else if (matchImport("splitProps", callee.name)) {
          // splitProps can return an unbounded array of props variables, though it's most often two
          if (id?.type === "ArrayPattern") {
            const vars = id.elements
              .map((_, i) => getNthDestructuredVar(id, i, context.getScope()))
              .filter(Boolean) as Array<Variable>;
            if (vars.length === 0) {
              warnShouldDestructure(id);
            } else {
              vars.forEach((variable) => {
                scopeStack.pushProps(variable, currentScope().node);
              });
            }
          } else {
            // if it's returned as an array, treat that as a props object
            const vars = id && getReturnedVar(id, context.getScope());
            if (vars) {
              scopeStack.pushProps(vars, currentScope().node);
            }
          }
        } else if (matchImport("createResource", callee.name)) {
          // createResource return value has reactive .loading and .error
          const resourceReturn = id && getNthDestructuredVar(id, 0, context.getScope());
          if (resourceReturn) {
            scopeStack.pushProps(resourceReturn, currentScope().node);
          }
        } else if (matchImport("createMutable", callee.name)) {
          const mutable = id && getReturnedVar(id, context.getScope());
          if (mutable) {
            scopeStack.pushProps(mutable, currentScope().node);
          }
        }
      }
    };

    const checkForTrackedScopes = (
      node:
        | T.JSXExpressionContainer
        | T.CallExpression
        | T.VariableDeclarator
        | T.AssignmentExpression
    ) => {
      const pushTrackedScope = (node: T.Node, expect: TrackedScope["expect"]) => {
        currentScope().trackedScopes.push({ node, expect });
        if (expect !== "called-function" && isFunctionNode(node) && node.async) {
          // From the docs: "[Solid's] approach only tracks synchronously. If you
          // have a setTimeout or use an async function in your Effect the code
          // that executes async after the fact won't be tracked."
          context.report({
            node,
            messageId: "noAsyncTrackedScope",
          });
        }
      };
      if (node.type === "JSXExpressionContainer") {
        // Expect a function if the attribute is like onClick={} or on:click={}.
        // From the docs: Events are never rebound and the bindings are not
        // reactive, as it is expensive to attach and detach listeners. Since
        // event handlers are called like any other function each time an event
        // fires, there is no need for reactivity; simply shortcut your handler
        // if desired.
        // What this means here is we actually do consider an event handler a
        // tracked scope expecting a function, i.e. it's okay to use changing
        // props/signals in the body of the function, even though the changes
        // don't affect when the handler will run.
        const expect =
          node.parent?.type === "JSXAttribute" &&
          sourceCode.getText(node.parent.name).match(/^on[:A-Z]/)
            ? "called-function"
            : "expression";
        pushTrackedScope(node.expression, expect);
      } else if (node.type === "CallExpression" && node.callee.type === "Identifier") {
        const callee = node.callee;
        const arg0 = node.arguments[0];
        if (
          matchImport(
            [
              "createMemo",
              "children",
              "createEffect",
              "createRenderEffect",
              "createDeferred",
              "createComputed",
              "createSelector",
            ],
            callee.name
          ) ||
          (matchImport("createResource", callee.name) && node.arguments.length >= 2)
        ) {
          // createEffect, createMemo, etc. fn arg, and createResource optional
          // `source` first argument may be a signal
          pushTrackedScope(arg0, "function");
        } else if (
          matchImport("onMount", callee.name) ||
          [
            "setInterval",
            "setTimeout",
            "setImmediate",
            "requestAnimationFrame",
            "requestIdleCallback",
          ].includes(callee.name)
        ) {
          // onMount can be async.
          // Timers are NOT tracked scopes. However, they don't need to react
          // to updates to reactive variables; it's okay to poll the current
          // value. Consider them event-handler tracked scopes for our purposes.
          pushTrackedScope(arg0, "called-function");
        } else if (matchImport("createMutable", callee.name) && arg0) {
          pushTrackedScope(arg0, "expression");
        } else if (matchImport("on", callee.name)) {
          // on accepts a signal or an array of signals as its first argument,
          // and a tracking function as its second
          if (arg0) {
            if (arg0.type === "ArrayExpression") {
              arg0.elements.forEach((element) => {
                pushTrackedScope(element, "function");
              });
            } else {
              pushTrackedScope(arg0, "function");
            }
          }
          if (node.arguments[1]) {
            // Since dependencies are known, function can be async
            pushTrackedScope(node.arguments[1], "called-function");
          }
        } else if (matchImport("runWithOwner", callee.name)) {
          // runWithOwner(owner, fn) only creates a tracked scope if `owner =
          // getOwner()` runs in a tracked scope. If owner is a variable,
          // attempt to detect if it's a tracked scope or not, but if this
          // can't be done, assume it's a tracked scope.
          if (node.arguments[1]) {
            let isTrackedScope = true;
            const owner =
              node.arguments[0].type === "Identifier" &&
              findVariable(context.getScope(), node.arguments[0]);
            if (owner) {
              const decl = owner.defs[0];
              if (
                decl &&
                decl.node.type === "VariableDeclarator" &&
                decl.node.init?.type === "CallExpression" &&
                decl.node.init.callee.type === "Identifier" &&
                matchImport("getOwner", decl.node.init.callee.name)
              ) {
                // Check if the function in which getOwner() is called is a tracked scope. If the scopeStack
                // has moved on from that scope already, assume it's tracked, since that's less intrusive.
                const ownerFunction = findParent(decl.node, isProgramOrFunctionNode);
                const scopeStackIndex = scopeStack.findIndex(({ node }) => ownerFunction === node);
                if (
                  (scopeStackIndex >= 1 &&
                    !scopeStack[scopeStackIndex - 1].trackedScopes.some(
                      (trackedScope) =>
                        trackedScope.expect === "function" && trackedScope.node === ownerFunction
                    )) ||
                  scopeStackIndex === 0
                ) {
                  isTrackedScope = false;
                }
              }
            }
            if (isTrackedScope) {
              pushTrackedScope(node.arguments[1], "function");
            }
          }
        } else if (/^(?:use|create)[A-Z]/.test(callee.name)) {
          // Custom hooks parameters may or may not be tracking scopes, no way to know.
          // Assume all identifier/function arguments are tracked scopes, and use "called-function"
          // to allow async handlers (permissive)
          node.arguments
            .filter((arg) => isFunctionNode(arg) || arg.type === "Identifier")
            .forEach((arg) => {
              pushTrackedScope(arg, "called-function");
            });
        }
      } else if (node.type === "VariableDeclarator") {
        // Solid 1.3 createReactive (renamed createReaction?) returns a track
        // function, a tracked scope expecting a reactive function. All of the
        // track function's references where it's called push a tracked scope.
        if (node.init?.type === "CallExpression" && node.init.callee.type === "Identifier") {
          if (matchImport(["createReactive", "createReaction"], node.init.callee.name)) {
            const track = getReturnedVar(node.id, context.getScope());
            if (track) {
              for (const reference of track.references) {
                if (
                  !reference.init &&
                  reference.isReadOnly() &&
                  reference.identifier.parent?.type === "CallExpression" &&
                  reference.identifier.parent.callee === reference.identifier
                ) {
                  const arg0 = reference.identifier.parent.arguments[0];
                  arg0 && pushTrackedScope(arg0, "function");
                }
              }
            }
          }
        }
      } else if (node.type === "AssignmentExpression") {
        if (
          node.left.type === "MemberExpression" &&
          node.left.property.type === "Identifier" &&
          isFunctionNode(node.right) &&
          /^on[a-z]+$/.test(node.left.property.name)
        ) {
          // To allow (questionable) code like the following example:
          //     ref.oninput = () = {
          //       if (!errors[ref.name]) return;
          //       ...
          //     }
          // where event handlers are manually attached to refs, detect these
          // scenarios and mark the right hand sides as tracked scopes expecting
          // functions.
          pushTrackedScope(node.right, "called-function");
        }
      }
    };

    return {
      ImportDeclaration: handleImportDeclaration,
      JSXExpressionContainer(node: T.JSXExpressionContainer) {
        checkForTrackedScopes(node);
      },
      CallExpression(node: T.CallExpression) {
        checkForTrackedScopes(node);
        checkForSyncCallbacks(node);

        // ensure calls to reactive primitives use the results.
        if (!["AssignmentExpression", "VariableDeclarator"].includes(node.parent?.type ?? "")) {
          checkForReactiveAssignment(null, node);
        }
      },
      VariableDeclarator(node: T.VariableDeclarator) {
        if (node.init) {
          checkForReactiveAssignment(node.id, node.init);
          checkForTrackedScopes(node);
        }
      },
      AssignmentExpression(node: T.AssignmentExpression) {
        if (node.left.type !== "MemberExpression") {
          checkForReactiveAssignment(node.left, node.right);
        }
        checkForTrackedScopes(node);
      },
      "JSXElement > JSXExpressionContainer > :function"(node: T.Node) {
        if (
          isFunctionNode(node) &&
          node.parent?.type === "JSXExpressionContainer" &&
          node.parent.parent?.type === "JSXElement"
        ) {
          const element = node.parent.parent;

          if (element.openingElement.name.type === "JSXIdentifier") {
            const tagName = element.openingElement.name.name;
            if (
              matchImport("For", tagName) &&
              node.params.length === 2 &&
              node.params[1].type === "Identifier"
            ) {
              const index = findVariable(context.getScope(), node.params[1]);
              if (index) {
                scopeStack.pushSignal(index, currentScope().node);
              }
            } else if (
              matchImport("Index", tagName) &&
              node.params.length >= 1 &&
              node.params[0].type === "Identifier"
            ) {
              const item = findVariable(context.getScope(), node.params[0]);
              if (item) {
                scopeStack.pushSignal(item, currentScope().node);
              }
            }
          }
        }
      },

      /* Function enter/exit */
      FunctionExpression: onFunctionEnter,
      ArrowFunctionExpression: onFunctionEnter,
      FunctionDeclaration: onFunctionEnter,
      Program: onFunctionEnter,
      "FunctionExpression:exit": onFunctionExit,
      "ArrowFunctionExpression:exit": onFunctionExit,
      "FunctionDeclaration:exit": onFunctionExit,
      "Program:exit": onFunctionExit,
      /* Detect JSX for adding props */
      JSXElement() {
        if (scopeStack.length) {
          currentScope().hasJSX = true;
        }
      },
      JSXFragment() {
        if (scopeStack.length) {
          currentScope().hasJSX = true;
        }
      },
    };
  },
};

export default rule;
