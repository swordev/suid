import findReactObjects from "../../src/navigations/findReactObjects.js";
import replaceReactForwardRef from "../../src/transforms/replaceReactForwardRef.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const e = async (code: string, expected: string) =>
  expect(
    await transform(code, [
      (source) =>
        findReactObjects(source, ["forwardRef"]).map((v) =>
          replaceReactForwardRef(v.node)
        ),
    ])
  ).toBe(await format(expected));

describe("replaceReactForwardRef", () => {
  it("uses createRef", async () => {
    await e(
      `
        import * as React from "react";
        const Component = React.forwardRef(function Component(props, ref) {})
      `,
      `
        import * as React from "react";
        import createRef from "@suid/system/createRef";
        const Component = function Component(props) {
          const ref = createRef(props);
        }
      `
    );
  });
});
