import findReactObjects from "../../src/navigations/findReactObjects";
import replaceReactComponentPropsWithoutRefType from "../../src/transforms/replaceReactComponentPropsWithoutRefType";
import transform from "../transform";
import { describe, expect, it } from "../vitest";

const t = (code: string) =>
  transform(code, [
    (source) =>
      findReactObjects(source, ["ComponentPropsWithoutRef"]).map((v) =>
        replaceReactComponentPropsWithoutRefType(v.node)
      ),
  ]);

describe("replaceReactComponentPropsWithoutRefType", () => {
  it("replaces with JSX.IntrinsicElements", () => {
    expect(
      t(`
        import React from "react";
        type a = React.ComponentPropsWithoutRef<"div">
        type b = React.ComponentPropsWithoutRef<"input">
      `)
    ).toMatchInlineSnapshot(`
      import React from "react";
      import type { JSX } from "solid-js";
      import type { JSX } from "solid-js";
      type a = JSX.IntrinsicElements["div"];
      type b = JSX.IntrinsicElements["input"];
    `);
  });
  it("works with import type React", () => {
    expect(
      t(`
        import type React from "react";
        type a = React.ComponentPropsWithoutRef<"div">
        type b = React.ComponentPropsWithoutRef<"input">
      `)
    ).toMatchInlineSnapshot(`
      import type React from "react";
      import type { JSX } from "solid-js";
      import type { JSX } from "solid-js";
      type a = JSX.IntrinsicElements["div"];
      type b = JSX.IntrinsicElements["input"];
    `);
  });
  it("works with import type ComponentPropsWithoutRef", () => {
    expect(
      t(`
        import type { ComponentPropsWithoutRef } from "react";
        type a = ComponentPropsWithoutRef<"div">
        type b = ComponentPropsWithoutRef<"input">
      `)
    ).toMatchInlineSnapshot(`
      import type { ComponentPropsWithoutRef } from "react";
      import type { JSX } from "solid-js";
      import type { JSX } from "solid-js";
      type a = JSX.IntrinsicElements["div"];
      type b = JSX.IntrinsicElements["input"];
    `);
  });
});
