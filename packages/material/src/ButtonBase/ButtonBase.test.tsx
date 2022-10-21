import ButtonBase from ".";
import { screen, render } from "solid-testing-library";
import { describe, expect, it } from "vitest";

describe("ButtonBase", () => {
  it("adds focusVisible class on focus", () => {
    const { unmount } = render(() => <ButtonBase data-testid="e" />);
    const e = screen.getByTestId("e");
    expect(e.classList.contains("Mui-focusVisible")).toBeFalsy();
    e.focus();
    expect(e.classList.contains("Mui-focusVisible")).toBeTruthy();
    unmount();
  });
});

export {};
