import getAncestorComponent from "../../src/utils/getAncestorComponent";
import find from "../find";

const f = (code: string) => find(code, getAncestorComponent);

describe("getAncestorComponent", () => {
  it("returns component", () => {
    expect(f(`function Component() { $; return <div/>; }`)?.getKindName()).toBe(
      "FunctionDeclaration"
    );
  });

  it("returns undefined", () => {
    expect(f(`function Component() { $; return 1; }`)).toBeUndefined();
  });
});
