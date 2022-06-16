import findReactObjects from "../../src/navigations/findReactObjects";
import replaceReactForwardRef from "../../src/transforms/replaceReactForwardRef";
import format from "../format";
import transform from "../transform";

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
});
