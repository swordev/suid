import findAttributes from "../../src/navigations/findAttributes.js";
import replaceReactClassNameAttr from "../../src/transforms/replaceReactClassNameAttr.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const e = async (code: string, expected: string) =>
  expect(
    await transform(code, [
      (source) =>
        findAttributes(source, ["className"]).map((v) =>
          replaceReactClassNameAttr(v)
        ),
    ])
  ).toBe(await format(expected));

describe("replaceReactClassNameAttr", () => {
  it("replaces className attribute", async () => {
    e(
      `const c = <div className="red"></div>`,
      `const c = <div class="red"></div>`
    );
    e(
      `const c = <div value="text" className="red blue"></div>`,
      `const c = <div value="text" class="red blue"></div>`
    );
  });

  it("replaces multiples className attributes", async () => {
    await e(
      `const c = <div className="red"><span className="blue" /></div>`,
      `const c = <div class="red"><span class="blue" /></div>`
    );
  });
});
