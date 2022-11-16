import findReactObjects from "../../src/navigations/findReactObjects";
import replaceReactForwardRef from "../../src/transforms/replaceReactForwardRef";
import format from "../format";
import transform from "../transform";
import { describe, expect, it } from "../vitest";

const t = (code: string) =>
  transform(code, [
    (source) =>
      findReactObjects(source, ["forwardRef"]).map((v) =>
        replaceReactForwardRef(v.node)
      ),
  ]);

describe("replaceReactForwardRef", () => {
  it("uses createRef", () => {
    expect(
      t(`
        import * as React from "react";
        const Component = React.forwardRef(function Component(props, ref) {})
      `)
    ).toBe(
      format(`
        import * as React from "react";
        import createRef from "@suid/system/createRef";
        const Component = function Component(props) {
          const ref = createRef(props);
        }
      `)
    );
  });
  it("works with named import", () => {
    expect(
      t(`
        import { forwardRef } from "react";
        const Component = forwardRef(function Component(props, ref) {})
      `)
    ).toBe(
      format(`
        import { forwardRef } from "react";
        import createRef from "@suid/system/createRef";
        const Component = function Component(props) {
          const ref = createRef(props);
        }
      `)
    );
  });
  it("handles type arguments", () => {
    expect(
      t(`
        import * as React from "react";
        type ComponentOptions = { name: string }
        const Component = React.forwardRef<HTMLDivElement, ComponentOptions>(
          function Component(props, ref) {}
        )
      `)
    ).toMatchInlineSnapshot(`
      import * as React from "react";
      import createRef from "@suid/system/createRef";
      type ComponentOptions = { name: string };
      const Component = function Component(
        props: ComponentOptions & { ref: HTMLDivElement }
      ) {
        const ref = createRef(props);
      };
    `);
  });
  it("sets type on identifier argument", () => {
    expect(
      t(`
        import * as React from "react";
        const ComponentInner = function Component(props, ref) {}
        const Component = React.forwardRef<HTMLDivElement, ComponentOptions>(ComponentInner)
      `)
    ).toMatchInlineSnapshot(`
      import * as React from "react";
      import type { JSX } from "solid-js";
      const ComponentInner = function Component(props, ref) {};
      const Component = ((fn) =>
        fn as (props: ComponentOptions & { ref: HTMLDivElement }) => JSX.Element)(
        ComponentInner
      );
    `);
  });
  it("sets type on identifier argument with type arguments", () => {
    expect(
      t(`
        import * as React from "react";
        type ComponentOptions = { name: string }
        const ComponentInner = function Component(props, ref) {}
        const Component = React.forwardRef<HTMLDivElement, ComponentOptions>(ComponentInner)
      `)
    ).toMatchInlineSnapshot(`
      import * as React from "react";
      import type { JSX } from "solid-js";
      type ComponentOptions = { name: string };
      const ComponentInner = function Component(props, ref) {};
      const Component = ((fn) =>
        fn as (props: ComponentOptions & { ref: HTMLDivElement }) => JSX.Element)(
        ComponentInner
      );
    `);
  });
  it("sets type on non-identifier parameter", () => {
    expect(
      t(`
        import * as React from "react";
        type ComponentOptions = { name: string }
        const Component = React.forwardRef<HTMLDivElement, ComponentOptions>(
          function Component({ style, ...rest }, ref) {}
        )
      `)
    ).toMatchInlineSnapshot(`
      import * as React from "react";
      import createRef from "@suid/system/createRef";
      type ComponentOptions = { name: string };
      const Component = function Component({ style, ...rest }) {
        const ref = createRef({ style, ...rest });
      };
    `);
  });
  it("remove dangling comma after func argument", () => {
    expect(
      t(`
        import * as React from "react";
        function getComponent() {
          return (
            React.forwardRef(
              function Component({ style, ...rest }, ref) {},
            )
          )
        }
      `)
    ).toMatchInlineSnapshot(`
      import * as React from "react";
      import createRef from "@suid/system/createRef";
      function getComponent() {
        return function Component({ style, ...rest }) {
          const ref = createRef({ style, ...rest });
        };
      }
    `);
  });
});
