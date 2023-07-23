import findReactObjects from "../../src/navigations/findReactObjects.js";
import replaceReactUseState from "../../src/transforms/replaceReactUseState.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const e = async (code: string, expected: string) =>
  expect(
    await transform(code, [
      (source) =>
        findReactObjects(source, ["useState"]).map((v) =>
          replaceReactUseState(v.node)
        ),
    ])
  ).toBe(await format(expected));

describe("replareReactUseState", () => {
  it("transforms useState and variable", async () => {
    await e(
      `
        import * as React from "react";
        const [a, setA] = React.useState(1);
        console.log(a);
      `,
      `
        import * as React from "react";
        import { createSignal } from "solid-js";
        const [a, setA] = createSignal(1);
        console.log(a());
      `
    );
  });

  it("transforms property", async () => {
    await e(
      `
        import * as React from "react";
        const [a, setA] = React.useState(1);
        console.log({ a });
      `,
      `
        import * as React from "react";
        import { createSignal } from "solid-js";
        const [a, setA] = createSignal(1);
        console.log({ a: a() });
      `
    );
  });
});
