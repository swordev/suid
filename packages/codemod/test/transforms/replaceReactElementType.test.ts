import findReactObjects from "../../src/navigations/findReactObjects.js";
import replaceReactElementType from "../../src/transforms/replaceReactElementType.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const e = async (code: string, expected: string) =>
  expect(
    await transform(code, [
      (source) =>
        findReactObjects(source, ["ElementType"]).map((v) =>
          replaceReactElementType(v.node)
        ),
    ])
  ).toBe(await format(expected));

describe("replaceReactElementType", () => {
  it("replaces with ST.ElementType", async () => {
    await e(
      `
        import * as React from "react";
        type a = React.ElementType;
      `,
      `
        import * as React from "react";
        import * as ST from "@suid/types";
        type a = ST.ElementType;
      `
    );
  });
  it("replaces with Component", async () => {
    await e(
      `
        import * as React from "react";
        type a = React.ElementType<{ value: number }>;
      `,
      `
        import * as React from "react";
        import { Component } from "solid-js";
        type a = Component<{ value: number }>;
      `
    );
  });
});
