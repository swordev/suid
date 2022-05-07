import groupImports from "../../src/transforms/groupImports";
import format from "../format";
import transform from "../transform";

const t = (code: string) => transform(code, [groupImports]);

describe("groupImports", () => {
  it("groups same default imports", () => {
    expect(
      t(`
        import a from "a";
        import a from "a";
      `)
    ).toBe(
      format(`
        import a from "a";
      `)
    );
  });
  it("groups alias named imports", () => {
    expect(
      t(`
        import { a as x } from "a";
        import { a as x } from "a";
        import { b as y } from "a";
      `)
    ).toBe(
      format(`
        import { a as x, b as y } from "a";
      `)
    );
  });
  it("groups different default imports", () => {
    expect(
      t(`
        import { a } from "a";
        import { b } from "a";
      `)
    ).toBe(
      format(`
        import { a, b } from "a";
      `)
    );
  });
  it("groups named imports and separates default import", () => {
    expect(
      t(`
        import a, { x } from "a";
        import { z } from "a";
      `)
    ).toBe(
      format(`
        import { x, z } from "a";
        import a from "a";
      `)
    );
  });
  it("groups imports without from", () => {
    expect(
      t(`
        import "a";
        import "a";
      `)
    ).toBe(
      format(`
        import "a";
      `)
    );
  });
});
