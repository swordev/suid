import removeUnusedImports from "../../src/transforms/removeUnusedImports";
import format from "../format";
import transform from "../transform";
import { describe, expect, it } from "vitest";

const t = (code: string) => transform(code, [removeUnusedImports]);

describe("removeUnusedImports", () => {
  it("removes default import", () => {
    expect(
      t(`
        import a from "a";
        import b from "b";
        console.log(a)
      `)
    ).toBe(
      format(`
        import a from "a";
        console.log(a)
      `)
    );
  });
  it("removes namespace import", () => {
    expect(
      t(`
        import * as a from "a";
        import * as b from "b";
        console.log(a)
      `)
    ).toBe(
      format(`
        import * as a from "a";
        console.log(a)
      `)
    );
  });
  it("removes named import", () => {
    expect(
      t(`
        import { a } from "a";
        import { b } from "b";
        console.log(a)
      `)
    ).toBe(
      format(`
        import { a } from "a";
        console.log(a)
      `)
    );
  });
  it("removes named import with alias", () => {
    expect(
      t(`
        import { a as x } from "a";
        import { b } from "b";
        console.log(x)
      `)
    ).toBe(
      format(`
        import { a as x } from "a";
        console.log(x)
      `)
    );
  });
  it("removes named", () => {
    expect(
      t(`
        import { a, x, y, z } from "a";
        import { b } from "b";
        console.log(a)
      `)
    ).toBe(
      format(`
        import { a } from "a";
        console.log(a)
      `)
    );
  });
  it("keeps import without from", () => {
    expect(
      t(`
        import "a";
        import { b } from "b";
      `)
    ).toBe(
      format(`
        import "a";
      `)
    );
  });
});
