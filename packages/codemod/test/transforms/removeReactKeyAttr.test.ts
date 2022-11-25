import findAttributes from "../../src/navigations/findAttributes.js";
import removeReactKeyAttr from "../../src/transforms/removeReactKeyAttr.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const t = (code: string) =>
  transform(code, [
    (source) =>
      findAttributes(source, ["key"]).map((v) => removeReactKeyAttr(v)),
  ]);

describe("removeReactKeyAttr", () => {
  it("removes key attribute", () => {
    expect(t(`const c = <div key={1}></div>`)).toBe(
      format(`const c = <div></div>`)
    );
    expect(t(`const c = <div key></div>`)).toBe(
      format(`const c = <div></div>`)
    );
    expect(t(`const c = <div value={0} key={1}></div>`)).toBe(
      format(`const c = <div value={0}></div>`)
    );
  });

  it("removes multiple key attributes", () => {
    expect(t(`const c = <div key={1}><span key={2} /></div>`)).toBe(
      format(`const c = <div><span /></div>`)
    );
  });
});
