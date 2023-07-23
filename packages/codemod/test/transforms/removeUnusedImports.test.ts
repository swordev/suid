import removeUnusedImports from "../../src/transforms/removeUnusedImports.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const e = async (actual: string, expected: string) =>
  expect(await transform(actual, [removeUnusedImports])).toBe(
    await format(expected)
  );

describe("removeUnusedImports", () => {
  it("removes default import", async () => {
    await e(
      `
        import a from "a";
        import b from "b";
        console.log(a)
      `,
      `
        import a from "a";
        console.log(a)
      `
    );
  });
  it("removes namespace import", async () => {
    await e(
      `
        import * as a from "a";
        import * as b from "b";
        console.log(a)
      `,
      `
        import * as a from "a";
        console.log(a)
      `
    );
  });
  it("removes named import", async () => {
    await e(
      `
        import { a } from "a";
        import { b } from "b";
        console.log(a)
      `,
      `
        import { a } from "a";
        console.log(a)
      `
    );
  });
  it("removes named import with alias", async () => {
    await e(
      `
        import { a as x } from "a";
        import { b } from "b";
        console.log(x)
      `,
      `
        import { a as x } from "a";
        console.log(x)
    `
    );
  });
  it("removes named", async () => {
    await e(
      `
        import { a, x, y, z } from "a";
        import { b } from "b";
        console.log(a)
      `,
      `
        import { a } from "a";
        console.log(a)
      `
    );
  });
  it("keeps import without from", async () => {
    await e(
      `
        import "a";
        import { b } from "b";
      `,
      `import "a";`
    );
  });
});
