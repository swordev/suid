import replaceMuiUseForkRef, {
  findUseForkRefIdentifiers,
} from "../../src/transforms/replaceMuiUseForkRef.js";
import f from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const t = (code: string) =>
  transform(code, [
    (source) => {
      findUseForkRefIdentifiers(source).forEach((node) =>
        replaceMuiUseForkRef(node)
      );
    },
  ]);

describe("replaceMuiUseForkRef", () => {
  it("removes all declarations", () => {
    expect(
      t(`
      const inputRef = React.useRef(null);
      const handleRef = useForkRef(ref, inputRef);
      console.log(inputRef, handleRef, ref);
    `)
    ).toBe(f(`console.log(ref, ref, ref)`));
  });
});
