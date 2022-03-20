import resolve from "../src/resolve";

describe("resolve", () => {
  test("returns same object", () => {
    expect(
      resolve(
        {
          a: 1,
        },
        () => {
          return;
        }
      )
    ).toMatchObject({
      a: 1,
    });
  });

  test("returns new props", () => {
    expect(
      resolve(
        {
          a: 1,
        },
        () => ({ b: 2 })
      )
    ).toMatchObject({
      b: 2,
    });
  });

  test("returns sub props", () => {
    expect(
      resolve(
        {
          a: 1,
          "&": {
            "&": {
              b: 2,
            },
          },
        },
        (name, value) => {
          if (name === "b") return { x: `${value}px` };
        }
      )
    ).toMatchObject({
      a: 1,
      "&": {
        "&": {
          x: `2px`,
        },
      },
    });
  });
});
