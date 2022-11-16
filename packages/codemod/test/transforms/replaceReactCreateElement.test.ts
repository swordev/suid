import findReactObjects from "../../src/navigations/findReactObjects";
import replaceReactCreateElement from "../../src/transforms/replaceReactCreateElement";
import transform from "../transform";
import { describe, expect, it } from "../vitest";

const t = (code: string) =>
  transform(code, [
    (source) =>
      findReactObjects(source, ["createElement"]).map((v) =>
        replaceReactCreateElement(v.node)
      ),
  ]);

describe("replaceReactCreateElement", () => {
  it("works", () => {
    expect(
      t(`
        import * as React from "react";
        React.createElement("div", {
            id: "asdf",
        })
      `)
    ).toMatchInlineSnapshot(`
      import * as React from "react";
      import h from "solid-js/h";
      h("div", {
        id: "asdf",
      });
    `);
  });
});
