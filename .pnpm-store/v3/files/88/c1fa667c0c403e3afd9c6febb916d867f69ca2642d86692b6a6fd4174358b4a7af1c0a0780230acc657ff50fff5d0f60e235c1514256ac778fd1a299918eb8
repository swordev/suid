"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const { getStringIfConstant } = utils_1.ASTUtils;
const getName = (node) => {
    switch (node.type) {
        case "Literal":
            return typeof node.value === "string" ? node.value : null;
        case "Identifier":
            return node.name;
        case "AssignmentPattern":
            return getName(node.left);
        default:
            return getStringIfConstant(node);
    }
};
const getPropertyInfo = (prop) => {
    const valueName = getName(prop.value);
    if (valueName !== null) {
        return {
            real: prop.key,
            var: valueName,
            computed: prop.computed,
            init: prop.value.type === "AssignmentPattern" ? prop.value.right : undefined,
        };
    }
    else {
        return null;
    }
};
const rule = {
    meta: {
        type: "problem",
        docs: {
            recommended: "error",
            description: "Disallow destructuring props. In Solid, props must be used with property accesses (`props.foo`) to preserve reactivity. This rule only tracks destructuring in the parameter list.",
            url: "https://github.com/joshwilsonvu/eslint-plugin-solid/blob/main/docs/no-destructure.md",
        },
        fixable: "code",
        schema: [],
        messages: {
            noDestructure: "Destructuring component props breaks Solid's reactivity; use property access instead.",
        },
    },
    create(context) {
        const functionStack = [];
        const currentFunction = () => functionStack[functionStack.length - 1];
        const onFunctionEnter = () => {
            functionStack.push({ hasJSX: false });
        };
        const onFunctionExit = (node) => {
            var _a;
            if (node.params.length === 1) {
                const props = node.params[0];
                if (props.type === "ObjectPattern" &&
                    currentFunction().hasJSX &&
                    ((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) !== "JSXExpressionContainer") {
                    context.report({
                        node: props,
                        messageId: "noDestructure",
                        fix: (fixer) => fixDestructure({
                            func: node,
                            props,
                            fixer,
                        }),
                    });
                }
            }
            functionStack.pop();
        };
        const fixDestructure = ({ func, props, fixer, propsName = "props", }) => {
            var _a, _b, _c, _d, _e;
            const properties = props.properties;
            const propertyInfo = [];
            let rest = null;
            for (const property of properties) {
                if (property.type === "RestElement") {
                    rest = property;
                }
                else {
                    const info = getPropertyInfo(property);
                    if (info === null) {
                        continue;
                    }
                    propertyInfo.push(info);
                }
            }
            const fixes = [];
            const hasDefaults = propertyInfo.some((info) => info.init);
            const origProps = !(hasDefaults || rest) ? propsName : "_" + propsName;
            fixes.push(fixer.replaceText(props, origProps));
            const sourceCode = context.getSourceCode();
            const defaultsObjectString = () => propertyInfo
                .filter((info) => info.init)
                .map((info) => `${info.computed ? "[" : ""}${sourceCode.getText(info.real)}${info.computed ? "]" : ""}: ${sourceCode.getText(info.init)}`)
                .join(", ");
            const splitPropsArray = () => `[${propertyInfo
                .map((info) => info.real.type === "Identifier"
                ? JSON.stringify(info.real.name)
                : sourceCode.getText(info.real))
                .join(", ")}]`;
            let lineToInsert = "";
            if (hasDefaults && rest) {
                lineToInsert = `  const [${propsName}, ${(_b = (_a = rest.argument) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "rest"}] = splitProps(mergeProps({ ${defaultsObjectString()} }, ${origProps}), ${splitPropsArray()});`;
            }
            else if (hasDefaults) {
                lineToInsert = `  const ${propsName} = mergeProps({ ${defaultsObjectString()} }, ${origProps});\n`;
            }
            else if (rest) {
                lineToInsert = `  const [${propsName}, ${(_d = (_c = rest.argument) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : "rest"}] = splitProps(${origProps}, ${splitPropsArray()});\n`;
            }
            if (lineToInsert) {
                const body = func.body;
                if (body.type === "BlockStatement") {
                    if (body.body.length > 0) {
                        fixes.push(fixer.insertTextBefore(body.body[0], lineToInsert));
                    }
                }
                else {
                    const maybeOpenParen = sourceCode.getTokenBefore(body);
                    if ((maybeOpenParen === null || maybeOpenParen === void 0 ? void 0 : maybeOpenParen.value) === "(") {
                        fixes.push(fixer.remove(maybeOpenParen));
                    }
                    const maybeCloseParen = sourceCode.getTokenAfter(body);
                    if ((maybeCloseParen === null || maybeCloseParen === void 0 ? void 0 : maybeCloseParen.value) === ")") {
                        fixes.push(fixer.remove(maybeCloseParen));
                    }
                    fixes.push(fixer.insertTextBefore(body, `{\n${lineToInsert}  return (`));
                    fixes.push(fixer.insertTextAfter(body, `);\n}`));
                }
            }
            const scope = (_e = sourceCode.scopeManager) === null || _e === void 0 ? void 0 : _e.acquire(func);
            if (scope) {
                propertyInfo
                    .map((info) => [info, scope.set.get(info.var)])
                    .filter(([, variable]) => Boolean(variable))
                    .forEach(([info, variable]) => {
                    variable.references.forEach((reference) => {
                        if (reference.isReadOnly()) {
                            const access = info.real.type === "Identifier" && !info.computed
                                ? `.${info.real.name}`
                                : `[${sourceCode.getText(info.real)}]`;
                            fixes.push(fixer.replaceText(reference.identifier, `${propsName}${access}`));
                        }
                    });
                });
            }
            return fixes;
        };
        return {
            FunctionDeclaration: onFunctionEnter,
            FunctionExpression: onFunctionEnter,
            ArrowFunctionExpression: onFunctionEnter,
            "FunctionDeclaration:exit": onFunctionExit,
            "FunctionExpression:exit": onFunctionExit,
            "ArrowFunctionExpression:exit": onFunctionExit,
            JSXElement() {
                if (functionStack.length) {
                    currentFunction().hasJSX = true;
                }
            },
            JSXFragment() {
                if (functionStack.length) {
                    currentFunction().hasJSX = true;
                }
            },
        };
    },
};
exports.default = rule;
