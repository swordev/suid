import cloneObject from "../src/cloneObject";

const json = (v: any) => JSON.stringify(v);

describe("cloneObject", () => {
  it("returns same object", () => {
    const object = {
      a: "a",
      b: 2,
      c: {},
    };
    const clonedObject = cloneObject(object);
    expect(json(clonedObject)).toBe(json(object));
    expect(object === clonedObject).toBeFalsy();
  });

  it("creates new objects", () => {
    const object = {
      b: { b: "b", c: { d: [{ v1: { v2: 1 } }, 2, 3] as const } },
    };
    const clonedObject = cloneObject(object);
    expect(json(clonedObject)).toBe(json(object));
    expect(object === clonedObject).toBeFalsy();
    expect(object.b === clonedObject.b).toBeFalsy();
    expect(object.b.c === clonedObject.b.c).toBeFalsy();
    expect(object.b.c.d === clonedObject.b.c.d).toBeFalsy();
    expect(object.b.c.d[0] === clonedObject.b.c.d[0]).toBeFalsy();
    expect(object.b.c.d[0].v1 === clonedObject.b.c.d[0].v1).toBeFalsy();
  });

  it("keeps functions", () => {
    const object = {
      func: () => {
        return;
      },
    };
    const clonedObject = cloneObject(object);
    expect(json(clonedObject)).toBe(json(object));
    expect(object === clonedObject).toBeFalsy();
    expect(object.func === clonedObject.func).toBeTruthy();
  });
});
