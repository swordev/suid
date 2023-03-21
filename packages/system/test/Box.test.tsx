/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Box from "../src/Box";
import findStyleElement from "@suid/css/dom/findStyleElement";
import { render } from "solid-testing-library";
import { describe, expect, it } from "vitest";

function expectCss(container: HTMLElement, css: string[]) {
  const style = findStyleElement(container.querySelector("*")!)!;
  expect(style.innerHTML.replace(/([\s]+)/g, " ")).toBe(
    css.join(" ").replaceAll("$id", style.id)
  );
}

describe("Box", () => {
  it("prints media query with non-system property", () => {
    const { unmount, container } = render(() => (
      <Box
        sx={{
          display: {
            md: "block",
          },
        }}
      />
    ));
    expectCss(container, [
      `@media (min-width:900px) { .css-$id { display: block; } }`,
    ]);
    unmount();
  });
  it("prints media queries sorted", () => {
    const { unmount, container } = render(() => (
      <Box
        sx={{
          color: {
            sm: "blue",
            md: "green",
            xs: "red",
          },
        }}
      />
    ));
    expectCss(container, [
      `@media (min-width:0px) { .css-$id { color: red; } }`,
      `@media (min-width:600px) { .css-$id { color: blue; } }`,
      `@media (min-width:900px) { .css-$id { color: green; } }`,
    ]);
    unmount();
  });
  it("prints media queries sorted with merging", () => {
    const { unmount, container } = render(() => (
      <Box
        sx={{
          display: {
            md: "block",
          },
          color: {
            sm: "blue",
            md: "green",
            xs: "red",
          },
        }}
      />
    ));
    expectCss(container, [
      `@media (min-width:0px) { .css-$id { color: red; } }`,
      `@media (min-width:600px) { .css-$id { color: blue; } }`,
      `@media (min-width:900px) { .css-$id { display: block; color: green; } }`,
    ]);
    unmount();
  });
});

export {};
