import findAttributes from "../../src/navigations/findAttributes";
import replaceReactClassNameAttr from "../../src/transforms/replaceReactClassNameAttr";
import format from "../format";
import transform from "../transform";
import { describe, expect, it } from "vitest";

const t = (code: string) =>
  transform(code, [
    (source) =>
      findAttributes(source, ["className"]).map((v) =>
        replaceReactClassNameAttr(v)
      ),
  ]);

describe("replaceReactClassNameAttr", () => {
  it("replaces className attribute", () => {
    expect(t(`const c = <div className="red"></div>`)).toBe(
      format(`const c = <div class="red"></div>`)
    );
    expect(t(`const c = <div value="text" className="red blue"></div>`)).toBe(
      format(`const c = <div value="text" class="red blue"></div>`)
    );
  });

  it("replaces multiples className attributes", () => {
    expect(
      t(`const c = <div className="red"><span className="blue" /></div>`)
    ).toBe(format(`const c = <div class="red"><span class="blue" /></div>`));
  });
});
