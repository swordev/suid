import resolve from "../src/resolve";
import { describe, expect, it } from "vitest";

describe("resolve", () => {
  it("returns same object", () => {
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

  it("returns new props", () => {
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

  it("returns sub props", () => {
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
