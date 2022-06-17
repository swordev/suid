import replaceMuiUseForkRef, {
  findUseForkRefIdentifiers,
} from "../../src/transforms/replaceMuiUseForkRef";
import f from "../format";
import transform from "../transform";

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
