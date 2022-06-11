import ButtonBase from ".";
import { screen, render } from "solid-testing-library";

describe("ButtonBase", () => {
  it("adds focusVisible class on focus", () => {
    render(() => <ButtonBase data-testid="e" />);
    const e = screen.getByTestId("e");
    expect(e.classList.contains("Mui-focusVisible")).toBeFalsy();
    e.focus();
    expect(e.classList.contains("Mui-focusVisible")).toBeTruthy();
  });
});

export {};
