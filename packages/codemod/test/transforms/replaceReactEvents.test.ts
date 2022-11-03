import findReactObjects from "../../src/navigations/findReactObjects";
import replaceReactEvents, {
  nativeEvents,
} from "../../src/transforms/replaceReactEvents";
import transform from "../transform";

const t = (code: string) =>
  transform(code, [
    (source) =>
      findReactObjects(source, nativeEvents).map((v) =>
        replaceReactEvents(v.node)
      ),
  ]);

describe("replaceReactEvents", () => {
  it("replaces React.MouseEvent<T, E>", () => {
    expect(
      t(`
        import React from "react"
        type a = React.MouseEvent<HTMLDivElement>
        type b = React.MouseEvent<HTMLParagraphElement, MouseEvent>
      `)
    ).toMatchInlineSnapshot(`
      "import React from "react";
      type a = MouseEventOn<HTMLDivElement>;
      type b = MouseEventOn<HTMLParagraphElement>;
      interface MouseEventOn<T extends EventTarget> extends MouseEvent {
        readonly target: T;
      }
      "
    `);
  });
  it("replaces React.TouchEvent<T, E>", () => {
    expect(
      t(`
        import React from "react"
        type a = React.TouchEvent<HTMLDivElement>
        type b = React.TouchEvent<HTMLParagraphElement, TouchEvent>
      `)
    ).toMatchInlineSnapshot(`
      "import React from "react";
      type a = TouchEventOn<HTMLDivElement>;
      type b = TouchEventOn<HTMLParagraphElement>;
      interface TouchEventOn<T extends EventTarget> extends TouchEvent {
        readonly target: T;
      }
      "
    `);
  });
  it("replaces React.KeyboardEvent<T, E>", () => {
    expect(
      t(`
        import React from "react"
        type a = React.KeyboardEvent<HTMLDivElement>
        type b = React.KeyboardEvent<HTMLParagraphElement, KeyboardEvent>
      `)
    ).toMatchInlineSnapshot(`
      "import React from "react";
      type a = KeyboardEventOn<HTMLDivElement>;
      type b = KeyboardEventOn<HTMLParagraphElement>;
      interface KeyboardEventOn<T extends EventTarget> extends KeyboardEvent {
        readonly target: T;
      }
      "
    `);
  });
});
