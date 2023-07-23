import findObjectBindingPatterns from "../../src/navigations/findObjectBindingPatterns.js";
import replaceObjectBinding from "../../src/transforms/replaceObjectBinding.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const e = async (code: string, expected: string) =>
  expect(
    await transform(code, [
      (source) => {
        findObjectBindingPatterns(source).forEach((node) =>
          replaceObjectBinding(node, {})
        );
      },
    ])
  ).toBe(await format(expected));

describe("replaceObjectBinding", () => {
  it("adds var prefix", async () => {
    await e("const { a } = props; console.log(a)", `console.log(props.a)`);
  });
  it("uses original var name", async () => {
    await e("const { a: b } = props; console.log(b)", `console.log(props.a)`);
    await e(
      "const { 'data-a': b } = props; console.log(b)",
      `console.log(props["data-a"])`
    );
  });
  it("uses mergeProps", async () => {
    await e(
      "const { a = 1 } = props; console.log(a)",
      `
        import { mergeProps } from "solid-js";
        const baseProps = mergeProps({
            a: 1,
        }, props);
        console.log(baseProps.a)
      `
    );
  });
  it("uses mergeProps with getter", async () => {
    await e(
      "const { a = value() } = props; console.log(a)",
      `
        import { mergeProps } from "solid-js";
        const baseProps = mergeProps({
            get a() { return value(); }
        }, props);
        console.log(baseProps.a)
      `
    );
  });
  it("uses splitProps", async () => {
    await e(
      "const { a, ...other } = props; console.log(a, other)",
      `
        import { splitProps } from "solid-js";
        const [, other] = splitProps(props, ["a"]);
        console.log(props.a, other)
      `
    );
  });
  it("uses splitProps with accessor", async () => {
    await e(
      "const { a, sub: { b, ...other } } = props; console.log(b, other)",
      `
        import { splitProps } from "solid-js";
        const [, other] = splitProps(mergeProps(() => props.sub), ["b"]);
        console.log(props.sub.b, other)
      `
    );
  });
  it("uses splitProps with accessor and optional access", async () => {
    await e(
      "const { a, sub: { b, ...other } = {} } = props; console.log(b, other)",
      `
        import { splitProps } from "solid-js";
        const [, other] = splitProps(mergeProps(() => props.sub || {}), ["b"]);
        console.log(props.sub?.b, other)
      `
    );
  });
});
