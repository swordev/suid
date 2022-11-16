import findObjectBindingPatterns from "../../src/navigations/findObjectBindingPatterns";
import replaceObjectBinding from "../../src/transforms/replaceObjectBinding";
import format from "../format";
import transform from "../transform";
import { describe, expect, it } from "../vitest";

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
      function Component(params) {
        var x = f(params);
        var x = f(params);
        // TODO(milahu): sort names
        var x = f({ name2: params.name2, name1: params.name1, ...params.rest });
      }
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
      function Component(params) {
        return <Button name={params.name} rest={params.rest} />;
      }
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
      import { mergeProps } from "solid-js";
      function Component(rawParams) {
        const params = mergeProps(
          {
            name: "default",
          },
          rawParams
        );
        return <Button name={params.name} name2={params.name2} />;
      }
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
      import * as React from "react";
      import { mergeProps } from "solid-js";
      function Expander(params: { expanded: boolean }) {
        return <div>{params.expanded}</div>;
      }
      export const DefaultRenderer: Renderer = (rawParams) => {
        return <Expander expanded={params.expanded} />;
      };
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
      import * as React from "react";
      import { mergeProps } from "solid-js";
      import { mergeProps } from "solid-js";
      type RendererProps = {
        expanded: boolean;
      };
      type Renderer = (props: RendererProps) => JSX.Element;
      function Expander(params: { expanded: boolean }) {
        return <div>{params.expanded}</div>;
      }
      export const DefaultRenderer: Renderer = (rawParams) => {
        return <Expander expanded={params.expanded} />;
      };
      type ExplorerProps = Partial<RendererProps> & {
        renderer?: Renderer;
        defaultExpanded?: true | Record<string, boolean>;
      };
      export default function Explorer(rawParams: ExplorerProps) {
        const params = mergeProps(
          {
            renderer: DefaultRenderer,
          },
          rawParams
        );
        const [expanded, setExpanded] = React.useState(
          Boolean(params.defaultExpanded)
        );
        return params.renderer({
          expanded,
        });
      }
    `);
  });
  it("keeps type of params", () => {
    expect(
      t(`
        function Component({ name }: { name: string }) {
          return (
            <Button name={name}/>
          )
        }
      `)
      // TODO(milahu): rename params to props
    ).toMatchInlineSnapshot(`
      function Component(params: { name: string }) {
        return <Button name={params.name} />;
      }
    `);
  });
  it("keep default values of props", () => {
    expect(
      t(`
        function Component({
          name1,
          name2 = {},
          name3 = [],
          name4 = 'init3',
        }: ComponentOptions): React.ReactElement | null {
          return (
            <div>
              <div>{name1}</div>
              <div>{name2}</div>
              <div>{name3}</div>
              <div>{name4}</div>
            </div>
          )
        }
      `)
    ).toMatchInlineSnapshot(`
      import { mergeProps } from "solid-js";
      function Component(rawParams: ComponentOptions): React.ReactElement | null {
        const params = mergeProps(
          {
            name2: {},
            name3: [],
            name4: "init3",
          },
          rawParams
        );
        return (
          <div>
            <div>{params.name1}</div>
            <div>{params.name2}</div>
            <div>{params.name3}</div>
            <div>{params.name4}</div>
          </div>
        );
      }
    `);
  });
  /* FIXME(milahu): insertStatements
  it("keep default values of props in FunctionExpression", () => {
    expect(
      t(`
        const Component = function Component({
          name = "asdf"
        }) {
          return (
            <div>{name}</div>
          )
        }
      `)
    ).toMatchInlineSnapshot(`
      import { mergeProps } from "solid-js";
      const Component = function Component(rawParams) {
        return <div>{params.name}</div>;
      };
    `);
  });
  it("keep default values of props in ArrowFunction with Expression body", () => {
    expect(
      t(`
        const Component = ({
          name = "asdf"
        }) => (
          <div>{name}</div>
        )
      `)
    ).toMatchInlineSnapshot(`
      import { mergeProps } from "solid-js";
      const Component = (rawParams) => <div>{params.name}</div>;
    `);
  });
  it("keep default values of props in ArrowFunction with Block body", () => {
    expect(
      t(`
        const Component = ({
          name = "asdf"
        }) => {
          return <div>{name}</div>
        }
      `)
    ).toMatchInlineSnapshot(`
      import { mergeProps } from "solid-js";
      const Component = (rawParams) => {
        return <div>{params.name}</div>;
      };
    `);
  });
  */
  // FIXME(milahu):
  // actual: function ReactQueryDevtools(params: import("/file").DevtoolsOptions)
  // expected: function ReactQueryDevtools(params: DevtoolsOptions)
});
