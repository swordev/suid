import findObjectBindingPatterns from "../../src/navigations/findObjectBindingPatterns";
import replaceObjectBinding from "../../src/transforms/replaceObjectBinding";
import format from "../format";
import transform from "../transform";
import { describe, expect, it } from "vitest";

const t = (code: string) =>
  transform(code, [
    (source) => {
      findObjectBindingPatterns(source).forEach((node) =>
        replaceObjectBinding(node, {})
      );
    },
  ]);

describe("replaceObjectBinding", () => {
  it("adds var prefix", () => {
    expect(t("const { a } = props; console.log(a)")).toBe(
      format(`console.log(props.a)`)
    );
  });
  it("uses original var name", () => {
    expect(t("const { a: b } = props; console.log(b)")).toBe(
      format(`console.log(props.a)`)
    );
    expect(t("const { 'data-a': b } = props; console.log(b)")).toBe(
      format(`console.log(props["data-a"])`)
    );
  });
  it("uses mergeProps", () => {
    expect(t("const { a = 1 } = props; console.log(a)")).toBe(
      format(`
        import { mergeProps } from "solid-js";
        const baseProps = mergeProps({
            a: 1,
        }, props);
        console.log(baseProps.a)
      `)
    );
  });
  it("uses mergeProps with getter", () => {
    expect(t("const { a = value() } = props; console.log(a)")).toBe(
      format(`
        import { mergeProps } from "solid-js";
        const baseProps = mergeProps({
            get a() { return value(); }
        }, props);
        console.log(baseProps.a)
      `)
    );
  });
  it("uses splitProps", () => {
    expect(t("const { a, ...other } = props; console.log(a, other)")).toBe(
      format(`
        import { splitProps } from "solid-js";
        const [, other] = splitProps(props, ["a"]);
        console.log(props.a, other)
      `)
    );
  });
  it("uses splitProps with accessor", () => {
    expect(
      t("const { a, sub: { b, ...other } } = props; console.log(b, other)")
    ).toBe(
      format(`
        import { splitProps } from "solid-js";
        const [, other] = splitProps(mergeProps(() => props.sub), ["b"]);
        console.log(props.sub.b, other)
      `)
    );
  });
  it("uses splitProps with accessor and optional access", () => {
    expect(
      t("const { a, sub: { b, ...other } = {} } = props; console.log(b, other)")
    ).toBe(
      format(`
        import { splitProps } from "solid-js";
        const [, other] = splitProps(mergeProps(() => props.sub || {}), ["b"]);
        console.log(props.sub?.b, other)
      `)
    );
  });
  it("replaces semantically identical references to params", () => {
    expect(
      t(`
        function Component({ name1, name2, ...rest }) {
          var x = f({ name1, name2, ...rest });
          var x = f({
            name1,
            name2,
            ...rest
          });
          // TODO(milahu): sort names
          var x = f({ name2, name1, ...rest });
        }
      `)
    ).toMatchInlineSnapshot(`
      "function Component(params_0) {
        var x = f(params_0);
        var x = f(params_0);
        // TODO(milahu): sort names
        var x = f({ name2: params_0.name2, name1: params_0.name1, ...params_0.rest });
      }
      "
    `);
  });
});
