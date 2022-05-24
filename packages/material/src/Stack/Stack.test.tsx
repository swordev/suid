import Stack from "./Stack";
import { screen, render } from "solid-testing-library";

describe("Stack", () => {
  it("uses mt system prop", () => {
    render(() => <Stack data-testid="e" mt={3} />);
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).marginTop).toBe("24px");
  });
});

export {};
