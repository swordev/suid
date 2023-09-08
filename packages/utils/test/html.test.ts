import { isSuidElement } from "../src/html";
import { describe, expect, it } from "vitest";

describe("isSuidElement", () => {
  const f = isSuidElement;
  it("returns true", () => {
    const Button = () => true;
    Button.__suid = "";
    Button.toString = () => ".Button";
    expect(f({ t: '<button class="a Button b" />' }, Button)).toBeTruthy();
  });
  it("returns false", () => {
    const Button = () => true;
    expect(
      f({ t: '<button class="a Button b" />' }, Button as any)
    ).toBeFalsy();
  });
});
