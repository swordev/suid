import findObjectLiteralExpressions from "../../src/navigations/findObjectLiteralExpressions.js";
import replaceSpreadAsignment from "../../src/transforms/replaceSpreadAsignment.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const e = async (code: string, expected: string) =>
  expect(
    await transform(code, [
      (source) => {
        findObjectLiteralExpressions(source).forEach((node) =>
          replaceSpreadAsignment(node, {})
        );
      },
    ])
  ).toBe(await format(expected));

describe("replaceSpreadAsignment", () => {
  it("transforms spread", async () => {
    await e(
      "const a = { ...props };",
      `
        import { mergeProps } from "solid-js";
        const a = mergeProps(props);
      `
    );
  });
  it("transforms spread within JSX", async () => {
    e(
      "const e = <div a={{...props }} />;",
      `
        import { mergeProps } from "solid-js";
        const e = <div a={mergeProps(props)} />;
      `
    );
  });
});
