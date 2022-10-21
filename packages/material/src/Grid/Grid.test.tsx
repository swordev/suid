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
});

export {};
