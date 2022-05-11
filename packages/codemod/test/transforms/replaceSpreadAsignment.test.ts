import replaceSpreadAsignment from "../../src/transforms/replaceSpreadAsignment";
import findObjectLiteralExpressions from "../../src/utils/findObjectLiteralExpressions";
import f from "../format";
import transform from "../transform";

const t = (code: string) =>
  transform(code, [
    (source) => {
      findObjectLiteralExpressions(source).forEach((node) =>
        replaceSpreadAsignment(node, {})
      );
    },
  ]);

describe("replaceSpreadAsignment", () => {
  it("transforms spread", () => {
    expect(t("const a = { ...props };")).toBe(
      f(`
        import { mergeProps } from "solid-js";
        const a = mergeProps(props);
      `)
    );
  });
  it("transforms spread within JSX", () => {
    expect(t("const e = <div a={{...props }} />;")).toBe(
      f(`
        import { mergeProps } from "solid-js";
        const e = <div a={mergeProps(props)} />;
      `)
    );
  });
});
