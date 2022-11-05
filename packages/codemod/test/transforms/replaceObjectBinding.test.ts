import findObjectBindingPatterns from "../../src/navigations/findObjectBindingPatterns";
import replaceObjectBinding from "../../src/transforms/replaceObjectBinding";
import format from "../format";
import transform from "../transform";
import { describe, expect, it } from "vitest";

const t = (code: string) =>
  transform(code, [
    (source) => {
      findObjectBindingPatterns(source).forEach((node) =>
        replaceObjectBinding(
          node
          //{}
        )
      );
    },
  ]);

describe("replaceObjectBinding", () => {
  it("adds var prefix", () => {
    expect(t("const { a } = props; console.log(a)")).toBe(
      format(`console.log(props.a)`)
    );
  });
  it("uses original var name", () => {
    expect(t("const { a: b } = props; console.log(b)")).toBe(
      format(`console.log(props.a)`)
    );
    expect(t("const { 'data-a': b } = props; console.log(b)")).toBe(
      format(`console.log(props["data-a"])`)
    );
  });
  it("uses mergeProps", () => {
    expect(t("const { a = 1 } = props; console.log(a)")).toBe(
      format(`
        import { mergeProps } from "solid-js";
        const baseProps = mergeProps({
            a: 1,
        }, props);
        console.log(baseProps.a)
      `)
    );
  });
  it("uses mergeProps with getter", () => {
    expect(t("const { a = value() } = props; console.log(a)")).toBe(
      format(`
        import { mergeProps } from "solid-js";
        const baseProps = mergeProps({
            get a() { return value(); }
        }, props);
        console.log(baseProps.a)
      `)
    );
  });
  it("uses splitProps", () => {
    expect(t("const { a, ...other } = props; console.log(a, other)")).toBe(
      format(`
        import { splitProps } from "solid-js";
        const [, other] = splitProps(props, ["a"]);
        console.log(props.a, other)
      `)
    );
  });
  it("uses splitProps with accessor", () => {
    expect(
      t("const { a, sub: { b, ...other } } = props; console.log(b, other)")
    ).toBe(
      format(`
        import { splitProps } from "solid-js";
        const [, other] = splitProps(mergeProps(() => props.sub), ["b"]);
        console.log(props.sub.b, other)
      `)
    );
  });
  it("uses splitProps with accessor and optional access", () => {
    expect(
      t("const { a, sub: { b, ...other } = {} } = props; console.log(b, other)")
    ).toBe(
      format(`
        import { splitProps } from "solid-js";
        const [, other] = splitProps(mergeProps(() => props.sub || {}), ["b"]);
        console.log(props.sub?.b, other)
      `)
    );
  });
  it("replaces semantically identical references to params", () => {
    expect(
      t(`
        function Component({ name1, name2, ...rest }) {
          var x = f({ name1, name2, ...rest });
          var x = f({
            name1,
            name2,
            ...rest
          });
          // TODO(milahu): sort names
          var x = f({ name2, name1, ...rest });
        }
      `)
    ).toMatchInlineSnapshot(`
      "function Component(params) {
        var x = f(params);
        var x = f(params);
        // TODO(milahu): sort names
        var x = f({ name2: params.name2, name1: params.name1, ...params.rest });
      }
      "
    `);
  });
  it("keeps JSX attribute names", () => {
    expect(
      t(`
        function Component({ name, ...rest }) {
          return (
            <Button name={name} rest={rest}/>
          )
        }
      `)
    ).toMatchInlineSnapshot(`
      "function Component(params) {
        return <Button name={params.name} rest={params.rest} />;
      }
      "
    `);
  });
  it("keeps JSX attribute names with default value", () => {
    expect(
      t(`
        function Component({
          name = "default",
          name2,
        }) {
          return (
            <Button name={name} name2={name2}/>
          )
        }
      `)
    ).toMatchInlineSnapshot(`
      "function Component(params) {
        return <Button name={params.name} name2={params.name2} />;
      }
      "
    `);
  });
  it("keeps JSX attribute names in complex code", () => {
    expect(
      t(`
        import * as React from 'react'

        function Expander({ expanded }: { expanded: boolean }) {
          return <div>{expanded}</div>
        }

        export const DefaultRenderer: Renderer = ({
          expanded = false,
        }) => {
          return (
            <Expander expanded={expanded} />
          )
        }
      `)
    ).toMatchInlineSnapshot(`
      "import * as React from "react";
      function Expander(params) {
        return <div>{params.expanded}</div>;
      }
      export const DefaultRenderer: Renderer = (params) => {
        return <Expander expanded={params.expanded} />;
      };
      "
    `);
  });
  it("keeps object prop names in complex code", () => {
    expect(
      t(`
        import * as React from 'react'
        type RendererProps = {
          expanded: boolean
        }
        type Renderer = (props: RendererProps) => JSX.Element
        function Expander({ expanded }: { expanded: boolean }) {
          return <div>{expanded}</div>
        }
        export const DefaultRenderer: Renderer = ({
          expanded = false,
        }) => {
          return (
            <Expander expanded={expanded} />
          )
        }
        type ExplorerProps = Partial<RendererProps> & {
          renderer?: Renderer
          defaultExpanded?: true | Record<string, boolean>
        }
        export default function Explorer({
          defaultExpanded,
          renderer = DefaultRenderer,
        }: ExplorerProps) {
          const [expanded, setExpanded] = React.useState(Boolean(defaultExpanded))
          return renderer({
            expanded,
          })
        }
      `)
    ).toMatchInlineSnapshot(`
      "import * as React from "react";
      type RendererProps = {
        expanded: boolean;
      };
      type Renderer = (props: RendererProps) => JSX.Element;
      function Expander(params) {
        return <div>{params.expanded}</div>;
      }
      export const DefaultRenderer: Renderer = (params) => {
        return <Expander expanded={params.expanded} />;
      };
      type ExplorerProps = Partial<RendererProps> & {
        renderer?: Renderer;
        defaultExpanded?: true | Record<string, boolean>;
      };
      export default function Explorer(params) {
        const [expanded, setExpanded] = React.useState(
          Boolean(params.defaultExpanded)
        );
        return params.renderer({
          expanded,
        });
      }
      "
    `);
  });
});
