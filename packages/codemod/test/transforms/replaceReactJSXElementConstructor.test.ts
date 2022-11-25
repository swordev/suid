import findReactObjects from "../../src/navigations/findReactObjects.js";
import replaceReactJSXElementConstructor from "../../src/transforms/replaceReactJSXElementConstructor.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const t = (code: string) =>
  transform(code, [
    (source) =>
      findReactObjects(source, ["JSXElementConstructor"]).map((v) =>
        replaceReactJSXElementConstructor(v.node)
      ),
  ]);

describe("replaceReactJSXElementConstructor", () => {
  it("replaces with Component", () => {
    expect(
      t(`
        import * as React from "react";
        type a = React.JSXElementConstructor<{}>;
      `)
    ).toBe(
      format(`
        import * as React from "react";
        import { Component } from "solid-js";
        type a = Component<{}>;
      `)
    );
  });
});
