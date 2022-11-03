import findReactObjects from "../../src/navigations/findReactObjects";
import replaceReactElementType from "../../src/transforms/replaceReactElementType";
import format from "../format";
import transform from "../transform";
import { describe, expect, it } from "vitest";

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
  it("replaces with ST.ElementType from import type React", () => {
    expect(
      t(`
        import type React from "react";
        type a = React.ElementType;
      `)
    ).toBe(
      format(`
        import type React from "react";
        import * as ST from "@suid/types";
        type a = ST.ElementType;
      `)
    );
  });
  it("replaces with ST.ElementType from import type ElementType", () => {
    expect(
      t(`
        import type { ElementType } from "react";
        type a = ElementType;
      `)
    ).toBe(
      format(`
        import type { ElementType } from "react";
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
  it("replaces with Component from import type React", () => {
    expect(
      t(`
        import type React from "react";
        type a = React.ElementType<{ value: number }>;
      `)
    ).toBe(
      format(`
        import type React from "react";
        import { Component } from "solid-js";
        type a = Component<{ value: number }>;
      `)
    );
  });
  it("replaces with Component from import type ElementType", () => {
    expect(
      t(`
        import type { ElementType } from "react";
        type a = ElementType<{ value: number }>;
      `)
    ).toBe(
      format(`
        import type { ElementType } from "react";
        import { Component } from "solid-js";
        type a = Component<{ value: number }>;
      `)
    );
  });
});
