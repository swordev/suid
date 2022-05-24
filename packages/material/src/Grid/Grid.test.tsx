import Grid from "./Grid";
import { screen, render } from "solid-testing-library";

describe("Grid", () => {
  it("uses mt system prop", () => {
    render(() => <Grid data-testid="e" mt={3} />);
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).marginTop).toBe("24px");
  });
});

export {};
