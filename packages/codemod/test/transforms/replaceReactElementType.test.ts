import findReactObjects from "../../src/navigations/findReactObjects";
import replaceReactElementType from "../../src/transforms/replaceReactElementType";
import format from "../format";
import transform from "../transform";

const t = (code: string) =>
  transform(code, [
    (source) =>
      findReactObjects(source, ["ElementType"]).map((v) =>
        replaceReactElementType(v.node)
      ),
  ]);

describe("replaceReactElementType", () => {
  it("replaces with ST.ElementType", () => {
    expect(
      t(`
        import * as React from "react";
        type a = React.ElementType;
      `)
    ).toBe(
      format(`
        import * as React from "react";
        import * as ST from "@suid/types";
        type a = ST.ElementType;
      `)
    );
  });
  it("replaces with Component", () => {
    expect(
      t(`
        import * as React from "react";
        type a = React.ElementType<{ value: number }>;
      `)
    ).toBe(
      format(`
        import * as React from "react";
        import { Component } from "solid-js";
        type a = Component<{ value: number }>;
      `)
    );
  });
});
