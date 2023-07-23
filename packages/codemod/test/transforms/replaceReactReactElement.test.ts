import findReactObjects from "../../src/navigations/findReactObjects.js";
import replaceReactReactElement from "../../src/transforms/replaceReactReactElement.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const e = async (code: string, expected: string) =>
  expect(
    await transform(code, [
      (source) =>
        findReactObjects(source, ["ReactElement"]).map((v) =>
          replaceReactReactElement(v.node)
        ),
    ])
  ).toBe(await format(expected));

describe("replaceReactReactElement", () => {
  it("replaces with ST.ElementType", async () => {
    const result = `
      import * as React from "react";
      import * as ST from "@suid/types";
      type a = ST.ElementType;
    `;
    await e(
      `
        import * as React from "react";
        type a = React.ReactElement;
      `,
      result
    );
    await e(
      `
        import * as React from "react";
        type a = React.ReactElement<any>;
      `,
      result
    );
    await e(
      `
        import * as React from "react";
        type a = React.ReactElement<any, any>;
      `,
      result
    );
  });
  it("replaces with Component", async () => {
    await e(
      `
        import * as React from "react";
        type a = React.ReactElement<{}>;
      `,
      `
        import * as React from "react";
        import { Component } from "solid-js";
        type a = Component<{}>;
    `
    );
  });
});
