import findReactObjects from "../../src/navigations/findReactObjects";
import replaceReactCSSPropertiesType from "../../src/transforms/replaceReactCSSPropertiesType";
import transform from "../transform";

const t = (code: string) =>
  transform(code, [
    (source) =>
      findReactObjects(source, ["CSSProperties"]).map((v) =>
        replaceReactCSSPropertiesType(v.node)
      ),
  ]);

describe("replaceReactCSSPropertiesType", () => {
  it("replaces with CSS.Properties", () => {
    expect(
      t(`
        import React from "react"
        type a = React.CSSProperties
      `)
    ).toMatchInlineSnapshot(`
      "import React from "react";
      import type * as CSS from "csstype";
      type a = CSS.Properties;
      "
    `);
  });
});
