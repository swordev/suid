import CircularProgress from "./CircularProgress";
import { screen, render } from "solid-testing-library";
import { describe, expect, it } from "vitest";

describe("CircularProgress", () => {
  it("respects the size property", () => {
    const { unmount } = render(() => (
      <CircularProgress data-testid="e" size={20} sx={{ color: "red" }} />
    ));
    const e = screen.getByTestId("e");
    const style = window.getComputedStyle(e);
    expect(style.width).toBe("20px");
    expect(style.height).toBe("20px");
    expect(style.color).toBe("red");
    unmount();
  });
});

export {};
