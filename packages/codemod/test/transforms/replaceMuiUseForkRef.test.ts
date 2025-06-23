import replaceMuiUseForkRef, {
  findUseForkRefIdentifiers,
} from "../../src/transforms/replaceMuiUseForkRef.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const e = async (code: string, expected: string) =>
  expect(
    await transform(code, [
      (source) => {
        findUseForkRefIdentifiers(source).forEach((node) =>
          replaceMuiUseForkRef(node)
        );
      },
    ])
  ).toBe(await format(expected));

describe("replaceMuiUseForkRef", () => {
  it("removes all declarations", async () => {
    await e(
      `
        const inputRef = React.useRef(null);
        const handleRef = useForkRef(ref, inputRef);
        console.log(inputRef, handleRef, ref);
      `,
      `console.log(ref, ref, ref)`
    );
  });

  it("use 'ref' identifier as first", async () => {
    await e(
      `
        const Tooltip = React.forwardRef(function(inProps, ref) {
          const handleUseRef = useForkRef(setChildNode, ref);
          const handleFocusRef = useForkRef(focusVisibleRef, handleUseRef);
          const handleRef = useForkRef(children.ref, handleFocusRef);
          console.log(handleUseRef, handleFocusRef, handleRef);
        })
      `,
      `
        const Tooltip = React.forwardRef(function(inProps, ref) {
          console.log(ref, ref, ref)
        })
      `
    );
  });
});
