import merge from "../src/merge";

describe("merge", () => {
  it("shoulds alter the first object", () => {
    const object = { a: 1 };
    merge(object, { b: 2 });
    expect(object).toMatchObject({ a: 1, b: 2 });
  });

  it("shoulds not alter the others object", () => {
    const a = { a: 1 };
    const b = { b: 1 };
    const c = { c: 1 };
    merge<any, any>(a, b, c);
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
