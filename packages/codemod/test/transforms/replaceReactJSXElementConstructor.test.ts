import findReactObjects from "../../src/navigations/findReactObjects";
import replaceReactJSXElementConstructor from "../../src/transforms/replaceReactJSXElementConstructor";
import format from "../format";
import transform from "../transform";

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
