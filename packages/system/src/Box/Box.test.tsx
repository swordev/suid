import Box from ".";
import { screen, render } from "solid-testing-library";

describe("Box", () => {
  it("uses mt system prop", () => {
    render(() => <Box data-testid="e" mt={3} />);
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).marginTop).toBe("24px");
  });
});

export {};
