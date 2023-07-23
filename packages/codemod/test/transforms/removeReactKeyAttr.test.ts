import findAttributes from "../../src/navigations/findAttributes.js";
import removeReactKeyAttr from "../../src/transforms/removeReactKeyAttr.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const e = async (actual: string, expected: string) =>
  expect(
    await transform(actual, [
      (source) =>
        findAttributes(source, ["key"]).map((v) => removeReactKeyAttr(v)),
    ])
  ).toBe(await format(expected));

describe("removeReactKeyAttr", () => {
  it("removes key attribute", async () => {
    await e(`const c = <div key={1}></div>`, `const c = <div></div>`);
    await e(`const c = <div key></div>`, `const c = <div></div>`);
    await e(
      `const c = <div value={0} key={1}></div>`,
      `const c = <div value={0}></div>`
    );
  });

  it("removes multiple key attributes", async () => {
    await e(
      `const c = <div key={1}><span key={2} /></div>`,
      `const c = <div><span /></div>`
    );
  });
});
