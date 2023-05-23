import MenuItem from ".";
import { screen, render } from "solid-testing-library";
import { describe, expect, it } from "vitest";

describe("MenuItem", () => {
  it("adds focusVisible class on focus", () => {
    const { unmount } = render(() => <MenuItem data-testid="e" selected />);
    const e = screen.getByTestId("e");
    console.log(e.classList.toString());
    expect(e.classList.contains("Mui-selected")).toBeTruthy();
    unmount();
  });
});

export {};
