import findReactObjects from "../../src/navigations/findReactObjects";
import replaceReactReactElement from "../../src/transforms/replaceReactReactElement";
import format from "../format";
import transform from "../transform";
import { describe, expect, it } from "vitest";

const t = (code: string) =>
  transform(code, [
    (source) =>
      findReactObjects(source, ["ReactElement"]).map((v) =>
        replaceReactReactElement(v.node)
      ),
  ]);

describe("replaceReactReactElement", () => {
  it("replaces with ST.ElementType", () => {
    const result = format(`
      import * as React from "react";
      import * as ST from "@suid/types";
      type a = ST.ElementType;
    `);
    expect(
      t(`
        import * as React from "react";
        type a = React.ReactElement;
      `)
    ).toBe(result);
    expect(
      t(`
        import * as React from "react";
        type a = React.ReactElement<any>;
      `)
    ).toBe(result);
    expect(
      t(`
        import * as React from "react";
        type a = React.ReactElement<any, any>;
      `)
    ).toBe(result);
  });
  it("replaces with Component", () => {
    expect(
      t(`
        import * as React from "react";
        type a = React.ReactElement<{}>;
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
