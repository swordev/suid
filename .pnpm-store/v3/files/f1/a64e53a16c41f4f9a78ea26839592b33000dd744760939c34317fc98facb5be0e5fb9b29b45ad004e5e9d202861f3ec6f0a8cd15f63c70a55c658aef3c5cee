"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rule = {
    meta: {
        type: "problem",
        docs: {
            recommended: "error",
            description: "Prevent variables used in JSX from being marked as unused.",
            url: "https://github.com/joshwilsonvu/eslint-plugin-solid/blob/main/docs/jsx-uses-vars.md",
        },
        schema: [],
        messages: {},
    },
    create(context) {
        return {
            JSXOpeningElement(node) {
                let parent;
                switch (node.name.type) {
                    case "JSXNamespacedName":
                        return;
                    case "JSXIdentifier":
                        context.markVariableAsUsed(node.name.name);
                        break;
                    case "JSXMemberExpression":
                        parent = node.name.object;
                        while ((parent === null || parent === void 0 ? void 0 : parent.type) === "JSXMemberExpression") {
                            parent = parent.object;
                        }
                        if (parent.type === "JSXIdentifier") {
                            context.markVariableAsUsed(parent.name);
                        }
                        break;
                }
            },
            "JSXAttribute > JSXNamespacedName": (node) => {
                var _a, _b;
                if (((_a = node.namespace) === null || _a === void 0 ? void 0 : _a.type) === "JSXIdentifier" &&
                    node.namespace.name === "use" &&
                    ((_b = node.name) === null || _b === void 0 ? void 0 : _b.type) === "JSXIdentifier") {
                    context.markVariableAsUsed(node.name.name);
                }
            },
        };
    },
};
exports.default = rule;
