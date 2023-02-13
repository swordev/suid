import Grid from "./Grid";
import { screen, render } from "solid-testing-library";
import { describe, expect, it } from "vitest";

describe("Grid", () => {
  it("uses mt system prop", () => {
    const { unmount } = render(() => <Grid data-testid="e" mt={3} />);
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).marginTop).toBe("24px");
    unmount();
  });
  it("allows custom classes", () => {
    const { unmount } = render(() => (
      <Grid item data-testid="e" xs={12} class="custom" />
    ));
    const e = screen.getByTestId("e");
    const classes = [...e.classList.values()];
    expect(classes.length).toBe(5);
    expect(classes).includes("MuiGrid-root");
    expect(classes).includes("MuiGrid-item");
    expect(classes).includes("MuiGrid-grid-xs-12");
    expect(classes).includes("custom");
    expect(classes.some((v) => v.startsWith("css-"))).toBeTruthy();
    unmount();
  });
});

export {};
