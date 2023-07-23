import findReactObjects from "../../src/navigations/findReactObjects.js";
import replaceReactJSXElementConstructor from "../../src/transforms/replaceReactJSXElementConstructor.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const t = async (code: string, expected: string) =>
  expect(
    await transform(code, [
      (source) =>
        findReactObjects(source, ["JSXElementConstructor"]).map((v) =>
          replaceReactJSXElementConstructor(v.node)
        ),
    ])
  ).toBe(await format(expected));

describe("replaceReactJSXElementConstructor", () => {
  it("replaces with Component", async () => {
    await t(
      `
        import * as React from "react";
        type a = React.JSXElementConstructor<{}>;
      `,
      `
        import * as React from "react";
        import { Component } from "solid-js";
        type a = Component<{}>;
      `
    );
  });
});
