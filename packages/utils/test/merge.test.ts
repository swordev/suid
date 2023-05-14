import merge from "../src/merge";
import { describe, expect, it } from "vitest";

describe("merge", () => {
  it("shoulds alter the first object", () => {
    const object = { a: 1 };
    merge(object, { b: 2 });
    expect(object).toMatchObject({ a: 1, b: 2 });
  });

  it("ignores undefined values", () => {
    const object = merge(
      { a: 1, b: 2, c: { d: 3 }, e: { f: 4 } },
      { a: undefined, b: undefined, c: undefined, e: { f: undefined, g: 5 } }
    );
    expect(object).toMatchObject({
      a: 1,
      b: 2,
      c: { d: 3 },
      e: { f: 4, g: 5 },
    });
  });

  it("shoulds not alter the others object", () => {
    const a = { a: 1 };
    const b = { b: 1 };
    const c = { c: 1 };
    merge(a, b, c);
    expect(Object.keys(b)).toMatchObject(["b"]);
    expect(Object.keys(c)).toMatchObject(["c"]);
  });

  it("returns merged object", () => {
    expect(merge({ a: 1 }, { b: 2 })).toMatchObject({ a: 1, b: 2 });
    expect(merge({ a: 1 }, { b: 2 }, { c: 3 })).toMatchObject({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  it("returns target object", () => {
    const target = { a: 1 };
    const merged = merge(target, { b: 2 }, { c: 3 });
    expect(merged === target).toBeTruthy();
  });

  it("shoulds create new objects", () => {
    const a = { a: {} };
    const b = { b: {} };
    const c = { c: {} };
    const merged = merge<{ a: any; b?: any; c?: any }>(a, b, c);
    expect(merged.b === b.b).toBeFalsy();
    expect(merged.c === c.c).toBeFalsy();
  });

  it("returns deep merged object", () => {
    expect(
      merge(
        {
          a: {
            b: {
              c: {
                d: {},
              },
              d: {
                e: 1,
              },
            },
          },
        },
        {
          a: {
            x: 1,
            b: {
              c: 1,
              d: {
                x: 1,
                e: 2,
              },
            },
          },
        }
      )
    ).toMatchObject({
      a: {
        x: 1,
        b: {
          c: 1,
          d: {
            x: 1,
            e: 2,
          },
        },
      },
    });
  });

  it("replaces array", () => {
    expect(
      merge(
        {
          a: {
            b: [1, 2, 3],
          },
        },
        {
          a: {
            b: [1],
          },
        }
      )
    ).toMatchObject({
      a: {
        b: [1],
      },
    });
  });
});
