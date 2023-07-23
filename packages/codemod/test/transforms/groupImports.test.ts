import groupImports from "../../src/transforms/groupImports.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const e = async (actual: string, expected: string) =>
  expect(await transform(actual, [groupImports])).toBe(await format(expected));

describe("groupImports", () => {
  it("groups same default imports", async () => {
    await e(
      `
        import a from "a";
        import a from "a";
      `,
      `import a from "a";`
    );
  });
  it("groups alias named imports", async () => {
    await e(
      `
        import { a as x } from "a";
        import { a as x } from "a";
        import { b as y } from "a";
      `,
      `import { a as x, b as y } from "a";`
    );
  });
  it("groups different default imports", async () => {
    await e(
      `
        import { a } from "a";
        import { b } from "a";
      `,
      `import { a, b } from "a";`
    );
  });
  it("groups named imports and separates default import", async () => {
    await e(
      `
        import a, { x } from "a";
        import { z } from "a";
      `,
      `
        import { x, z } from "a";
        import a from "a";
      `
    );
  });
  it("groups imports without from", async () => {
    await e(
      `
        import "a";
        import "a";
      `,
      `import "a";`
    );
  });
});
