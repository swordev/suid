import { isSSRElement, getSSRElementAttr } from "../src/ssr";
import { describe, expect, it } from "vitest";

describe("isSSRElement", () => {
  const f = isSSRElement;
  it("returns true", () => {
    expect(f({ t: "<p />" })).toBeTruthy();
    expect(f({ t: "<a />" })).toBeTruthy();
    expect(f({ t: " <a /> " })).toBeTruthy();
  });
  it("returns false", () => {
    expect(f("<><a /></>")).toBeFalsy();
    expect(f(`p id="e">`)).toBeFalsy();
    expect(f(`<><p id="e"></>`)).toBeFalsy();
    expect(f(`<><p id="e></>`)).toBeFalsy();
    expect(f(1)).toBeFalsy();
    expect(f("test")).toBeFalsy();
    expect(f({ t: "" })).toBeFalsy();
    expect(f({})).toBeFalsy();
    expect(f(() => null)).toBeFalsy();
  });
});

describe("parseElementAttr", () => {
  const f = getSSRElementAttr;
  it("returns the attribute", () => {
    expect(f(`<p class="a b c" />`, "class")).toBe("a b c");
    expect(f(`<div data-value="x y z" />`, "data-value")).toBe("x y z");
    expect(f(`<span data-x id="element1" data-y="" />`, "id")).toBe("element1");
    expect(f(`<a data-x id="element2" data-y=""></a>`, "id")).toBe("element2");
    expect(f(`<a empty=""/>`, "empty")).toBe("");
    expect(f(`  <a href="#"/>  `, "href")).toBe("#");
  });
  it("returns undefined", () => {
    expect(f(`<a data-id=""></a>`, "id")).toBeUndefined();
    expect(f(`<a />`, "id")).toBeUndefined();
  });
  it("throws error", () => {
    expect(() => f(`<p id="e"`, "id")).toThrowError();
  });
});
