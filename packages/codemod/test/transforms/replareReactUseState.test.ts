import findReactObjects from "../../src/navigations/findReactObjects.js";
import replaceReactUseState from "../../src/transforms/replaceReactUseState.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const t = (code: string) =>
  transform(code, [
    (source) =>
      findReactObjects(source, ["useState"]).map((v) =>
        replaceReactUseState(v.node)
      ),
  ]);

describe("replareReactUseState", () => {
  it("transforms useState and variable", () => {
    expect(
      t(`
        import * as React from "react";
        const [a, setA] = React.useState(1);
        console.log(a);
      `)
    ).toBe(
      format(`
        import * as React from "react";
        import { createSignal } from "solid-js";
        const [a, setA] = createSignal(1);
        console.log(a());
      `)
    );
  });

  it("transforms property", () => {
    expect(
      t(`
        import * as React from "react";
        const [a, setA] = React.useState(1);
        console.log({ a });
      `)
    ).toBe(
      format(`
        import * as React from "react";
        import { createSignal } from "solid-js";
        const [a, setA] = createSignal(1);
        console.log({ a: a() });
      `)
    );
  });
});
